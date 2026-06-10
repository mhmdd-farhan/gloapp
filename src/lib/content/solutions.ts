import type { SolutionCard } from "@/lib/content/types";
import { subdomains } from "@/lib/content/site";

/** The 7 ecosystem solutions shown on the homepage Solutions grid. */
export const solutions: SolutionCard[] = [
  {
    icon: "briefcase",
    title: "Career Services",
    description:
      "CV optimization, mock interviews, and consultation to help students and graduates land their first job.",
    href: "/services#career",
    cta: "Explore careers",
    subdomain: subdomains.career,
  },
  {
    icon: "file-text",
    title: "Portfolio Development",
    description:
      "Professional portfolios and personal-brand sites that make professionals stand out.",
    href: "/products#portfolio",
    cta: "Build portfolio",
    subdomain: subdomains.portfolio,
  },
  {
    icon: "globe",
    title: "Company Profile Website",
    description:
      "Premium, fast, SEO-ready company websites that build instant trust with your customers.",
    href: "/products#company-profile",
    cta: "Get a website",
  },
  {
    icon: "shopping-cart",
    title: "POS System",
    description:
      "Modern point-of-sale to run sales, inventory, and reporting for retail and F&B businesses.",
    href: "/products#pos",
    cta: "See POS",
    subdomain: subdomains.pos,
  },
  {
    icon: "graduation-cap",
    title: "School Management System",
    description:
      "Manage students, staff, academics, and finance from one clean, scalable platform.",
    href: "/products#school",
    cta: "See school system",
    subdomain: subdomains.school,
  },
  {
    icon: "code",
    title: "Custom Software Development",
    description:
      "Bespoke ERP, dashboards, and internal tools engineered around how your team actually works.",
    href: "/services#custom",
    cta: "Start a project",
  },
  {
    icon: "handshake",
    title: "Affiliate Program",
    description:
      "Earn recurring commissions by referring clients — no technical skills required.",
    href: "/affiliate",
    cta: "Become an affiliate",
    subdomain: subdomains.affiliate,
  },
];
