import { createHmac, timingSafeEqual } from "node:crypto";

const DEFAULT_MAX_AGE_MS = 5 * 60 * 1000;

type VerifyWebhookSignatureInput = {
  secret: string;
  body: string;
  timestamp: string;
  signatureHeader: string;
  nowMs?: number;
  maxAgeMs?: number;
};

type VerifyWebhookSignatureResult =
  | { ok: true; signature: string }
  | { ok: false; reason: string };

function parseSignatureHeader(signatureHeader: string): string | null {
  if (!signatureHeader) {
    return null;
  }
  const [scheme, signature] = signatureHeader.split("=");
  if (scheme !== "sha256" || !signature) {
    return null;
  }
  return signature;
}

export function verifyWebhookSignature(input: VerifyWebhookSignatureInput): VerifyWebhookSignatureResult {
  const maxAgeMs = input.maxAgeMs ?? DEFAULT_MAX_AGE_MS;
  const now = input.nowMs ?? Date.now();

  const sentSignature = parseSignatureHeader(input.signatureHeader);
  if (!sentSignature) {
    return { ok: false, reason: "Missing or invalid signature header format." };
  }

  const timestampMs = Number(input.timestamp);
  if (!Number.isFinite(timestampMs)) {
    return { ok: false, reason: "Invalid timestamp." };
  }

  if (Math.abs(now - timestampMs) > maxAgeMs) {
    return { ok: false, reason: "Timestamp outside accepted window." };
  }

  const payload = `${input.timestamp}.${input.body}`;
  const expected = createHmac("sha256", input.secret).update(payload).digest("hex");

  const expectedBuffer = Buffer.from(expected, "hex");
  const sentBuffer = Buffer.from(sentSignature, "hex");

  if (expectedBuffer.length !== sentBuffer.length) {
    return { ok: false, reason: "Signature length mismatch." };
  }

  const isValid = timingSafeEqual(expectedBuffer, sentBuffer);
  if (!isValid) {
    return { ok: false, reason: "Signature mismatch." };
  }

  return { ok: true, signature: sentSignature };
}

type ReplayStore = Map<string, number>;

function getReplayStore(): ReplayStore {
  const globalStore = globalThis as typeof globalThis & {
    __bcsWebhookReplayStore?: ReplayStore;
  };

  if (!globalStore.__bcsWebhookReplayStore) {
    globalStore.__bcsWebhookReplayStore = new Map<string, number>();
  }
  return globalStore.__bcsWebhookReplayStore;
}

export function rejectReplay(signature: string, nowMs = Date.now(), maxAgeMs = DEFAULT_MAX_AGE_MS): boolean {
  const store = getReplayStore();

  for (const [key, timestamp] of store.entries()) {
    if (nowMs - timestamp > maxAgeMs) {
      store.delete(key);
    }
  }

  if (store.has(signature)) {
    return true;
  }

  store.set(signature, nowMs);
  return false;
}
