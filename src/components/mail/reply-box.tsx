"use client";

import * as React from "react";
import { toast } from "sonner";
import { Loader2, Reply, Send, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

/**
 * Inline reply composer for the reading pane. Opens a textarea below the
 * message and posts to /api/mail/reply, which sends via Resend.
 */
export function ReplyBox({
  to,
  subject,
}: {
  to: string;
  subject: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [sending, setSending] = React.useState(false);

  async function send() {
    if (!message.trim()) {
      toast.error("Write a message first");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/mail/reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to, subject, message }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      toast.success("Reply sent", { description: `To ${to}` });
      setMessage("");
      setOpen(false);
    } catch {
      toast.error("Couldn't send reply", { description: "Please try again." });
    } finally {
      setSending(false);
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-primary mt-3 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
      >
        <Reply className="size-3.5" />
        Reply to {to}
      </button>
    );
  }

  return (
    <div className="border-border bg-card mt-4 rounded-xl border p-4">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-muted-foreground text-sm">
          Reply to <span className="text-foreground font-medium">{to}</span>
        </p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-muted-foreground hover:bg-muted hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors"
          aria-label="Close reply"
        >
          <X className="size-4" />
        </button>
      </div>
      <p className="text-muted-foreground mb-2 text-xs">
        Subject: Re: {subject}
      </p>
      <Textarea
        rows={6}
        autoFocus
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your reply..."
        disabled={sending}
      />
      <div className="mt-3 flex items-center justify-end gap-2">
        <Button
          type="button"
          variant="ghost"
          onClick={() => setOpen(false)}
          disabled={sending}
        >
          Cancel
        </Button>
        <Button type="button" onClick={send} disabled={sending}>
          {sending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <>
              <Send className="size-4" />
              Send reply
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
