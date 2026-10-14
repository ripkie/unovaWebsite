import { ShieldAlert, Bell, Zap } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="py-10 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">Cara Kerja</span>
          <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">Proteksi dalam 3 Langkah</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", icon: ShieldAlert, title: "Deteksi", desc: "Sensor dual-element mendeteksi konsentrasi gas berbahaya dalam hitungan detik, jauh sebelum tercium bau." },
            { step: "02", icon: Bell, title: "Alarm & Notifikasi", desc: "Alarm 85dB langsung berbunyi. Notifikasi push dikirim ke smartphone Anda dan keluarga secara bersamaan." },
            { step: "03", icon: Zap, title: "Valve Otomatis", desc: "Valve elektromagnetik menutup aliran gas secara otomatis. Sumber kebocoran diisolasi sebelum memicu bahaya." },
          ].map((s) => (
            <div key={s.step} className="relative p-8 rounded-2xl bg-brand-light border border-brand-blue/10 hover:border-brand-blue/30 hover:shadow-lg transition-all">
              <div className="text-7xl font-display font-bold text-brand-blue/10 absolute top-4 right-6 select-none">{s.step}</div>
              <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center mb-4">
                <s.icon size={22} className="text-white" />
              </div>
              <h3 className="font-display font-bold text-brand-navy text-xl mb-2">{s.title}</h3>
              <p className="text-brand-navy/60 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
