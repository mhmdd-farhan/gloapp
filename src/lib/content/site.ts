/** Single source of truth for brand/site-wide constants. */
export const siteConfig = {
  name: "GloApp",
  legalName: "GloApp",
  meaning: "Global App",
  tagline: "Go Autonomous. Powered by AI.",
  secondaryTagline:
    "From custom software to AI-powered automation — we transform how businesses operate.",
  description:
    "GloApp is a software business solutions company helping organizations transform their traditional digital operations into autonomous digital systems, powered by artificial intelligence.",
  url: "https://gloapp.my.id",
  domain: "gloapp.my.id",
  email: "hello@gloapp.my.id",
  phone: "+62 812 0000 0000",
  location: "Jakarta - Indonesia",
  ogImage: "/opengraph-image",
  social: {
    twitter: "https://twitter.com/gloapp",
    linkedin: "https://www.linkedin.com/company/gloapp",
    instagram: "https://instagram.com/gloapp",
    github: "https://github.com/gloapp",
  },
  twitterHandle: "@gloapp",
} as const;

/** Future product subdomains — displayed as products but not yet implemented. */
export const subdomains = {
  agency: "agency.gloapp.my.id",
  affiliate: "affiliate.gloapp.my.id",
  school: "school.gloapp.my.id",
  pos: "pos.gloapp.my.id",
} as const;

export type SiteConfig = typeof siteConfig;
