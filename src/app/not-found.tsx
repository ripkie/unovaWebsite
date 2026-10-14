import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-navy overflow-hidden noise">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
      <div className="relative z-10 text-center px-6 max-w-xl mx-auto">
        <div className="text-8xl font-display font-bold text-brand-blue/30 leading-none select-none">
          404
        </div>
        <h1 className="mt-4 text-4xl font-display font-bold text-white">
          Page Not Found
        </h1>
        <p className="mt-4 text-white/60 text-lg leading-relaxed">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-white hover:text-brand-navy transition-all"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
