"use client";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-14 bg-brand-light border-b border-[#B85C5C]/15">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-[#FFFFFF] text-[#B85C5C] text-xs font-bold tracking-widest uppercase mb-4">
          Blog & Insights
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy">
          Insights for<br />
          <span style={{ color: "#B85C5C" }}>Safer Homes</span>
        </h1>
        <p className="mt-4 text-brand-navy/55 text-lg max-w-xl mx-auto leading-relaxed">
          Articles, guides, and the latest news on home technology, home safety, and air quality.
        </p>
      </div>
    </section>
  );
}
