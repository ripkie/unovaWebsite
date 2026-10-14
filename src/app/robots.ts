import type { MetadataRoute } from "next";
import { absoluteUrl, siteIndexable } from "@/lib/config/site";
export default function robots(): MetadataRoute.Robots {
  return siteIndexable
    ? { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: absoluteUrl("/sitemap.xml") }
    : { rules: { userAgent: "*", disallow: "/" } };
}
