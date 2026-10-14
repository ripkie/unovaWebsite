import ContactLayout from "@/components/layouts/ContactLayout";
import { pageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata = pageMetadata({ "title": "Hubungi Creativity Corner", "description": "Hubungi tim Creativity Corner untuk informasi produk, demo, dukungan teknis, workshop STEM, dan peluang kolaborasi.", "path": "/contact-us" });

export default function ContactPage() { return <><JsonLd data={breadcrumbSchema([{ "name": "Home", "path": "/" }, { "name": "Hubungi Creativity Corner", "path": "/contact-us" }])} /><ContactLayout /></>; }
