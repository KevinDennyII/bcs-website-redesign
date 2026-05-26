import { createHmac } from "node:crypto";
import { beforeEach, describe, expect, it } from "vitest";
import { rejectReplay, verifyWebhookSignature } from "./webhook-signature";

describe("verifyWebhookSignature", () => {
  const secret = "test-secret";
  const timestamp = String(Date.now());
  const body = JSON.stringify({ hello: "world" });
  const signature = createHmac("sha256", secret).update(`${timestamp}.${body}`).digest("hex");

  it("accepts a valid signature", () => {
    const result = verifyWebhookSignature({
      secret,
      body,
      timestamp,
      signatureHeader: `sha256=${signature}`,
      nowMs: Number(timestamp) + 10,
    });
    expect(result.ok).toBe(true);
  });

  it("rejects malformed header", () => {
    const result = verifyWebhookSignature({
      secret,
      body,
      timestamp,
      signatureHeader: "bad-format",
    });
    expect(result.ok).toBe(false);
  });

  it("rejects stale timestamp", () => {
    const stale = String(Date.now() - 10 * 60 * 1000);
    const staleSignature = createHmac("sha256", secret).update(`${stale}.${body}`).digest("hex");
    const result = verifyWebhookSignature({
      secret,
      body,
      timestamp: stale,
      signatureHeader: `sha256=${staleSignature}`,
    });
    expect(result.ok).toBe(false);
  });

  it("rejects mismatched signature", () => {
    const result = verifyWebhookSignature({
      secret,
      body,
      timestamp,
      signatureHeader: "sha256=1234",
    });
    expect(result.ok).toBe(false);
  });
});

describe("rejectReplay", () => {
  beforeEach(() => {
    (
      globalThis as typeof globalThis & {
        __bcsWebhookReplayStore?: Map<string, number>;
      }
    ).__bcsWebhookReplayStore = new Map<string, number>();
  });

  it("allows first signature and rejects replay", () => {
    expect(rejectReplay("abc", 1_000)).toBe(false);
    expect(rejectReplay("abc", 1_001)).toBe(true);
  });

  it("expires old signatures", () => {
    expect(rejectReplay("abc", 1_000, 100)).toBe(false);
    expect(rejectReplay("def", 1_200, 100)).toBe(false);
    expect(rejectReplay("abc", 1_201, 100)).toBe(false);
  });
});
