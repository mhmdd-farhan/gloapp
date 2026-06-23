import type { ServiceItem, ProcessStep } from "@/lib/content/types";

/** High-level service categories for the Services page. */
export const serviceCategories: ServiceItem[] = [
  {
    icon: "bot",
    title: "AI Transformation",
    description:
      "Intelligent automation that transforms manual operations into autonomous, self-running digital systems powered by AI.",
    bullets: [
      "Workflow & process automation",
      "AI-powered decision engines",
      "Autonomous reporting & analytics",
      "System integration & orchestration",
    ],
  },
  {
    icon: "boxes",
    title: "Business Solutions",
    description:
      "Production-ready software that digitizes and automates operations — POS, school management, CRM, and more.",
    bullets: [
      "POS & inventory systems",
      "School management platform",
      "CRM & internal dashboards",
      "Company profile websites",
    ],
  },
  {
    icon: "code",
    title: "Custom Development",
    description:
      "Bespoke software engineered to your workflow, built on a modern, scalable, AI-ready stack.",
    bullets: [
      "Custom ERP & internal tools",
      "API & system integrations",
      "Scalable cloud architecture",
      "Ongoing support & iteration",
    ],
  },
  {
    icon: "handshake",
    title: "Affiliate Program",
    description:
      "Partner with GloApp and earn commissions by referring clients to our ecosystem.",
    bullets: [
      "Recurring commissions",
      "No technical skills needed",
      "Marketing assets provided",
      "Transparent tracking",
    ],
  },
];

/** "How we work" process shown on the Services page. */
export const engagementSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start with a free consultation to understand your goals, constraints, and timeline.",
  },
  {
    step: "02",
    title: "Proposal",
    description:
      "You receive a tailored scope and a custom quotation — no off-the-shelf packages.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We design, build, and iterate in close collaboration, with regular check-ins.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We ship, hand over, and provide dedicated ongoing support as you scale.",
  },
];
