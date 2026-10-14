import ProductsLayout from "@/components/layouts/ProductsLayout";
import { pageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata = pageMetadata({ "title": "Beeboy & Play Essentials", "description": "Explore Beeboy educational robots, forest adventure board mats, and RFID command cards from Creativity Corner. Discover hands-on learning through play.", "path": "/products" });

export default function ProductsPage() { return <><JsonLd data={breadcrumbSchema([{ "name": "Home", "path": "/" }, { "name": "Beeboy & Play Essentials", "path": "/products" }])} /><ProductsLayout /></>; }
