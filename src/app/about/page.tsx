import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Users, Lightbulb, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali Unova lebih dekat - misi, visi, nilai, dan tim di balik home technology terpercaya Indonesia.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Inovasi Berkelanjutan",
    desc: "Kami tidak pernah berhenti berinovasi. Setiap produk adalah hasil riset mendalam dan uji lapangan nyata.",
  },
  {
    icon: Users,
    title: "Berpusat pada Pengguna",
    desc: "Desain yang intuitif bukan kemewahan - ini adalah standar minimum kami untuk setiap solusi.",
  },
  {
    icon: Globe,
    title: "Berdampak Lokal, Berskala Global",
    desc: "Lahir di Indonesia, dirancang untuk bersaing di panggung dunia dengan memahami kebutuhan lokal.",
  },
  {
    icon: Heart,
    title: "Integritas & Kepercayaan",
    desc: "Setiap janji adalah komitmen. Kami membangun hubungan jangka panjang dengan klien dan mitra.",
  },
];

const milestones = [
  { date: "Januari 2026", event: "Unova didirikan di Bandung dengan tim 11 orang" },
  { date: "Februari 2026", event: "Lolos program Inkubasi Bandung Techno Park" },
];

const team = [
  {
    name: "King Dylan",
    role: "CEO & Co-Founder",
    bio: "LOREM IPSUM, ntar isi sendiri bang",
    avatar: "👤",
  },
  {
    name: "-1 CTO",
    role: "CTO & Co-Founder",
    bio: "Arsitek teknis yang membangun platform IoT Unova dari nol dengan fokus pada skalabilitas.",
    avatar: "👤",
  },
  {
    name: "Sir Devan",
    role: "Chief Operation Officer",
    bio: "LOREM IPSUM, infokan mau dikasih quotes apa.",
    avatar: "👤",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-white border-b border-[#6F96D1]/15">
        <div className="max-w-7xl mx-auto px-6">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ background: "#EDF0F5", color: "#6F96D1" }}
          >
            Tentang Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy leading-tight">
            Kami Membangun<br />
            <span style={{ color: "#6F96D1" }}>Rumah yang Lebih Aman</span>
          </h1>
          <p className="mt-4 text-brand-navy/55 text-lg leading-relaxed max-w-2xl">
            Unova adalah startup home technology Indonesia yang fokus menghadirkan
            produk keamanan dan kesehatan rumah - terjangkau, andal, dan berdampak
            nyata bagi setiap keluarga.
          </p>
        </div>
      </section>

      {/* Story + Mission/Vision */}
      <section className="section-padding bg-[#EDF0F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#6F96D1" }}>
                Kisah Kami
              </span>
              <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">
                Dimulai dari Satu Pertanyaan
              </h2>
              <div className="mt-6 space-y-4 text-brand-navy/65 leading-relaxed">
                <p>
                  Pada 2025, para pendiri Unova bertanya: mengapa insiden kebakaran akibat
                  kebocoran gas masih terus terjadi di rumah-rumah Indonesia, padahal
                  teknologi pencegahannya sudah ada? Dan mengapa kualitas udara dalam
                  ruangan - yang langsung berdampak pada kesehatan keluarga — masih
                  diabaikan begitu saja?
                </p>
                <p>
                  Dari pertanyaan itu lahirlah Unova - startup home technology yang fokus
                  pada dua hal yang paling fundamental: <strong className="text-brand-navy">keamanan</strong> dan{" "}
                  <strong className="text-brand-navy">kesehatan</strong> di lingkungan rumah.
                </p>
                <p>
                  Hari ini, Unova telah melayani ratusan rumah dan fasilitas komersial
                  di seluruh Indonesia, dengan produk yang dirancang untuk memberikan
                  ketenangan pikiran setiap hari.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Mission */}
              <div className="p-7 rounded-2xl bg-white border border-[#6F96D1]/15 hover:border-[#6F96D1]/35 hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(111,150,209,0.1)" }}
                  >
                    <Target size={20} style={{ color: "#6F96D1" }} />
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-lg">Misi</h3>
                </div>
                <p className="text-brand-navy/60 leading-relaxed">
                  Menghadirkan produk home technology yang melindungi keamanan dan
                  meningkatkan kesehatan keluarga Indonesia - dengan solusi yang
                  terjangkau, andal, dan mudah digunakan oleh siapa saja.
                </p>
              </div>
              {/* Vision */}
              <div className="p-7 rounded-2xl bg-white border border-[#6F96D1]/15 hover:border-[#6F96D1]/35 hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(111,150,209,0.1)" }}
                  >
                    <Eye size={20} style={{ color: "#6F96D1" }} />
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-lg">Visi</h3>
                </div>
                <p className="text-brand-navy/60 leading-relaxed">
                  Menjadi merek home technology terpercaya di Bandung yang dipercaya
                  jutaan keluarga untuk melindungi rumah mereka setiap hari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#6F96D1" }}>
              Nilai-Nilai Kami
            </span>
            <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">
              Yang Menggerakkan Kami
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-7 rounded-2xl border border-[#6F96D1]/15 bg-[#EDF0F5] hover:border-[#6F96D1]/35 hover:shadow-lg transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white shadow-sm"
                >
                  <v.icon size={22} style={{ color: "#6F96D1" }} />
                </div>
                <h3 className="font-display font-bold text-brand-navy mb-2">{v.title}</h3>
                <p className="text-brand-navy/55 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding" style={{ background: "#EDF0F5" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#6F96D1" }}>
              Perjalanan Kami
            </span>
            <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">
              Milestone Unova
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[11px] top-2 bottom-2 w-0.5"
              style={{ background: "rgba(111,150,209,0.3)" }}
            />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-6 pl-10 relative">
                  <div
                    className="absolute left-0 top-1 w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center"
                    style={{ borderColor: "#6F96D1" }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ background: "#6F96D1" }} />
                  </div>
                  <div className="flex-1 pb-2">
                    <span className="text-sm font-bold block" style={{ color: "#6F96D1" }}>
                      {m.date}
                    </span>
                    <p className="mt-1 text-brand-navy/65">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#6F96D1" }}>
              Tim Kami
            </span>
            <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">
              Orang-orang di Balik Unova
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-8 rounded-2xl bg-[#EDF0F5] border border-[#6F96D1]/15 text-center hover:shadow-lg hover:border-[#6F96D1]/30 transition-all"
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-4xl bg-white"
                >
                  {member.avatar}
                </div>
                <h3 className="font-display font-bold text-brand-navy text-xl">{member.name}</h3>
                <p className="font-medium text-sm mt-1" style={{ color: "#6F96D1" }}>{member.role}</p>
                <p className="mt-3 text-brand-navy/55 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-brand-navy/35 text-sm mt-8">
            * Foto dan profil lengkap akan diperbarui segera.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-[#6F96D1]/15 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-brand-navy">
            Bergabunglah dalam Misi Kami
          </h2>
          <p className="mt-4 text-brand-navy/55">
            Apakah Anda klien, mitra, atau calon anggota tim — kami selalu terbuka
            untuk percakapan yang bermakna.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold transition-colors"
              style={{ background: "#091F58" }}
            >
              Hubungi Kami
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/partnership"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold transition-colors border border-[#6F96D1]/30 text-brand-navy hover:bg-[#EDF0F5]"
            >
              Jadi Mitra
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
