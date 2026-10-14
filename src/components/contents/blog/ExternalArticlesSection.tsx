"use client";

import { ArrowRight, ExternalLink } from "lucide-react";

import type { BlogSectionProps } from "@/lib/hooks/useBlogState";
export default function ExternalArticlesSection({ filteredExternal }: Pick<BlogSectionProps, "filteredExternal">) {
  return (
    <section className="py-14 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <span className="text-[#B85C5C] text-xs font-bold tracking-widest uppercase">News & Information</span>
          <h2 className="mt-1 text-2xl font-display font-bold text-brand-navy">News & External Articles</h2>
        </div>
        <div className="space-y-3">
          {filteredExternal.map((article, i) => (
            <a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 p-5 rounded-2xl border border-[#B85C5C]/15 bg-[#FFFFFF]/50 hover:bg-[#FFFFFF] hover:border-[#B85C5C]/30 transition-all duration-200"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(184, 92, 92,0.12)" }}
              >
                <ExternalLink size={18} style={{ color: "#B85C5C" }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-[#B85C5C] text-xs font-bold uppercase tracking-wide">{article.source}</span>
                  <span
                    className="px-2 py-0.5 rounded-md text-xs font-medium"
                    style={{ background: "rgba(184, 92, 92,0.1)", color: "#B85C5C" }}
                  >
                    {article.category}
                  </span>
                  <span className="text-brand-navy/30 text-xs">{article.date}</span>
                </div>
                <h3 className="font-display font-semibold text-brand-navy group-hover:text-[#B85C5C] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="mt-1 text-brand-navy/55 text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>
              </div>
              <ArrowRight size={16} className="text-brand-navy/25 group-hover:text-[#B85C5C] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
