import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Stagger, StaggerItem, SlideUp } from "@/components/motion/motion-primitives";
import { Icon } from "@/components/icon";
import { careerServices } from "@/lib/content/services";

export function CareerServices() {
  return (
    <Section id="career" className="bg-card/30 border-border/70 border-y">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <SectionHeading
          align="left"
          eyebrow="Career Services"
          title="Land your first job with confidence"
          description="We help students, fresh graduates, and professionals stand out — from a recruiter-ready CV to interview coaching that actually works."
        >
          <ul className="mt-2 flex flex-col gap-2.5">
            {[
              "Recruiter-ready, ATS-friendly CVs",
              "Personalized career guidance",
              "Realistic mock interviews",
            ].map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-sm">
                <span className="bg-brand/10 text-brand inline-flex size-5 items-center justify-center rounded-full">
                  <Check className="size-3" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <SlideUp className="mt-6">
            <Button render={<Link href="/contact?service=career" />} size="lg" className="h-11 px-5 text-sm">
              Book Consultation
              <ArrowRight className="size-4" />
            </Button>
          </SlideUp>
        </SectionHeading>

        <Stagger className="grid gap-3 sm:grid-cols-2">
          {careerServices.map((service) => (
            <StaggerItem
              key={service.title}
              className="border-border/70 bg-card flex flex-col gap-3 rounded-2xl border p-5"
            >
              <span className="bg-brand/10 text-brand inline-flex size-10 items-center justify-center rounded-xl">
                <Icon name={service.icon} className="size-5" />
              </span>
              <h3 className="font-medium">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
