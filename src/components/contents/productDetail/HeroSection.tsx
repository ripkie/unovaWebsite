import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download, Shield } from "lucide-react";

import type { ProductDetailSectionProps } from "@/lib/page-state/getProductDetailState";
export default function HeroSection({ product }: Pick<ProductDetailSectionProps, "product">) {
  return (
    <section className="pt-28 pb-8 bg-brand-light border-b border-[#B85C5C]/15">
      <div className="max-w-7xl mx-auto px-6">
        <Link href="/products" className="inline-flex items-center gap-2 text-brand-navy/40 text-sm hover:text-brand-navy transition-colors mb-8">
          <ArrowLeft size={16} />Back to Products
        </Link>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${product.badgeColor}`}>{product.badge}</span>
              {/* 🛡️ diganti Shield icon */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(184, 92, 92,0.12)", color: "#B85C5C" }}>
                <Shield size={12} />{product.focus}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy">{product.name}</h1>
            <p className="mt-2 text-lg font-medium" style={{ color: "#B85C5C" }}>{product.tagline}</p>
            <p className="mt-5 text-brand-navy/60 leading-relaxed">{product.description}</p>
            <div className="mt-6 inline-block">
              <div className="text-brand-navy/40 text-sm">Starting from</div>
              <div className="text-3xl font-display font-bold text-brand-navy">{product.price}</div>
            </div>
            <div className="mt-6 flex gap-3 flex-wrap">
              <Link href="/contact-us" className="group inline-flex items-center gap-2 px-7 py-3 rounded-xl text-white font-semibold transition-all" style={{ background: "#B85C5C" }}>
                Order Now<ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://drive.google.com/uc?export=download&id=1FwtHUtZnPT0n3PeSa1gMAaXb0COYY13o"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-[#B85C5C]/30 text-brand-navy font-semibold hover:bg-[#FFFFFF] transition-all"
              >
                <Download size={17} />Download Guidebook
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative p-12 rounded-3xl border border-[#B85C5C]/15" style={{ background: "#FFFFFF" }}>
              <Image src={product.image} alt={product.name} width={380} height={380} className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
