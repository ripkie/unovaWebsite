import Link from "next/link";
import { ArrowRight, Handshake, Globe, Code, Building } from "lucide-react";
import type { Metadata } from "next";
import { getPartners } from "@/lib/partners";
import type { Partner } from "@/lib/partners";

/**
 * Partners dibaca via lib/partners.ts → package.json > unova.partners
 * Untuk menambah mitra: edit package.json atau ganti fungsi getPartners()
 * dengan fetch ke CMS saat siap migrasi.
 */
const partners: Partner[] = getPartners();
const allPartners: Partner[] = [...partners, ...partners];

export const metadata: Metadata = {
  title: "Kemitraan",
  description:
    "Bergabunglah dengan jaringan mitra Unova dan buka peluang bisnis baru di industri IoT yang sedang tumbuh pesat.",
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

function PartnerCard({
  partner,
  muted = false,
}: {
  partner: Partner;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center px-8 py-4 rounded-2xl bg-white border min-w-[180px] h-20 transition-all shrink-0 ${
        muted
          ? "border-brand-blue/5 opacity-50"
          : "border-brand-blue/10 hover:border-brand-blue/30 hover:shadow-md"
      }`}
    >
      {partner.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-8 object-contain"
        />
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
      <section className="relative pt-40 pb-24 bg-brand-navy overflow-hidden noise">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
            Program Kemitraan
          </span>
          <h1 className="mt-4 text-5xl md:text-6xl font-display font-bold text-white">
            Tumbuh Bersama
            <br />
            <span className="text-gradient-reverse">Ekosistem Unova</span>
          </h1>
          <p className="mt-6 text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Bergabunglah dengan jaringan mitra Unova dan buka peluang bisnis
            baru di industri home technology yang sedang tumbuh pesat.
          </p>
          <Link
            href="/contact-us"
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-brand-blue text-white font-semibold text-lg hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-lg shadow-brand-blue/30"
          >
            <Handshake size={22} />
            Daftar sebagai Mitra
          </Link>
        </div>
      </section>

      {/* Partner Logo Slider */}
      <section className="py-16 bg-brand-light overflow-hidden border-b border-brand-blue/10">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <p className="text-brand-navy/40 text-sm font-semibold tracking-widest uppercase">
            Mitra yang telah bergabung
          </p>
          <p className="text-brand-navy/30 text-xs mt-2">
            Tambah/ubah mitra:{" "}
            <code className="font-mono bg-brand-blue/10 px-1.5 py-0.5 rounded text-brand-navy/50">
              unova.partners
            </code>{" "}
            di{" "}
            <code className="font-mono bg-brand-blue/10 px-1.5 py-0.5 rounded text-brand-navy/50">
              package.json
            </code>{" "}
            · Logo: isi field{" "}
            <code className="font-mono bg-brand-blue/10 px-1.5 py-0.5 rounded text-brand-navy/50">
              logo
            </code>{" "}
            dengan path ke{" "}
            <code className="font-mono bg-brand-blue/10 px-1.5 py-0.5 rounded text-brand-navy/50">
              /public/images/partners/
            </code>
          </p>
        </div>

        {/* Row 1 — scroll kanan */}
        <div className="relative flex overflow-hidden mb-4">
          <div className="flex gap-5 animate-marquee whitespace-nowrap">
            {allPartners.map((p, i) => (
              <PartnerCard key={`r1-${i}`} partner={p} />
            ))}
          </div>
        </div>

        {/* Row 2 — scroll kiri */}
        <div className="relative flex overflow-hidden">
          <div className="flex gap-5 whitespace-nowrap animate-marquee-reverse">
            {[...allPartners].reverse().map((p, i) => (
              <PartnerCard key={`r2-${i}`} partner={p} muted />
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
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
                className="p-8 rounded-2xl border border-brand-blue/10 bg-brand-light hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/10 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-navy/5 flex items-center justify-center mb-5 group-hover:bg-brand-blue/15 transition-colors">
                  <type.icon size={26} className="text-brand-blue" />
                </div>
                <h3 className="font-display font-bold text-brand-navy text-xl mb-2">
                  {type.title}
                </h3>
                <p className="text-brand-navy/60 text-sm leading-relaxed mb-6">
                  {type.desc}
                </p>
                <ul className="space-y-2">
                  {type.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-center gap-2 text-sm text-brand-navy/70"
                    >
                      <span className="w-5 h-5 rounded-full bg-brand-blue/15 flex items-center justify-center shrink-0">
                        <span className="w-2 h-2 rounded-full bg-brand-blue" />
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
      <section className="section-padding bg-brand-navy noise overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
                Keunggulan Kemitraan
              </span>
              <h2 className="mt-3 text-4xl font-display font-bold text-white">
                Yang Anda Dapatkan
                <br />
                <span className="text-gradient-reverse">sebagai Mitra Unova</span>
              </h2>
              <p className="mt-5 text-white/60 leading-relaxed">
                Kami percaya pada kemitraan yang saling menguntungkan dan
                berkelanjutan. Setiap mitra mendapatkan dukungan penuh untuk
                sukses bersama.
              </p>
              <Link
                href="/contact-us"
                className="group mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-white hover:text-brand-navy transition-all"
              >
                Mulai Kemitraan
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div
                  key={b}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-brand-blue/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
                  </span>
                  <span className="text-white/70 text-sm leading-snug">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
