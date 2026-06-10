import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { siteConfig } from "@/lib/content/site";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Container } from "@/components/layout/container";
import { GradientText } from "@/components/layout/gradient-text";
import { Cta } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem, SlideUp } from "@/components/motion/motion-primitives";

export const metadata: Metadata = {
  title: "About",
  description:
    "GloApp is a business solutions ecosystem helping individuals launch their careers and organizations grow through digital solutions.",
  keywords: [
    "about GloApp",
    "GloApp team",
    "career and business solutions Indonesia",
    "digital transformation company",
    "remote-first software studio",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About · ${siteConfig.name}`,
    description:
      "GloApp is a business solutions ecosystem helping individuals launch their careers and organizations grow through digital solutions.",
    url: `${siteConfig.url}/about`,
  },
};

const values = [
  {
    title: "Trustworthy",
    description:
      "We deliver on what we promise. Transparent pricing, honest timelines, and real communication throughout every engagement.",
  },
  {
    title: "Modern",
    description:
      "We build on today's best stack — Next.js, Tailwind, Prisma, TypeScript — so every product is fast, secure, and future-proof.",
  },
  {
    title: "Growth-oriented",
    description:
      "Whether it's your career or your business, we care about outcomes, not just deliverables.",
  },
  {
    title: "Human-first",
    description:
      "We work with real people at every stage — no automated runarounds, dedicated contacts who know your project.",
  },
  {
    title: "Scalable by default",
    description:
      "Everything we build is designed to grow with you, from your first users to enterprise-level demand.",
  },
  {
    title: "Secure",
    description:
      "Input validation, rate limiting, and security best practices are baked in from day one — not bolted on later.",
  },
];

const stack = [
  { label: "Next.js 16", desc: "React framework with App Router" },
  { label: "TypeScript", desc: "Type-safe end to end" },
  { label: "Tailwind CSS v4", desc: "Utility-first styling" },
  { label: "Prisma ORM", desc: "Type-safe database access" },
  { label: "PostgreSQL", desc: "Production-grade relational DB" },
  { label: "Framer Motion", desc: "Performant animations" },
  { label: "Vercel", desc: "Zero-config global deployment" },
  { label: "Resend", desc: "Reliable transactional email" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about` },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/about`,
      url: `${siteConfig.url}/about`,
      name: `About · ${siteConfig.name}`,
      description:
        "GloApp is a business solutions ecosystem helping individuals launch their careers and organizations grow through digital solutions.",
      isPartOf: { "@id": siteConfig.url },
    },
  ],
};

export default function AboutPage() {
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
              We help people and businesses{" "}
              <GradientText>move forward</GradientText>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed text-pretty">
              GloApp is a business solutions ecosystem. We help individuals
              launch careers and organizations grow through modern digital
              solutions — built by a team that cares about outcomes.
            </p>
          </SlideUp>
        </Container>
      </section>

      {/* Vision & Mission */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SlideUp className="border-border/70 bg-card flex flex-col gap-4 rounded-2xl border p-8">
            <span className="from-brand to-brand-2 w-fit bg-gradient-to-r bg-clip-text text-xs font-semibold tracking-widest text-transparent uppercase">
              Vision
            </span>
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              A world where anyone can grow their career or business with the
              right tools and support.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We believe opportunity shouldn't depend on where you're from or
              who you know. GloApp exists to level the field — giving
              individuals the career foundation and giving businesses the
              digital infrastructure to compete and thrive.
            </p>
          </SlideUp>

          <SlideUp delay={0.05} className="border-border/70 bg-card flex flex-col gap-4 rounded-2xl border p-8">
            <span className="from-brand to-brand-2 w-fit bg-gradient-to-r bg-clip-text text-xs font-semibold tracking-widest text-transparent uppercase">
              Mission
            </span>
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              Build solutions that create real, measurable impact for every
              client.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              From a student's first CV to an enterprise's custom ERP, every
              engagement gets the same care — careful scoping, honest
              timelines, and a product built to last.
            </p>
          </SlideUp>
        </div>
      </Section>

      {/* Core values */}
      <Section className="bg-card/30 border-border/70 border-y">
        <SectionHeading
          eyebrow="Core values"
          title="What we stand for"
          description="The principles that shape every product we build and every client we work with."
          className="mx-auto mb-14"
        />

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <StaggerItem
              key={v.title}
              className="border-border/70 bg-card flex flex-col gap-2 rounded-2xl border p-6"
            >
              <span className="flex items-center gap-2">
                <span className="bg-brand/10 text-brand inline-flex size-5 items-center justify-center rounded-full">
                  <Check className="size-3" />
                </span>
                <h3 className="font-medium">{v.title}</h3>
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {v.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Tech stack */}
      <Section>
        <SectionHeading
          eyebrow="Technology"
          title="Built on a modern, production-grade stack"
          description="We use the same tools that power the world's best SaaS products — so every solution is fast, secure, and built to scale."
          className="mx-auto mb-14"
        />

        <Stagger className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((item) => (
            <StaggerItem
              key={item.label}
              className="border-border/70 bg-card flex flex-col gap-1 rounded-xl border p-4"
            >
              <span className="text-sm font-semibold">{item.label}</span>
              <span className="text-muted-foreground text-xs leading-relaxed">
                {item.desc}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Founder */}
      <Section className="bg-card/30 border-border/70 border-y">
        <Container>
          <SlideUp className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">
              Built by someone who's been there
            </h2>
            <p className="text-muted-foreground mb-4 text-base leading-relaxed">
              GloApp was founded with a clear frustration: talented people
              struggling to land jobs because their CV didn't reflect their
              skills — and businesses that couldn't grow because they lacked
              the right digital tools. We set out to fix both.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Today we serve students, professionals, and organizations across
              Indonesia and beyond, with a remote-first team that's obsessed
              with quality and outcomes.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                render={<Link href="/contact" />}
                variant="outline"
                size="lg"
                className="h-11 px-6 text-sm"
              >
                Get in touch
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </SlideUp>
        </Container>
      </Section>

      <Cta />
    </>
  );
}
