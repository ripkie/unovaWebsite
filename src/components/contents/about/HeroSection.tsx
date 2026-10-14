export default function HeroSection() {
  return (
    <section className="pt-32 pb-12 bg-brand-light border-b border-[#B85C5C]/15">
      <div className="max-w-7xl mx-auto px-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ background: "#FFFFFF", color: "#B85C5C" }}>
          About Us
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy leading-tight">
          Learn and Play<br />
          <span style={{ color: "#B85C5C" }}>with Creativity Corner</span>
        </h1>
        <p className="mt-4 text-brand-navy/55 text-lg leading-relaxed max-w-2xl">
          Creativity Corner is a STEM toy startup that brings learning to life through play. We adapt Korea’s Beeboy for children, families, schools, and Indonesian culture.
        </p>
      </div>
    </section>
  );
}
