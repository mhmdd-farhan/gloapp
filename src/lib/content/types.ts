import type { IconName } from "@/components/icon";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface SolutionCard {
  icon: IconName;
  title: string;
  description: string;
  href: string;
  cta: string;
  /** Future subdomain this solution will live on, shown as a "coming soon" hint. */
  subdomain?: string;
}

export interface ServiceItem {
  icon: IconName;
  title: string;
  description: string;
  bullets?: string[];
}

export interface ProductItem {
  icon: IconName;
  title: string;
  overview: string;
  features: string[];
  cta: string;
  href: string;
  badge?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Initials shown in the avatar fallback (no external images). */
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
