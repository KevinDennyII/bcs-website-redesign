import { createHmac } from "node:crypto";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { headersMock } = vi.hoisted(() => ({
  headersMock: vi.fn(),
}));

vi.mock("next/headers", () => ({
  headers: headersMock,
}));

import { initialContactFormState, submitContactForm } from "./actions";

function buildBaseFormData() {
  const formData = new FormData();
  formData.set("name", "Jane Doe");
  formData.set("email", "jane@example.com");
  formData.set("inquiryType", "general");
  formData.set("organization", "BCS Partner");
  formData.set("phone", "210-555-1212");
  formData.set("message", "We are interested in discussing a potential teaming opportunity.");
  formData.set("companyWebsite", "");
  return formData;
}

describe("submitContactForm", () => {
  beforeEach(() => {
    headersMock.mockReset();
    headersMock.mockResolvedValue({
      get: (key: string) => {
        if (key === "x-forwarded-for") {
          return "203.0.113.11";
        }
        if (key === "user-agent") {
          return "vitest-agent";
        }
        return null;
      },
    });
    vi.restoreAllMocks();
    vi.stubGlobal("fetch", vi.fn());
    (globalThis as typeof globalThis & { __bcsContactRateLimiter?: Map<string, number[]> }).__bcsContactRateLimiter =
      new Map<string, number[]>();
    process.env.CONTACT_WEBHOOK_URL = "";
    process.env.CONTACT_WEBHOOK_SECRET = "";
    process.env.CONTACT_WEBHOOK_BEARER = "";
  });

  it("returns field errors for invalid submissions", async () => {
    const formData = new FormData();
    formData.set("name", "A");
    formData.set("email", "not-an-email");
    formData.set("inquiryType", "general");
    formData.set("message", "short");
    formData.set("companyWebsite", "");

    const result = await submitContactForm(initialContactFormState, formData);

    expect(result.status).toBe("error");
    expect(result.fieldErrors?.name).toBeDefined();
    expect(result.fieldErrors?.email).toBeDefined();
    expect(result.fieldErrors?.message).toBeDefined();
  });

  it("absorbs honeypot submissions as success", async () => {
    const formData = buildBaseFormData();
    formData.set("companyWebsite", "https://spam.example");

    const result = await submitContactForm(initialContactFormState, formData);

    expect(result.status).toBe("success");
    expect(result.message).toContain("received");
    expect(fetch).not.toHaveBeenCalled();
  });

  it("signs webhook payload and adds auth headers", async () => {
    process.env.CONTACT_WEBHOOK_URL = "https://example.test/contact";
    process.env.CONTACT_WEBHOOK_SECRET = "super-secret";
    process.env.CONTACT_WEBHOOK_BEARER = "token-123";

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        text: async () => "",
      }),
    );

    const formData = buildBaseFormData();
    const result = await submitContactForm(initialContactFormState, formData);

    expect(result.status).toBe("success");
    expect(fetch).toHaveBeenCalledTimes(1);

    const [, options] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0];
    expect(options.method).toBe("POST");
    expect(options.headers.Authorization).toBe("Bearer token-123");
    expect(options.headers["X-BCS-Timestamp"]).toBeTruthy();
    expect(options.headers["X-BCS-Signature"]).toMatch(/^sha256=/);

    const expectedSignature = createHmac("sha256", "super-secret")
      .update(`${options.headers["X-BCS-Timestamp"]}.${options.body}`)
      .digest("hex");
    expect(options.headers["X-BCS-Signature"]).toBe(`sha256=${expectedSignature}`);
  });
});
