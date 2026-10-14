import Link from "next/link";
import ProductVisual from "@/components/contents/products/ProductVisual";
import type { ProductDetailSectionProps } from "@/lib/page-state/getProductDetailState";
export default function HeroSection({product}: Pick<ProductDetailSectionProps,"product">) {
 return <section className="cc-catalog-detail"><Link href="/products" className="cc-text-link">← Back to Products</Link><div className="cc-catalog-product"><div className="cc-catalog-visual"><ProductVisual product={product}/></div><div className="cc-catalog-copy"><h1>{product.name}</h1><p className="cc-lead">{product.tagline}</p><p>{product.description}</p><Link href="/contact-us" className="cc-button">Ask About This Product</Link></div></div></section>;
}
