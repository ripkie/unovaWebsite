import type { ProductDetailSectionProps } from "@/lib/page-state/getProductDetailState";
export default function CompatibilitySection({product}: Pick<ProductDetailSectionProps,"product">) {
 return <section className="cc-catalog-info"><h2>Play together.</h2><p>{product.companion}</p></section>;
}
