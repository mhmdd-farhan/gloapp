import Link from "next/link";
import type { Metadata } from "next";
import { Inbox, RefreshCw, LogOut } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ReplyBox } from "@/components/mail/reply-box";
import {
  listInbox,
  getEmail,
  cleanSubject,
  type InboxCategory,
  type InboxItem,
} from "@/lib/resend";

export const metadata: Metadata = {
  title: "Mail",
  robots: { index: false, follow: false },
};

// Always read fresh from Resend — this is an inbox, not a cached page.
export const dynamic = "force-dynamic";

type Filter = "all" | "contact" | "affiliate" | "send";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "contact", label: "Contact" },
  { key: "affiliate", label: "Affiliate" },
  { key: "send", label: "Send" },
];

const CATEGORY_STYLES: Record<
  InboxCategory,
  { label: string; variant: "default" | "secondary" | "outline" }
> = {
  contact: { label: "Contact", variant: "default" },
  affiliate: { label: "Affiliate", variant: "secondary" },
  other: { label: "Other", variant: "outline" },
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/** "GloApp <onboarding@resend.dev>" -> "GloApp" (or the bare address). */
function senderName(from: string): string {
  const match = from.match(/^\s*"?([^"<]+?)"?\s*<.*>$/);
  return (match ? match[1] : from).trim();
}

