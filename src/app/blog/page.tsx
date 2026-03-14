import Link from "next/link";
import { ArrowRight, ExternalLink, Clock, Tag } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artikel, panduan, dan insight terkini seputar IoT, smart building, KNX, Matter, dan teknologi konektivitas dari tim Unova.",
};

const internalPosts = [
  {
    slug: "smart-home-2025-trend",
    title: "Tren Smart Home 2025: Dari Konektivitas ke Kecerdasan Buatan",
    excerpt:
      "Bagaimana ekosistem rumah pintar berkembang melampaui sekadar otomasi menuju sistem yang benar-benar belajar dan beradaptasi dengan kebutuhan penghuninya.",
    category: "Teknologi",
    date: "10 Maret 2025",
    readTime: "6 menit",
    image: "🏠",
    color: "from-brand-navy to-blue-800",
  },
  {
    slug: "knx-vs-matter-protokol",
    title: "KNX vs Matter: Protokol Mana yang Tepat untuk Proyek Anda?",
    excerpt:
      "Perbandingan mendalam antara dua standar industri terkemuka — dari sisi instalasi, skalabilitas, interoperabilitas, dan total biaya kepemilikan.",
    category: "Panduan",
    date: "25 Februari 2025",
    readTime: "9 menit",
    image: "⚡",
    color: "from-brand-blue to-cyan-600",
  },
  {
    slug: "roi-smart-building",
    title: "Menghitung ROI Investasi Smart Building: Panduan Praktis",
    excerpt:
      "Panduan langkah-demi-langkah untuk mengkuantifikasi penghematan energi, efisiensi operasional, dan peningkatan nilai properti dari instalasi IoT.",
    category: "Bisnis",
    date: "12 Februari 2025",
    readTime: "7 menit",
    image: "📊",
    color: "from-emerald-700 to-teal-600",
  },
];

const externalArticles = [
  {
    title: "Matter 1.3 Brings New Device Types and Long-Awaited Features",
    source: "The Verge",
    url: "https://www.theverge.com",
    excerpt:
      "The Connectivity Standards Alliance officially released Matter 1.3, adding support for new device categories including EV chargers and washing machines.",
    date: "8 Maret 2025",
  },
  {
    title: "Global Smart Home Market to Reach $338 Billion by 2030",
    source: "Forbes",
    url: "https://www.forbes.com",
    excerpt:
      "A new report forecasts explosive growth in smart home adoption, driven by falling hardware costs and improving interoperability standards.",
    date: "5 Maret 2025",
  },
  {
    title: "Why KNX Remains the Gold Standard for Professional Installations",
    source: "IoT Analytics",
    url: "https://iot-analytics.com",
    excerpt:
      "Despite newer protocols, KNX continues to dominate high-end residential and commercial installations due to its reliability and vendor diversity.",
    date: "28 Februari 2025",
  },
  {
    title: "Indonesia's Smart City Push: Opportunities for Local Tech Startups",
    source: "Tech in Asia",
    url: "https://techinasia.com",
    excerpt:
      "Government initiatives across major Indonesian cities are creating a significant opportunity for domestic IoT solution providers.",
    date: "20 Februari 2025",
  },
];

const categories = ["Semua", "Teknologi", "Panduan", "Bisnis", "Industri"];

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-40 pb-24 bg-brand-navy overflow-hidden noise">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-light to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
            Blog & Insights
          </span>
          <h1 className="mt-4 text-5xl md:text-6xl font-display font-bold text-white">
            Wawasan untuk
            <br />
            <span className="text-gradient-reverse">Ekosistem Cerdas</span>
          </h1>
          <p className="mt-6 text-white/60 text-xl max-w-xl mx-auto">
            Artikel, panduan, dan berita terkini seputar IoT, smart building, dan
            teknologi konektivitas.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <div className="bg-brand-light border-b border-brand-blue/10 sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                cat === "Semua"
                  ? "bg-brand-navy text-white"
                  : "text-brand-navy/60 hover:bg-brand-blue/10 hover:text-brand-navy"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Internal Posts */}
      <section className="section-padding bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-display font-bold text-brand-navy">
              Artikel dari Unova
            </h2>
            <Link
              href="#"
              className="text-brand-blue text-sm font-semibold hover:underline flex items-center gap-1"
            >
              Lihat semua <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {internalPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-brand-blue/10 overflow-hidden hover:shadow-xl hover:shadow-brand-blue/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Post Visual */}
                <div
                  className={`h-40 bg-gradient-to-br ${post.color} flex items-center justify-center`}
                >
                  <span className="text-6xl opacity-80">{post.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-brand-blue/10 text-brand-blue text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-brand-navy/40 text-xs">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-lg leading-snug group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-brand-navy/60 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 pt-4 border-t border-brand-blue/10 flex items-center justify-between">
                    <span className="text-brand-navy/40 text-xs">{post.date}</span>
                    <span className="text-brand-blue text-xs font-semibold group-hover:underline">
                      Baca selengkapnya →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* External Articles */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
                Dari Seluruh Dunia
              </span>
              <h2 className="mt-1 text-2xl font-display font-bold text-brand-navy">
                Berita & Artikel Eksternal
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {externalArticles.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-6 p-6 rounded-2xl border border-brand-blue/10 bg-brand-light/50 hover:bg-brand-light hover:border-brand-blue/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/20 transition-colors">
                  <ExternalLink size={20} className="text-brand-blue" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-brand-blue text-xs font-bold uppercase tracking-wide">
                      {article.source}
                    </span>
                    <span className="text-brand-navy/30 text-xs">{article.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-brand-navy group-hover:text-brand-blue transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-brand-navy/60 text-sm leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className="text-brand-navy/30 group-hover:text-brand-blue group-hover:translate-x-1 transition-all shrink-0 mt-1"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-brand-navy noise overflow-hidden">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-white">
            Tetap Update dengan Industri IoT
          </h2>
          <p className="mt-4 text-white/60">
            Dapatkan ringkasan artikel, tips, dan insight terbaru langsung di inbox Anda.
          </p>
          <div className="mt-8 flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="email@anda.com"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-brand-blue transition-colors"
            />
            <button className="px-6 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-white hover:text-brand-navy transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
