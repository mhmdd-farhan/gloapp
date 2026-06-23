import type { NavLink } from "@/lib/content/types";

/** Primary header navigation. */
export const mainNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Affiliate", href: "/affiliate" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Footer link columns. */
export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Solutions",
    links: [
      { label: "AI Transformation", href: "/services#ai" },
      { label: "Business Solutions", href: "/services#business" },
      { label: "Custom Development", href: "/services#custom" },
      { label: "Affiliate Program", href: "/affiliate" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "POS System", href: "/products#pos" },
      { label: "School Management", href: "/products#school" },
      { label: "CRM", href: "/products#crm" },
      { label: "Inventory System", href: "/products#inventory" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Become an Affiliate", href: "/affiliate" },
    ],
  },
];
