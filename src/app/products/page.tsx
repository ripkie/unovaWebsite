import ProductsLayout from "@/components/layouts/ProductsLayout";
import { pageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata = pageMetadata({ "title": "Produk & Teknologi Pintar", "description": "Jelajahi katalog produk Creativity Corner: Gas Leak Prevention serta Humidifier & Dehumidifier 2in1. Lihat fitur dan informasi produk.", "path": "/products" });

export default function ProductsPage() { return <><JsonLd data={breadcrumbSchema([{ "name": "Home", "path": "/" }, { "name": "Produk & Teknologi Pintar", "path": "/products" }])} /><ProductsLayout /></>; }
