"use client";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-12 bg-white border-b border-[#A31C1D]/15">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
          style={{ background: "#FFFFFF", color: "#A31C1D" }}
        >
          Hubungi Kami
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy">
          Mari Berbicara
        </h1>
        <p className="mt-4 text-brand-navy/55 text-lg max-w-xl mx-auto leading-relaxed">
          Ada pertanyaan, ingin demo produk, atau siap mulai proyek?
          Tim kami siap membantu Anda.
        </p>
      </div>
    </section>
  );
}
