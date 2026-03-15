import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Download, ShieldAlert, Bell, Zap, Wifi, Droplets, Wind } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface ProductData {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  price: string;
  image: string;
  focus: string;
  description: string;
  highlights: string[];
  specs: Record<string, string>;
  useCases: { icon: string; title: string; desc: string }[];
  compatibleWith: string[];
}

const products: Record<string, ProductData> = {
  "gas-leak-prevention": {
    id: "gas-leak-prevention",
    name: "Gas Leak Prevention",
    tagline: "Proteksi otomatis dari kebocoran gas",
    badge: "Tersedia Sekarang",
    badgeColor: "bg-green-500",
    price: "Rp 1.800.000",
    image: "/images/product-sensor.png",
    focus: "🛡️ Keamanan",
    description:
      "Gas Leak Prevention adalah solusi keamanan rumah dari Unova yang mendeteksi kebocoran LPG dan gas alam secara real-time. Dilengkapi valve otomatis yang langsung menutup regulator gas saat kebocoran terdeteksi, serta alarm suara keras dan notifikasi ke smartphone — memberikan perlindungan berlapis untuk mencegah risiko kebakaran dan ledakan.",
    highlights: [
      "Deteksi kebocoran LPG, gas alam, dan gas beracun (CO)",
      "Valve elektromagnetik otomatis menutup regulator < 10 detik",
      "Alarm suara 85dB + notifikasi push ke smartphone",
      "Koneksi Wi-Fi — pantau status gas dari mana saja",
      "Sensor dual-element untuk akurasi tinggi, false alarm rendah",
      "Backup baterai 24 jam saat listrik padam",
      "Instalasi mudah — plug & play dengan panduan video",
      "Kompatibel dengan ekosistem Unova dan smart home lain",
    ],
    specs: {
      "Gas yang Dideteksi": "LPG, Gas Alam (Metana), CO",
      "Sensitivitas": "100–10.000 ppm (adjustable)",
      "Waktu Respons": "< 10 detik sejak deteksi",
      "Alarm Suara": "85 dB @ 1 meter",
      "Konektivitas": "Wi-Fi 2.4GHz (IEEE 802.11 b/g/n)",
      "Tegangan Input": "220V AC / Backup 3.7V Li-ion",
      "Backup Baterai": "Hingga 24 jam",
      "Dimensi Sensor": "Ø 110mm × 38mm",
      "Dimensi Valve": "1/2 inch BSP, DN15",
      "Suhu Operasi": "0°C hingga +50°C",
      "Sertifikasi": "SNI, CE, RoHS",
      "Garansi": "2 tahun",
    },
    useCases: [
      { icon: "🏠", title: "Dapur Rumah Tangga", desc: "Proteksi kompor gas dari kebocoran regulator, selang, maupun fitting yang longgar." },
      { icon: "🏢", title: "Restoran & Café", desc: "Keamanan operasional dapur komersial 24/7 dengan monitoring jarak jauh via dashboard." },
      { icon: "🏨", title: "Hotel & Kost", desc: "Lindungi puluhan unit sekaligus dengan sistem alert terpusat ke manajemen." },
    ],
    compatibleWith: ["Unova App", "Google Home", "Amazon Alexa", "Home Assistant", "MQTT"],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products[slug];
  if (!product) return { title: "Produk tidak ditemukan" };
  return {
    title: product.name,
    description: product.description.slice(0, 160),
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products[slug];
  if (!product) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 bg-white border-b border-[#6F96D1]/15">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/products" className="inline-flex items-center gap-2 text-brand-navy/40 text-sm hover:text-brand-navy transition-colors mb-8">
            <ArrowLeft size={16} />Kembali ke Produk
          </Link>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${product.badgeColor}`}>{product.badge}</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(111,150,209,0.12)", color: "#6F96D1" }}>{product.focus}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy">{product.name}</h1>
              <p className="mt-2 text-lg font-medium" style={{ color: "#6F96D1" }}>{product.tagline}</p>
              <p className="mt-5 text-brand-navy/60 leading-relaxed">{product.description}</p>
              <div className="mt-6 inline-block">
                <div className="text-brand-navy/40 text-sm">Harga mulai dari</div>
                <div className="text-3xl font-display font-bold text-brand-navy">{product.price}</div>
              </div>
              <div className="mt-6 flex gap-3 flex-wrap">
                <Link href="/contact-us" className="group inline-flex items-center gap-2 px-7 py-3 rounded-xl text-white font-semibold transition-all" style={{ background: "#6F96D1" }}>
                  Pesan Sekarang<ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-[#6F96D1]/30 text-brand-navy font-semibold hover:bg-[#EDF0F5] transition-all">
                  <Download size={17} />Unduh Datasheet
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative p-12 rounded-3xl border border-[#6F96D1]/15" style={{ background: "#EDF0F5" }}>
                <Image src={product.image} alt={product.name} width={380} height={380} className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights + Specs */}
      <section className="section-padding bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">Fitur Utama</span>
              <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">Perlindungan Berlapis,<br />Respons Kilat</h2>
              <ul className="mt-8 space-y-4">
                {product.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-brand-blue mt-0.5 shrink-0" />
                    <span className="text-brand-navy/70 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-brand-blue/10 overflow-hidden">
              <div className="px-6 py-4 bg-brand-navy">
                <h3 className="text-white font-display font-semibold">Spesifikasi Teknis</h3>
              </div>
              <div className="divide-y divide-brand-blue/10">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="px-6 py-3.5 flex justify-between gap-4">
                    <span className="text-brand-navy/50 text-sm">{key}</span>
                    <span className="text-brand-navy font-medium text-sm text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">Cara Kerja</span>
            <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">Proteksi dalam 3 Langkah</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", icon: ShieldAlert, title: "Deteksi", desc: "Sensor dual-element mendeteksi konsentrasi gas berbahaya dalam hitungan detik, jauh sebelum tercium bau." },
              { step: "02", icon: Bell, title: "Alarm & Notifikasi", desc: "Alarm 85dB langsung berbunyi. Notifikasi push dikirim ke smartphone Anda dan keluarga secara bersamaan." },
              { step: "03", icon: Zap, title: "Valve Otomatis", desc: "Valve elektromagnetik menutup aliran gas secara otomatis. Sumber kebocoran diisolasi sebelum memicu bahaya." },
            ].map((s) => (
              <div key={s.step} className="relative p-8 rounded-2xl bg-brand-light border border-brand-blue/10 hover:border-brand-blue/30 hover:shadow-lg transition-all">
                <div className="text-7xl font-display font-bold text-brand-blue/10 absolute top-4 right-6 select-none">{s.step}</div>
                <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center mb-4">
                  <s.icon size={22} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-brand-navy text-xl mb-2">{s.title}</h3>
                <p className="text-brand-navy/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">Kasus Penggunaan</span>
            <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">Cocok untuk Berbagai Lingkungan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {product.useCases.map((uc) => (
              <div key={uc.title} className="p-8 rounded-2xl bg-white border border-brand-blue/10 hover:border-brand-blue/30 hover:shadow-lg transition-all">
                <span className="text-4xl">{uc.icon}</span>
                <h3 className="mt-4 font-display font-bold text-brand-navy text-xl">{uc.title}</h3>
                <p className="mt-2 text-brand-navy/60 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible */}
      <section className="py-16 bg-white border-t border-brand-blue/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brand-navy/40 text-sm font-semibold tracking-widest uppercase mb-8">Kompatibel dengan</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {product.compatibleWith.map((name) => (
              <span key={name} className="px-6 py-3 rounded-xl bg-brand-light border border-brand-blue/15 text-brand-navy/60 font-semibold text-sm hover:text-brand-navy transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
