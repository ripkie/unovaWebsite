import PartnershipLayout from "@/components/layouts/PartnershipLayout";
import { pageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata = pageMetadata({ "title": "Kemitraan & Kolaborasi", "description": "Bangun kolaborasi bersama Creativity Corner untuk pendidikan STEM, robot edukasi, workshop, dan pengembangan produk di Indonesia.", "path": "/partnership" });

export default function PartnershipPage() { return <><JsonLd data={breadcrumbSchema([{ "name": "Home", "path": "/" }, { "name": "Kemitraan & Kolaborasi", "path": "/partnership" }])} /><PartnershipLayout /></>; }
