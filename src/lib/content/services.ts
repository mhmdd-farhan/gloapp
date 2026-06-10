import type { ServiceItem, ProcessStep } from "@/lib/content/types";

/** Career Services line items (homepage Career section + Services page). */
export const careerServices: ServiceItem[] = [
  {
    icon: "file-text",
    title: "CV Optimization",
    description:
      "ATS-friendly, recruiter-ready CVs that highlight your strengths and pass automated screening.",
  },
  {
    icon: "search",
    title: "Portfolio Review",
    description:
      "Expert feedback on your portfolio to sharpen the story your work tells.",
  },
  {
    icon: "linkedin",
    title: "LinkedIn Optimization",
    description:
      "A profile that gets found by recruiters and positions you as a credible professional.",
  },
  {
    icon: "presentation",
    title: "Mock Interview",
    description:
      "Realistic practice interviews with structured feedback so you walk in confident.",
  },
  {
    icon: "message",
    title: "Career Consultation",
    description:
      "One-on-one guidance to map your next move, from skill gaps to target roles.",
  },
];

/** High-level service categories for the Services page. */
export const serviceCategories: ServiceItem[] = [
  {
    icon: "user-check",
    title: "Career Services",
    description:
      "Everything individuals need to launch and grow their careers — from CVs to interview coaching.",
    bullets: [
      "CV & resume optimization",
      "Portfolio & LinkedIn review",
      "Mock interviews & coaching",
      "1:1 career consultation",
    ],
  },
  {
    icon: "boxes",
    title: "Business Solutions",
    description:
      "Production-ready software that digitizes operations — POS, school management, CRM, and more.",
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
      "Bespoke software engineered to your workflow, built on a modern, scalable stack.",
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
