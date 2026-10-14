"use client";
import Link from "next/link";

import { comingSoon } from "@/lib/data/products";

export default function ComingSoonSection() {
  return (
    <section className="py-12 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">Coming Soon</span>
          <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">Product Roadmap</h2>
          <p className="mt-3 text-brand-navy/50 max-w-xl mx-auto">
            We keep innovating. Here are the products currently in development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {comingSoon.map((p) => (
            <div key={p.name} className="p-8 rounded-2xl border-2 border-dashed border-brand-blue/20 bg-brand-light/50 hover:border-brand-blue/40 transition-colors group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-navy/5 flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                  <p.icon size={26} className="text-brand-blue" />
                </div>
                <span className="text-xs font-bold text-brand-navy/30 bg-brand-navy/5 px-2 py-1 rounded-lg">{p.eta}</span>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-brand-blue/10 text-brand-blue">{p.focus}</span>
              <h3 className="font-display font-bold text-brand-navy text-lg mt-3">{p.name}</h3>
              <p className="mt-2 text-brand-navy/50 text-sm leading-relaxed">{p.desc}</p>
              <ul className="mt-4 space-y-1.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-brand-navy/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/50 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Link href="/contact-us" className="text-brand-blue text-sm font-semibold hover:underline">
                  Get notified →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