export default async function MailPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string; filter?: string; after?: string }>;
}) {
  const { id, filter: filterParam, after } = await searchParams;
  const filter: Filter =
    filterParam === "contact" ||
    filterParam === "affiliate" ||
    filterParam === "send"
      ? filterParam
      : "all";

  let items: InboxItem[] = [];
  let hasMore = false;
  let nextCursor: string | null = null;
  let loadError: string | null = null;

  try {
    const result = await listInbox({ after });
    items = result.items;
    hasMore = result.hasMore;
    nextCursor = result.nextCursor;
  } catch (err) {
    loadError = err instanceof Error ? err.message : "Failed to load inbox";
  }

  const filtered =
    filter === "all"
      ? // "All" = form submissions only; "other" emails live under the Send tab.
        items.filter((i) => i.category !== "other")
      : filter === "send"
        ? items.filter((i) => i.category === "other")
        : items.filter((i) => i.category === filter);

  const selected = id ? await getEmail(id).catch(() => null) : null;

  const withFilter = (params: Record<string, string | undefined>) => {
    const sp = new URLSearchParams();
    if (filter !== "all") sp.set("filter", filter);
    for (const [k, v] of Object.entries(params)) {
      if (v) sp.set(k, v);
      else sp.delete(k);
    }
    const qs = sp.toString();
    return qs ? `/mail?${qs}` : "/mail";
  };

  return (
    <div className="bg-background mx-auto flex h-[calc(100vh-4rem)] max-w-7xl flex-col px-4 py-6">
      {/* Toolbar */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Inbox className="text-primary size-5" />
          <h1 className="text-lg font-semibold tracking-tight">Inbox</h1>
          <span className="text-muted-foreground text-sm">
            {filtered.length} message{filtered.length === 1 ? "" : "s"}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Link
            href={withFilter({ id })}
            className="text-muted-foreground hover:bg-muted hover:text-foreground inline-flex size-8 items-center justify-center rounded-md transition-colors"
            aria-label="Refresh"
          >
            <RefreshCw className="size-4" />
          </Link>
          <form action="/api/mail/auth" method="POST">
            <input type="hidden" name="action" value="logout" />
            <button
              type="submit"
              className="text-muted-foreground hover:bg-muted hover:text-foreground inline-flex size-8 items-center justify-center rounded-md transition-colors"
              aria-label="Log out"
            >
              <LogOut className="size-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="mb-3 flex items-center gap-1">
        {FILTERS.map((f) => {
          const active = filter === f.key;
          const sp = new URLSearchParams();
          if (f.key !== "all") sp.set("filter", f.key);
          const href = sp.toString() ? `/mail?${sp}` : "/mail";
          return (
            <Link
              key={f.key}
              href={href}
              className={cn(
                "rounded-full px-3 py-1 text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted",
              )}
            >
              {f.label}
            </Link>
          );
        })}
      </div>

      <div className="border-border bg-card flex min-h-0 flex-1 overflow-hidden rounded-xl border">
        {/* List pane */}
        <div className="border-border w-full max-w-sm shrink-0 overflow-y-auto border-r">
          {loadError ? (
            <div className="p-6 text-sm">
              <p className="text-destructive font-medium">
                Couldn&apos;t load inbox
              </p>
              {/restricted to only send/i.test(loadError) ? (
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  Your <code className="text-foreground">RESEND_API_KEY</code> is
                  a send-only key. Reading messages needs a{" "}
                  <span className="text-foreground font-medium">full-access</span>{" "}
                  key — create one in the Resend dashboard (API Keys →
                  Full&nbsp;access) and update <code>.env</code>.
                </p>
              ) : (
                <p className="text-muted-foreground mt-2">{loadError}</p>
              )}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-muted-foreground p-6 text-sm">
              No messages yet.
            </div>
          ) : (
            <ul className="divide-border divide-y">
              {filtered.map((item) => {
                const active = item.id === id;
                const cat = CATEGORY_STYLES[item.category];
                return (
                  <li key={item.id}>
                    <Link
                      href={withFilter({ id: item.id })}
                      className={cn(
                        "hover:bg-muted/60 block px-4 py-3 transition-colors",
                        active && "bg-muted",
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate text-sm font-medium">
                          {senderName(item.from)}
                        </span>
                        <span className="text-muted-foreground shrink-0 text-xs">
                          {formatDate(item.createdAt)}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <Badge variant={cat.variant} className="shrink-0">
                          {cat.label}
                        </Badge>
                        <span className="text-muted-foreground truncate text-sm">
                          {cleanSubject(item.subject)}
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}

          {hasMore && nextCursor ? (
            <div className="p-3">
              <Link
                href={withFilter({ after: nextCursor, id: undefined })}
                className="text-muted-foreground hover:bg-muted block rounded-md py-2 text-center text-sm transition-colors"
              >
                Load older →
              </Link>
            </div>
          ) : null}
        </div>

        {/* Reading pane */}
        <div className="min-w-0 flex-1 overflow-y-auto">
          {selected ? (
            <article className="p-6">
              <header className="border-border mb-5 border-b pb-5">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold tracking-tight">
                    {cleanSubject(selected.subject)}
                  </h2>
                  <Badge variant={CATEGORY_STYLES[selected.category].variant}>
                    {CATEGORY_STYLES[selected.category].label}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  <span className="text-foreground font-medium">
                    {senderName(selected.from)}
                  </span>{" "}
                  &lt;{selected.from.replace(/^.*<|>$/g, "")}&gt;
                </p>
                <p className="text-muted-foreground text-xs">
                  to {selected.to.join(", ")} · {formatDate(selected.createdAt)} ·{" "}
                  {selected.lastEvent}
                </p>
              </header>

              {selected.html ? (
                <div
                  className="rounded-lg border border-border bg-white p-5"
                  dangerouslySetInnerHTML={{ __html: selected.html }}
                />
              ) : selected.text ? (
                <pre className="text-foreground font-sans text-sm whitespace-pre-wrap">
                  {selected.text}
                </pre>
              ) : (
                <p className="text-muted-foreground text-sm">(empty body)</p>
              )}

              {selected.category !== "other" && selected.replyTo?.[0] ? (
                <ReplyBox
                  to={selected.replyTo[0]}
                  subject={cleanSubject(selected.subject)}
                />
              ) : null}
            </article>
          ) : (
            <div className="text-muted-foreground flex h-full items-center justify-center p-6 text-sm">
              Select a message to read
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
