import AboutLayout from "@/components/layouts/AboutLayout";
import { pageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata = pageMetadata({ "title": "About Creativity Corner & Beeboy", "description": "Meet Creativity Corner, a STEM toy startup adapting Korea’s Beeboy for children, families, and schools in Indonesia.", "path": "/about" });

export default function AboutPage() { return <><JsonLd data={breadcrumbSchema([{ "name": "Home", "path": "/" }, { "name": "About Creativity Corner & Beeboy", "path": "/about" }])} /><AboutLayout /></>; }
