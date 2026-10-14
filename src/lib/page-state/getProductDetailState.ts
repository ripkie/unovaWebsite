import { notFound } from "next/navigation";

import { products } from "@/lib/data/productDetail";
export async function getProductDetailState({ params }: { params: Promise<{ slug: string; }>; }) {
  const { slug } = await params;
  const product = products[slug];
  if (!product) notFound();
  return { slug, product };
}
export type ProductDetailSectionProps = Awaited<ReturnType<typeof getProductDetailState>>;
