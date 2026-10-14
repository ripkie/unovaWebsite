import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { benefits } from "@/lib/data/partnership";

export default function BenefitsSection() {
  return (
    <section className="py-12" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#A31C1D" }}>
              Keunggulan Kemitraan
            </span>
            <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">
              Yang Anda Dapatkan<br />
              <span style={{ color: "#A31C1D" }}>sebagai Mitra Creativity Corner</span>
            </h2>
            <p className="mt-5 text-brand-navy/55 leading-relaxed">
              Kami percaya pada kemitraan yang saling menguntungkan dan
              berkelanjutan. Setiap mitra mendapatkan dukungan penuh untuk sukses bersama.
            </p>
            <Link
              href="/contact-us"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all"
              style={{ background: "#A31C1D" }}
            >
              Mulai Kemitraan
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#A31C1D]/15 hover:border-[#A31C1D]/30 transition-colors"
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(163,28,29,0.15)" }}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#A31C1D" }} />
                </span>
                <span className="text-brand-navy/65 text-sm leading-snug">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
