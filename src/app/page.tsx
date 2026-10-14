import HomeLayout from "@/components/layouts/HomeLayout";
import { pageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import { siteConfig } from "@/lib/config/site";
import { organizationSchema, websiteSchema } from "@/lib/seo/structured-data";

export const metadata = pageMetadata({ title: siteConfig.title, description: siteConfig.description, path: "/" });

export default function HomePage() { return <><JsonLd data={[organizationSchema, websiteSchema]} /><HomeLayout /></>; }
