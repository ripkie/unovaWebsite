import MemberCard from "@/components/contents/about/MemberCard";

import type { AboutSectionProps } from "@/lib/page-state/getAboutState";
export default function TeamSection({ cLevel, engineeringTeam, operationsTeam }: Pick<AboutSectionProps, "cLevel" | "engineeringTeam" | "operationsTeam">) {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#A31C1D" }}>Tim Kami</span>
          <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">Orang-orang di Balik Creativity Corner</h2>
        </div>

        {/* C-Level */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1" style={{ background: "rgba(41,41,41,0.08)" }} />
            <span className="text-xs font-bold tracking-widest uppercase px-3" style={{ color: "#292929" }}>C-Level Leadership</span>
            <div className="h-px flex-1" style={{ background: "rgba(41,41,41,0.08)" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {cLevel.map((m) => (<MemberCard key={m.id} member={m} size="lg" />))}
          </div>
        </div>

        {/* Engineering */}
        {engineeringTeam.length > 0 && (
          <div className="mb-8">
            <div className="flex flex-col items-center mb-6">
              <div className="w-px h-8" style={{ background: "rgba(163,28,29,0.3)" }} />
              <div className="flex items-center gap-3 w-full">
                <div className="h-px flex-1" style={{ background: "rgba(163,28,29,0.2)" }} />
                <span className="text-xs font-bold tracking-widest uppercase px-3" style={{ color: "#A31C1D" }}>Technical — under CTO</span>
                <div className="h-px flex-1" style={{ background: "rgba(163,28,29,0.2)" }} />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {engineeringTeam.map((m) => (<MemberCard key={m.id} member={m} size="md" />))}
            </div>
          </div>
        )}

        {/* Operations */}
        {operationsTeam.length > 0 && (
          <div>
            <div className="flex flex-col items-center mb-6">
              <div className="w-px h-8" style={{ background: "rgba(16,185,129,0.3)" }} />
              <div className="flex items-center gap-3 w-full">
                <div className="h-px flex-1" style={{ background: "rgba(16,185,129,0.2)" }} />
                <span className="text-xs font-bold tracking-widest uppercase px-3" style={{ color: "#059669" }}>Official — under COO</span>
                <div className="h-px flex-1" style={{ background: "rgba(16,185,129,0.2)" }} />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {operationsTeam.map((m) => (<MemberCard key={m.id} member={m} size="md" />))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
