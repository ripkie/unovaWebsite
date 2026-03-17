import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/favicon.svg"
    },
    sitemap: "https://unova.id/sitemap.xml",
  };
}
