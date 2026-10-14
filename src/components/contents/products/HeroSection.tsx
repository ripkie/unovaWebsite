"use client";

import { ShieldCheck, Leaf, Home } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-8 bg-brand-light border-b border-[#B85C5C]/15">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-[#FFFFFF] text-[#B85C5C] text-xs font-bold tracking-widest uppercase mb-4">
          Our Products
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy">
          Safe & Healthy<br />
          <span style={{ color: "#B85C5C" }}>at Home</span>
        </h1>
        <p className="mt-4 text-brand-navy/55 text-lg max-w-2xl mx-auto leading-relaxed">
          Creativity Corner offers home technology products that make a difference, helping keep your family safe and healthy every day.
        </p>
        <div className="mt-6 flex justify-center gap-3 flex-wrap">
          {[
            { icon: ShieldCheck, label: "Safety", desc: "Prevent fires & explosions", color: "#dc2626" },
            { icon: Leaf, label: "Health", desc: "Optimal air quality", color: "#16a34a" },
            { icon: Home, label: "Smart Home", desc: "Integrated & automated", color: "#B85C5C" },
          ].map((tag) => (
            <div key={tag.label} className="flex flex-col items-center text-center gap-2 px-6 py-4 rounded-xl bg-white border border-[#B85C5C]/20 shadow-sm min-w-[140px]">
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
