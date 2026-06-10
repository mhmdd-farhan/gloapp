import * as React from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { SlideUp } from "@/components/motion/motion-primitives";

/**
 * SectionHeading — eyebrow + title + optional description, animated on view.
 * `align` controls text alignment; defaults to centered for marketing sections.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <SlideUp
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Badge
          variant="outline"
          className="border-gradient-brand text-brand bg-brand/5 rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase"
        >
          {eyebrow}
        </Badge>
      ) : null}
      <h2 className="font-heading max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-muted-foreground max-w-2xl text-base leading-relaxed text-pretty sm:text-lg",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </SlideUp>
  );
}
