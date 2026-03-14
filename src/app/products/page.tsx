import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wifi, Zap, Shield, Package } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Jelajahi lini produk IoT Unova — dari Smart Sensor Hub hingga IoT Gateway. Dirancang untuk kemudahan instalasi dan keandalan jangka panjang.",
};

const products = [
  {
    id: "smart-sensor-hub",
    name: "Smart Sensor Hub",
    tagline: "Pusat kendali ekosistem IoT Anda",
    description:
      "Perangkat sensor multi-protokol yang menghubungkan seluruh sistem smart home atau bangunan komersial dengan mudah dan andal.",
    image: "/images/product-sensor.png",
    badge: "Tersedia",
    badgeColor: "bg-green-500",
    specs: ["KNX / MQTT / Matter", "IP67 Rated", "100m Range", "Ultra Low Power"],
    price: "Mulai dari Rp 2.500.000",
    isNew: false,
  },
];

const comingSoon = [
  {
    name: "IoT Gateway Pro",
    desc: "Gateway enterprise untuk infrastruktur skala besar",
    icon: Wifi,
  },
  {
    name: "Cloud Dashboard",
    desc: "Analitik dan monitoring real-time berbasis cloud",
    icon: BarChart3Icon,
  },
  {
    name: "Energy Monitor",
    desc: "Pantau dan optimalkan konsumsi energi bangunan Anda",
    icon: Zap,
  },
];

function BarChart3Icon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-40 pb-20 bg-brand-navy overflow-hidden noise">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-brand-blue/15 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
            Produk Kami
          </span>
          <h1 className="mt-4 text-5xl md:text-6xl font-display font-bold text-white">
            Teknologi yang
            <br />
            <span className="text-gradient-reverse">Bekerja untuk Anda</span>
          </h1>
          <p className="mt-6 text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Setiap produk Unova dirancang untuk kemudahan instalasi, keandalan
            jangka panjang, dan integrasi sempurna.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-brand-blue/10 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative bg-brand-light flex items-center justify-center p-16 border-r border-brand-blue/10">
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-xs font-bold ${product.badgeColor}`}
                    >
                      {product.badge}
                    </span>
                    {product.isNew && (
                      <span className="px-3 py-1 rounded-full bg-brand-blue text-white text-xs font-bold">
                        BARU
                      </span>
                    )}
                  </div>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={380}
                    height={380}
                    className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Info */}
                <div className="p-10 lg:p-14 flex flex-col justify-center">
                  <h2 className="text-3xl font-display font-bold text-brand-navy">
                    {product.name}
                  </h2>
                  <p className="mt-1 text-brand-blue font-medium">{product.tagline}</p>
                  <p className="mt-4 text-brand-navy/60 leading-relaxed">{product.description}</p>

                  {/* Specs */}
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {product.specs.map((spec) => (
                      <div
                        key={spec}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-brand-light border border-brand-blue/10"
                      >
                        <Package size={14} className="text-brand-blue shrink-0" />
                        <span className="text-brand-navy/70 text-sm font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mt-8 pt-6 border-t border-brand-blue/10">
                    <div className="text-brand-navy/50 text-sm mb-1">Harga</div>
                    <div className="text-2xl font-display font-bold text-brand-navy">
                      {product.price}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex gap-3 flex-wrap">
                    <Link
                      href={`/products/${product.id}`}
                      className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy text-white font-semibold hover:bg-brand-blue transition-colors"
                    >
                      Detail Produk
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-blue/30 text-brand-navy font-semibold hover:bg-brand-light transition-colors"
                    >
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
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
              Segera Hadir
            </span>
            <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">
              Lini Produk Berikutnya
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {comingSoon.map((p) => (
              <div
                key={p.name}
                className="p-8 rounded-2xl border-2 border-dashed border-brand-blue/20 bg-brand-light/50 text-center hover:border-brand-blue/40 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-navy/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-blue/10 transition-colors">
                  <p.icon size={24} className="text-brand-blue" />
                </div>
                <h3 className="font-display font-bold text-brand-navy text-lg">{p.name}</h3>
                <p className="mt-2 text-brand-navy/50 text-sm">{p.desc}</p>
                <span className="mt-4 inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
