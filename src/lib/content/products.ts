import type { ProductItem, Feature } from "@/lib/content/types";

/**
 * Business products. `id` in the href anchor lets the homepage and footer
 * deep-link to a specific product on the Products page.
 */
export const products: ProductItem[] = [
  {
    icon: "file-text",
    title: "Portfolio Website",
    overview:
      "A personal-brand site that showcases your work and converts visitors into opportunities.",
    features: [
      "Custom, responsive design",
      "Project & case-study layouts",
      "SEO & fast performance",
      "Contact & lead capture",
    ],
    cta: "Request a quote",
    href: "/contact?product=portfolio",
    badge: "Individuals",
  },
  {
    icon: "globe",
    title: "Company Profile Website",
    overview:
      "A premium corporate website that builds trust and represents your brand professionally.",
    features: [
      "Modern, conversion-focused pages",
      "CMS-ready content",
      "Multi-language support",
      "Analytics & SEO built in",
    ],
    cta: "Request a quote",
    href: "/contact?product=company-profile",
    badge: "Business",
  },
  {
    icon: "shopping-cart",
    title: "POS System",
    overview:
      "Run sales, inventory, and reporting from one fast, reliable point-of-sale platform.",
    features: [
      "Sales & checkout flows",
      "Real-time inventory",
      "Multi-outlet support",
      "Sales & profit reporting",
    ],
    cta: "Request a quote",
    href: "/contact?product=pos",
    badge: "Retail · F&B",
  },
  {
    icon: "graduation-cap",
    title: "School Management System",
    overview:
      "Digitize academics, administration, and finance in a single scalable platform.",
    features: [
      "Student & staff management",
      "Academic & grading modules",
      "Finance & billing",
      "Parent & student portals",
    ],
    cta: "Request a quote",
    href: "/contact?product=school",
    badge: "Education",
  },
  {
    icon: "code",
    title: "Custom Software",
    overview:
      "Bespoke ERP and internal tools engineered around your exact operations.",
    features: [
      "Custom ERP & workflows",
      "Internal dashboards",
      "Third-party integrations",
      "Scalable cloud architecture",
    ],
    cta: "Start a project",
    href: "/contact?product=custom",
    badge: "Enterprise",
  },
  {
    icon: "users",
    title: "CRM",
    overview:
      "Manage leads, customers, and pipeline so your team closes more, faster.",
    features: [
      "Lead & contact management",
      "Pipeline & deal tracking",
      "Tasks & reminders",
      "Reports & insights",
    ],
    cta: "Request a quote",
    href: "/contact?product=crm",
    badge: "Sales",
  },
  {
    icon: "boxes",
    title: "Inventory System",
    overview:
      "Track stock across locations with accurate, real-time inventory control.",
    features: [
      "Multi-warehouse stock",
      "Purchase & supplier tracking",
      "Low-stock alerts",
      "Inventory valuation reports",
    ],
    cta: "Request a quote",
    href: "/contact?product=inventory",
    badge: "Operations",
  },
];

/** Compact list shown in the homepage Business Solutions grid. */
export const businessSolutions: Feature[] = [
  {
    icon: "shopping-cart",
    title: "POS System",
    description: "Sales, inventory, and reporting for retail and F&B.",
  },
  {
    icon: "graduation-cap",
    title: "School Management",
    description: "Academics, administration, and finance in one platform.",
  },
  {
    icon: "code",
    title: "Custom ERP",
    description: "Bespoke resource planning built around your operations.",
  },
  {
    icon: "dashboard",
    title: "Internal Dashboard",
    description: "Real-time visibility into the metrics that matter.",
  },
  {
    icon: "boxes",
    title: "Inventory System",
    description: "Accurate, real-time stock control across locations.",
  },
  {
    icon: "users",
    title: "CRM",
    description: "Manage leads, customers, and pipeline to close faster.",
  },
];
