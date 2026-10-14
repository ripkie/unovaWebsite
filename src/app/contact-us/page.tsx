import ContactLayout from "@/components/layouts/ContactLayout";
import { pageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata = pageMetadata({ "title": "Contact Creativity Corner", "description": "Contact the Creativity Corner team for product information, demos, technical support, STEM workshops, and collaboration opportunities.", "path": "/contact-us" });

export default function ContactPage() { return <><JsonLd data={breadcrumbSchema([{ "name": "Home", "path": "/" }, { "name": "Contact Creativity Corner", "path": "/contact-us" }])} /><ContactLayout /></>; }
