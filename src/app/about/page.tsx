import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Users, Lightbulb, Globe } from "lucide-react";
import type { Metadata } from "next";
import { getTeam, getReportsTo } from "@/lib/team";
import type { TeamMember } from "@/lib/team";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali Unova lebih dekat — misi, visi, nilai, dan tim di balik home technology terpercaya Indonesia.",
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
  { date: "Januari 2026", event: "Unova didirikan di Jakarta dengan tim 11 orang" },
  { date: "Februari 2026", event: "Lolos Program Inkubasi Bandung Techno Park" },
];

// Department label & color config
const deptConfig: Record<string, { label: string; bg: string; text: string; border: string }> = {
  "C-Level": {
    label: "C-Level",
    bg: "rgba(9,31,88,0.06)",
    text: "#091F58",
    border: "rgba(9,31,88,0.12)",
  },
  Engineering: {
    label: "Engineering",
    bg: "rgba(111,150,209,0.08)",
    text: "#6F96D1",
    border: "rgba(111,150,209,0.2)",
  },
  Operations: {
    label: "Operations",
    bg: "rgba(16,185,129,0.06)",
    text: "#059669",
    border: "rgba(16,185,129,0.15)",
  },
};

function MemberCard({ member, size = "md" }: { member: TeamMember; size?: "lg" | "md" | "sm" }) {
  const dept = deptConfig[member.department] ?? deptConfig["C-Level"];
  const avatarSize = size === "lg" ? "w-20 h-20 text-4xl" : size === "md" ? "w-16 h-16 text-3xl" : "w-12 h-12 text-2xl";

  return (
    <div
      className="rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{
        background: "white",
        border: `1px solid ${dept.border}`,
        boxShadow: "0 2px 12px rgba(111,150,209,0.07)",
      }}
    >
      {/* Avatar */}
      <div
        className={`${avatarSize} rounded-2xl flex items-center justify-center mb-3 shrink-0`}
        style={{ background: dept.bg }}
      >
        {member.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full rounded-2xl object-cover"
          />
        ) : (
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="w-1/2 h-1/2 opacity-40"
          >
            <circle cx="20" cy="14" r="7" fill="currentColor" style={{ color: dept.text }} />
            <path d="M6 34c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ color: dept.text }} />
          </svg>
        )}
      </div>

      {/* Dept badge */}
      <span
        className="px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2"
        style={{ background: dept.bg, color: dept.text }}
      >
        {dept.label}
      </span>

      {/* Name & role */}
      <h3 className={`font-display font-bold text-brand-navy ${size === "lg" ? "text-xl" : "text-base"}`}>
        {member.name}
      </h3>
      <p className="text-xs font-medium mt-0.5" style={{ color: "#6F96D1" }}>
        {member.role}
      </p>

      {/* Bio */}
      {size !== "sm" && (
        <p className="mt-3 text-brand-navy/55 text-xs leading-relaxed">
          {member.bio}
        </p>
      )}
    </div>
  );
}

