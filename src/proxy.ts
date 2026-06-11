import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { MAIL_COOKIE, expectedToken } from "@/lib/mail-auth";

/**
 * Gate the /mail inbox behind MAIL_PASSWORD. The login page and its auth
 * endpoint stay public so the user can actually sign in.
 */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public: the login screen and the auth endpoint.
  if (pathname === "/mail/login" || pathname === "/api/mail/auth") {
    return NextResponse.next();
  }

  const token = request.cookies.get(MAIL_COOKIE)?.value;
  const expected = await expectedToken();

  if (!expected || token !== expected) {
    const loginUrl = new URL("/mail/login", request.url);
    // Preserve where they were headed so we can return there post-login.
    const next = pathname + request.nextUrl.search;
    if (next && next !== "/mail") loginUrl.searchParams.set("next", next);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/mail", "/mail/:path*", "/api/mail/:path*"],
};
