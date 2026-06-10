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
          <SlideUp>
            <Link
              href="/affiliate"
              className="border-gradient-brand bg-brand/5 text-brand hover:bg-brand/10 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition-colors"
            >
              <Sparkles className="size-3.5" />
              Now offering an affiliate program
              <ArrowRight className="size-3.5" />
            </Link>
          </SlideUp>

          <SlideUp delay={0.05}>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              Build Your Career.{" "}
              <GradientText>Scale Your Business.</GradientText>
            </h1>
          </SlideUp>

          <SlideUp delay={0.1}>
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed text-pretty">
              Helping individuals launch their careers and helping organizations
              grow through digital solutions — from career preparation and
              portfolios to custom business software.
            </p>
          </SlideUp>

          <SlideUp delay={0.15}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button render={<Link href="/services" />} size="lg" className="h-11 px-5 text-sm">
                Explore Solutions
                <ArrowRight className="size-4" />
              </Button>
              <Button
                render={<Link href="/affiliate" />}
                variant="outline"
                size="lg"
                className="h-11 px-5 text-sm"
              >
                Become Affiliate
              </Button>
            </div>
          </SlideUp>

          <SlideUp delay={0.2}>
            <p className="text-muted-foreground text-sm">
              Trusted by students, professionals, and growing businesses.
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
