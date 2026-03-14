"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Shield, Wifi, BarChart3, ChevronDown } from "lucide-react";

const partners = [
  "Telkom Indonesia",
  "Gojek",
  "Tokopedia",
  "Bukalapak",
  "Traveloka",
  "Grab",
  "OVO",
  "Dana",
];

const features = [
  {
    icon: Zap,
    title: "Instalasi Cepat",
    desc: "Siapkan perangkat dalam hitungan menit, bukan jam. Plug, pair, dan langsung berjalan.",
  },
  {
    icon: Wifi,
    title: "Konektivitas Andal",
    desc: "Multi-protokol: KNX, MQTT, Wi-Fi, Zigbee — semua terintegrasi dalam satu ekosistem.",
  },
  {
    icon: Shield,
    title: "Keamanan Enterprise",
    desc: "Enkripsi end-to-end dan autentikasi berlapis untuk melindungi data dan privasi Anda.",
  },
  {
    icon: BarChart3,
    title: "Analitik Real-Time",
    desc: "Dashboard visual yang memberikan insight langsung dari semua perangkat terhubung.",
  },
];

const stats = [
  { value: "500+", label: "Instalasi Aktif" },
  { value: "99.9%", label: "Uptime Platform" },
  { value: "50+", label: "Mitra Teknologi" },
  { value: "24/7", label: "Dukungan Teknis" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#0d2a6e] to-[#1a3a8a]" />
        <div className="absolute inset-0 grid-bg opacity-60" />
        {/* Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-28 pb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            Selamat datang di era konektivitas cerdas
          </div>

          {/* Tagline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.05] tracking-tight">
            Smarter Ways,
            <br />
            <span className="text-gradient-reverse">Brighter Days.</span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
            Unova menghadirkan ekosistem IoT yang menghubungkan perangkat,
            data, dan manusia — untuk kehidupan yang lebih efisien dan bermakna.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-brand-blue text-white font-semibold text-lg hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-lg shadow-brand-blue/30"
            >
              Jelajahi Produk
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>

          {/* Promo Banner */}
          <div className="mt-16 inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/5 border border-brand-blue/30 backdrop-blur-sm text-white/80 text-sm">
            <span className="px-2 py-0.5 rounded-md bg-brand-blue text-white text-xs font-bold tracking-wide">
              PROMO
            </span>
            Dapatkan konsultasi gratis untuk proyek smart building pertama Anda
            <Link href="/contact-us" className="text-brand-blue font-semibold hover:underline">
              Klaim sekarang →
            </Link>
          </div>

          {/* Device Mockup */}
          <div className="mt-20 relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent z-10 pointer-events-none bottom-0 top-1/2" />
            <div className="glass-dark rounded-3xl p-6 border border-white/10 shadow-2xl">
              {/* Fake UI inside mockup */}
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { icon: "🌙", label: "Malam", active: false },
                  { icon: "☀️", label: "Siang", active: false },
                  { icon: "🍽️", label: "Makan", active: true },
                  { icon: "👥", label: "Tamu", active: false },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl text-xs font-medium transition-all ${
                      item.active
                        ? "bg-gradient-to-br from-brand-blue/60 to-brand-navy/80 text-white border border-brand-blue/50"
                        : "bg-white/5 text-white/40 border border-white/10"
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
              <div className="mt-3 p-4 rounded-xl bg-gradient-to-r from-brand-blue/30 to-brand-navy/50 border border-brand-blue/30 flex items-center gap-3">
                <span className="text-xl">💡</span>
                <div>
                  <div className="text-white text-sm font-semibold">Ruang Utama</div>
                  <div className="text-white/50 text-xs">Aktif · 3 lampu · 75%</div>
                </div>
                <div className="ml-auto w-10 h-5 rounded-full bg-brand-blue flex items-center justify-end pr-0.5">
                  <div className="w-4 h-4 rounded-full bg-white" />
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <span className="text-lg">🎵</span>
                  <div className="min-w-0">
                    <div className="text-white text-xs font-medium truncate">Bohemian Rhapsody</div>
                    <div className="text-white/40 text-xs">Queen</div>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <span className="text-lg">🌡️</span>
                  <div>
                    <div className="text-white text-xs font-medium">22°C</div>
                    <div className="text-white/40 text-xs">AC Aktif</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
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

      {/* ─── FITUR UNGGULAN ───────────────────────────────────────────── */}
      <section className="section-padding bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
              Kenapa Unova
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-brand-navy">
              Dirancang untuk Kemudahan,
              <br />
              <span className="text-gradient">Dibangun untuk Kekuatan</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl bg-white border border-brand-blue/10 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center mb-4 group-hover:bg-brand-blue/10 transition-colors">
                  <f.icon size={24} className="text-brand-blue" />
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
              <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
                Produk Unggulan
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-brand-navy leading-tight">
                Smart Sensor Hub
                <br />
                <span className="text-gradient">Generasi Terbaru</span>
              </h2>
              <p className="mt-6 text-brand-navy/60 text-lg leading-relaxed">
                Sensor cerdas multi-protokol yang menghubungkan seluruh ekosistem perangkat
                IoT Anda. Instalasi mudah, performa andal, dan kompatibel dengan semua
                platform smart home terkemuka.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Kompatibel dengan KNX, MQTT, dan Matter",
                  "Jangkauan sinyal hingga 100m",
                  "Konsumsi daya ultra-rendah",
                  "IP67 – tahan debu dan air",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-brand-navy/70">
                    <span className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-brand-blue" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy text-white font-semibold hover:bg-brand-blue transition-colors"
                >
                  Lihat Detail
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-blue/30 text-brand-navy font-semibold hover:bg-brand-light transition-colors"
                >
                  Minta Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-navy/10 rounded-3xl" />
              <div className="relative p-10 rounded-3xl bg-brand-light border border-brand-blue/10 flex items-center justify-center">
                <Image
                  src="/images/product-sensor.png"
                  alt="Smart Sensor Hub"
                  width={400}
                  height={400}
                  className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Badge */}
              <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl shadow-lg border border-brand-blue/20">
                <span className="text-brand-navy text-sm font-bold">🆕 Tersedia Sekarang</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PARTNERSHIP SLIDER ───────────────────────────────────────── */}
      <section className="py-16 bg-brand-light border-t border-brand-blue/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <span className="text-brand-navy/40 text-sm font-semibold tracking-widest uppercase">
            Dipercaya oleh mitra terkemuka
          </span>
        </div>
        <div className="relative flex">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <span
                key={i}
                className="text-brand-navy/30 text-xl font-display font-bold tracking-tight hover:text-brand-blue transition-colors cursor-default"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
