"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ShieldAlert, Wind, Package, Droplets, Bell, ShieldCheck, Leaf, Home, ChevronLeft, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

const products = [
  {
    id: "gas-leak-prevention",
    name: "Gas Leak Prevention",
    tagline: "Proteksi otomatis dari kebocoran gas",
    description: "Gas leak detector dengan alarm dan valve otomatis yang menutup regulator saat kebocoran terdeteksi. Memberikan perlindungan cepat untuk mencegah risiko kebakaran dan ledakan pada sistem gas.",
    image: "/images/fotoProduct/FP-Gas_Leak.png",
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
  {
    id: "humidifier-dehumidifier-2in1",
    name: "Humidifier & Dehumidifier 2in1",
    tagline: "Jaga kelembapan udara rumah secara otomatis",
    description: "Satu perangkat dua fungsi — tambah kelembapan saat terlalu kering, kurangi saat terlalu lembap. Dilengkapi sensor PM2.5, mode senyap, dan kontrol penuh via aplikasi.",
    image: "/images/fotoProduct/FP-Humidifier.jpeg",
    badge: "Tidak Tersedia",
    badgeColor: "bg-gray-400",
    focus: "Kesehatan",
    focusColor: "text-green-600 bg-green-500/10",
    specs: ["Auto Humidity Control", "Sensor PM2.5", "Quiet mode <25dB", "App Control"],
    price: "Segera Hadir",
    highlights: [
      { icon: Droplets, text: "Kontrol kelembapan otomatis" },
      { icon: Wind, text: "Filter udara PM2.5" },
      { icon: Bell, text: "Notifikasi & kontrol via app" },
    ],
  },
];

const comingSoon = [
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
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + products.length) % products.length);
  const next = () => setCurrent((c) => (c + 1) % products.length);

  const product = products[current];

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
              { icon: Leaf, label: "Kesehatan", desc: "Kualitas udara optimal", color: "#16a34a" },
              { icon: Home, label: "Rumah Pintar", desc: "Terintegrasi & otomatis", color: "#6F96D1" },
            ].map((tag) => (
              <div key={tag.label} className="flex flex-col items-center text-center gap-2 px-6 py-4 rounded-xl bg-white border border-[#6F96D1]/20 shadow-sm min-w-[140px]">
                <tag.icon size={22} style={{ color: tag.color }} />
                <div className="text-brand-navy text-sm font-semibold leading-tight">{tag.label}</div>
                <div className="text-brand-navy/45 text-xs">{tag.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Products — Swipeable */}
      <section className="py-12 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">Tersedia Sekarang</span>
              <h2 className="mt-2 text-3xl font-display font-bold text-brand-navy">Produk Aktif</h2>
            </div>
            {/* Nav arrows */}
            <div className="flex items-center gap-3">
              {products.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-2.5 h-2.5 rounded-full transition-all"
                  style={{ background: i === current ? "#6F96D1" : "rgba(111,150,209,0.3)" }}
                />
              ))}
              <button onClick={prev} className="w-9 h-9 rounded-xl border border-[#6F96D1]/25 flex items-center justify-center hover:bg-white transition-colors ml-2">
                <ChevronLeft size={18} style={{ color: "#6F96D1" }} />
              </button>
              <button onClick={next} className="w-9 h-9 rounded-xl border border-[#6F96D1]/25 flex items-center justify-center hover:bg-white transition-colors">
                <ChevronRight size={18} style={{ color: "#6F96D1" }} />
              </button>
            </div>
          </div>

          {/* Desktop card */}
          <div className="hidden md:block">
            <div className="rounded-3xl border border-brand-blue/10 overflow-hidden shadow-sm transition-all duration-500" style={{ background: "#EDF0F5" }}>
              <div className="flex gap-2 flex-wrap px-6 pt-5">
                <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${product.badgeColor}`}>{product.badge}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${product.focusColor}`}>{product.focus}</span>
              </div>
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative flex items-center justify-center p-12 border-r border-brand-blue/10" style={{ background: "#EDF0F5" }}>
                  <Image src={product.image} alt={product.name} width={360} height={360} className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-10 lg:p-14 flex flex-col justify-center bg-white">
                  <h2 className="text-3xl font-display font-bold text-brand-navy">{product.name}</h2>
                  <p className="mt-1 text-brand-blue font-medium">{product.tagline}</p>
                  <p className="mt-4 text-brand-navy/60 leading-relaxed text-justify">{product.description}</p>
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
                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.specs.map((spec) => (
                      <span key={spec} className="px-3 py-1.5 rounded-lg bg-brand-light border border-brand-blue/15 text-brand-navy/60 text-xs font-semibold">{spec}</span>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-brand-blue/10">
                    <div className="text-brand-navy/50 text-sm mb-1">Harga</div>
                    <div className="text-2xl font-display font-bold text-brand-navy">{product.price}</div>
                  </div>
                  <div className="mt-6 flex gap-3 flex-wrap">
                    {product.badge === "Tersedia" ? (
                      <>
                        <Link href={`/products/${product.id}`} className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy text-white font-semibold hover:bg-brand-blue transition-colors">
                          Detail Produk<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-blue/30 text-brand-navy font-semibold hover:bg-brand-light transition-colors">
                          Minta Demo
                        </Link>
                      </>
                    ) : (
                      <Link href="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-blue/30 text-brand-navy font-semibold hover:bg-brand-light transition-colors">
                        Daftar Notifikasi
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile — swipeable simple cards */}
          <div className="md:hidden">
            <div
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            >
              {products.map((p) => (
                <div key={p.id} className="snap-center shrink-0 w-[85vw] rounded-2xl border border-brand-blue/10 bg-white shadow-sm overflow-hidden">
                  <div className="bg-[#EDF0F5] flex items-center justify-center p-6" style={{ height: 220 }}>
                    <Image src={p.image} alt={p.name} width={180} height={180} className="object-contain drop-shadow-xl" />
                  </div>
                  <div className="p-5">
                    <div className="flex gap-2 mb-3">
                      <span className={`px-2.5 py-1 rounded-full text-white text-xs font-bold ${p.badgeColor}`}>{p.badge}</span>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${p.focusColor}`}>{p.focus}</span>
                    </div>
                    <h3 className="font-display font-bold text-brand-navy text-lg">{p.name}</h3>
                    <p className="mt-1 text-brand-blue text-sm font-medium">{p.tagline}</p>
                    <p className="mt-3 text-brand-navy/60 text-sm leading-relaxed line-clamp-3">{p.description}</p>
                    <div className="mt-4 pt-3 border-t border-brand-blue/10 flex items-center justify-between">
                      <div>
                        <div className="text-brand-navy/40 text-xs">Harga</div>
                        <div className="text-brand-navy font-bold text-sm">{p.price}</div>
                      </div>
                      {p.badge === "Tersedia" ? (
                        <Link href={`/products/${p.id}`} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-navy text-white text-sm font-semibold">
                          Detail <ArrowRight size={14} />
                        </Link>
                      ) : (
                        <Link href="/contact-us" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-brand-blue/30 text-brand-navy text-sm font-semibold">
                          Notifikasi
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Dot indicators mobile */}
            <div className="flex justify-center gap-2 mt-2">
              {products.map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full" style={{ background: "rgba(111,150,209,0.4)" }} />
              ))}
            </div>
          </div>
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
          <div className="grid md:grid-cols-2 gap-6">
            {comingSoon.map((p) => (
              <div key={p.name} className="p-8 rounded-2xl border-2 border-dashed border-brand-blue/20 bg-brand-light/50 hover:border-brand-blue/40 transition-colors group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-navy/5 flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                    <p.icon size={26} className="text-brand-blue" />
                  </div>
                  <span className="text-xs font-bold text-brand-navy/30 bg-brand-navy/5 px-2 py-1 rounded-lg">{p.eta}</span>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-brand-blue/10 text-brand-blue">{p.focus}</span>
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
