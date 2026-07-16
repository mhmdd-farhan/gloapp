import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { GradientText } from "@/components/layout/gradient-text";
import { FadeIn, SlideUp } from "@/components/motion/motion-primitives";
import { HeroVisual } from "@/components/sections/hero-visual";

export function Hero() {
  return (
    <section className="bg-brand-glow relative overflow-hidden">
      {/* Faint grid backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />

      <Container className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-8 lg:py-28">
        <div className="flex flex-col items-start gap-6">

          <SlideUp delay={0.05}>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              Go Autonomous.{" "}
              <GradientText>Powered by AI.</GradientText>
            </h1>
          </SlideUp>

          <SlideUp delay={0.1}>
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed text-pretty">
              We transform traditional digital operations into autonomous digital
              systems — from custom business software to AI-powered automation
              that runs your business by itself.
            </p>
          </SlideUp>

          <SlideUp delay={0.15}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button render={<Link href="/services" />} size="lg" className="h-11 px-5 text-sm">
                Explore Solutions
                <ArrowRight className="size-4" />
              </Button>
              <Button
                render={<Link href="/contact" />}
                variant="outline"
                size="lg"
                className="h-11 px-5 text-sm"
              >
                Book Free Consultation
              </Button>
            </div>
          </SlideUp>

          <SlideUp delay={0.2}>
            <p className="text-muted-foreground text-sm">
              Trusted by organizations across Indonesia and beyond.
            </p>
          </SlideUp>
        </div>

        <FadeIn delay={0.15} className="relative">
          <HeroVisual />
        </FadeIn>
      </Container>
    </section>
  );
}
