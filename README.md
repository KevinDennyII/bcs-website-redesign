## BCS Website Redesign

Phase 1 foundation for modernizing `bcsteam.net` with a React-first stack.

- Framework: Next.js App Router + React + TypeScript
- Styling: CSS Modules + design tokens (`src/styles/tokens.css`)
- Security baseline: strict response headers via `next.config.ts`
- Asset audit artifacts:
  - `image_audit_bcsteam.json`
  - `audit/image-download-manifest.json`
  - `audit/site-images/`

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - local development
- `npm run build` - production build
- `npm run start` - run production build
- `npm run lint` - lint TypeScript/React files

## Contact Delivery Configuration

The contact form supports webhook delivery for CRM/email automation.

1. Copy `.env.example` to `.env.local`
2. Set `CONTACT_WEBHOOK_URL` to your intake endpoint
3. Set `CONTACT_WEBHOOK_SECRET` to a shared secret used for HMAC signing
4. Optional: set `CONTACT_WEBHOOK_BEARER` if your receiver expects Bearer authentication

If no webhook URL is configured, submissions are still validated and processed locally with structured server logs.
Sensitive values are redacted in logs (e.g., masked IP and partial email).
Webhook requests include:

- `X-BCS-Timestamp`: epoch milliseconds
- `X-BCS-Signature`: `sha256=<hmac(secret, timestamp + "." + rawBody)>`

## Webhook Receiver Verification

An inbound verification route is included at `src/app/api/webhooks/contact/route.ts`.

- Configure `INBOUND_CONTACT_WEBHOOK_SECRET` for signature verification.
- The receiver validates:
  - timestamp freshness window (5 minutes)
  - HMAC signature correctness
  - replay detection (in-memory signature cache)

For production, keep this route behind your normal platform protections (WAF/rate limiting) and replace the placeholder intake logic with your CRM/storage pipeline.

## Deploy to Netlify (Prototype)

This repo includes `netlify.toml` with a Node 20 build target and `npm run build`.

### Netlify site setup

1. Push this repository to GitHub.
2. In Netlify: **Add new site** -> **Import an existing project** -> select this repo.
3. Build settings (if prompted):
   - Build command: `npm run build`
   - Publish directory: leave blank (Netlify auto-detects Next.js runtime)

### Environment variables

Set these in Netlify Site Settings -> Environment Variables:

- `CONTACT_WEBHOOK_URL` (optional for prototype)
- `CONTACT_WEBHOOK_SECRET` (optional, used for outbound signature)
- `CONTACT_WEBHOOK_BEARER` (optional)
- `INBOUND_CONTACT_WEBHOOK_SECRET` (required only if using the inbound webhook receiver route)

## Phase 1 Scope Completed

- Project scaffolding and TypeScript baseline
- Global design tokens and CSS architecture seed
- Initial homepage shell for implementation workflow
- Baseline security headers and image configuration

## Next (Phase 2)

- Build production page templates for Home, About, Services, and Contact
- Integrate audited imagery with responsive image specs
- Add content model and CMS integration path
- Implement form handling and telemetry

## Reference

- [Next.js Documentation](https://nextjs.org/docs)
