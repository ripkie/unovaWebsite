"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Clock } from "lucide-react";

const categories = ["Semua", "Teknologi", "Panduan", "Bisnis", "Industri"];

const internalPosts = [
  {
    slug: "smart-home-2025-trend",
    title: "Tren Smart Home 2025: Dari Konektivitas ke Kecerdasan Buatan",
    excerpt: "Bagaimana ekosistem rumah pintar berkembang melampaui sekadar otomasi menuju sistem yang benar-benar belajar dan beradaptasi.",
    category: "Teknologi",
    date: "10 Maret 2025",
    readTime: "6 menit",
    image: "🏠",
    color: "from-brand-navy to-blue-800",
  },
  {
    slug: "knx-vs-matter-protokol",
    title: "KNX vs Matter: Protokol Mana yang Tepat untuk Proyek Anda?",
    excerpt: "Perbandingan mendalam antara dua standar industri terkemuka dari sisi instalasi, skalabilitas, dan total biaya kepemilikan.",
    category: "Panduan",
    date: "25 Februari 2025",
    readTime: "9 menit",
    image: "⚡",
    color: "from-brand-blue to-cyan-600",
  },
  {
    slug: "roi-smart-building",
    title: "Menghitung ROI Investasi Smart Building: Panduan Praktis",
    excerpt: "Panduan langkah-demi-langkah untuk mengkuantifikasi penghematan energi dan efisiensi operasional dari instalasi IoT.",
    category: "Bisnis",
    date: "12 Februari 2025",
    readTime: "7 menit",
    image: "📊",
    color: "from-emerald-700 to-teal-600",
  },
  {
    slug: "gas-leak-prevention-rumah",
    title: "Kenapa Setiap Dapur Butuh Detektor Gas? Fakta yang Mengejutkan",
    excerpt: "Data BNPB menunjukkan kebocoran gas adalah penyebab utama kebakaran rumah tangga. Begini cara mencegahnya dengan teknologi.",
    category: "Teknologi",
    date: "5 Januari 2025",
    readTime: "5 menit",
    image: "🔥",
    color: "from-red-700 to-orange-600",
  },
  {
    slug: "kualitas-udara-dalam-ruangan",
    title: "Kualitas Udara dalam Ruangan: Ancaman Tersembunyi di Rumah Anda",
    excerpt: "Studi WHO: udara dalam ruangan bisa 5x lebih tercemar dari luar. Panduan menjaga kualitas udara rumah agar keluarga tetap sehat.",
    category: "Industri",
    date: "20 Desember 2024",
    readTime: "8 menit",
    image: "🌿",
    color: "from-green-700 to-emerald-600",
  },
];

