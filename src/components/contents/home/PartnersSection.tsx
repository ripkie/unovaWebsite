import { partners } from "@/lib/data/home";

export default function PartnersSection() {
  return (
    <section className="py-5 border-t border-[#A31C1D]/15 overflow-hidden" style={{ background: "#FFFFFF" }}>
      <style>{`
            @keyframes slider {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
          `}</style>
      <div className="max-w-7xl mx-auto px-6 mb-3 text-center">
        <span className="text-brand-navy/35 text-xs font-bold tracking-widest uppercase">
          Dipercaya oleh mitra terkemuka
        </span>
      </div>
      <div style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        overflow: "hidden",
      }}>
        <div className="flex w-max" style={{ animation: "slider 12s linear infinite" }}>
          {[...partners, ...partners].map((p, i) => (
            <span key={i} className="flex items-center gap-10 px-5 shrink-0">
              <span className="text-brand-navy/35 text-base font-display font-bold tracking-tight hover:text-[#A31C1D] transition-colors duration-200 cursor-default whitespace-nowrap select-none">
                {p.name}
              </span>
              <span className="w-1 h-1 rounded-full bg-brand-navy/20 shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
