import type { MetadataRoute } from "next";
import { absoluteUrl, siteIndexable } from "@/lib/config/site";
import { products } from "@/lib/data/productDetail";
import { posts } from "@/lib/data/blogDetail";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteIndexable) return [];
  const paths = ["/", "/about", "/products", "/blog", "/partnership", "/contact-us", ...Object.keys(products).map(slug => `/products/${slug}`), ...Object.keys(posts).map(slug => `/blog/${slug}`)];
  // lastModified is omitted until real per-page content timestamps are available.
  return paths.map(path => ({ url: absoluteUrl(path) }));
}
