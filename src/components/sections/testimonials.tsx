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
        title="Loved by individuals and businesses alike"
        description="From first jobs to scaled operations, here's what people achieve with GloApp."
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
