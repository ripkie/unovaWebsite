"use client";

import { ShieldCheck, Leaf, Home } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-8 bg-white border-b border-[#A31C1D]/15">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-[#FFFFFF] text-[#A31C1D] text-xs font-bold tracking-widest uppercase mb-4">
          Produk Kami
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy">
          Aman & Sehat<br />
          <span style={{ color: "#A31C1D" }}>di Rumah Anda</span>
        </h1>
        <p className="mt-4 text-brand-navy/55 text-lg max-w-2xl mx-auto leading-relaxed">
          Creativity Corner menghadirkan produk home technology yang berdampak nyata -
          menjaga keamanan dan kesehatan keluarga Anda setiap hari.
        </p>
        <div className="mt-6 flex justify-center gap-3 flex-wrap">
          {[
            { icon: ShieldCheck, label: "Keamanan", desc: "Cegah kebakaran & ledakan", color: "#dc2626" },
            { icon: Leaf, label: "Kesehatan", desc: "Kualitas udara optimal", color: "#16a34a" },
            { icon: Home, label: "Rumah Pintar", desc: "Terintegrasi & otomatis", color: "#A31C1D" },
          ].map((tag) => (
            <div key={tag.label} className="flex flex-col items-center text-center gap-2 px-6 py-4 rounded-xl bg-white border border-[#A31C1D]/20 shadow-sm min-w-[140px]">
              <tag.icon size={22} style={{ color: tag.color }} />
              <div className="text-brand-navy text-sm font-semibold leading-tight">{tag.label}</div>
              <div className="text-brand-navy/45 text-xs">{tag.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
