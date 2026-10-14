import { features } from "@/lib/data/home";

export default function FeaturesSection() {
  return (
    <section className="py-10 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">Mengapa Creativity Corner</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-brand-navy">
            Rumah yang Aman
            <br />
            <span className="text-gradient">adalah Hak Setiap Keluarga</span>
          </h2>
          <p className="mt-4 text-brand-navy/60 max-w-xl mx-auto leading-relaxed">
            Produk Creativity Corner dirancang untuk memberikan ketenangan pikiran — karena Anda tidak harus selalu ada di rumah untuk menjaga keluarga.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl bg-white border border-brand-blue/10 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/10 transition-all duration-300 group">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                <f.icon size={24} />
              </div>
              <h3 className="font-display font-bold text-brand-navy text-lg mb-2">{f.title}</h3>
              <p className="text-brand-navy/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
