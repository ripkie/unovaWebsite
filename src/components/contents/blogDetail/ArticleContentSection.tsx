import SlugIcon from "@/components/contents/blogDetail/SlugIcon";
import Link from "next/link";
import { Clock, Tag, BookOpen } from "lucide-react";

import type { BlogDetailSectionProps } from "@/lib/page-state/getBlogDetailState";
export default function ArticleContentSection({ post, relatedPosts }: Pick<BlogDetailSectionProps, "post" | "relatedPosts">) {
  return (
    <section className="py-16 bg-brand-light">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">
          <article className="prose-unova">
            {post.content.map((block, i) => {
              if (block.type === "h2") return <h2 key={i} className="mt-10 mb-4 text-2xl font-display font-bold text-brand-navy border-l-4 border-brand-blue pl-4">{block.text}</h2>;
              if (block.type === "h3") return <h3 key={i} className="mt-8 mb-3 text-xl font-display font-bold text-brand-navy">{block.text}</h3>;
              if (block.type === "p") return <p key={i} className="mt-4 text-brand-navy/70 leading-relaxed text-lg">{block.text}</p>;
              if (block.type === "ul") return (
                <ul key={i} className="mt-4 space-y-3">
                  {block.items?.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-brand-navy/70">
                      <span className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0 mt-0.5"><span className="w-2 h-2 rounded-full bg-brand-blue" /></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              );
              if (block.type === "blockquote") return (
                <blockquote key={i} className="mt-6 pl-5 border-l-4 border-brand-blue bg-brand-light/50 py-4 pr-4 rounded-r-xl">
                  <p className="text-brand-navy/70 italic leading-relaxed">{block.text}</p>
                </blockquote>
              );
              return null;
            })}

            <div className="mt-12 pt-8 border-t border-brand-blue/10">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag size={16} className="text-brand-navy/40" />
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-xl bg-brand-light text-brand-navy/60 text-sm font-medium hover:bg-brand-blue/10 hover:text-brand-blue transition-colors cursor-default">{tag}</span>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-brand-light border border-brand-blue/10 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-display font-bold text-brand-navy">Artikel ini bermanfaat?</p>
                <p className="text-brand-navy/50 text-sm">Bagikan ke rekan kerja Anda</p>
              </div>
              <div className="flex gap-2">
                {["LinkedIn", "Twitter", "WhatsApp"].map((s) => (
                  <button key={s} className="px-4 py-2 rounded-xl bg-white border border-brand-blue/15 text-brand-navy/60 text-sm font-medium hover:bg-brand-blue/10 hover:text-brand-navy transition-colors">{s}</button>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="p-5 rounded-2xl bg-brand-light border border-brand-blue/10">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={16} className="text-brand-blue" />
                <span className="text-brand-navy font-semibold text-sm">Artikel ini</span>
              </div>
              <div className="flex items-center gap-2 text-brand-navy/50 text-sm">
                <Clock size={14} />
                {post.readTime} baca
              </div>
              <div className="mt-3 text-brand-navy/50 text-xs">Ditulis oleh {post.author} · {post.date}</div>
            </div>

            {relatedPosts.length > 0 && (
              <div className="p-5 rounded-2xl bg-brand-light border border-brand-blue/10">
                <h3 className="font-display font-bold text-brand-navy mb-4 text-sm uppercase tracking-wide">Artikel Terkait</h3>
                <div className="space-y-3">
                  {relatedPosts.map((rel) => (
                    <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white transition-colors">
                      {/* emoji diganti SlugIcon */}
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${rel.color} flex items-center justify-center shrink-0`}>
                        <SlugIcon name={rel.iconName} size={18} />
                      </div>
                      <div>
                        <p className="text-brand-navy text-sm font-medium leading-snug group-hover:text-brand-blue transition-colors line-clamp-2">{rel.title}</p>
                        <p className="text-brand-navy/40 text-xs mt-1">{rel.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="p-5 rounded-2xl text-white" style={{ background: "#352E2B" }}>
              <p className="font-display font-bold mb-2">Tertarik dengan solusi Creativity Corner?</p>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">Konsultasi gratis untuk proyek smart building Anda.</p>
              <Link href="/contact-us" className="block text-center px-4 py-2.5 rounded-xl text-white text-sm font-semibold transition-colors" style={{ background: "#B85C5C" }}>
                Hubungi Kami
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
