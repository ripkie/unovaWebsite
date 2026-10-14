import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-12 bg-brand-light border-t border-[#B85C5C]/15 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-display font-bold text-brand-navy">Join Our Mission</h2>
        <p className="mt-4 text-brand-navy/55">
          Whether you are a customer, a partner, or a potential team member, we are always open to a meaningful conversation.
        </p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold transition-colors" style={{ background: "#352E2B" }}>
            Contact Us <ArrowRight size={18} />
          </Link>
          <Link href="/partnership" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold transition-colors border border-[#B85C5C]/30 text-brand-navy hover:bg-[#FFFFFF]">
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
}
