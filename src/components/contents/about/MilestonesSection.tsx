import { milestones } from "@/lib/data/about";

export default function MilestonesSection() {
  return (
    <section className="py-10" style={{ background: "#FFF9F5" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#B85C5C" }}>Our Journey</span>
          <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">Creativity Corner Milestones</h2>
        </div>
        <div className="relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5" style={{ background: "rgba(184, 92, 92,0.3)" }} />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-start gap-6 pl-10 relative">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center" style={{ borderColor: "#B85C5C" }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: "#B85C5C" }} />
                </div>
                <div className="flex-1 pb-2">
                  <span className="text-sm font-bold block" style={{ color: "#B85C5C" }}>{m.date}</span>
                  <p className="mt-1 text-brand-navy/65">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
