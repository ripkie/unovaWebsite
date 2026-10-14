import ProductsLayout from "@/components/layouts/ProductsLayout";
import { pageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata = pageMetadata({ "title": "Products & Smart Technology", "description": "Explore Creativity Corner’s product catalog: Gas Leak Prevention and the Humidifier & Dehumidifier 2in1. Discover product features and information.", "path": "/products" });

export default function ProductsPage() { return <><JsonLd data={breadcrumbSchema([{ "name": "Home", "path": "/" }, { "name": "Products & Smart Technology", "path": "/products" }])} /><ProductsLayout /></>; }
