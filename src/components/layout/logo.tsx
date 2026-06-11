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
      <span className="text-lg lowercase">
        glo<span className="text-gradient-brand">app</span>
      </span>
    </Link>
  );
}
