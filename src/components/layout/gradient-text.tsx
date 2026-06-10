import * as React from "react";

import { cn } from "@/lib/utils";

/** Inline indigo→violet gradient text for emphasized headline words. */
export function GradientText({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("text-gradient-brand", className)}
      {...props}
    />
  );
}
