"use client";
import Link from "next/link";
import Image from "next/image";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/lib/data/products";
import type { ProductsSectionProps } from "@/lib/hooks/useProductsState";
export default function ProductCarouselSection({ current, setCurrent, prev, next, product }: Pick<ProductsSectionProps, "current" | "setCurrent" | "prev" | "next" | "product">) {
  return (
    <section className="py-12 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">Tersedia Sekarang</span>
            <h2 className="mt-2 text-3xl font-display font-bold text-brand-navy">Produk Aktif</h2>
          </div>
          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-2.5 h-2.5 rounded-full transition-all"
                style={{ background: i === current ? "#B85C5C" : "rgba(184, 92, 92,0.3)" }}
              />
            ))}
            <button onClick={prev} className="w-9 h-9 rounded-xl border border-[#B85C5C]/25 flex items-center justify-center hover:bg-white transition-colors ml-2">
              <ChevronLeft size={18} style={{ color: "#B85C5C" }} />
            </button>
            <button onClick={next} className="w-9 h-9 rounded-xl border border-[#B85C5C]/25 flex items-center justify-center hover:bg-white transition-colors">
              <ChevronRight size={18} style={{ color: "#B85C5C" }} />
            </button>
          </div>
        </div>

        {/* Desktop card */}
        <div className="hidden md:block">
          <div className="rounded-3xl border border-brand-blue/10 overflow-hidden shadow-sm transition-all duration-500" style={{ background: "#FFFFFF" }}>
            <div className="flex gap-2 flex-wrap px-6 pt-5">
              <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${product.badgeColor}`}>{product.badge}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${product.focusColor}`}>{product.focus}</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative flex items-center justify-center p-12 border-r border-brand-blue/10" style={{ background: "#FFFFFF" }}>
                <Image src={product.image} alt={product.name} width={360} height={360} className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center bg-white">
                <h2 className="text-3xl font-display font-bold text-brand-navy">{product.name}</h2>
                <p className="mt-1 text-brand-blue font-medium">{product.tagline}</p>
                <p className="mt-4 text-brand-navy/60 leading-relaxed text-justify">{product.description}</p>
                <div className="mt-6 space-y-2">
                  {product.highlights.map((h) => (
                    <div key={h.text} className="flex items-center gap-3 p-3 rounded-xl bg-brand-light">
                      <div className="w-8 h-8 rounded-lg bg-brand-blue/15 flex items-center justify-center shrink-0">
                        <h.icon size={16} className="text-brand-blue" />
                      </div>
                      <span className="text-brand-navy/70 text-sm font-medium">{h.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.specs.map((spec) => (
                    <span key={spec} className="px-3 py-1.5 rounded-lg bg-brand-light border border-brand-blue/15 text-brand-navy/60 text-xs font-semibold">{spec}</span>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-brand-blue/10">
                  <div className="text-brand-navy/50 text-sm mb-1">Harga</div>
                  <div className="text-2xl font-display font-bold text-brand-navy">{product.price}</div>
                </div>
                <div className="mt-6 flex gap-3 flex-wrap">
                  {product.badge === "Tersedia" ? (
                    <>
                      <Link href={`/products/${product.id}`} className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy text-white font-semibold hover:bg-brand-blue transition-colors">
                        Detail Produk<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link href="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-blue/30 text-brand-navy font-semibold hover:bg-brand-light transition-colors">
                        Lihat Demo
                      </Link>
                    </>
                  ) : (
                    <Link href="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-blue/30 text-brand-navy font-semibold hover:bg-brand-light transition-colors">
                      Daftar Notifikasi
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile — swipeable simple cards */}
        <div className="md:hidden">
          <div
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          >
            {products.map((p) => (
              <div key={p.id} className="snap-center shrink-0 w-[85vw] rounded-2xl border border-brand-blue/10 bg-white shadow-sm overflow-hidden">
                <div className="bg-[#FFFFFF] flex items-center justify-center p-6" style={{ height: 220 }}>
                  <Image src={p.image} alt={p.name} width={180} height={180} className="object-contain drop-shadow-xl" />
                </div>
                <div className="p-5">
                  <div className="flex gap-2 mb-3">
                    <span className={`px-2.5 py-1 rounded-full text-white text-xs font-bold ${p.badgeColor}`}>{p.badge}</span>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${p.focusColor}`}>{p.focus}</span>
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-lg">{p.name}</h3>
                  <p className="mt-1 text-brand-blue text-sm font-medium">{p.tagline}</p>
                  <p className="mt-3 text-brand-navy/60 text-sm leading-relaxed line-clamp-3">{p.description}</p>
                  <div className="mt-4 pt-3 border-t border-brand-blue/10 flex items-center justify-between">
                    <div>
                      <div className="text-brand-navy/40 text-xs">Harga</div>
                      <div className="text-brand-navy font-bold text-sm">{p.price}</div>
                    </div>
                    {p.badge === "Tersedia" ? (
                      <Link href={`/products/${p.id}`} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-navy text-white text-sm font-semibold">
                        Detail <ArrowRight size={14} />
                      </Link>
                    ) : (
                      <Link href="/contact-us" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-brand-blue/30 text-brand-navy text-sm font-semibold">
                        Notifikasi
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Dot indicators mobile */}
          <div className="flex justify-center gap-2 mt-2">
            {products.map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full" style={{ background: "rgba(184, 92, 92,0.4)" }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
