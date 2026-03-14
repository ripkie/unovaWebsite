import Link from "next/link";
import { ArrowLeft, Clock, Tag, Share2, BookOpen } from "lucide-react";
import { notFound } from "next/navigation";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  image: string;
  color: string;
  content: { type: "h2" | "h3" | "p" | "ul" | "blockquote"; text?: string; items?: string[] }[];
  tags: string[];
  related: string[];
}

const posts: Record<string, BlogPost> = {
  "smart-home-2025-trend": {
    slug: "smart-home-2025-trend",
    title: "Tren Smart Home 2025: Dari Konektivitas ke Kecerdasan Buatan",
    excerpt:
      "Bagaimana ekosistem rumah pintar berkembang melampaui sekadar otomasi menuju sistem yang benar-benar belajar dan beradaptasi.",
    category: "Teknologi",
    date: "10 Maret 2025",
    readTime: "6 menit",
    author: "Tim Unova",
    authorRole: "Product & Research",
    image: "🏠",
    color: "from-brand-navy to-blue-800",
    tags: ["Smart Home", "AI", "IoT", "Tren 2025"],
    related: ["knx-vs-matter-protokol", "roi-smart-building"],
    content: [
      {
        type: "p",
        text: "Industri smart home telah melewati babak pertama transformasinya — fase di mana setiap orang berlomba menghubungkan perangkat ke internet. Kini, di tahun 2025, babak kedua dimulai: fase di mana rumah bukan sekadar \"terhubung\", melainkan benar-benar \"cerdas\".",
      },
      {
        type: "h2",
        text: "1. AI Generatif Masuk ke Rumah",
      },
      {
        type: "p",
        text: "Bukan lagi sekadar asisten suara yang menjawab pertanyaan sederhana. Model bahasa besar (LLM) kini mulai diintegrasikan ke dalam sistem manajemen rumah, memungkinkan interaksi yang jauh lebih natural dan kontekstual. Bayangkan sistem yang memahami: \"Saya akan tamu malam ini, tolong siapkan rumah\" — dan langsung menyesuaikan pencahayaan, suhu, musik, dan bahkan stok minuman melalui integrasi smart refrigerator.",
      },
      {
        type: "h2",
        text: "2. Matter 1.3 Memperluas Ekosistem",
      },
      {
        type: "p",
        text: "Protokol Matter yang didukung Apple, Google, Amazon, dan Samsung terus berkembang. Versi 1.3 menambahkan dukungan untuk kategori perangkat baru termasuk pengisi daya EV, mesin cuci, dan perangkat energi surya. Ini adalah sinyal kuat bahwa interoperabilitas lintas brand akhirnya menjadi kenyataan, bukan sekadar janji.",
      },
      {
        type: "blockquote",
        text: "\"Interoperabilitas bukan lagi fitur premium — ini adalah ekspektasi dasar konsumen modern.\" — Connectivity Standards Alliance, 2025",
      },
      {
        type: "h2",
        text: "3. Efisiensi Energi sebagai Driver Utama",
      },
      {
        type: "p",
        text: "Dengan naiknya tarif listrik di berbagai negara termasuk Indonesia, ROI dari smart home semakin mudah dihitung. Sistem manajemen energi cerdas yang mengoptimalkan penggunaan AC, pemanas air, dan pencahayaan secara otomatis kini bisa menghemat 20–35% tagihan listrik bulanan.",
      },
      {
        type: "ul",
        items: [
          "Smart thermostat dengan machine learning: penghematan rata-rata 23%",
          "Sensor hunian adaptif: mematikan perangkat saat ruangan kosong secara otomatis",
          "Integrasi panel surya + baterai rumah: optimasi penggunaan energi terbarukan",
          "Peak-shaving otomatis: mengurangi konsumsi saat tarif listrik sedang tinggi",
        ],
      },
      {
        type: "h2",
        text: "4. Keamanan dan Privasi Menjadi Prioritas",
      },
      {
        type: "p",
        text: "Setelah beberapa insiden besar terkait keamanan perangkat IoT, konsumen dan regulator semakin kritis. Tahun 2025 menyaksikan munculnya standar keamanan wajib di berbagai negara — dan konsumen mulai aktif memilih produk berdasarkan track record keamanannya, bukan hanya fitur.",
      },
      {
        type: "h2",
        text: "Implikasi untuk Indonesia",
      },
      {
        type: "p",
        text: "Indonesia dengan penetrasi smartphone yang tinggi dan pertumbuhan kelas menengah yang pesat memiliki potensi luar biasa. Proyek smart city pemerintah, dikombinasikan dengan meningkatnya awareness konsumen, menciptakan momentum yang belum pernah ada sebelumnya bagi industri IoT domestik.",
      },
      {
        type: "p",
        text: "Di Unova, kami menyambut tren ini dengan mempersiapkan lini produk yang kompatibel dengan Matter, terintegrasi dengan AI assistant lokal, dan dirancang khusus untuk kondisi iklim tropis Indonesia.",
      },
    ],
  },
  "knx-vs-matter-protokol": {
    slug: "knx-vs-matter-protokol",
    title: "KNX vs Matter: Protokol Mana yang Tepat untuk Proyek Anda?",
    excerpt:
      "Perbandingan mendalam antara dua standar industri terkemuka dari sisi instalasi, skalabilitas, dan total biaya.",
    category: "Panduan",
    date: "25 Februari 2025",
    readTime: "9 menit",
    author: "Tim Teknis Unova",
    authorRole: "Engineering",
    image: "⚡",
    color: "from-brand-blue to-cyan-600",
    tags: ["KNX", "Matter", "Protokol IoT", "Smart Building"],
    related: ["smart-home-2025-trend", "roi-smart-building"],
    content: [
      {
        type: "p",
        text: "Salah satu pertanyaan paling sering kami terima dari integrator sistem dan arsitek bangunan adalah: mana yang lebih baik, KNX atau Matter? Jawabannya, seperti kebanyakan hal dalam rekayasa, adalah: tergantung.",
      },
      {
        type: "h2",
        text: "Memahami Filosofi Masing-Masing",
      },
      {
        type: "p",
        text: "KNX lahir dari dunia bangunan komersial dan industri. Standar ini telah ada sejak 1990 dan dirancang dari awal untuk instalasi profesional berskala besar dengan keandalan tinggi. Matter, sebaliknya, lahir dari dunia konsumen — didorong oleh Silicon Valley untuk menyederhanakan ekosistem smart home yang terfragmentasi.",
      },
      {
        type: "h2",
        text: "Perbandingan Head-to-Head",
      },
      {
        type: "ul",
        items: [
          "Instalasi: KNX membutuhkan programmer bersertifikat (ETS software), Matter bisa dikonfigurasi via app smartphone",
          "Skalabilitas: KNX unggul untuk 100+ titik kontrol, Matter optimal untuk 10–50 perangkat",
          "Keandalan: KNX menggunakan kabel dedicated (tidak bergantung WiFi), Matter bergantung pada infrastruktur IP",
          "Biaya awal: KNX lebih mahal (hardware + instalasi), Matter lebih terjangkau",
          "Fleksibilitas merk: Matter menawarkan interoperabilitas lebih luas antar brand konsumen",
          "Dukungan jangka panjang: KNX memiliki ekosistem 30+ tahun, Matter masih berkembang",
        ],
      },
      {
        type: "h2",
        text: "Rekomendasi Berdasarkan Proyek",
      },
      {
        type: "p",
        text: "Pilih KNX untuk gedung perkantoran, hotel, rumah sakit, atau proyek residensial premium di atas 300m² yang mengutamakan keandalan dan tidak bergantung pada konektivitas internet. Pilih Matter untuk smart apartment, vila, atau renovasi rumah yang mengutamakan kemudahan setup dan integrasi dengan ekosistem konsumen (Google, Apple, Amazon).",
      },
      {
        type: "blockquote",
        text: "\"Banyak proyek terbaik yang kami tangani menggunakan keduanya — KNX untuk backbone infrastruktur, Matter untuk layer konsumen.\"",
      },
    ],
  },
  "roi-smart-building": {
    slug: "roi-smart-building",
    title: "Menghitung ROI Investasi Smart Building: Panduan Praktis",
    excerpt:
      "Panduan langkah-demi-langkah untuk mengkuantifikasi penghematan energi dan efisiensi operasional dari instalasi IoT.",
    category: "Bisnis",
    date: "12 Februari 2025",
    readTime: "7 menit",
    author: "Tim Bisnis Unova",
    authorRole: "Business Development",
    image: "📊",
    color: "from-emerald-700 to-teal-600",
    tags: ["ROI", "Smart Building", "Efisiensi Energi", "Bisnis"],
    related: ["smart-home-2025-trend", "knx-vs-matter-protokol"],
    content: [
      {
        type: "p",
        text: "Pertanyaan paling kritis dari setiap klien korporat: berapa lama modal kembali? Jawabannya jauh lebih menarik dari yang Anda kira — rata-rata proyek smart building kami menunjukkan payback period 18–36 bulan.",
      },
      {
        type: "h2",
        text: "Komponen Penghematan yang Bisa Dihitung",
      },
      {
        type: "ul",
        items: [
          "Penghematan energi HVAC: 20–30% dengan kontrol adaptif berbasis occupancy",
          "Penghematan pencahayaan: 40–60% dengan dimming otomatis dan sensor gerak",
          "Efisiensi operasional: 15–25% pengurangan biaya maintenance prediktif",
          "Peningkatan nilai properti: 5–10% premium untuk properti bersertifikat smart",
          "Pengurangan downtime: monitoring real-time mendeteksi masalah sebelum kritis",
        ],
      },
      {
        type: "h2",
        text: "Formula Sederhana untuk Estimasi",
      },
      {
        type: "p",
        text: "ROI (%) = ((Penghematan Tahunan − Biaya Pemeliharaan Tahunan) / Total Investasi) × 100. Untuk gedung perkantoran 1.000m² dengan tagihan energi Rp 50 juta/bulan, penghematan 25% berarti Rp 12,5 juta/bulan atau Rp 150 juta/tahun. Dengan investasi smart building Rp 200–300 juta, payback period berada di kisaran 18–24 bulan.",
      },
      {
        type: "h2",
        text: "Faktor yang Memengaruhi ROI",
      },
      {
        type: "p",
        text: "Kualitas sensor dan akurasi data adalah fondasi dari semua penghematan. Sistem yang menggunakan data real-time yang akurat menghasilkan optimasi hingga 2x lebih baik dibanding sistem berbasis jadwal statis. Inilah mengapa kualitas hardware di lapisan sensor sangat menentukan ROI keseluruhan sistem.",
      },
    ],
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const relatedPosts = post.related
    .map((r) => posts[r])
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className={`relative pt-40 pb-20 bg-gradient-to-br ${post.color} overflow-hidden noise`}>
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Kembali ke Blog
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-lg bg-white/20 text-white text-xs font-bold backdrop-blur-sm">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-white/60 text-sm">
              <Clock size={14} />
              {post.readTime}
            </span>
            <span className="text-white/40 text-sm">{post.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-white/70 text-xl leading-relaxed">{post.excerpt}</p>

          <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-lg">
                👤
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{post.author}</div>
                <div className="text-white/50 text-xs">{post.authorRole}</div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white/70 text-sm hover:bg-white/20 transition-colors border border-white/20">
              <Share2 size={14} />
              Bagikan
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">
            {/* Main Content */}
            <article className="prose-unova">
              {post.content.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={i}
                      className="mt-10 mb-4 text-2xl font-display font-bold text-brand-navy border-l-4 border-brand-blue pl-4"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "h3") {
                  return (
                    <h3
                      key={i}
                      className="mt-8 mb-3 text-xl font-display font-bold text-brand-navy"
                    >
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === "p") {
                  return (
                    <p key={i} className="mt-4 text-brand-navy/70 leading-relaxed text-lg">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="mt-4 space-y-3">
                      {block.items?.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-brand-navy/70">
                          <span className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="w-2 h-2 rounded-full bg-brand-blue" />
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "blockquote") {
                  return (
                    <blockquote
                      key={i}
                      className="mt-6 pl-5 border-l-4 border-brand-blue bg-brand-light/50 py-4 pr-4 rounded-r-xl"
                    >
                      <p className="text-brand-navy/70 italic leading-relaxed">{block.text}</p>
                    </blockquote>
                  );
                }
                return null;
              })}

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-brand-blue/10">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag size={16} className="text-brand-navy/40" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-xl bg-brand-light text-brand-navy/60 text-sm font-medium hover:bg-brand-blue/10 hover:text-brand-blue transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 p-6 rounded-2xl bg-brand-light border border-brand-blue/10 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-display font-bold text-brand-navy">Artikel ini bermanfaat?</p>
                  <p className="text-brand-navy/50 text-sm">Bagikan ke rekan kerja Anda</p>
                </div>
                <div className="flex gap-2">
                  {["LinkedIn", "Twitter", "WhatsApp"].map((s) => (
                    <button
                      key={s}
                      className="px-4 py-2 rounded-xl bg-white border border-brand-blue/15 text-brand-navy/60 text-sm font-medium hover:bg-brand-blue/10 hover:text-brand-navy transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-28">
              {/* Reading Progress */}
              <div className="p-5 rounded-2xl bg-brand-light border border-brand-blue/10">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={16} className="text-brand-blue" />
                  <span className="text-brand-navy font-semibold text-sm">Artikel ini</span>
                </div>
                <div className="flex items-center gap-2 text-brand-navy/50 text-sm">
                  <Clock size={14} />
                  {post.readTime} baca
                </div>
                <div className="mt-3 text-brand-navy/50 text-xs">
                  Ditulis oleh {post.author} · {post.date}
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="p-5 rounded-2xl bg-brand-light border border-brand-blue/10">
                  <h3 className="font-display font-bold text-brand-navy mb-4 text-sm uppercase tracking-wide">
                    Artikel Terkait
                  </h3>
                  <div className="space-y-3">
                    {relatedPosts.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/blog/${rel.slug}`}
                        className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white transition-colors"
                      >
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${rel.color} flex items-center justify-center text-lg shrink-0`}
                        >
                          {rel.image}
                        </div>
                        <div>
                          <p className="text-brand-navy text-sm font-medium leading-snug group-hover:text-brand-blue transition-colors line-clamp-2">
                            {rel.title}
                          </p>
                          <p className="text-brand-navy/40 text-xs mt-1">{rel.readTime}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="p-5 rounded-2xl bg-brand-navy text-white">
                <p className="font-display font-bold mb-2">Tertarik dengan solusi Unova?</p>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  Konsultasi gratis untuk proyek smart building Anda.
                </p>
                <Link
                  href="/contact-us"
                  className="block text-center px-4 py-2.5 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-white hover:text-brand-navy transition-colors"
                >
                  Hubungi Kami
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
