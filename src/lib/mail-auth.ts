/** Shared helpers for the /mail password gate (Edge + Node safe). */

export const MAIL_COOKIE = "mail_auth";

/** SHA-256 hex of a string, using Web Crypto (available in Edge + Node 18+). */
export async function sha256(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** The cookie token a valid session should carry: hash(password + salt). */
export async function expectedToken(): Promise<string | null> {
  const password = process.env.MAIL_PASSWORD;
  if (!password) return null;
  return sha256(`gloapp-mail:${password}`);
}
