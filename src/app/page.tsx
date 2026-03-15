import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldAlert, Wind, Heart, Bell, ChevronDown, Droplets, Thermometer, Zap, CheckCircle2 } from "lucide-react";
import { getPartners } from "@/lib/partners";
import type { Partner } from "@/lib/partners";

const partners: Partner[] = getPartners();
const allPartners = [...partners, ...partners];

const features = [
  {
    icon: ShieldAlert,
    title: "Deteksi Bahaya Dini",
    desc: "Sensor cerdas mendeteksi kebocoran gas, asap, dan karbon monoksida sebelum menjadi bencana.",
    color: "bg-red-500/10 text-red-500",
  },
  {
    icon: Droplets,
    title: "Udara Sehat Setiap Hari",
    desc: "Monitor dan jaga kualitas udara, kelembapan, dan suhu optimal untuk kesehatan keluarga.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Bell,
    title: "Alert Real-Time",
    desc: "Notifikasi instan ke smartphone Anda kapan pun ada kondisi berbahaya di rumah.",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    icon: Zap,
    title: "Respons Otomatis",
    desc: "Valve otomatis, alarm suara, dan integrasi perangkat merespons tanpa butuh interaksi manual.",
    color: "bg-green-500/10 text-green-500",
  },
];

const stats = [
  { value: "< 10s", label: "Waktu Respons Deteksi" },
  { value: "99.9%", label: "Akurasi Sensor" },
  { value: "24/7", label: "Monitoring Aktif" },
  { value: "2 Thn", label: "Garansi Produk" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#0d2a6e] to-[#1a3a8a]" />
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-28 pb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Home Technology — Keamanan & Kesehatan Rumah
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.05] tracking-tight">
            Smarter Ways,
            <br />
            <span className="text-gradient-reverse">Brighter Days.</span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
            Unova menghadirkan produk home technology yang menjaga keamanan dan
            kesehatan keluarga Anda — otomatis, cerdas, dan selalu siaga.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-brand-blue text-white font-semibold text-lg hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-lg shadow-brand-blue/30">
              Lihat Produk <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Minta Demo Gratis
            </Link>
          </div>

          {/* Promo */}
          <div className="mt-10 inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/5 border border-brand-blue/30 backdrop-blur-sm text-white/80 text-sm">
            <span className="px-2 py-0.5 rounded-md bg-green-500 text-white text-xs font-bold tracking-wide">PROMO</span>
            Konsultasi gratis & survei lokasi untuk instalasi pertama Anda
            <Link href="/contact-us" className="text-brand-blue font-semibold hover:underline">Klaim sekarang →</Link>
          </div>

          {/* ─── Hero App Mockup: Home Safety Dashboard ─── */}
          <div className="mt-20 relative max-w-2xl mx-auto">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d2a6e] to-transparent z-10 pointer-events-none" />
            <div className="glass-dark rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
                <span className="ml-3 text-white/30 text-xs font-mono">Unova Home — Dashboard</span>
              </div>

              {/* Status bar */}
              <div className="px-5 py-3 bg-green-500/10 border-b border-green-500/20 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-semibold">Semua sistem normal · Pantauan aktif</span>
              </div>

              {/* Scene selector */}
              <div className="p-5 grid grid-cols-4 gap-3">
                {[
                  { icon: "🌙", label: "Malam", active: false },
                  { icon: "☀️", label: "Pagi", active: false },
                  { icon: "🍳", label: "Masak", active: true },
                  { icon: "👨‍👩‍👧", label: "Keluarga", active: false },
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col items-center gap-2 p-3 rounded-xl text-xs font-medium transition-all ${item.active ? "bg-gradient-to-br from-brand-blue/60 to-brand-navy/80 text-white border border-brand-blue/50" : "bg-white/5 text-white/40 border border-white/10"}`}>
                    <span className="text-2xl">{item.icon}</span>{item.label}
                  </div>
                ))}
              </div>

              {/* Safety cards */}
              <div className="px-5 pb-2 grid grid-cols-2 gap-3">
                {/* Gas sensor — SAFE */}
                <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/25 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                    <ShieldAlert size={18} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">Sensor Gas</div>
                    <div className="text-green-400 text-xs font-semibold">Aman · 0 ppm</div>
                    <div className="text-white/30 text-xs mt-0.5">Valve: Terbuka</div>
                  </div>
                </div>
                {/* Air quality */}
                <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Wind size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">Kualitas Udara</div>
                    <div className="text-blue-400 text-xs font-semibold">Baik · AQI 32</div>
                    <div className="text-white/30 text-xs mt-0.5">PM2.5: 8 μg/m³</div>
                  </div>
                </div>
                {/* Humidity */}
                <div className="p-4 rounded-2xl bg-brand-blue/10 border border-brand-blue/25 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-blue/20 flex items-center justify-center shrink-0">
                    <Droplets size={18} className="text-brand-blue" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">Kelembapan</div>
                    <div className="text-brand-blue text-xs font-semibold">Optimal · 58%</div>
                    <div className="text-white/30 text-xs mt-0.5">Target: 50–65%</div>
                  </div>
                </div>
                {/* Temperature */}
                <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/25 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0">
                    <Thermometer size={18} className="text-orange-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">Suhu Ruang</div>
                    <div className="text-orange-400 text-xs font-semibold">24°C · Nyaman</div>
                    <div className="text-white/30 text-xs mt-0.5">AC: Aktif</div>
                  </div>
                </div>
              </div>

              {/* Bottom alert bar */}
              <div className="mx-5 mb-5 mt-3 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <Heart size={16} className="text-pink-400 shrink-0" />
                <span className="text-white/50 text-xs">Keluarga Anda terlindungi 24 jam · Terakhir dicek 2 menit lalu</span>
                <div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────────────── */}
      <section className="bg-brand-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-display font-bold text-brand-blue">{s.value}</div>
              <div className="mt-1 text-white/50 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FITUR ────────────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">Mengapa Unova</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-brand-navy">
              Rumah yang Aman
              <br />
              <span className="text-gradient">adalah Hak Setiap Keluarga</span>
            </h2>
            <p className="mt-4 text-brand-navy/60 max-w-xl mx-auto leading-relaxed">
              Produk Unova dirancang untuk memberikan ketenangan pikiran — karena Anda tidak harus selalu ada di rumah untuk menjaga keluarga.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-white border border-brand-blue/10 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/10 transition-all duration-300 group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                  <f.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-brand-navy text-lg mb-2">{f.title}</h3>
                <p className="text-brand-navy/60 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUK HIGHLIGHT ─────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-lg bg-red-500/10 text-red-500 text-xs font-bold mb-4">🛡️ Produk Unggulan</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy leading-tight">
                Gas Leak Prevention
                <br />
                <span className="text-gradient">Proteksi Otomatis 24/7</span>
              </h2>
              <p className="mt-6 text-brand-navy/60 text-lg leading-relaxed">
                Detector kebocoran gas dengan valve otomatis yang langsung menutup aliran gas saat bahaya terdeteksi — melindungi keluarga Anda sebelum Anda sempat bereaksi.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Deteksi LPG, gas alam, dan CO",
                  "Valve otomatis menutup < 10 detik",
                  "Notifikasi real-time ke smartphone",
                  "Backup baterai 24 jam",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-brand-navy/70">
                    <CheckCircle2 size={18} className="text-brand-blue shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <Link href="/products/gas-leak-prevention" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy text-white font-semibold hover:bg-brand-blue transition-colors">
                  Lihat Detail <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-blue/30 text-brand-navy font-semibold hover:bg-brand-light transition-colors">
                  Minta Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative p-10 rounded-3xl bg-brand-light border border-brand-blue/10 flex items-center justify-center">
                <Image src="/images/product-sensor.png" alt="Gas Leak Prevention" width={400} height={400} className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl shadow-lg border border-green-500/30">
                <span className="text-green-600 text-sm font-bold">✅ Tersedia Sekarang</span>
              </div>
              {/* Safety badge */}
              <div className="absolute -bottom-4 -left-4 glass px-4 py-3 rounded-xl shadow-lg border border-brand-blue/20">
                <div className="text-brand-navy text-xs font-semibold">Bersertifikat SNI & CE</div>
                <div className="text-brand-navy/50 text-xs">Standar keamanan internasional</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PARTNER SLIDER ───────────────────────────────────────────── */}
      {allPartners.length > 0 && (
        <section className="py-16 bg-brand-light border-t border-brand-blue/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
            <span className="text-brand-navy/40 text-sm font-semibold tracking-widest uppercase">Dipercaya oleh mitra terkemuka</span>
          </div>
          <div className="relative flex">
            <div className="flex gap-16 animate-marquee whitespace-nowrap">
              {allPartners.map((p, i) => (
                <span key={i} className="text-brand-navy/30 text-xl font-display font-bold tracking-tight hover:text-brand-blue transition-colors cursor-default">
                  {p.name}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
