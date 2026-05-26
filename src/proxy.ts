import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const legacyCaseRedirects: Record<string, string> = {
  "/Services": "/services",
  "/BCS-Team-Portal": "/bcs-team-portal",
  "/Commercial": "/commercial",
};

export function proxy(request: NextRequest) {
  const destination = legacyCaseRedirects[request.nextUrl.pathname];
  if (!destination) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = destination;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/Services", "/BCS-Team-Portal", "/Commercial"],
};
