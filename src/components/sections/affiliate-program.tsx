import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Stagger, StaggerItem, SlideUp } from "@/components/motion/motion-primitives";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Icon } from "@/components/icon";
import { affiliateBenefits, affiliateSteps } from "@/lib/content/affiliate";

export function AffiliateProgram() {
  return (
    <Section id="affiliate" className="bg-card/30 border-border/70 border-y">
      <SectionHeading
        eyebrow="Affiliate Program"
        title="Earn by referring clients"
        description="Turn your network into income. Refer businesses and professionals to GloApp and earn commissions — no technical skills required."
        className="mx-auto mb-14"
      />

      <Stagger className="mb-16 grid gap-4 sm:grid-cols-3">
        {affiliateBenefits.map((b) => (
          <StaggerItem
            key={b.title}
            className="border-border/70 bg-card flex flex-col items-center gap-3 rounded-2xl border p-6 text-center"
          >
            <span className="from-brand/15 to-brand-2/15 text-brand ring-brand/20 inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ring-1">
              <Icon name={b.icon} className="size-5" />
            </span>
            <h3 className="font-medium">{b.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {b.description}
            </p>
          </StaggerItem>
        ))}
      </Stagger>

      <ProcessSteps steps={affiliateSteps} />

      <SlideUp className="mt-14 flex justify-center">
        <Button render={<Link href="/affiliate" />} size="lg" className="h-11 px-5 text-sm">
          Become an Affiliate
          <ArrowRight className="size-4" />
        </Button>
      </SlideUp>
    </Section>
  );
}
