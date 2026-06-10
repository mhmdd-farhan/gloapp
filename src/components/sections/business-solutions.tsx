import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Stagger, StaggerItem, SlideUp } from "@/components/motion/motion-primitives";
import { Icon } from "@/components/icon";
import { businessSolutions } from "@/lib/content/products";

export function BusinessSolutions() {
  return (
    <Section id="business">
      <SectionHeading
        eyebrow="Business Solutions"
        title="Software that scales your operations"
        description="Production-ready systems and bespoke software to digitize and grow your business — engineered on a modern, scalable stack."
        className="mx-auto mb-14"
      />

      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {businessSolutions.map((item) => (
          <StaggerItem
            key={item.title}
            className="group border-border/70 bg-card hover:border-gradient-brand flex flex-col gap-3 rounded-2xl border p-6 transition-all hover:shadow-lg"
          >
            <span className="from-brand/15 to-brand-2/15 text-brand ring-brand/20 inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ring-1">
              <Icon name={item.icon} className="size-5" />
            </span>
            <h3 className="font-heading text-lg font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </StaggerItem>
        ))}
      </Stagger>

      <SlideUp className="mt-12 flex justify-center">
        <Button
          render={<Link href="/products" />}
          variant="outline"
          size="lg"
          className="h-11 px-5 text-sm"
        >
          View all products
          <ArrowRight className="size-4" />
        </Button>
      </SlideUp>
    </Section>
  );
}
