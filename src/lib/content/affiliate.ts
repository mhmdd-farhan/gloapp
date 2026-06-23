import type { Feature, ProcessStep } from "@/lib/content/types";

/** Benefits shown on the Affiliate page and homepage affiliate section. */
export const affiliateBenefits: Feature[] = [
  {
    icon: "wallet",
    title: "Earn commissions",
    description:
      "Get paid for every client you refer, with recurring payouts on ongoing engagements.",
  },
  {
    icon: "share",
    title: "Refer clients",
    description:
      "Simply introduce businesses and professionals in your network — we handle the rest.",
  },
  {
    icon: "badge-check",
    title: "No technical skills required",
    description:
      "You don't need to know how anything is built. If you can make an introduction, you can earn.",
  },
];

/** Simple 3-step process for becoming/operating as an affiliate. */
export const affiliateSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Sign up",
    description:
      "Register in minutes and get your unique referral details and marketing assets.",
  },
  {
    step: "02",
    title: "Refer clients",
    description:
      "Introduce organizations and businesses who could benefit from GloApp solutions.",
  },
  {
    step: "03",
    title: "Earn commissions",
    description:
      "Track your referrals and get paid for every deal that closes — transparently.",
  },
];

/** Commission tiers (illustrative placeholder figures). */
export const commissionModel: {
  tier: string;
  rate: string;
  description: string;
}[] = [
  {
    tier: "Software Products",
    rate: "10%",
    description: "On company profile, POS, school management, CRM, and product builds.",
  },
  {
    tier: "AI Automation",
    rate: "12%",
    description: "On every AI transformation and workflow automation project.",
  },
  {
    tier: "Custom Software",
    rate: "Custom",
    description: "Negotiated per project for larger custom engagements.",
  },
];
