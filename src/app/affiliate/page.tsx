import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { siteConfig } from "@/lib/content/site";
import {
  affiliateBenefits,
  affiliateSteps,
  commissionModel,
} from "@/lib/content/affiliate";
import { affiliateFaqs } from "@/lib/content/faq";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Container } from "@/components/layout/container";
import { GradientText } from "@/components/layout/gradient-text";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Faq } from "@/components/sections/faq";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { Stagger, StaggerItem, SlideUp } from "@/components/motion/motion-primitives";
import { AffiliateForm } from "@/components/sections/affiliate-form";

export const metadata: Metadata = {
  title: "Affiliate Program",
  description:
    "Earn commissions by referring clients to GloApp. No technical skills required — just your network.",
  keywords: [
    "affiliate program Indonesia",
    "earn commissions online",
    "referral program",
    "GloApp affiliate",
    "passive income Indonesia",
  ],
  alternates: { canonical: "/affiliate" },
  openGraph: {
    title: `Affiliate Program · ${siteConfig.name}`,
    description:
      "Earn commissions by referring clients to GloApp. No technical skills required — just your network.",
    url: `${siteConfig.url}/affiliate`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Affiliate Program", item: `${siteConfig.url}/affiliate` },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/affiliate`,
      url: `${siteConfig.url}/affiliate`,
      name: `Affiliate Program · ${siteConfig.name}`,
      description:
        "Earn commissions by referring clients to GloApp. No technical skills required — just your network.",
      isPartOf: { "@id": siteConfig.url },
    },
  ],
};

export default function AffiliatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* Hero */}
      <section className="bg-brand-glow relative overflow-hidden py-20 sm:py-24">
        <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.3] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
        <Container>
          <SlideUp className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading mb-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              Turn your network into{" "}
              <GradientText>real income</GradientText>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed text-pretty">
              Refer businesses and organizations to GloApp and earn commissions
              — no technical skills required. Just make introductions.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" className="h-11 px-6 text-sm" render={<a href="#register" />}>
                Register now — it's free
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-11 px-6 text-sm"
                render={<a href="#how-it-works" />}
              >
                See how it works
              </Button>
            </div>
          </SlideUp>
        </Container>
      </section>

      {/* Benefits */}
      <Section id="benefits">
        <SectionHeading
          eyebrow="Benefits"
          title="Why join the GloApp affiliate program"
          description="Simple, transparent, and rewarding — for anyone with a network."
          className="mx-auto mb-14"
        />

        <Stagger className="grid gap-4 sm:grid-cols-3">
          {affiliateBenefits.map((b) => (
            <StaggerItem
              key={b.title}
              className="border-border/70 bg-card flex flex-col items-center gap-3 rounded-2xl border p-8 text-center"
            >
              <span className="from-brand/15 to-brand-2/15 text-brand ring-brand/20 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ring-1">
                <Icon name={b.icon} className="size-6" />
              </span>
              <h3 className="font-heading text-lg font-semibold tracking-tight">
                {b.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {b.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Commission model */}
      <Section id="commissions" className="bg-card/30 border-border/70 border-y">
        <SectionHeading
          eyebrow="Commission model"
          title="Transparent rates, real payouts"
          description="You see exactly what you earn, and when."
          className="mx-auto mb-14"
        />

        <Stagger className="mx-auto max-w-2xl divide-y">
          {commissionModel.map((row) => (
            <StaggerItem
              key={row.tier}
              className="flex items-center justify-between gap-6 py-5"
            >
              <div className="flex flex-col gap-1">
                <span className="font-medium">{row.tier}</span>
                <span className="text-muted-foreground text-sm">
                  {row.description}
                </span>
              </div>
              <span className="from-brand to-brand-2 shrink-0 bg-gradient-to-br bg-clip-text text-2xl font-bold text-transparent">
                {row.rate}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* How it works */}
      <Section id="how-it-works">
        <SectionHeading
          eyebrow="How it works"
          title="Get started in three steps"
          description="Sign up, refer, earn. We handle everything else."
          className="mx-auto mb-14"
        />
        <ProcessSteps steps={affiliateSteps} />
      </Section>

      {/* What affiliates get */}
      <Section className="bg-card/30 border-border/70 border-y">
        <SectionHeading
          eyebrow="What you get"
          title="Everything you need to refer confidently"
          className="mx-auto mb-14"
        />
        <Stagger className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {[
            "Unique referral link and tracking dashboard",
            "Marketing assets and talking points",
            "Transparent commission tracking",
            "Dedicated affiliate contact",
            "Monthly payout cycle",
            "Recurring commissions on ongoing engagements",
          ].map((item) => (
            <StaggerItem
              key={item}
              className="border-border/70 bg-card flex items-center gap-3 rounded-xl border p-4"
            >
              <span className="bg-brand/10 text-brand inline-flex size-6 shrink-0 items-center justify-center rounded-full">
                <Check className="size-3.5" />
              </span>
              <span className="text-sm font-medium">{item}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Registration form */}
      <Section id="register">
        <SectionHeading
          eyebrow="Join now"
          title="Register as an affiliate"
          description="Free to join. Start earning from your very first referral."
          className="mx-auto mb-14"
        />
        <AffiliateForm />
      </Section>

      <Faq
        items={affiliateFaqs}
        eyebrow="Affiliate FAQ"
        title="Common questions about the affiliate program"
        description="Still have questions? Reach out and we'll get back to you quickly."
      />
    </>
  );
}
