import { Resend } from "resend";

/**
 * Single Resend client + the helpers that power both the contact/affiliate
 * forms (sending) and the /mail inbox (reading back the sent log).
 *
 * "Reading email" here means listing what we've *sent* through Resend — every
 * form submission is delivered as an email to MAIL_TO, then the /mail page
 * lists/opens them again via the Emails API. No inbound/MX setup required.
 */

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  // Fail loud at first use rather than silently no-op.
  console.warn("[resend] RESEND_API_KEY is not set — email features will fail.");
}

export const resend = new Resend(apiKey);

/** Sender address. Must be a verified Resend domain, or resend.dev for testing. */
export const MAIL_FROM =
  process.env.MAIL_FROM ?? "GloApp <onboarding@resend.dev>";

/** Where form submissions are delivered (and read back from). */
export const MAIL_TO = process.env.MAIL_TO ?? "delivered@resend.dev";

export type FormType = "contact" | "affiliate";

/** Subject prefix lets the list view categorise without fetching each body. */
const SUBJECT_PREFIX: Record<FormType, string> = {
  contact: "[Contact]",
  affiliate: "[Affiliate]",
};

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
};

export type AffiliatePayload = {
  name: string;
  email: string;
  phone: string;
  network: string;
};

type SendInput =
  | { type: "contact"; data: ContactPayload }
  | { type: "affiliate"; data: AffiliatePayload };

/**
 * Split a submission into short "detail" fields (rendered as a compact table)
 * and the one long free-text field — Message for contact, Network for affiliate
 * — which gets its own readable box below the details.
 */
type BodyParts = {
  details: Array<[string, string]>;
  longLabel: string;
  longValue: string;
};

function buildBody(input: SendInput): BodyParts {
  if (input.type === "contact") {
    const d = input.data;
    return {
      details: [
        ["Name", d.name],
        ["Email", d.email],
        ["Phone", d.phone || "—"],
        ["Company", d.company || "—"],
      ],
      longLabel: "Message",
      longValue: d.message,
    };
  }
  const d = input.data;
  return {
    details: [
      ["Name", d.name],
      ["Email", d.email],
      ["Phone", d.phone],
    ],
    longLabel: "Network",
    longValue: d.network,
  };
}

function renderText({ details, longLabel, longValue }: BodyParts): string {
  const head = details.map(([label, value]) => `${label}: ${value}`).join("\n");
  return `${head}\n\n${longLabel}:\n${longValue}`;
}

function renderHtml(title: string, { details, longLabel, longValue }: BodyParts): string {
  const rows = details
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#6b7280;font-size:13px;vertical-align:top;white-space:nowrap">${escapeHtml(
          label,
        )}</td><td style="padding:6px 0;font-size:14px;color:#111827;white-space:pre-wrap">${escapeHtml(
          value,
        )}</td></tr>`,
    )
    .join("");
  const longBox = `<div style="margin-top:16px"><div style="color:#6b7280;font-size:13px;margin-bottom:6px">${escapeHtml(
    longLabel,
  )}</div><div style="border:1px solid #e5e7eb;border-radius:8px;padding:12px 14px;background:#f9fafb;font-size:14px;line-height:1.6;color:#111827;white-space:pre-wrap">${escapeHtml(
    longValue,
  )}</div></div>`;
  return `<div style="font-family:ui-sans-serif,system-ui,sans-serif"><h2 style="font-size:16px;margin:0 0 12px">${escapeHtml(
    title,
  )}</h2><table style="border-collapse:collapse">${rows}</table>${longBox}</div>`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Send a form submission as an email. The submitter's address is set as
 * reply_to so a reply from the inbox goes straight back to them.
 */
export async function sendFormEmail(input: SendInput) {
  const body = buildBody(input);
  const subject = `${SUBJECT_PREFIX[input.type]} ${input.data.name}`;
  const title =
    input.type === "contact"
      ? "New contact form submission"
      : "New affiliate application";

  return resend.emails.send({
    from: MAIL_FROM,
    to: MAIL_TO,
    replyTo: input.data.email,
    subject,
    text: renderText(body),
    html: renderHtml(title, body),
  });
}

/** Send a plain-text reply to a submitter from the inbox. */
export async function sendReply(opts: {
  to: string;
  subject: string;
  message: string;
}) {
  const subject = opts.subject.toLowerCase().startsWith("re:")
    ? opts.subject
    : `Re: ${opts.subject}`;

  return resend.emails.send({
    from: MAIL_FROM,
    to: opts.to,
    replyTo: MAIL_TO,
    subject,
    text: opts.message,
    html: `<div style="font-family:ui-sans-serif,system-ui,sans-serif;font-size:14px;line-height:1.6;color:#111827;white-space:pre-wrap">${opts.message
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")}</div>`,
  });
}

export type InboxCategory = FormType | "other";

export type InboxItem = {
  id: string;
  from: string;
  to: string[];
  subject: string;
  createdAt: string;
  lastEvent: string;
  category: InboxCategory;
};

/** Derive a category from the subject prefix written by sendFormEmail. */
export function categoryOf(subject: string): InboxCategory {
  const s = subject.toLowerCase();
  if (s.startsWith("[contact]")) return "contact";
  if (s.startsWith("[affiliate]")) return "affiliate";
  return "other";
}

/** Strip the "[Contact] " / "[Affiliate] " prefix for display. */
export function cleanSubject(subject: string): string {
  return subject.replace(/^\[(contact|affiliate)\]\s*/i, "").trim() || "(no subject)";
}

export type ListInboxResult = {
  items: InboxItem[];
  hasMore: boolean;
  nextCursor: string | null;
};

/** List sent emails, newest first, optionally paginated by cursor. */
export async function listInbox(opts: {
  after?: string;
  limit?: number;
} = {}): Promise<ListInboxResult> {
  const { data, error } = await resend.emails.list({
    limit: opts.limit ?? 50,
    ...(opts.after ? { after: opts.after } : {}),
  });

  if (error) throw new Error(error.message);
  if (!data) return { items: [], hasMore: false, nextCursor: null };

  const items: InboxItem[] = data.data.map((e) => ({
    id: e.id,
    from: e.from,
    to: e.to,
    subject: e.subject,
    createdAt: e.created_at,
    lastEvent: e.last_event,
    category: categoryOf(e.subject),
  }));

  const nextCursor = items.length > 0 ? items[items.length - 1].id : null;

  return { items, hasMore: data.has_more, nextCursor };
}

export type EmailDetail = {
  id: string;
  from: string;
  to: string[];
  replyTo: string[] | null;
  subject: string;
  createdAt: string;
  lastEvent: string;
  html: string | null;
  text: string | null;
  category: InboxCategory;
};

/** Fetch one email's full body for the reading pane. */
export async function getEmail(id: string): Promise<EmailDetail | null> {
  const { data, error } = await resend.emails.get(id);
  if (error) throw new Error(error.message);
  if (!data) return null;

  return {
    id: data.id,
    from: data.from,
    to: data.to,
    replyTo: data.reply_to,
    subject: data.subject,
    createdAt: data.created_at,
    lastEvent: data.last_event,
    html: data.html,
    text: data.text,
    category: categoryOf(data.subject),
  };
}
