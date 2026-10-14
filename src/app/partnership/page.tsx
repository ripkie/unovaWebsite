import PartnershipLayout from "@/components/layouts/PartnershipLayout";
import { pageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata = pageMetadata({ "title": "Partnerships & Collaboration", "description": "Collaborate with Creativity Corner on STEM education, educational robots, workshops, and product development in Indonesia.", "path": "/partnership" });

export default function PartnershipPage() { return <><JsonLd data={breadcrumbSchema([{ "name": "Home", "path": "/" }, { "name": "Partnerships & Collaboration", "path": "/partnership" }])} /><PartnershipLayout /></>; }
