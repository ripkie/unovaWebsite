import Link from "next/link";
import { ArrowRight, Handshake, Globe, Code, Building } from "lucide-react";
import type { Metadata } from "next";
import { getPartners } from "@/lib/partners";
import type { Partner } from "@/lib/partners";

const partners: Partner[] = getPartners();

export const metadata: Metadata = {
  title: "Kemitraan",
  description: "Bergabunglah dengan jaringan mitra Unova dan buka peluang bisnis baru di industri home technology.",
};

const partnerTypes = [
  {
    icon: Globe,
    title: "Mitra Distribusi",
    desc: "Jangkau pasar lebih luas dengan jaringan distribusi Unova di seluruh Indonesia.",
    perks: ["Margin kompetitif", "Training produk", "Marketing support", "Prioritas stok"],
  },
  {
    icon: Code,
    title: "Mitra Integrasi",
    desc: "Integrasikan solusi Unova ke dalam proyek smart building klien Anda.",
    perks: ["Akses API penuh", "Technical support 24/7", "Co-marketing", "Demo unit gratis"],
  },
  {
    icon: Building,
    title: "Mitra Teknologi",
    desc: "Kembangkan solusi bersama di atas platform IoT Unova yang terbuka.",
    perks: ["SDK & dokumentasi", "Joint development", "Revenue sharing", "Co-branding"],
  },
];

const benefits = [
  "Produk bersertifikat internasional",
  "Dukungan teknis dedicated",
  "Training dan sertifikasi",
  "Co-marketing & lead sharing",
  "Portal mitra eksklusif",
  "Prioritas pembaruan produk",
];

function PartnerCard({ partner, muted = false }: { partner: Partner; muted?: boolean }) {
  return (
    <div
      className="flex flex-col items-center justify-center px-8 py-4 rounded-2xl bg-white border min-w-[180px] h-20 transition-all shrink-0"
      style={{
        borderColor: muted ? "rgba(111,150,209,0.08)" : "rgba(111,150,209,0.2)",
        opacity: muted ? 0.5 : 1,
      }}
    >
      {partner.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={partner.logo} alt={partner.name} className="h-10 object-contain" />
      ) : (
        <>
          <span className="text-brand-navy/60 font-display font-bold text-sm leading-tight">
            {partner.name}
          </span>
          <span className="text-brand-navy/30 text-xs mt-0.5">{partner.category}</span>
        </>
      )}
    </div>
  );
}

export default function PartnershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-white border-b border-[#6F96D1]/15">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ background: "#EDF0F5", color: "#6F96D1" }}
          >
            Program Kemitraan
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy">
            Tumbuh Bersama<br />
            <span style={{ color: "#6F96D1" }}>Ekosistem Unova</span>
          </h1>
          <p className="mt-4 text-brand-navy/55 text-lg max-w-2xl mx-auto leading-relaxed">
            Bergabunglah dengan jaringan mitra Unova dan buka peluang bisnis
            baru di industri home technology yang sedang tumbuh pesat.
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl text-white font-semibold text-base transition-all duration-300"
            style={{ background: "#6F96D1" }}
          >
            <Handshake size={20} />
            Daftar sebagai Mitra
          </Link>
        </div>
      </section>

      {/* Partner Logo Slider */}
      <section className="py-8 overflow-hidden border-b border-[#6F96D1]/15" style={{ background: "#EDF0F5" }}>
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <p className="text-brand-navy/40 text-xs font-bold tracking-widest uppercase">
            Mitra yang telah bergabung
          </p>
        </div>
        {/* Row 1 — kanan, seamless loop */}
        <div className="relative overflow-hidden mb-4" style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}>
          <style>{`
            @keyframes slide-left  { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            @keyframes slide-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
          `}</style>
          <div className="flex w-max" style={{ animation: "slide-left 20s linear infinite" }}>
            {[...partners, ...partners].map((p, i) => <PartnerCard key={`r1-${i}`} partner={p} />)}
          </div>
        </div>
        {/* Row 2 — kiri (reverse), seamless loop */}
        <div className="relative overflow-hidden" style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}>
          <div className="flex w-max" style={{ animation: "slide-right 25s linear infinite" }}>
            {[...[...partners].reverse(), ...[...partners].reverse()].map((p, i) => <PartnerCard key={`r2-${i}`} partner={p} muted />)}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#6F96D1" }}>
              Pilih Jalur Anda
            </span>
            <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">
              Tipe Program Kemitraan
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {partnerTypes.map((type) => (
              <div
                key={type.title}
                className="p-8 rounded-2xl border border-[#6F96D1]/15 bg-[#EDF0F5] hover:border-[#6F96D1]/35 hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors"
                  style={{ background: "rgba(111,150,209,0.1)" }}
                >
                  <type.icon size={26} style={{ color: "#6F96D1" }} />
                </div>
                <h3 className="font-display font-bold text-brand-navy text-xl mb-2">{type.title}</h3>
                <p className="text-brand-navy/55 text-sm leading-relaxed mb-5">{type.desc}</p>
                <ul className="space-y-2">
                  {type.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-sm text-brand-navy/65">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "rgba(111,150,209,0.15)" }}
                      >
                        <span className="w-2 h-2 rounded-full" style={{ background: "#6F96D1" }} />
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12" style={{ background: "#EDF0F5" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#6F96D1" }}>
                Keunggulan Kemitraan
              </span>
              <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">
                Yang Anda Dapatkan<br />
                <span style={{ color: "#6F96D1" }}>sebagai Mitra Unova</span>
              </h2>
              <p className="mt-5 text-brand-navy/55 leading-relaxed">
                Kami percaya pada kemitraan yang saling menguntungkan dan
                berkelanjutan. Setiap mitra mendapatkan dukungan penuh untuk sukses bersama.
              </p>
              <Link
                href="/contact-us"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all"
                style={{ background: "#6F96D1" }}
              >
                Mulai Kemitraan
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div
                  key={b}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#6F96D1]/15 hover:border-[#6F96D1]/30 transition-colors"
                >
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(111,150,209,0.15)" }}
                  >
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#6F96D1" }} />
                  </span>
                  <span className="text-brand-navy/65 text-sm leading-snug">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