export default function AboutPage() {
  const allMembers = getTeam();
  const cLevel = allMembers.filter((m) => m.department === "C-Level");
  const cto = cLevel.find((m) => m.role.includes("CTO"));
  const coo = cLevel.find((m) => m.role.includes("COO") || m.role.includes("Operation"));
  const engineeringTeam = cto ? getReportsTo(cto.id) : [];
  const operationsTeam = coo ? getReportsTo(coo.id) : [];

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
                  Pada 2022, para pendiri Unova bertanya: mengapa insiden kebakaran akibat
                  kebocoran gas masih terus terjadi di rumah-rumah Indonesia, padahal
                  teknologi pencegahannya sudah ada?
                </p>
                <p>
                  Dari pertanyaan itu lahirlah Unova - startup home technology yang fokus
                  pada dua hal yang paling fundamental:{" "}
                  <strong className="text-brand-navy">keamanan</strong> dan{" "}
                  <strong className="text-brand-navy">kesehatan</strong> di lingkungan rumah.
                </p>
                <p>
                  Hari ini, Unova telah melayani ratusan rumah dan fasilitas komersial
                  di seluruh Indonesia.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="p-7 rounded-2xl bg-white border border-[#6F96D1]/15 hover:border-[#6F96D1]/35 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(111,150,209,0.1)" }}>
                    <Target size={20} style={{ color: "#6F96D1" }} />
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-lg">Misi</h3>
                </div>
                <p className="text-brand-navy/60 leading-relaxed">
                  Menghadirkan produk home technology yang melindungi keamanan dan
                  meningkatkan kesehatan keluarga Indonesia — terjangkau, andal, dan
                  mudah digunakan oleh siapa saja.
                </p>
              </div>
              <div className="p-7 rounded-2xl bg-white border border-[#6F96D1]/15 hover:border-[#6F96D1]/35 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(111,150,209,0.1)" }}>
                    <Eye size={20} style={{ color: "#6F96D1" }} />
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-lg">Visi</h3>
                </div>
                <p className="text-brand-navy/60 leading-relaxed">
                  Menjadi merek home technology terpercaya di Asia Tenggara yang dipercaya
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
              <div key={v.title} className="p-7 rounded-2xl border border-[#6F96D1]/15 bg-[#EDF0F5] hover:border-[#6F96D1]/35 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white shadow-sm">
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
            <div className="absolute left-[11px] top-2 bottom-2 w-0.5" style={{ background: "rgba(111,150,209,0.3)" }} />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-6 pl-10 relative">
                  <div className="absolute left-0 top-1 w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center" style={{ borderColor: "#6F96D1" }}>
                    <span className="w-2 h-2 rounded-full" style={{ background: "#6F96D1" }} />
                  </div>
                  <div className="flex-1 pb-2">
                    <span className="text-sm font-bold block" style={{ color: "#6F96D1" }}>{m.date}</span>
                    <p className="mt-1 text-brand-navy/65">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#6F96D1" }}>
              Tim Kami
            </span>
            <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">
              Orang-orang di Balik Unova
            </h2>
            <p className="mt-3 text-brand-navy/45 text-sm">
              Data tim dikelola via{" "}
              <code className="font-mono bg-[#EDF0F5] px-1.5 py-0.5 rounded text-brand-navy/60">
                package.json → unova.team
              </code>
            </p>
          </div>

          {/* C-Level — 3 kolom centered */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1" style={{ background: "rgba(9,31,88,0.08)" }} />
              <span className="text-xs font-bold tracking-widest uppercase px-3" style={{ color: "#091F58" }}>
                C-Level Leadership
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(9,31,88,0.08)" }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
              {cLevel.map((m) => (
                <MemberCard key={m.id} member={m} size="lg" />
              ))}
            </div>
          </div>

          {/* Engineering — under CTO */}
          {engineeringTeam.length > 0 && (
            <div className="mb-12">
              {/* Connector line from CTO */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-px h-8" style={{ background: "rgba(111,150,209,0.3)" }} />
                <div className="flex items-center gap-3 w-full">
                  <div className="h-px flex-1" style={{ background: "rgba(111,150,209,0.2)" }} />
                  <span className="text-xs font-bold tracking-widest uppercase px-3" style={{ color: "#6F96D1" }}>
                    Engineering — under CTO
                  </span>
                  <div className="h-px flex-1" style={{ background: "rgba(111,150,209,0.2)" }} />
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {engineeringTeam.map((m) => (
                  <MemberCard key={m.id} member={m} size="md" />
                ))}
              </div>
            </div>
          )}

          {/* Operations — under COO */}
          {operationsTeam.length > 0 && (
            <div>
              <div className="flex flex-col items-center mb-6">
                <div className="w-px h-8" style={{ background: "rgba(16,185,129,0.3)" }} />
                <div className="flex items-center gap-3 w-full">
                  <div className="h-px flex-1" style={{ background: "rgba(16,185,129,0.2)" }} />
                  <span className="text-xs font-bold tracking-widest uppercase px-3" style={{ color: "#059669" }}>
                    Operations — under COO
                  </span>
                  <div className="h-px flex-1" style={{ background: "rgba(16,185,129,0.2)" }} />
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {operationsTeam.map((m) => (
                  <MemberCard key={m.id} member={m} size="md" />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-[#6F96D1]/15 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-brand-navy">Bergabunglah dalam Misi Kami</h2>
          <p className="mt-4 text-brand-navy/55">
            Apakah Anda klien, mitra, atau calon anggota tim — kami selalu terbuka untuk percakapan yang bermakna.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold transition-colors" style={{ background: "#091F58" }}>
              Hubungi Kami <ArrowRight size={18} />
            </Link>
            <Link href="/partnership" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold transition-colors border border-[#6F96D1]/30 text-brand-navy hover:bg-[#EDF0F5]">
              Jadi Mitra
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
