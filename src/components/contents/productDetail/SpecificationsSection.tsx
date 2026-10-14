import type { ProductDetailSectionProps } from "@/lib/page-state/getProductDetailState";
export default function SpecificationsSection({product}: Pick<ProductDetailSectionProps,"product">) {
 return <section className="cc-catalog-info"><h2>Made for curious minds.</h2><ul>{product.highlights.map(h=><li key={h}>{h}</li>)}</ul></section>;
}
