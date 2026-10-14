import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Check } from "lucide-react";

export default function FeaturedProductSection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-500/10 text-red-500 text-xs font-bold mb-4">
              <Shield size={13} /> Produk Unggulan
            </span>
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
              <Image src="/images/fotoProduct/FP-Gas_Leak.png" alt="Gas Leak Prevention" width={400} height={400} className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl shadow-lg border border-green-500/30">
              <span className="inline-flex items-center gap-1.5 text-green-600 text-sm font-bold">
                <Check size={14} /> Tersedia Sekarang
              </span>
            </div>
            <div className="absolute -bottom-4 -left-4 glass px-4 py-3 rounded-xl shadow-lg border border-brand-blue/20">
              <div className="text-brand-navy text-xs font-semibold">Bersertifikat SNI & CE</div>
              <div className="text-brand-navy/50 text-xs">Standar keamanan internasional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
