import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/content/site";

/** GloApp wordmark with a gradient glyph — pure CSS/SVG, no image asset. */
export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={`${siteConfig.name} home`}
      className={cn(
        "group inline-flex items-center gap-2 font-semibold tracking-tight",
        className,
      )}
    >
      <span
        aria-hidden
        className="from-brand to-brand-2 inline-flex size-8 items-center justify-center rounded-lg bg-gradient-to-br text-sm font-bold text-white shadow-sm transition-transform group-hover:scale-105"
      >
        G
      </span>
      <span className="text-lg">
        Glo<span className="text-gradient-brand">App</span>
      </span>
    </Link>
  );
}
