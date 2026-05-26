import { NextResponse } from "next/server";
import { rejectReplay, verifyWebhookSignature } from "@/lib/security/webhook-signature";

export async function POST(request: Request) {
  const secret = process.env.INBOUND_CONTACT_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      {
        error: "Webhook receiver is not configured.",
      },
      { status: 500 },
    );
  }

  const timestamp = request.headers.get("x-bcs-timestamp") ?? "";
  const signatureHeader = request.headers.get("x-bcs-signature") ?? "";
  const rawBody = await request.text();

  const signatureResult = verifyWebhookSignature({
    secret,
    body: rawBody,
    timestamp,
    signatureHeader,
  });

  if (!signatureResult.ok) {
    return NextResponse.json(
      {
        error: "Signature verification failed.",
      },
      { status: 401 },
    );
  }

  if (rejectReplay(signatureResult.signature)) {
    return NextResponse.json(
      {
        error: "Replay detected.",
      },
      { status: 409 },
    );
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json(
      {
        error: "Invalid JSON body.",
      },
      { status: 400 },
    );
  }

  // Replace with your secure intake integration.
  console.info(
    JSON.stringify({
      source: "bcs-contact-webhook-receiver",
      event: "validated_webhook_received",
      timestamp: new Date().toISOString(),
      payloadType: typeof payload,
    }),
  );

  return NextResponse.json({ ok: true }, { status: 202 });
}
