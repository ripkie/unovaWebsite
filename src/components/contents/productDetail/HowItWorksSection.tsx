import type { ProductDetailSectionProps } from "@/lib/page-state/getProductDetailState";
export default function HowItWorksSection({product}: Pick<ProductDetailSectionProps,"product">) {
 return <section className="cc-catalog-info"><h2>Let’s explore together.</h2><div className="cc-play-steps">{product.steps.map((s,i)=><article key={s.title}><span>0{i+1}</span><h3>{s.title}</h3><p>{s.description}</p></article>)}</div></section>;
}
