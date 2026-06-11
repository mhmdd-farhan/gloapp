import { NextResponse } from "next/server";
import { z } from "zod/v4";

import { sendFormEmail } from "@/lib/resend";

const schema = z.object({
  name: z.string().min(2),
  email: z.email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.issues },
      { status: 422 },
    );
  }

  try {
    const { error } = await sendFormEmail({ type: "contact", data: parsed.data });
    if (error) {
      console.error("[api/contact] resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }
  } catch (err) {
    console.error("[api/contact] unexpected error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
