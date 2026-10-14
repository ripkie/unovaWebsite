import { stats } from "@/lib/data/home";

export default function StatsSection() {
  return (
    <section className="border-t border-[#A31C1D]/15" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl font-display font-bold" style={{ color: "#A31C1D" }}>{s.value}</div>
            <div className="mt-1 text-brand-navy/50 text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
