/** Single source of truth for brand/site-wide constants. */
export const siteConfig = {
  name: "GloApp",
  legalName: "GloApp",
  meaning: "Global App",
  tagline: "Build Your Career. Scale Your Business.",
  secondaryTagline:
    "From career preparation and portfolio development to custom business software and digital transformation.",
  description:
    "GloApp is a business solutions ecosystem helping individuals launch their careers and helping organizations grow through digital solutions.",
  url: "https://gloapp.my.id",
  domain: "gloapp.my.id",
  email: "hello@gloapp.my.id",
  phone: "+62 812 0000 0000",
  location: "Indonesia · Remote-first",
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
  career: "career.gloapp.my.id",
  affiliate: "affiliate.gloapp.my.id",
  school: "school.gloapp.my.id",
  pos: "pos.gloapp.my.id",
  portfolio: "portfolio.gloapp.my.id",
} as const;

export type SiteConfig = typeof siteConfig;
