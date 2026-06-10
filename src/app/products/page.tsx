import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { siteConfig } from "@/lib/content/site";
import { products } from "@/lib/content/products";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Container } from "@/components/layout/container";
import { GradientText } from "@/components/layout/gradient-text";
import { Cta } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon";
import { Stagger, StaggerItem, SlideUp } from "@/components/motion/motion-primitives";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Portfolio websites, POS systems, school management, CRM, inventory — production-ready software built for real businesses.",
  keywords: [
    "portfolio website builder",
    "POS system Indonesia",
    "school management system",
    "CRM software",
    "inventory management system",
    "custom ERP Indonesia",
    "company profile website",
    "business software Indonesia",
  ],
  alternates: { canonical: "/products" },
  openGraph: {
    title: `Products · ${siteConfig.name}`,
    description:
      "Portfolio websites, POS systems, school management, CRM, inventory — production-ready software built for real businesses.",
    url: `${siteConfig.url}/products`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Products", item: `${siteConfig.url}/products` },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/products`,
      url: `${siteConfig.url}/products`,
      name: `Products · ${siteConfig.name}`,
      description:
        "Portfolio websites, POS systems, school management, CRM, inventory — production-ready software built for real businesses.",
      isPartOf: { "@id": siteConfig.url },
    },
    {
      "@type": "ItemList",
      name: "GloApp Products",
      itemListElement: products.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
        description: p.overview,
        url: `${siteConfig.url}/products`,
      })),
    },
  ],
};

export default function ProductsPage() {
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
              Software built for{" "}
              <GradientText>real operations</GradientText>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed text-pretty">
              Production-ready platforms and bespoke builds for individuals and
              organizations — all priced with a custom quotation after a free
              discovery call.
            </p>
          </SlideUp>
        </Container>
      </section>

      {/* Product cards */}
      <Section>
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <StaggerItem
              key={product.title}
              id={product.href.split("=")[1]}
              className="border-border/70 bg-card flex flex-col gap-5 rounded-2xl border p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="from-brand/15 to-brand-2/15 text-brand ring-brand/20 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ring-1">
                  <Icon name={product.icon} className="size-6" />
                </span>
                {product.badge ? (
                  <Badge
                    variant="outline"
                    className="border-gradient-brand text-brand bg-brand/5 rounded-full text-xs"
                  >
                    {product.badge}
                  </Badge>
                ) : null}
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-heading text-xl font-semibold tracking-tight">
                  {product.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.overview}
                </p>
              </div>

              <ul className="flex flex-col gap-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <span className="bg-brand/10 text-brand inline-flex size-5 shrink-0 items-center justify-center rounded-full">
                      <Check className="size-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-2">
                <Button
                  render={<Link href={product.href} />}
                  size="sm"
                  className="w-full"
                >
                  {product.cta}
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Pricing note */}
      <Section className="bg-card/30 border-border/70 border-y py-14 sm:py-16 lg:py-20">
        <Container>
          <SlideUp className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Custom pricing, tailored to your project
            </h2>
            <p className="text-muted-foreground mb-8 text-base leading-relaxed">
              Every project is scoped individually. We provide a custom
              quotation after a free discovery consultation — you only pay for
              what your project actually needs.
            </p>
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="h-11 px-6 text-sm"
            >
              Book a free consultation
              <ArrowRight className="size-4" />
            </Button>
          </SlideUp>
        </Container>
      </Section>

      <Cta />
    </>
  );
}
