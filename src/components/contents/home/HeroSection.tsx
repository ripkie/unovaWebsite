import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldAlert, Wind, Heart, ChevronDown, Droplets, Thermometer, Moon, Sun, UtensilsCrossed, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#FFFFFF]" />
      {/* Grid */}
      {/* Orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(163,28,29,0.18) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(163,28,29,0.12) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24 pb-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#A31C1D]/30 text-brand-navy/70 text-sm font-medium mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Selamat Datang di Creativity Corner
        </div>

        {/* Headline — ukuran dari kode asli */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight text-brand-navy">
          Belajar STEM,
          <br />
          <span style={{ color: "#A31C1D" }}>Bermain Bersama.</span>
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-brand-navy/60 max-w-2xl mx-auto leading-relaxed font-light">
          Creativity Corner mengembangkan mainan STEM dan robot edukasi Beeboy untuk
          belajar coding tanpa layar lewat permainan, cerita, dan board mat.
          Berawal dari Beeboy Korea, dikembangkan untuk Indonesia.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg text-white transition-all duration-300 shadow-lg"
            style={{ background: "#A31C1D", boxShadow: "0 8px 32px rgba(163,28,29,0.35)" }}
          >
            Lihat Produk <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Promo strip */}
        <div className="mt-10 inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-white border border-[#A31C1D]/20 shadow-sm text-brand-navy/70 text-sm">
          <span className="px-2 py-0.5 rounded-md bg-green-500 text-white text-xs font-bold tracking-wide">PROMO</span>
          Konsultasi gratis & survei lokasi untuk instalasi pertama Anda
          <Link href="/contact-us" style={{ color: "#A31C1D" }} className="font-semibold hover:underline">
            Klaim sekarang →
          </Link>
        </div>

        {/* Dashboard + Produk — layout 1home.io style: produk terpotong di tepi */}
        <div className="mt-10 relative">

          <div className="flex items-end justify-center gap-4">

            {/* Produk kiri */}
            <div className="hidden lg:block shrink-0 -translate-x-4 z-10" style={{ width: 360 }}>
              <Image
                src="/images/fotoProduct/FP-Gas_Leak.png"
                alt="Gas Leak Prevention"
                width={360}
                height={360}
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="text-center mt-3">
                <div className="inline-block px-4 py-2 rounded-xl font-extrabold text-base" style={{ color: "#A31C1D" }}>
                  Gas Leak Prevention
                </div>
              </div>
            </div>

            {/* Dashboard tengah */}
            <div className="flex-1 max-w-2xl rounded-3xl border border-[#A31C1D]/20 shadow-2xl overflow-hidden bg-white z-10"
              style={{ boxShadow: "0 32px 80px rgba(163,28,29,0.18)" }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-[#A31C1D]/10 bg-[#FFFFFF]/60">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
                <span className="ml-3 text-brand-navy/30 text-xs font-mono">Creativity Corner Home — Dashboard</span>
              </div>
              {/* Status bar */}
              <div className="px-5 py-2.5 bg-green-50 border-b border-green-200/60 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-700 text-xs font-semibold">Semua sistem normal · Pantauan aktif</span>
              </div>
              {/* Scene selector */}
              <div className="p-5 grid grid-cols-4 gap-3 bg-[#FFFFFF]/40">
                {[
                  { icon: Moon, label: "Malam", active: false },
                  { icon: Sun, label: "Pagi", active: false },
                  { icon: UtensilsCrossed, label: "Masak", active: true },
                  { icon: Users, label: "Keluarga", active: false },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-xl text-xs font-medium transition-all"
                    style={item.active ? {
                      background: "linear-gradient(135deg, #A31C1D, #6D0909)",
                      color: "white",
                      border: "1px solid rgba(163,28,29,0.4)",
                    } : {
                      background: "white",
                      color: "rgba(41,41,41,0.45)",
                      border: "1px solid rgba(163,28,29,0.15)",
                    }}
                  >
                    <item.icon size={20} />
                    {item.label}
                  </div>
                ))}
              </div>
              {/* Safety cards */}
              <div className="px-5 pb-2 grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-green-50 border border-green-200/60 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                    <ShieldAlert size={18} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-brand-navy text-sm font-bold">Sensor Gas</div>
                    <div className="text-green-600 text-xs font-semibold">Aman · 0 ppm</div>
                    <div className="text-brand-navy/35 text-xs mt-0.5">Valve: Terbuka</div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl border flex items-start gap-3"
                  style={{ background: "rgba(163,28,29,0.06)", borderColor: "rgba(163,28,29,0.2)" }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(163,28,29,0.15)" }}>
                    <Wind size={18} style={{ color: "#A31C1D" }} />
                  </div>
                  <div>
                    <div className="text-brand-navy text-sm font-bold">Kualitas Udara</div>
                    <div className="text-xs font-semibold" style={{ color: "#A31C1D" }}>Baik · AQI 32</div>
                    <div className="text-brand-navy/35 text-xs mt-0.5">PM2.5: 8 μg/m³</div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl border flex items-start gap-3"
                  style={{ background: "rgba(163,28,29,0.06)", borderColor: "rgba(163,28,29,0.2)" }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(163,28,29,0.15)" }}>
                    <Droplets size={18} style={{ color: "#A31C1D" }} />
                  </div>
                  <div>
                    <div className="text-brand-navy text-sm font-bold">Kelembapan</div>
                    <div className="text-xs font-semibold" style={{ color: "#A31C1D" }}>Optimal · 58%</div>
                    <div className="text-brand-navy/35 text-xs mt-0.5">Target: 50–65%</div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200/60 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                    <Thermometer size={18} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="text-brand-navy text-sm font-bold">Suhu Ruang</div>
                    <div className="text-orange-500 text-xs font-semibold">24°C · Nyaman</div>
                    <div className="text-brand-navy/35 text-xs mt-0.5">AC: Aktif</div>
                  </div>
                </div>
              </div>
              {/* Bottom bar */}
              <div className="mx-5 mb-5 mt-3 p-3 rounded-xl border flex items-center gap-3"
                style={{ background: "rgba(163,28,29,0.05)", borderColor: "rgba(163,28,29,0.15)" }}>
                <Heart size={16} className="text-pink-400 shrink-0" />
                <span className="text-brand-navy/45 text-xs">Keluarga Anda terlindungi 24 jam · Terakhir dicek 2 menit lalu</span>
                <div className="ml-auto w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
            </div>

            {/* Produk kanan */}
            <div className="hidden lg:block shrink-0 translate-x-4 z-10" style={{ width: 360 }}>
              <Image
                src="/images/fotoProduct/FP-Gas_Leak.png"
                alt="Valve Regulator"
                width={360}
                height={360}
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="text-center mt-3">
                <div className="inline-block px-4 py-2 rounded-xl font-extrabold text-base" style={{ color: "#A31C1D" }}>
                  Valve Regulator
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-navy/20 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
