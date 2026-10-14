import { partners } from "@/lib/data/partnership";
import PartnerCard from "@/components/contents/partnership/PartnerCard";

export default function PartnerSliderSection() {
  return (
    <section className="py-8 overflow-hidden border-b border-[#B85C5C]/15" style={{ background: "#FFF9F5" }}>
      <div className="max-w-7xl mx-auto px-6 mb-5 text-center">
        <p className="text-brand-navy/40 text-xs font-bold tracking-widest uppercase">
          Mitra yang telah bergabung
        </p>
      </div>
      {/* Row 1 */}
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
      {/* Row 2 */}
      <div className="relative overflow-hidden" style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}>
        <div className="flex w-max" style={{ animation: "slide-right 25s linear infinite" }}>
          {[...[...partners].reverse(), ...[...partners].reverse()].map((p, i) => <PartnerCard key={`r2-${i}`} partner={p} muted />)}
        </div>
      </div>
    </section>
  );
}
