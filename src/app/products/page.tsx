import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldAlert, Wind, Package, Droplets, Bell, ShieldCheck, Leaf, Home } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Lini produk home technology Unova — solusi keamanan dan kesehatan untuk rumah Anda. Gas Leak Prevention, Humidifier & Dehumidifier 2-in-1, dan lebih banyak lagi.",
};

const products = [
  {
    id: "gas-leak-prevention",
    name: "Gas Leak Prevention",
    tagline: "Proteksi otomatis dari kebocoran gas",
    description:
      "Gas leak detector dengan alarm dan valve otomatis yang menutup regulator saat kebocoran terdeteksi. Memberikan perlindungan cepat untuk mencegah risiko kebakaran dan ledakan pada sistem gas.",
    image: "/images/product-sensor.png",
    badge: "Tersedia",
    badgeColor: "bg-green-500",
    focus: "Keamanan",
    focusColor: "text-red-400 bg-red-500/10",
    specs: ["Deteksi LPG & Gas Alam", "Valve Otomatis", "Alarm 85dB", "Notifikasi App"],
    price: "Mulai dari Rp 1.800.000",
    highlights: [
      { icon: ShieldAlert, text: "Respon deteksi < 10 detik" },
      { icon: Bell, text: "Alarm suara & push notification" },
      { icon: Package, text: "Valve otomatis menutup regulator" },
    ],
  },
];

const comingSoon = [
  {
    id: "humidifier-dehumidifier-2in1",
    name: "Humidifier & Dehumidifier 2-in-1",
    desc: "Jaga kelembapan udara rumah secara otomatis — tambah saat terlalu kering, kurangi saat terlalu lembap. Dilengkapi sensor PM2.5 dan kontrol via aplikasi.",
    icon: Droplets,
    focus: "Kesehatan",
    eta: "Q3 2025",
    features: ["Auto humidity control", "Sensor PM2.5", "Quiet mode <25dB", "App control"],
  },
  {
    id: "air-quality-monitor",
    name: "Air Quality Monitor",
    desc: "Monitor kualitas udara real-time: CO₂, VOC, PM2.5, suhu, dan kelembapan dalam satu perangkat kompak.",
    icon: Wind,
    focus: "Kesehatan",
    eta: "Q4 2025",
    features: ["CO₂ & VOC sensor", "PM2.5 detector", "Real-time dashboard", "Historical data"],
  },
  {
    id: "smart-smoke-detector",
    name: "Smart Smoke Detector",
    desc: "Detektor asap pintar dengan koneksi ke ekosistem Unova. Alert ke smartphone sebelum asap memenuhi ruangan.",
    icon: ShieldAlert,
    focus: "Keamanan",
    eta: "Q1 2026",
    features: ["Photoelectric sensor", "App alert", "Interconnected", "10yr battery"],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-8 bg-white border-b border-[#6F96D1]/15">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#EDF0F5] text-[#6F96D1] text-xs font-bold tracking-widest uppercase mb-4">
            Produk Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy">
            Aman & Sehat<br />
            <span style={{ color: "#6F96D1" }}>di Rumah Anda</span>
          </h1>
          <p className="mt-4 text-brand-navy/55 text-lg max-w-2xl mx-auto leading-relaxed">
            Unova menghadirkan produk home technology yang berdampak nyata —
            menjaga keamanan dan kesehatan keluarga Anda setiap hari.
          </p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            {[
              { icon: ShieldCheck, label: "Keamanan", desc: "Cegah kebakaran & ledakan", color: "#dc2626" },
              { icon: Leaf,        label: "Kesehatan", desc: "Kualitas udara optimal",   color: "#16a34a" },
              { icon: Home,        label: "Rumah Pintar", desc: "Terintegrasi & otomatis", color: "#6F96D1" },
            ].map((tag) => (
              <div
                key={tag.label}
                className="flex flex-col items-center text-center gap-2 px-6 py-4 rounded-xl bg-white border border-[#6F96D1]/20 shadow-sm min-w-[140px]"
              >
                <tag.icon size={22} style={{ color: tag.color }} />
                <div className="text-brand-navy text-sm font-semibold leading-tight">{tag.label}</div>
                <div className="text-brand-navy/45 text-xs">{tag.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Products */}
      <section className="py-12 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">Tersedia Sekarang</span>
            <h2 className="mt-2 text-3xl font-display font-bold text-brand-navy">Produk Aktif</h2>
          </div>

          {products.map((product) => (
            <div key={product.id} className="rounded-3xl border border-brand-blue/10 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-500" style={{ background: "#EDF0F5" }}>
              {/* Badges — kiri atas card */}
              <div className="flex gap-2 flex-wrap px-6 pt-5">
                <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${product.badgeColor}`}>{product.badge}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${product.focusColor}`}>{product.focus}</span>
              </div>
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative flex items-center justify-center p-12 border-r border-brand-blue/10" style={{ background: "#EDF0F5" }}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-blue/10">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={360}
                      height={360}
                      className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="p-10 lg:p-14 flex flex-col justify-center">
                  <h2 className="text-3xl font-display font-bold text-brand-navy">{product.name}</h2>
                  <p className="mt-1 text-brand-blue font-medium">{product.tagline}</p>
                  <p className="mt-4 text-brand-navy/60 leading-relaxed text-justify">{product.description}</p>

                  {/* Key highlights */}
                  <div className="mt-6 space-y-2">
                    {product.highlights.map((h) => (
                      <div key={h.text} className="flex items-center gap-3 p-3 rounded-xl bg-brand-light">
                        <div className="w-8 h-8 rounded-lg bg-brand-blue/15 flex items-center justify-center shrink-0">
                          <h.icon size={16} className="text-brand-blue" />
                        </div>
                        <span className="text-brand-navy/70 text-sm font-medium">{h.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specs pills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.specs.map((spec) => (
                      <span key={spec} className="px-3 py-1.5 rounded-lg bg-brand-light border border-brand-blue/15 text-brand-navy/60 text-xs font-semibold">
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-brand-blue/10">
                    <div className="text-brand-navy/50 text-sm mb-1">Harga</div>
                    <div className="text-2xl font-display font-bold text-brand-navy">{product.price}</div>
                  </div>

                  <div className="mt-6 flex gap-3 flex-wrap">
                    <Link href={`/products/${product.id}`} className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy text-white font-semibold hover:bg-brand-blue transition-colors">
                      Detail Produk<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-blue/30 text-brand-navy font-semibold hover:bg-brand-light transition-colors">
                      Minta Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">Segera Hadir</span>
            <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">Roadmap Produk</h2>
            <p className="mt-3 text-brand-navy/50 max-w-xl mx-auto">
              Kami terus berinovasi. Berikut produk-produk yang sedang dalam pengembangan.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {comingSoon.map((p) => (
              <div key={p.name} className="p-8 rounded-2xl border-2 border-dashed border-brand-blue/20 bg-brand-light/50 hover:border-brand-blue/40 transition-colors group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-navy/5 flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                    <p.icon size={26} className="text-brand-blue" />
                  </div>
                  <span className="text-xs font-bold text-brand-navy/30 bg-brand-navy/5 px-2 py-1 rounded-lg">{p.eta}</span>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-brand-blue/10 text-brand-blue">
                  {p.focus}
                </span>
                <h3 className="font-display font-bold text-brand-navy text-lg mt-3">{p.name}</h3>
                <p className="mt-2 text-brand-navy/50 text-sm leading-relaxed">{p.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-brand-navy/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/50 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Link href="/contact-us" className="text-brand-blue text-sm font-semibold hover:underline">
                    Daftar notifikasi →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
