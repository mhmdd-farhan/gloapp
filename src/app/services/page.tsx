import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { siteConfig } from "@/lib/content/site";
import { serviceCategories, engagementSteps } from "@/lib/content/services";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Container } from "@/components/layout/container";
import { GradientText } from "@/components/layout/gradient-text";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Cta } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { Stagger, StaggerItem, SlideUp } from "@/components/motion/motion-primitives";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI transformation, business software solutions, and custom development — we turn traditional digital operations into autonomous digital systems.",
  keywords: [
    "AI transformation Indonesia",
    "autonomous digital",
    "business software solutions",
    "custom software development",
    "AI automation",
    "POS system Indonesia",
    "school management system",
    "digital transformation AI",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Services · ${siteConfig.name}`,
    description:
      "AI transformation, business software solutions, and custom development — we turn traditional digital operations into autonomous digital systems.",
    url: `${siteConfig.url}/services`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/services`,
      url: `${siteConfig.url}/services`,
      name: `Services · ${siteConfig.name}`,
      description:
        "AI transformation, business software solutions, and custom development — we turn traditional digital operations into autonomous digital systems.",
      isPartOf: { "@id": siteConfig.url },
    },
  ],
};

export default function ServicesPage() {
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
              Software solutions that make your{" "}
              <GradientText>business autonomous</GradientText>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed text-pretty">
              From AI-powered automation to production-ready business software,
              GloApp delivers the tools and intelligence your organization needs
              to go from traditional digital to fully autonomous — with custom
              pricing that fits your actual scope.
            </p>
          </SlideUp>
        </Container>
      </section>

      {/* Service categories */}
      <Section id="overview">
        <SectionHeading
          eyebrow="What we do"
          title="Services built around your goals"
          description="Every engagement starts with a free discovery call. You only pay for what your project actually needs."
          className="mx-auto mb-14"
        />

        <Stagger className="grid gap-6 sm:grid-cols-2">
          {serviceCategories.map((cat) => (
            <StaggerItem
              key={cat.title}
              className="border-border/70 bg-card flex flex-col gap-5 rounded-2xl border p-7"
            >
              <span className="from-brand/15 to-brand-2/15 text-brand ring-brand/20 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ring-1">
                <Icon name={cat.icon} className="size-6" />
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="font-heading text-xl font-semibold tracking-tight">
                  {cat.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cat.description}
                </p>
              </div>
              {cat.bullets ? (
                <ul className="flex flex-col gap-2">
                  {cat.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm">
                      <span className="bg-brand/10 text-brand inline-flex size-5 shrink-0 items-center justify-center rounded-full">
                        <Check className="size-3" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* AI Transformation detail */}
      <Section id="ai" className="bg-card/30 border-border/70 border-y">
        <SectionHeading
          eyebrow="AI Transformation"
          title="From manual to autonomous"
          description="We design and deploy AI-powered systems that replace repetitive manual operations with intelligent, self-running workflows."
          className="mx-auto mb-14"
        />

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Workflow Automation",
              desc: "End-to-end automation of business processes — approvals, notifications, data flows, and more — without human intervention.",
            },
            {
              title: "AI Decision Engines",
              desc: "Smart rule systems and ML models that make real-time decisions based on your operational data.",
            },
            {
              title: "Autonomous Reporting",
              desc: "Auto-generated reports and dashboards that surface the metrics your leadership needs — on schedule, every time.",
            },
            {
              title: "System Integration",
              desc: "Connect your existing tools into a unified, orchestrated ecosystem that shares data and triggers actions automatically.",
            },
            {
              title: "Intelligent Document Processing",
              desc: "AI that reads, classifies, and routes documents — invoices, contracts, forms — with near-zero manual handling.",
            },
          ].map((item) => (
            <StaggerItem
              key={item.title}
              className="border-border/70 bg-card rounded-2xl border p-6"
            >
              <h3 className="mb-2 font-medium">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </StaggerItem>
          ))}

          <StaggerItem className="from-brand/10 to-brand-2/10 border-gradient-brand flex flex-col items-start gap-4 rounded-2xl border bg-gradient-to-br p-6">
            <p className="text-sm font-medium">
              Ready to make your operations autonomous?
            </p>
            <Button
              render={<Link href="/contact?service=ai" />}
              size="sm"
            >
              Book a free consultation
              <ArrowRight className="size-4" />
            </Button>
          </StaggerItem>
        </Stagger>
      </Section>

      {/* Business / custom */}
      <Section id="business">
        <SectionHeading
          eyebrow="Business Solutions"
          title="Software that fits how you work"
          description="Production-ready platforms and bespoke builds engineered on a modern stack — no rigid templates."
          className="mx-auto mb-14"
        />

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "POS System",
              desc: "Modern point-of-sale for retail and F&B — sales, inventory, and reporting in one.",
            },
            {
              title: "School Management",
              desc: "Digitize academics, administration, and finance for schools of any size.",
            },
            {
              title: "CRM",
              desc: "Manage leads, customers, and pipeline so your team closes more, faster.",
            },
            {
              title: "Inventory System",
              desc: "Real-time stock control across locations with alerts and valuation reports.",
            },
            {
              title: "Company Profile Website",
              desc: "Premium, fast, SEO-ready websites that build instant trust with customers.",
            },
            {
              title: "Custom ERP",
              desc: "Bespoke enterprise resource planning built around how your operations actually run.",
            },
          ].map((item) => (
            <StaggerItem
              key={item.title}
              className="border-border/70 bg-card rounded-2xl border p-6"
            >
              <h3 className="mb-2 font-medium">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        <SlideUp className="mt-10 flex justify-center">
          <Button
            render={<Link href="/products" />}
            variant="outline"
            size="lg"
            className="h-11 px-5 text-sm"
          >
            See all products in detail
            <ArrowRight className="size-4" />
          </Button>
        </SlideUp>
      </Section>

      {/* Custom development */}
      <Section id="custom" className="bg-card/30 border-border/70 border-y">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="Custom Development"
            title="Bespoke software built for your workflow"
            description="When off-the-shelf doesn't cut it, we engineer from scratch — custom ERPs, internal dashboards, and integrations on a modern, scalable stack."
          >
            <ul className="mt-2 flex flex-col gap-2.5">
              {[
                "Custom ERP & internal tools",
                "API & third-party integrations",
                "Scalable cloud architecture",
                "Ongoing support & iteration",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm">
                  <span className="bg-brand/10 text-brand inline-flex size-5 items-center justify-center rounded-full">
                    <Check className="size-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <SlideUp className="mt-6">
              <Button
                render={<Link href="/contact?service=custom" />}
                size="lg"
                className="h-11 px-5 text-sm"
              >
                Start a project
                <ArrowRight className="size-4" />
              </Button>
            </SlideUp>
          </SectionHeading>

          <Stagger className="grid gap-4">
            {[
              {
                step: "01",
                title: "Discovery call",
                desc: "We start free — understanding your goals, constraints, and timeline.",
              },
              {
                step: "02",
                title: "Custom proposal",
                desc: "A tailored scope and quotation, no off-the-shelf packages.",
              },
              {
                step: "03",
                title: "Build & iterate",
                desc: "Close collaboration with regular check-ins throughout.",
              },
              {
                step: "04",
                title: "Launch & support",
                desc: "We ship, hand over, and stay dedicated as you scale.",
              },
            ].map((s) => (
              <StaggerItem
                key={s.step}
                className="border-border/70 bg-card flex items-start gap-4 rounded-2xl border p-5"
              >
                <span className="from-brand to-brand-2 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-sm font-bold text-white">
                  {s.step}
                </span>
                <div>
                  <h3 className="mb-1 text-sm font-medium">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* How we engage */}
      <Section id="process">
        <SectionHeading
          eyebrow="How it works"
          title="A simple engagement process"
          description="From first conversation to launch — transparent, collaborative, and stress-free."
          className="mx-auto mb-14"
        />
        <ProcessSteps steps={engagementSteps} />
      </Section>

      <Cta />
    </>
  );
}
