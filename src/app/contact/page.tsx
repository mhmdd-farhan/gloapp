import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";

import { siteConfig } from "@/lib/content/site";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Container } from "@/components/layout/container";
import { GradientText } from "@/components/layout/gradient-text";
import { SlideUp } from "@/components/motion/motion-primitives";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with GloApp. Book a free consultation, contact sales, or ask us anything.",
  keywords: [
    "contact GloApp",
    "book a consultation",
    "free discovery call",
    "GloApp Indonesia",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact · ${siteConfig.name}`,
    description:
      "Get in touch with GloApp. Book a free consultation, contact sales, or ask us anything.",
    url: `${siteConfig.url}/contact`,
  },
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: null,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${siteConfig.url}/contact` },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": `${siteConfig.url}/contact`,
      url: `${siteConfig.url}/contact`,
      name: `Contact · ${siteConfig.name}`,
      description: "Get in touch with GloApp. Book a free consultation, contact sales, or ask us anything.",
      isPartOf: { "@id": siteConfig.url },
    },
  ],
};

export default function ContactPage() {
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
          <SlideUp className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading mb-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              Let's <GradientText>talk</GradientText>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-lg text-lg leading-relaxed">
              Whether you want to book a consultation, kick off a project, or
              just ask a question — we'd love to hear from you.
            </p>
          </SlideUp>
        </Container>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-16">
          {/* Contact info */}
          <SlideUp className="flex flex-col gap-8">
            <div>
              <h2 className="font-heading mb-2 text-xl font-semibold tracking-tight">
                Get in touch
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We respond to all inquiries within 1–2 business days. For
                urgent matters, reach us via WhatsApp.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="bg-brand/10 text-brand mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl">
                    <Icon className="size-4" />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="hover:text-brand text-sm font-medium transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium">{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-border/70 bg-card rounded-2xl border p-6">
              <p className="mb-1 text-sm font-medium">Response time</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We aim to reply to all contact form submissions within 1
                business day. Project consultations are typically scheduled
                within 2–3 days of your inquiry.
              </p>
            </div>
          </SlideUp>

          {/* Contact form */}
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
