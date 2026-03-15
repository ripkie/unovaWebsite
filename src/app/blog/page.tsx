"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Clock, CheckCircle } from "lucide-react";

const categories = ["Semua", "Teknologi", "Panduan", "Bisnis", "Industri"];


const internalPosts = [
  {
    slug: "smart-home-2025-trend",
    title: "Tren Smart Home 2025: Dari Konektivitas ke Kecerdasan Buatan",
    excerpt: "Bagaimana ekosistem rumah pintar berkembang melampaui sekadar otomasi menuju sistem yang benar-benar belajar dan beradaptasi.",
    category: "Teknologi",
    date: "10 Maret 2025",
    readTime: "6 menit",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    slug: "knx-vs-matter-protokol",
    title: "KNX vs Matter: Protokol Mana yang Tepat untuk Proyek Anda?",
    excerpt: "Perbandingan mendalam antara dua standar industri terkemuka dari sisi instalasi, skalabilitas, dan total biaya kepemilikan.",
    category: "Panduan",
    date: "25 Februari 2025",
    readTime: "9 menit",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
  {
    slug: "roi-smart-building",
    title: "Menghitung ROI Investasi Smart Building: Panduan Praktis",
    excerpt: "Panduan langkah-demi-langkah untuk mengkuantifikasi penghematan energi dan efisiensi operasional dari instalasi IoT.",
    category: "Bisnis",
    date: "12 Februari 2025",
    readTime: "7 menit",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    slug: "gas-leak-prevention-rumah",
    title: "Kenapa Setiap Dapur Butuh Detektor Gas? Fakta yang Mengejutkan",
    excerpt: "Data BNPB menunjukkan kebocoran gas adalah penyebab utama kebakaran rumah tangga. Begini cara mencegahnya dengan teknologi.",
    category: "Teknologi",
    date: "5 Januari 2025",
    readTime: "5 menit",
    thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    slug: "kualitas-udara-dalam-ruangan",
    title: "Kualitas Udara dalam Ruangan: Ancaman Tersembunyi di Rumah Anda",
    excerpt: "Studi WHO: udara dalam ruangan bisa 5x lebih tercemar dari luar. Panduan menjaga kualitas udara rumah agar keluarga tetap sehat.",
    category: "Industri",
    date: "20 Desember 2024",
    readTime: "8 menit",
    thumbnail: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
  },
];

const externalArticles = [
  {
    title: "Regulator Gas Canggih",
    source: "Telkom University",
    url: "https://telkomuniversity.ac.id/cegah-kecelakaan-dapur-mahasiswa-telkom-university-ciptakan-startup-keamanan-dapur/",
    excerpt: "Regulator Gas LPG Canggih Buatan Mahasiswa Telkom University, Mampu Dikontrol Jarak Jauh",
    date: "4 Maret 2026",
    category: "Teknologi",
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
      {/* ── Hero: light, clean ── */}
      <section className="pt-32 pb-14 bg-white border-b border-[#6F96D1]/15">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#EDF0F5] text-[#6F96D1] text-xs font-bold tracking-widest uppercase mb-4">
            Blog & Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy">
            Wawasan untuk<br />
            <span style={{ color: "#6F96D1" }}>Rumah yang Lebih Aman</span>
          </h1>
          <p className="mt-4 text-brand-navy/55 text-lg max-w-xl mx-auto leading-relaxed">
            Artikel, panduan, dan berita terkini seputar home technology,
            keamanan rumah, dan kualitas udara.
          </p>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <div className="bg-[#EDF0F5] border-b border-[#6F96D1]/15 sticky top-[72px] z-20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all"
              style={
                activeCategory === cat
                  ? { background: "#091F58", color: "white" }
                  : { color: "rgba(9,31,88,0.55)", background: "transparent" }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Internal Posts ── */}
      <section className="py-14 bg-[#EDF0F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-brand-navy">Artikel dari Unova</h2>
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
                  className="group bg-white rounded-2xl border border-[#6F96D1]/15 overflow-hidden hover:shadow-lg hover:shadow-[#6F96D1]/15 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-36 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="px-2.5 py-0.5 rounded-lg text-xs font-semibold"
                        style={{ background: "rgba(111,150,209,0.12)", color: "#6F96D1" }}
                      >
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-brand-navy/35 text-xs">
                        <Clock size={11} />{post.readTime}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-brand-navy text-base leading-snug group-hover:text-[#6F96D1] transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-brand-navy/55 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 pt-3 border-t border-[#6F96D1]/10 flex items-center justify-between">
                      <span className="text-brand-navy/35 text-xs">{post.date}</span>
                      <span className="text-[#6F96D1] text-xs font-semibold group-hover:underline">Baca →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-brand-navy/40 font-medium">Belum ada artikel di kategori ini</p>
              <button onClick={() => setActiveCategory("Semua")} className="mt-4 text-[#6F96D1] text-sm font-semibold hover:underline">
                Lihat semua artikel
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── External Articles ── */}
      {filteredExternal.length > 0 && (
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <span className="text-[#6F96D1] text-xs font-bold tracking-widest uppercase">News & Information</span>
              <h2 className="mt-1 text-2xl font-display font-bold text-brand-navy">Berita & Artikel Eksternal</h2>
            </div>
            <div className="space-y-3">
              {filteredExternal.map((article, i) => (
                <a
                  key={i}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 p-5 rounded-2xl border border-[#6F96D1]/15 bg-[#EDF0F5]/50 hover:bg-[#EDF0F5] hover:border-[#6F96D1]/30 transition-all duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(111,150,209,0.12)" }}
                  >
                    <ExternalLink size={18} style={{ color: "#6F96D1" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-[#6F96D1] text-xs font-bold uppercase tracking-wide">{article.source}</span>
                      <span
                        className="px-2 py-0.5 rounded-md text-xs font-medium"
                        style={{ background: "rgba(111,150,209,0.1)", color: "#6F96D1" }}
                      >
                        {article.category}
                      </span>
                      <span className="text-brand-navy/30 text-xs">{article.date}</span>
                    </div>
                    <h3 className="font-display font-semibold text-brand-navy group-hover:text-[#6F96D1] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-1 text-brand-navy/55 text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>
                  </div>
                  <ArrowRight size={16} className="text-brand-navy/25 group-hover:text-[#6F96D1] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Newsletter ── */}
      <section className="py-16 border-t border-[#6F96D1]/15" style={{ background: "#EDF0F5" }}>
        <div className="max-w-lg mx-auto px-6 text-center">
          <h2 className="text-2xl font-display font-bold text-brand-navy">Update Terbaru ke Inbox Anda</h2>
          <p className="mt-2 text-brand-navy/55 text-sm">Tips keamanan rumah, update produk, dan insight industri.</p>
          {subscribed ? (
            <div className="mt-6 px-6 py-4 rounded-2xl bg-green-50 border border-green-200 text-green-700 font-semibold text-sm flex items-center justify-center gap-2">
              {/* ✅ diganti CheckCircle icon */}
              <CheckCircle size={16} />
              Terima kasih! Anda akan menerima update terbaru dari Unova.
            </div>
          ) : (
            <div className="mt-6 flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@anda.com"
                className="flex-1 px-4 py-3 rounded-xl border border-[#6F96D1]/25 bg-white text-brand-navy placeholder-brand-navy/30 focus:outline-none focus:border-[#6F96D1] transition-colors text-sm"
              />
              <button
                onClick={() => email && setSubscribed(true)}
                className="px-6 py-3 rounded-xl text-white text-sm font-semibold transition-colors whitespace-nowrap"
                style={{ background: "#6F96D1" }}
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
