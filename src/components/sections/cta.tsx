import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { GradientText } from "@/components/layout/gradient-text";
import { SlideUp } from "@/components/motion/motion-primitives";

export function Cta() {
  return (
    <section className="bg-brand-glow relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.2] [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />

      <Container>
        <SlideUp className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Ready to <GradientText>get started?</GradientText>
          </h2>
          <p className="text-muted-foreground max-w-lg text-base leading-relaxed text-pretty sm:text-lg">
            Whether you're launching your career or scaling your business, we're
            ready to help. Let's start with a free consultation.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button render={<Link href="/contact?service=consultation" />} size="lg" className="h-11 px-6 text-sm">
              Book Consultation
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<Link href="/contact?type=sales" />}
              variant="outline"
              size="lg"
              className="h-11 px-6 text-sm"
            >
              Contact Sales
            </Button>
          </div>
        </SlideUp>
      </Container>
    </section>
  );
}
