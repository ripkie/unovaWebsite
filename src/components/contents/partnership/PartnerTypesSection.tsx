import { partnerTypes } from "@/lib/data/partnership";

export default function PartnerTypesSection() {
  return (
    <section className="py-12 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#B85C5C" }}>
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
              className="p-8 rounded-2xl border border-[#B85C5C]/15 bg-[#FFFFFF] hover:border-[#B85C5C]/35 hover:shadow-lg transition-all duration-300 group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors"
                style={{ background: "rgba(184, 92, 92,0.1)" }}
              >
                <type.icon size={26} style={{ color: "#B85C5C" }} />
              </div>
              <h3 className="font-display font-bold text-brand-navy text-xl mb-2">{type.title}</h3>
              <p className="text-brand-navy/55 text-sm leading-relaxed mb-5">{type.desc}</p>
              <ul className="space-y-2">
                {type.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2 text-sm text-brand-navy/65">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(184, 92, 92,0.15)" }}
                    >
                      <span className="w-2 h-2 rounded-full" style={{ background: "#B85C5C" }} />
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
  );
}
