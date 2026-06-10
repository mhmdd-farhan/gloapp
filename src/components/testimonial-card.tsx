import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/content/types";

/** Reusable testimonial card — used on the homepage and reusable elsewhere. */
export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  const { quote, name, role, company, initials } = testimonial;
  return (
    <figure
      className={cn(
        "border-border/70 bg-card flex h-full flex-col gap-5 rounded-2xl border p-6",
        className,
      )}
    >
      <blockquote className="text-foreground/90 text-sm leading-relaxed text-pretty">
        “{quote}”
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3">
        <Avatar className="size-10">
          <AvatarFallback className="from-brand/20 to-brand-2/20 text-brand bg-gradient-to-br text-xs font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">{name}</span>
          <span className="text-muted-foreground text-xs">
            {role} · {company}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
