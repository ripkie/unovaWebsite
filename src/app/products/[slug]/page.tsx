import { notFound } from "next/navigation";
import ProductDetailLayout from "@/components/layouts/ProductDetailLayout";
import { products } from "@/lib/data/productDetail";
import { pageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/structured-data";
type Props = { params: Promise<{ slug: string; }>; };
export function generateStaticParams() { return Object.keys(products).map(slug => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params; const product = products[slug]; if (!product) notFound();
  return pageMetadata({ title: product.name, description: product.description.slice(0, 160), path: `/products/${slug}` });
}
export default async function ProductDetailPage(props: Props) {
  const { slug } = await props.params; const product = products[slug]; if (!product) notFound();
  return <><JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: product.name, path: `/products/${slug}` }])} /><ProductDetailLayout {...props} /></>;
}
