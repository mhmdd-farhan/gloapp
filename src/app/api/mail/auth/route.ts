import { NextResponse } from "next/server";

import { MAIL_COOKIE, expectedToken } from "@/lib/mail-auth";

/**
 * Handles the /mail login form (and logout). Accepts a urlencoded POST so it
 * works as a plain <form action> with no client JS.
 */
export async function POST(request: Request) {
  const form = await request.formData();
  const action = form.get("action");
  const origin = new URL(request.url).origin;

  if (action === "logout") {
    const res = NextResponse.redirect(new URL("/mail/login", origin), {
      status: 303,
    });
    res.cookies.delete(MAIL_COOKIE);
    return res;
  }

  const password = String(form.get("password") ?? "");
  const next = String(form.get("next") ?? "/mail") || "/mail";
  const safeNext = next.startsWith("/mail") ? next : "/mail";

  const expected = await expectedToken();

  if (!expected || !process.env.MAIL_PASSWORD || password !== process.env.MAIL_PASSWORD) {
    const loginUrl = new URL("/mail/login", origin);
    loginUrl.searchParams.set("error", "1");
    if (safeNext !== "/mail") loginUrl.searchParams.set("next", safeNext);
    return NextResponse.redirect(loginUrl, { status: 303 });
  }

  const res = NextResponse.redirect(new URL(safeNext, origin), { status: 303 });
  res.cookies.set(MAIL_COOKIE, expected, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return res;
}