const externalArticles = [
  {
    title: "Matter 1.3 Brings New Device Types and Long-Awaited Features",
    source: "The Verge",
    url: "https://www.theverge.com",
    excerpt: "The Connectivity Standards Alliance released Matter 1.3, adding support for EV chargers, washing machines, and energy devices.",
    date: "8 Maret 2025",
    category: "Teknologi",
  },
  {
    title: "Gas Leak Prevention Technology Saves Lives in Residential Areas",
    source: "Safety Science Journal",
    url: "https://www.sciencedirect.com",
    excerpt: "IoT-based gas detection with automatic valve shutdown reduces explosion risk by over 90% in residential settings, study shows.",
    date: "1 Maret 2025",
    category: "Industri",
  },
  {
    title: "Global Smart Home Market to Reach $338 Billion by 2030",
    source: "Forbes",
    url: "https://www.forbes.com",
    excerpt: "A new report forecasts explosive growth in smart home adoption, driven by falling hardware costs and improving interoperability.",
    date: "5 Februari 2025",
    category: "Bisnis",
  },
  {
    title: "Indonesia Smart City Push Creates Opportunities for Local IoT Startups",
    source: "Tech in Asia",
    url: "https://techinasia.com",
    excerpt: "Government initiatives across major Indonesian cities are creating significant opportunities for domestic IoT solution providers.",
    date: "20 Januari 2025",
    category: "Bisnis",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredInternal = activeCategory === "Semua"
    ? internalPosts
    : internalPosts.filter((p) => p.category === activeCategory);

  const filteredExternal = activeCategory === "Semua"
    ? externalArticles
    : externalArticles.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* Header */}
      <section className="relative pt-40 pb-24 bg-brand-navy overflow-hidden noise">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-light to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">Blog & Insights</span>
          <h1 className="mt-4 text-5xl md:text-6xl font-display font-bold text-white">
            Wawasan untuk<br /><span className="text-gradient-reverse">Rumah yang Lebih Aman</span>
          </h1>
          <p className="mt-6 text-white/60 text-xl max-w-xl mx-auto">
            Artikel, panduan, dan berita terkini seputar home technology, keamanan rumah, dan kualitas udara.
          </p>
        </div>
      </section>

      {/* Sticky Category Filter */}
      <div className="bg-brand-light border-b border-brand-blue/10 sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-brand-navy text-white shadow-sm"
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
            <div>
              <h2 className="text-2xl font-display font-bold text-brand-navy">Artikel dari Unova</h2>
              {activeCategory !== "Semua" && (
                <p className="text-brand-navy/50 text-sm mt-1">
                  {filteredInternal.length} artikel dalam kategori &ldquo;{activeCategory}&rdquo;
                </p>
              )}
            </div>
          </div>

          {filteredInternal.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInternal.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-brand-blue/10 overflow-hidden hover:shadow-xl hover:shadow-brand-blue/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`h-40 bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                    <span className="text-6xl opacity-80">{post.image}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 rounded-lg bg-brand-blue/10 text-brand-blue text-xs font-semibold">{post.category}</span>
                      <span className="flex items-center gap-1 text-brand-navy/40 text-xs"><Clock size={12} />{post.readTime}</span>
                    </div>
                    <h3 className="font-display font-bold text-brand-navy text-lg leading-snug group-hover:text-brand-blue transition-colors">{post.title}</h3>
                    <p className="mt-2 text-brand-navy/60 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="mt-4 pt-4 border-t border-brand-blue/10 flex items-center justify-between">
                      <span className="text-brand-navy/40 text-xs">{post.date}</span>
                      <span className="text-brand-blue text-xs font-semibold group-hover:underline">Baca →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-brand-navy/40">
              <p className="text-4xl mb-3">📭</p>
              <p className="font-medium">Belum ada artikel di kategori ini</p>
              <button onClick={() => setActiveCategory("Semua")} className="mt-4 text-brand-blue text-sm font-semibold hover:underline">
                Lihat semua artikel
              </button>
            </div>
          )}
        </div>
      </section>

      {/* External */}
      {filteredExternal.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10">
              <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">Dari Seluruh Dunia</span>
              <h2 className="mt-1 text-2xl font-display font-bold text-brand-navy">Berita & Artikel Eksternal</h2>
            </div>
            <div className="space-y-4">
              {filteredExternal.map((article, i) => (
                <a key={i} href={article.url} target="_blank" rel="noopener noreferrer"
                  className="group flex items-start gap-6 p-6 rounded-2xl border border-brand-blue/10 bg-brand-light/50 hover:bg-brand-light hover:border-brand-blue/30 hover:shadow-md transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/20 transition-colors">
                    <ExternalLink size={20} className="text-brand-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-brand-blue text-xs font-bold uppercase tracking-wide">{article.source}</span>
                      <span className="px-2 py-0.5 rounded-md bg-brand-blue/10 text-brand-blue text-xs font-medium">{article.category}</span>
                      <span className="text-brand-navy/30 text-xs">{article.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-brand-navy group-hover:text-brand-blue transition-colors leading-snug">{article.title}</h3>
                    <p className="mt-1 text-brand-navy/60 text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>
                  </div>
                  <ArrowRight size={18} className="text-brand-navy/30 group-hover:text-brand-blue group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-20 bg-brand-navy noise overflow-hidden">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-white">Tetap Update dengan Dunia Home Tech</h2>
          <p className="mt-4 text-white/60">Tips keamanan rumah, update produk, dan insight industri — langsung ke inbox Anda.</p>
          {subscribed ? (
            <div className="mt-8 px-6 py-4 rounded-2xl bg-green-500/15 border border-green-500/30 text-green-400 font-semibold">
              Terima kasih! Anda akan menerima update terbaru dari Unova.
            </div>
          ) : (
            <div className="mt-8 flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@anda.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-brand-blue transition-colors"
              />
              <button
                onClick={() => email && setSubscribed(true)}
                className="px-6 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-white hover:text-brand-navy transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
