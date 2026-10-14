import { absoluteUrl, siteConfig } from "@/lib/config/site";
export const organizationSchema = {
  "@context": "https://schema.org", "@type": "Organization", "@id": absoluteUrl("/#organization"),
  name: siteConfig.name, url: absoluteUrl(), logo: absoluteUrl(siteConfig.logo),
  description: siteConfig.description, sameAs: [siteConfig.instagram],
};
export const websiteSchema = {
  "@context": "https://schema.org", "@type": "WebSite", "@id": absoluteUrl("/#website"),
  name: siteConfig.name, url: absoluteUrl(), inLanguage: "id-ID",
  publisher: { "@id": absoluteUrl("/#organization") },
};
export function breadcrumbSchema(items: { name: string; path: string; }[]) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, i) => ({
      "@type": "ListItem", position: i + 1, name: item.name, item: absoluteUrl(item.path),
    }))
  };
}
