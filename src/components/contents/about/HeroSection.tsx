export default function HeroSection() {
  return (
    <section className="pt-32 pb-12 bg-white border-b border-[#A31C1D]/15">
      <div className="max-w-7xl mx-auto px-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ background: "#FFFFFF", color: "#A31C1D" }}>
          Tentang Kami
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy leading-tight">
          Belajar dan Bermain<br />
          <span style={{ color: "#A31C1D" }}>Bersama Creativity Corner</span>
        </h1>
        <p className="mt-4 text-brand-navy/55 text-lg leading-relaxed max-w-2xl">
          Creativity Corner adalah startup mainan edukasi STEM yang menghadirkan
          pengalaman belajar melalui permainan. Kami mengadaptasi Beeboy dari
          Korea untuk anak, keluarga, sekolah, dan budaya Indonesia.
        </p>
      </div>
    </section>
  );
}
