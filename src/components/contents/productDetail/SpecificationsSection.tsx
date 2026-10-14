import { CheckCircle2 } from "lucide-react";

import type { ProductDetailSectionProps } from "@/lib/page-state/getProductDetailState";
export default function SpecificationsSection({ product }: Pick<ProductDetailSectionProps, "product">) {
  return (
    <section className="py-10 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">Fitur Utama</span>
            <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">Perlindungan Berlapis,<br />Respons Kilat</h2>
            <ul className="mt-8 space-y-4">
              {product.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-brand-blue mt-0.5 shrink-0" />
                  <span className="text-brand-navy/70 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-brand-blue/10 overflow-hidden">
            <div className="px-6 py-4 bg-brand-navy">
              <h3 className="text-white font-display font-semibold">Spesifikasi Teknis</h3>
            </div>
            <div className="divide-y divide-brand-blue/10">
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} className="px-6 py-3.5 flex justify-between gap-4">
                  <span className="text-brand-navy/50 text-sm">{key}</span>
                  <span className="text-brand-navy font-medium text-sm text-right">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
