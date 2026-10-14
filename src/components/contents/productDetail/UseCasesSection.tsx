import type { ProductDetailSectionProps } from "@/lib/page-state/getProductDetailState";
export default function UseCasesSection({ product }: Pick<ProductDetailSectionProps, "product">) {
  return (
    <section className="py-10 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">Kasus Penggunaan</span>
          <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">Cocok untuk Berbagai Lingkungan</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {product.useCases.map((uc) => (
            <div key={uc.title} className="p-8 rounded-2xl bg-white border border-brand-blue/10 hover:border-brand-blue/30 hover:shadow-lg transition-all">
              {/* 🏠🏢🏨 diganti icon component */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(184, 92, 92,0.1)" }}>
                <uc.icon size={24} style={{ color: "#B85C5C" }} />
              </div>
              <h3 className="font-display font-bold text-brand-navy text-xl">{uc.title}</h3>
              <p className="mt-2 text-brand-navy/60 text-sm leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
