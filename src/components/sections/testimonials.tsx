import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/motion-primitives";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonials } from "@/lib/content/testimonials";

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-card/30 border-border/70 border-y">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by businesses across Indonesia"
        description="From AI-powered automation to digitized operations, here's what organizations achieve with GloApp."
        className="mx-auto mb-14"
      />

      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <StaggerItem key={t.name} className="h-full">
            <TestimonialCard testimonial={t} className="h-full" />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
