import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/motion-primitives";
import { Icon } from "@/components/icon";
import { whyGloapp } from "@/lib/content/why-gloapp";

export function WhyGloApp() {
  return (
    <Section id="why">
      <SectionHeading
        eyebrow="Why GloApp"
        title="Built to be trusted, engineered to scale"
        description="Every solution is designed mobile-first, secured by default, and built on a modern stack that grows with you."
        className="mx-auto mb-14"
      />

      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyGloapp.map((f) => (
          <StaggerItem
            key={f.title}
            className="border-border/70 bg-card flex items-start gap-4 rounded-2xl border p-6"
          >
            <span className="from-brand/15 to-brand-2/15 text-brand ring-brand/20 inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ring-1">
              <Icon name={f.icon} className="size-5" />
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-medium">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
