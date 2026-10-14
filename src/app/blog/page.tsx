import BlogLayout from "@/components/layouts/BlogLayout";
import { pageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata = pageMetadata({ "title": "Blog & Panduan Teknologi", "description": "Baca artikel dan panduan teknologi dari Creativity Corner tentang smart home, keamanan rumah, kualitas udara, dan ekosistem IoT.", "path": "/blog" });

export default function BlogPage() { return <><JsonLd data={breadcrumbSchema([{ "name": "Home", "path": "/" }, { "name": "Blog & Panduan Teknologi", "path": "/blog" }])} /><BlogLayout /></>; }
