import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/motion-primitives";
import { Icon } from "@/components/icon";
import { solutions } from "@/lib/content/solutions";

export function Solutions() {
  return (
    <Section id="solutions">
      <SectionHeading
        eyebrow="Our Ecosystem"
        title="One ecosystem, every solution you need"
        description="From launching careers to scaling operations, GloApp brings the tools, services, and software together in one place."
        className="mx-auto mb-14"
      />

      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => (
          <StaggerItem key={s.title}>
            <Link
              href={s.href}
              className="group border-border/70 bg-card hover:border-gradient-brand relative flex h-full flex-col gap-4 rounded-2xl border p-6 transition-all hover:shadow-lg"
            >
              <span className="from-brand/15 to-brand-2/15 text-brand ring-brand/20 inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ring-1">
                <Icon name={s.icon} className="size-5" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading text-lg font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
              <span className="text-brand mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium">
                {s.cta}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
