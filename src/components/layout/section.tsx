import * as React from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

/**
 * Section — drives consistent vertical rhythm across the whole site.
 * Pass `bleed` to render full-width content without the inner Container
 * (e.g. when the section manages its own layout).
 */
export function Section({
  className,
  containerClassName,
  bleed = false,
  children,
  ...props
}: React.ComponentProps<"section"> & {
  containerClassName?: string;
  bleed?: boolean;
}) {
  return (
    <section
      className={cn("relative py-20 sm:py-24 lg:py-28", className)}
      {...props}
    >
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
