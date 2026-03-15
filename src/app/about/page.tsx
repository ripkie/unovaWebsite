import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Users, Lightbulb, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali Unova lebih dekat — misi, visi, nilai, dan tim di balik ekosistem IoT terpercaya Indonesia.",
};

const team = [
  {
    name: "Nama Founder",
    role: "CEO & Co-Founder",
    bio: "Visioner di balik Unova dengan pengalaman lebih dari 10 tahun di industri teknologi dan IoT.",
    avatar: "👤",
  },
  {
    name: "Nama CTO",
    role: "CTO & Co-Founder",
    bio: "Arsitek teknis yang membangun platform IoT Unova dari nol dengan fokus pada skalabilitas.",
    avatar: "👤",
  },
  {
    name: "Nama CMO",
    role: "Chief Marketing Officer",
    bio: "Ahli pemasaran B2B dengan rekam jejak membangun brand teknologi di pasar Asia Tenggara.",
    avatar: "👤",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Inovasi Berkelanjutan",
    desc: "Kami tidak pernah berhenti berinovasi. Setiap produk adalah hasil riset mendalam dan uji lapangan nyata.",
  },
  {
    icon: Users,
    title: "Berpusat pada Pengguna",
    desc: "Desain yang intuitif bukan kemewahan — ini adalah standar minimum kami untuk setiap solusi.",
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
  { date: "Januari 2022", event: "Unova didirikan di Jakarta dengan tim 5 orang" },
  { date: "Agustus 2023", event: "Peluncuran produk pertama — Smart Sensor Hub v1" },
  { date: "November 2023", event: "100 instalasi aktif pertama di Jabodetabek" },
  { date: "Maret 2024", event: "Ekspansi ke Surabaya, Bali, dan Medan" },
  { date: "September 2024", event: "Raih penghargaan Startup IoT Terbaik Indonesia" },
  { date: "Januari 2025", event: "500+ instalasi aktif, 50+ mitra teknologi" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-brand-navy overflow-hidden noise">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
              Tentang Kami
            </span>
            <h1 className="mt-4 text-5xl md:text-6xl font-display font-bold text-white leading-tight">
              Kami Membangun
              <br />
              <span className="text-gradient-reverse">Masa Depan Konektivitas</span>
            </h1>
            <p className="mt-6 text-white/60 text-xl leading-relaxed">
              Unova adalah perusahaan teknologi IoT Indonesia yang berkomitmen menghadirkan
              ekosistem cerdas yang terjangkau, andal, dan berdampak nyata pada kehidupan
              sehari-hari.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
                Kisah Kami
              </span>
              <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">
                Dimulai dari Satu Pertanyaan
              </h2>
              <div className="mt-6 space-y-4 text-brand-navy/70 leading-relaxed">
                <p>
                  Pada 2022, para pendiri Unova bertanya: mengapa insiden kebakaran akibat
                  kebocoran gas masih terus terjadi di rumah-rumah Indonesia, padahal
                  teknologi pencegahannya sudah ada? Dan mengapa kualitas udara dalam
                  ruangan — yang langsung berdampak pada kesehatan keluarga — masih
                  diabaikan begitu saja?
                </p>
                <p>
                  Dari pertanyaan itu lahirlah Unova — startup home technology yang fokus
                  pada dua hal yang paling fundamental: <strong>keamanan</strong> dan
                  <strong> kesehatan</strong> di lingkungan rumah. Kami percaya bahwa
                  teknologi cerdas seharusnya bisa diakses semua orang, bukan hanya mereka
                  yang punya budget premium.
                </p>
                <p>
                  Hari ini, Unova telah melayani ratusan rumah dan fasilitas komersial
                  di seluruh Indonesia. Produk kami, mulai dari Gas Leak Prevention hingga
                  monitor kualitas udara yang akan datang, dirancang untuk memberikan
                  ketenangan pikiran setiap hari — bahkan saat Anda tidak di rumah.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-5">
              <div className="p-7 rounded-2xl bg-white border border-brand-blue/10 hover:border-brand-blue/30 hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                    <Target size={20} className="text-brand-blue" />
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-lg">Misi</h3>
                </div>
                <p className="text-brand-navy/60 leading-relaxed">
                  Menghadirkan produk home technology yang melindungi keamanan dan
                  meningkatkan kesehatan keluarga Indonesia — dengan solusi yang
                  terjangkau, andal, dan mudah digunakan oleh siapa saja.
                </p>
              </div>
              <div className="p-7 rounded-2xl bg-white border border-brand-blue/10 hover:border-brand-blue/30 hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                    <Eye size={20} className="text-brand-blue" />
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-lg">Visi</h3>
                </div>
                <p className="text-brand-navy/60 leading-relaxed">
                  Menjadi pemimpin ekosistem IoT di Asia Tenggara yang dipercaya oleh
                  jutaan pengguna dan ribuan mitra integrator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
              Nilai-Nilai Kami
            </span>
            <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">
              Yang Menggerakkan Kami
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-7 rounded-2xl bg-brand-light border border-brand-blue/10 hover:border-brand-blue/30 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <v.icon size={22} className="text-brand-blue" />
                </div>
                <h3 className="font-display font-bold text-brand-navy mb-2">{v.title}</h3>
                <p className="text-brand-navy/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-brand-navy noise overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
              Perjalanan Kami
            </span>
            <h2 className="mt-3 text-4xl font-display font-bold text-white">
              Milestone Unova
            </h2>
          </div>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-brand-blue/30" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-6 pl-16 relative">
                  <div className="absolute left-3 top-1 w-5 h-5 rounded-full border-2 border-brand-blue bg-brand-navy flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-brand-blue" />
                  </div>
                  <div className="flex-1 pb-2">
                    <span className="text-brand-blue text-sm font-bold block">{m.date}</span>
                    <p className="mt-1 text-white/70">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
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
                className="p-8 rounded-2xl bg-white border border-brand-blue/10 text-center hover:shadow-lg hover:border-brand-blue/30 transition-all"
              >
                <div className="w-20 h-20 rounded-2xl bg-brand-light flex items-center justify-center mx-auto mb-4 text-4xl">
                  {member.avatar}
                </div>
                <h3 className="font-display font-bold text-brand-navy text-xl">{member.name}</h3>
                <p className="text-brand-blue font-medium text-sm mt-1">{member.role}</p>
                <p className="mt-3 text-brand-navy/60 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-brand-navy/40 text-sm mt-8">
            * Data tim akan diperbarui. Foto dan profil lengkap segera hadir.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-brand-blue/10 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-brand-navy">
            Bergabunglah dalam Misi Kami
          </h2>
          <p className="mt-4 text-brand-navy/60">
            Apakah Anda klien, mitra, atau calon anggota tim — kami selalu terbuka
            untuk percakapan yang bermakna.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-navy text-white font-semibold hover:bg-brand-blue transition-colors"
            >
              Hubungi Kami
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/partnership"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-brand-blue/30 text-brand-navy font-semibold hover:bg-brand-light transition-colors"
            >
              Jadi Mitra
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
