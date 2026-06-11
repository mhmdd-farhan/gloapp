import type { Metadata } from "next";
import { Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "Mail · Sign in",
  robots: { index: false, follow: false },
};

export default async function MailLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const { error, next } = await searchParams;

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="border-border bg-card w-full max-w-sm rounded-2xl border p-7">
        <div className="bg-primary/10 text-primary mb-5 inline-flex size-10 items-center justify-center rounded-xl">
          <Lock className="size-5" />
        </div>
        <h1 className="text-lg font-semibold tracking-tight">Inbox access</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Enter the password to view form submissions.
        </p>

        <form action="/api/mail/auth" method="POST" className="mt-6 flex flex-col gap-4">
          {next ? <input type="hidden" name="next" value={next} /> : null}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              autoFocus
              required
            />
            {error ? (
              <p className="text-destructive text-xs">Incorrect password.</p>
            ) : null}
          </div>
          <Button type="submit" size="lg" className="h-11 w-full text-sm">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
