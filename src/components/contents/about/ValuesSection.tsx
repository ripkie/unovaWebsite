import { values } from "@/lib/data/about";

export default function ValuesSection() {
  return (
    <section className="py-10 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#B85C5C" }}>Our Values</span>
          <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">What Drives Us</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div key={v.title} className="p-7 rounded-2xl border border-[#B85C5C]/15 bg-[#FFFFFF] hover:border-[#B85C5C]/35 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white shadow-sm">
                <v.icon size={22} style={{ color: "#B85C5C" }} />
              </div>
              <h3 className="font-display font-bold text-brand-navy mb-2">{v.title}</h3>
              <p className="text-brand-navy/55 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
