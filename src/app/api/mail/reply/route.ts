import { NextResponse } from "next/server";

import { MAIL_COOKIE, expectedToken } from "@/lib/mail-auth";
import { sendReply } from "@/lib/resend";

/** Send a reply to a submitter. Guarded by the same /mail cookie. */
export async function POST(request: Request) {
  // Defence in depth — proxy already gates /api/mail/* but verify here too.
  const cookie = request.headers.get("cookie") ?? "";
  const token = cookie
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${MAIL_COOKIE}=`))
    ?.slice(MAIL_COOKIE.length + 1);
  const expected = await expectedToken();
  if (!expected || token !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { to?: string; subject?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const to = (body.to ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!to || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(to)) {
    return NextResponse.json({ error: "Invalid recipient" }, { status: 422 });
  }
  if (message.length < 1) {
    return NextResponse.json({ error: "Message is empty" }, { status: 422 });
  }

  try {
    const { error } = await sendReply({ to, subject, message });
    if (error) {
      console.error("[api/mail/reply] resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }
  } catch (err) {
    console.error("[api/mail/reply] unexpected error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
