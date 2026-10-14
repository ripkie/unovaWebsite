import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { benefits } from "@/lib/data/partnership";

export default function BenefitsSection() {
  return (
    <section className="py-12" style={{ background: "#FFF9F5" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#B85C5C" }}>
              Partnership Benefits
            </span>
            <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">
              What You Get<br />
              <span style={{ color: "#B85C5C" }}>as a Creativity Corner Partner</span>
            </h2>
            <p className="mt-5 text-brand-navy/55 leading-relaxed">
              We believe in mutually rewarding, lasting partnerships. Every partner receives the support they need to succeed together.
            </p>
            <Link
              href="/contact-us"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all"
              style={{ background: "#B85C5C" }}
            >
              Start a Partnership
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#B85C5C]/15 hover:border-[#B85C5C]/30 transition-colors"
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(184, 92, 92,0.15)" }}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#B85C5C" }} />
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
