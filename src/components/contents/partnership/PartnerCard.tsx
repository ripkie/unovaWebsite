import type { Partner } from "@/lib/partners";

export default function PartnerCard({ partner, muted = false }: { partner: Partner; muted?: boolean; }) {
  return (
    <div
      className="flex flex-col items-center justify-center px-8 py-4 rounded-2xl bg-white border min-w-[180px] h-20 transition-all shrink-0"
      style={{
        borderColor: muted ? "rgba(184, 92, 92,0.08)" : "rgba(184, 92, 92,0.2)",
        opacity: muted ? 0.5 : 1,
      }}
    >
      {partner.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={partner.logo} alt={partner.name} className="h-18 object-contain" />
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
