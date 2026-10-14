import Link from "next/link";
import { ArrowLeft, Clock, Share2, User } from "lucide-react";

import type { BlogDetailSectionProps } from "@/lib/page-state/getBlogDetailState";
export default function HeroSection({ post }: Pick<BlogDetailSectionProps, "post">) {
  return (
    <section className="pt-28 pb-12 bg-white border-b border-[#A31C1D]/15">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-brand-navy/40 text-sm hover:text-brand-navy transition-colors mb-6">
          <ArrowLeft size={15} />
          Kembali ke Blog
        </Link>

        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="px-3 py-1 rounded-lg text-xs font-bold" style={{ background: "rgba(163,28,29,0.12)", color: "#A31C1D" }}>
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-brand-navy/40 text-sm">
            <Clock size={13} />
            {post.readTime}
          </span>
          <span className="text-brand-navy/30 text-sm">{post.date}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-navy leading-snug">{post.title}</h1>
        <p className="mt-3 text-brand-navy/55 text-lg leading-relaxed">{post.excerpt}</p>

        <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            {/* 👤 diganti User icon */}
            <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] flex items-center justify-center">
              <User size={18} style={{ color: "#A31C1D" }} />
            </div>
            <div>
              <div className="text-brand-navy font-semibold text-sm">{post.author}</div>
              <div className="text-brand-navy/40 text-xs">{post.authorRole}</div>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFFFFF] text-brand-navy/60 text-sm hover:bg-[#A31C1D]/10 transition-colors border border-[#A31C1D]/15">
            <Share2 size={13} />
            Bagikan
          </button>
        </div>
      </div>
    </section>
  );
}
