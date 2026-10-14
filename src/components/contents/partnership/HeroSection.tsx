import Link from "next/link";
import { Handshake } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-12 bg-brand-light border-b border-[#B85C5C]/15">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
          style={{ background: "#FFFFFF", color: "#B85C5C" }}
        >
          Partnership Program
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy">
          Grow with<br />
          <span style={{ color: "#B85C5C" }}>the Creativity Corner Ecosystem</span>
        </h1>
        <p className="mt-4 text-brand-navy/55 text-lg max-w-2xl mx-auto leading-relaxed">
          Collaborate with Creativity Corner in Indonesia on STEM education, educational robot workshops, and product development.
        </p>
        <Link
          href="/contact-us"
          className="mt-8 inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl text-white font-semibold text-base transition-all duration-300"
          style={{ background: "#B85C5C" }}
        >
          <Handshake size={20} />
          Become a Partner
        </Link>
      </div>
    </section>
  );
}
