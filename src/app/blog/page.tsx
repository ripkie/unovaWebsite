import BlogLayout from "@/components/layouts/BlogLayout";
import { pageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata = pageMetadata({ "title": "Blog & Technology Guides", "description": "Read Creativity Corner’s technology articles and guides on smart homes, home safety, air quality, and IoT ecosystems.", "path": "/blog" });

export default function BlogPage() { return <><JsonLd data={breadcrumbSchema([{ "name": "Home", "path": "/" }, { "name": "Blog & Technology Guides", "path": "/blog" }])} /><BlogLayout /></>; }
