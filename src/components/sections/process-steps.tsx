import { Stagger, StaggerItem } from "@/components/motion/motion-primitives";
import type { ProcessStep } from "@/lib/content/types";

/** Reusable numbered process steps with a connecting line on desktop. */
export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <Stagger className="relative grid gap-6 sm:grid-cols-3">
      {/* Connector line (desktop) */}
      <div className="via-border absolute top-6 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-transparent to-transparent sm:block" />

      {steps.map((step) => (
        <StaggerItem
          key={step.step}
          className="relative flex flex-col items-center gap-3 text-center"
        >
          <span className="from-brand to-brand-2 ring-background relative z-10 inline-flex size-12 items-center justify-center rounded-full bg-gradient-to-br text-base font-semibold text-white shadow-lg ring-4">
            {step.step}
          </span>
          <h3 className="font-heading text-lg font-semibold tracking-tight">
            {step.title}
          </h3>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
            {step.description}
          </p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
