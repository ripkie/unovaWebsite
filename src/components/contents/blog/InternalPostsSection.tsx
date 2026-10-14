"use client";

import Link from "next/link";

import type { BlogSectionProps } from "@/lib/hooks/useBlogState";
export default function InternalPostsSection({ activeCategory, setActiveCategory, filteredInternal }: Pick<BlogSectionProps, "activeCategory" | "setActiveCategory" | "filteredInternal">) {
  return (
    <section className="py-14 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-brand-navy">Artikel dari Creativity Corner</h2>
            {activeCategory !== "Semua" && (
              <p className="text-brand-navy/45 text-sm mt-1">
                {filteredInternal.length} artikel dalam &ldquo;{activeCategory}&rdquo;
              </p>
            )}
          </div>
        </div>

        {filteredInternal.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredInternal.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-[#B85C5C]/15 overflow-hidden hover:shadow-lg hover:shadow-[#B85C5C]/15 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-36 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="px-2.5 py-0.5 rounded-lg text-xs font-semibold"
                      style={{ background: "rgba(184, 92, 92,0.12)", color: "#B85C5C" }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-base leading-snug group-hover:text-[#B85C5C] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-brand-navy/55 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#B85C5C]/10 flex items-center justify-between">
                    <span className="text-brand-navy/35 text-xs">{post.date}</span>
                    <span className="text-[#B85C5C] text-xs font-semibold group-hover:underline">Baca →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-brand-navy/40 font-medium">Belum ada artikel di kategori ini</p>
            <button onClick={() => setActiveCategory("Semua")} className="mt-4 text-[#B85C5C] text-sm font-semibold hover:underline">
              Lihat semua artikel
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
