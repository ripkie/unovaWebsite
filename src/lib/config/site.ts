/** Production origin and verified public brand identity. */
const origin = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://creativitycorner.cc");
export const siteConfig = {
  name: "Creativity Corner",
  url: origin.origin,
  title: "Creativity Corner — Mainan STEM & Robot Edukasi",
  description: "Creativity Corner mengembangkan mainan STEM dan robot edukasi Beeboy untuk belajar coding tanpa layar, melalui permainan, cerita, dan board mat di Indonesia.",
  tagline: "Born from Korea’s Beeboy, built for Indonesia.",
  instagram: "https://www.instagram.com/creativitycorner.cc/",
  logo: "/cc-logo.png",
};
/** Vercel previews stay noindex. Set SITE_INDEXABLE=false for staging elsewhere. */
export const siteIndexable = process.env.SITE_INDEXABLE !== "false" &&
  (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production");
export function absoluteUrl(path = "/") { return new URL(path, siteConfig.url).href; }
