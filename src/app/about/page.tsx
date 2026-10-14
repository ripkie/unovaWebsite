import AboutLayout from "@/components/layouts/AboutLayout";
import { pageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata = pageMetadata({ "title": "Tentang Creativity Corner & Beeboy", "description": "Kenali Creativity Corner, startup mainan edukasi STEM yang mengadaptasi Beeboy dari Korea untuk anak, keluarga, dan sekolah di Indonesia.", "path": "/about" });

export default function AboutPage() { return <><JsonLd data={breadcrumbSchema([{ "name": "Home", "path": "/" }, { "name": "Tentang Creativity Corner & Beeboy", "path": "/about" }])} /><AboutLayout /></>; }
