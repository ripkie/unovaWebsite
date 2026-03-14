import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Package, Wifi, Shield, Zap, Download } from "lucide-react";
import { notFound } from "next/navigation";

const products: Record<string, ProductData> = {
  "smart-sensor-hub": {
    id: "smart-sensor-hub",
    name: "Smart Sensor Hub",
    tagline: "Pusat kendali ekosistem IoT Anda",
    badge: "Tersedia Sekarang",
    price: "Rp 2.500.000",
    image: "/images/product-sensor.png",
    description: `Smart Sensor Hub adalah perangkat IoT multi-protokol dari Unova yang dirancang untuk menjadi otak dari setiap instalasi smart building. 
    Dengan kemampuan menghubungkan berbagai protokol industri seperti KNX, MQTT, dan Matter, perangkat ini memudahkan integrator sistem untuk menyatukan berbagai merek dan teknologi dalam satu ekosistem yang harmonis.`,
    highlights: [
      "Kompatibel dengan KNX, MQTT, Zigbee, dan Matter",
      "Jangkauan sinyal RF hingga 100 meter",
      "Perlindungan IP67 — tahan debu dan air",
      "Konsumsi daya ultra-rendah < 0.5W standby",
      "Enkripsi AES-256 untuk komunikasi aman",
      "OTA update — selalu perbarui firmware tanpa downtime",
    ],
    specs: {
      "Protokol Komunikasi": "KNX, MQTT, Zigbee 3.0, Matter, Wi-Fi 6",
      "Jangkauan Sinyal": "Hingga 100m (line-of-sight)",
      "Tegangan Input": "12–30V DC / PoE 802.3af",
      "Konsumsi Daya": "< 0.5W (standby) / 2W (aktif)",
      "Perlindungan": "IP67 (tahan debu & air)",
      "Dimensi": "Ø 85mm × 45mm",
      "Suhu Operasi": "-20°C hingga +60°C",
      "Sertifikasi": "CE, FCC, SRRC",
      "Garansi": "2 tahun",
    },
    useCases: [
      {
        icon: "🏠",
        title: "Smart Home Premium",
        desc: "Integrasikan pencahayaan, tirai, AC, dan keamanan dalam satu antarmuka.",
      },
      {
        icon: "🏢",
        title: "Bangunan Komersial",
        desc: "Skalakan ke ratusan titik sensor untuk gedung perkantoran dan hotel.",
      },
      {
        icon: "🏭",
        title: "Fasilitas Industri",
        desc: "Monitoring kondisi lingkungan dan otomasi proses untuk efisiensi produksi.",
      },
    ],
    compatibleWith: ["1Home", "KNX", "Loxone", "Home Assistant", "CRESTRON"],
  },
};

interface ProductData {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  price: string;
  image: string;
  description: string;
  highlights: string[];
  specs: Record<string, string>;
  useCases: { icon: string; title: string; desc: string }[];
  compatibleWith: string[];
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products[slug];
  if (!product) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-brand-navy overflow-hidden noise">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Kembali ke Produk
          </Link>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold mb-4">
                {product.badge}
              </span>
              <h1 className="text-5xl font-display font-bold text-white">{product.name}</h1>
              <p className="mt-2 text-brand-blue text-xl font-medium">{product.tagline}</p>
              <p className="mt-6 text-white/60 leading-relaxed text-lg">{product.description}</p>
              <div className="mt-8 flex items-center gap-4">
                <div>
                  <div className="text-white/40 text-sm">Harga mulai dari</div>
                  <div className="text-3xl font-display font-bold text-white">{product.price}</div>
                </div>
              </div>
              <div className="mt-8 flex gap-4 flex-wrap">
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-blue text-white font-semibold hover:bg-white hover:text-brand-navy transition-all"
                >
                  Pesan Sekarang
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
                >
                  <Download size={18} />
                  Unduh Datasheet
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
                Fitur Utama
              </span>
              <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">
                Dibangun untuk Performa Terbaik
              </h2>
              <ul className="mt-8 space-y-4">
                {product.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-brand-blue mt-0.5 shrink-0" />
                    <span className="text-brand-navy/70 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs Table */}
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

      {/* Use Cases */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
              Kasus Penggunaan
            </span>
            <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">
              Solusi untuk Setiap Skala
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {product.useCases.map((uc) => (
              <div
                key={uc.title}
                className="p-8 rounded-2xl bg-brand-light border border-brand-blue/10 hover:border-brand-blue/30 hover:shadow-lg transition-all"
              >
                <span className="text-4xl">{uc.icon}</span>
                <h3 className="mt-4 font-display font-bold text-brand-navy text-xl">{uc.title}</h3>
                <p className="mt-2 text-brand-navy/60 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible With */}
      <section className="py-16 bg-brand-light border-t border-brand-blue/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brand-navy/40 text-sm font-semibold tracking-widest uppercase mb-8">
            Kompatibel dengan Platform Terkemuka
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {product.compatibleWith.map((name) => (
              <span
                key={name}
                className="px-6 py-3 rounded-xl bg-white border border-brand-blue/15 text-brand-navy/60 font-semibold text-sm hover:text-brand-navy transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
