"use server";

import { createHmac } from "node:crypto";
import { headers } from "next/headers";
import { z } from "zod";

const inquiryTypes = [
  "prime-contractor",
  "sub-contractor",
  "teaming-partner",
  "career-opportunity",
  "general",
] as const;

const submissionSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters.").max(80, "Name is too long."),
  email: z.string().trim().email("Enter a valid email address."),
  inquiryType: z.enum(inquiryTypes, { error: "Select an inquiry type." }),
  organization: z.string().trim().max(100, "Organization name is too long.").optional(),
  phone: z.string().trim().max(32, "Phone number is too long.").optional(),
  message: z.string().trim().min(20, "Message must be at least 20 characters.").max(4000, "Message is too long."),
  companyWebsite: z.string().trim().optional(),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof submissionSchema>, string>>;

export type ContactFormState = {
  status: "idle" | "error" | "success";
  message: string;
  submissionId?: string;
  fieldErrors?: FieldErrors;
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const WEBHOOK_TIMEOUT_MS = 8000;

type SubmissionPayload = z.infer<typeof submissionSchema>;

type RateLimiterStore = Map<string, number[]>;

function getRateLimiterStore(): RateLimiterStore {
  const globalStore = globalThis as typeof globalThis & { __bcsContactRateLimiter?: RateLimiterStore };
  if (!globalStore.__bcsContactRateLimiter) {
    globalStore.__bcsContactRateLimiter = new Map<string, number[]>();
  }
  return globalStore.__bcsContactRateLimiter;
}

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const store = getRateLimiterStore();
  const timestamps = (store.get(identifier) ?? []).filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    store.set(identifier, timestamps);
    return false;
  }
  timestamps.push(now);
  store.set(identifier, timestamps);
  return true;
}

function logContactEvent(event: string, payload: Record<string, unknown>) {
  console.info(
    JSON.stringify({
      source: "bcs-contact-form",
      event,
      timestamp: new Date().toISOString(),
      ...payload,
    }),
  );
}

function redactEmail(email: string): string {
  const [localPart, domain = ""] = email.split("@");
  if (!localPart || !domain) {
    return "***";
  }
  const visibleLocal = localPart.slice(0, 2);
  return `${visibleLocal}***@${domain}`;
}

function redactIpAddress(ipAddress: string): string {
  if (!ipAddress || ipAddress === "unknown") {
    return "unknown";
  }
  if (ipAddress.includes(".")) {
    const parts = ipAddress.split(".");
    if (parts.length === 4) {
      return `${parts[0]}.${parts[1]}.${parts[2]}.x`;
    }
  }
  if (ipAddress.includes(":")) {
    return `${ipAddress.split(":").slice(0, 3).join(":")}:x`;
  }
  return "masked";
}

async function deliverSubmission(
  submissionId: string,
  payload: SubmissionPayload,
  metadata: { clientIp: string; userAgent: string },
): Promise<{ ok: true } | { ok: false; reason: string }> {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  const webhookSecret = process.env.CONTACT_WEBHOOK_SECRET;
  const webhookBearer = process.env.CONTACT_WEBHOOK_BEARER;
  if (!webhookUrl) {
    logContactEvent("delivery_skipped_no_webhook", { submissionId });
    return { ok: true };
  }

  const abortController = new AbortController();
  const timeout = setTimeout(() => abortController.abort(), WEBHOOK_TIMEOUT_MS);
  const submittedAt = new Date().toISOString();
  const body = JSON.stringify({
    submissionId,
    submittedAt,
    submission: {
      name: payload.name,
      email: payload.email,
      inquiryType: payload.inquiryType,
      organization: payload.organization || "",
      phone: payload.phone || "",
      message: payload.message,
    },
    metadata,
  });
  const signatureTimestamp = String(Date.now());
  const signaturePayload = `${signatureTimestamp}.${body}`;
  const signature = webhookSecret
    ? createHmac("sha256", webhookSecret).update(signaturePayload).digest("hex")
    : undefined;

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(webhookBearer ? { Authorization: `Bearer ${webhookBearer}` } : {}),
        ...(signature
          ? {
              "X-BCS-Timestamp": signatureTimestamp,
              "X-BCS-Signature": `sha256=${signature}`,
            }
          : {}),
      },
      body,
      cache: "no-store",
      signal: abortController.signal,
    });

    if (!response.ok) {
      const body = await response.text();
      logContactEvent("delivery_failed_http", {
        submissionId,
        status: response.status,
        responseSize: body.length,
      });
      return { ok: false, reason: `Webhook returned ${response.status}` };
    }

    logContactEvent("delivery_success", { submissionId });
    return { ok: true };
  } catch (error) {
    logContactEvent("delivery_failed_exception", {
      submissionId,
      error: error instanceof Error ? error.message : "Unknown error",
    });
    return { ok: false, reason: "Webhook request failed" };
  } finally {
    clearTimeout(timeout);
  }
}

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const submissionId = `bcs-${crypto.randomUUID()}`;
  const headerStore = await headers();
  const forwardedFor = headerStore.get("x-forwarded-for");
  const clientIp = forwardedFor?.split(",")[0]?.trim() || "unknown";
  const userAgent = headerStore.get("user-agent") || "unknown";
  const maskedIp = redactIpAddress(clientIp);
  const rateLimitKey = `${clientIp}:${userAgent.slice(0, 80)}`;

  if (!checkRateLimit(rateLimitKey)) {
    logContactEvent("rate_limited", { submissionId, clientIp: maskedIp });
    return {
      status: "error",
      submissionId,
      message: "Too many submissions. Please wait a few minutes and try again.",
    };
  }

  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    inquiryType: String(formData.get("inquiryType") ?? ""),
    organization: String(formData.get("organization") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    message: String(formData.get("message") ?? ""),
    companyWebsite: String(formData.get("companyWebsite") ?? ""),
  };

  if (values.companyWebsite.trim().length > 0) {
    logContactEvent("honeypot_triggered", { submissionId, clientIp: maskedIp });
    return {
      status: "success",
      submissionId,
      message: "Thanks. Your message has been received.",
    };
  }

  const result = submissionSchema.safeParse(values);
  if (!result.success) {
    const flat = result.error.flatten();
    const fieldErrors: FieldErrors = {};
    for (const [field, messages] of Object.entries(flat.fieldErrors)) {
      if (messages?.[0]) {
        fieldErrors[field as keyof FieldErrors] = messages[0];
      }
    }
    return {
      status: "error",
      submissionId,
      message: "Please correct the highlighted fields and submit again.",
      fieldErrors,
    };
  }

  const payload = result.data;
  const delivery = await deliverSubmission(submissionId, payload, { clientIp, userAgent });
  if (!delivery.ok) {
    logContactEvent("submission_delivery_failed", {
      submissionId,
      inquiryType: payload.inquiryType,
      email: redactEmail(payload.email),
      clientIp: maskedIp,
    });
    return {
      status: "error",
      submissionId,
      message: `We could not process your request right now. Please try again. Reference ID: ${submissionId}`,
    };
  }

  logContactEvent("submission_processed", {
    submissionId,
    inquiryType: payload.inquiryType,
    email: redactEmail(payload.email),
    clientIp: maskedIp,
    messageLength: payload.message.length,
    hasOrganization: Boolean(payload.organization),
    hasPhone: Boolean(payload.phone),
  });

  return {
    status: "success",
    submissionId,
    message: `Thank you. Your inquiry was submitted successfully. Reference ID: ${submissionId}`,
  };
}
