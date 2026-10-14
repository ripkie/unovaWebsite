import type { ProductDetailSectionProps } from "@/lib/page-state/getProductDetailState";
export default function CompatibilitySection({ product }: Pick<ProductDetailSectionProps, "product">) {
  return (
    <section className="py-10 bg-brand-light border-t border-brand-blue/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-brand-navy/40 text-sm font-semibold tracking-widest uppercase mb-8">Compatible with</p>
        <div className="flex flex-wrap gap-4 justify-center">
          {product.compatibleWith.map((name) => (
            <span key={name} className="px-6 py-3 rounded-xl bg-brand-light border border-brand-blue/15 text-brand-navy/60 font-semibold text-sm hover:text-brand-navy transition-colors">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
