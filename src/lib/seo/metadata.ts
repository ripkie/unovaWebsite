import type { Metadata } from "next";
import { absoluteUrl, siteConfig, siteIndexable } from "@/lib/config/site";
export function pageMetadata({ title, description, path, article = false }: {
  title: string; description: string; path: string; article?: boolean;
}): Metadata {
  const fullTitle = title === siteConfig.title ? title : `${title} | ${siteConfig.name}`;
  return {
    title: title === siteConfig.title ? { absolute: title } : title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    robots: { index: siteIndexable, follow: true },
    openGraph: {
      type: article ? "article" : "website", locale: "en_US", siteName: siteConfig.name,
      url: absoluteUrl(path), title: fullTitle, description,
      images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: "Creativity Corner — Learning into Play" }],
    },
    twitter: {
      card: "summary_large_image", title: fullTitle, description,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}
