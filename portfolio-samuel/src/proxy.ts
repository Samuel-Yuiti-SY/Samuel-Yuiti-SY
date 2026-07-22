import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { LEGACY_SITE_HOSTS, SITE_URL } from "@/lib/site";

const officialUrl = new URL(SITE_URL);

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();

  if (!host || !LEGACY_SITE_HOSTS.includes(host)) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.protocol = officialUrl.protocol;
  redirectUrl.hostname = officialUrl.hostname;
  redirectUrl.port = "";

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: "/:path*",
};
