export default function WelcomeSection() {
  return (
    <section className="py-10 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#B85C5C" }}>Stakeholder Support</span>
          <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">Welcome Message</h2>
          <p className="mt-3 text-brand-navy/50 max-w-xl mx-auto text-sm leading-relaxed">
            Messages of support from academic commissioners who believe in Creativity Corner’s vision.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 — Seo Young-Bong */}
          <div className="rounded-3xl border border-[#B85C5C]/15 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300" style={{ background: "#FFFFFF" }}>
            <div className="p-8 flex flex-col h-full">
              <div className="flex-1">
                <div className="text-4xl font-serif leading-none mb-4" style={{ color: "#B85C5C" }}>&ldquo;</div>
                <p className="text-brand-navy/70 leading-relaxed text-sm italic">
                  I feel a sense of accomplishment when students&apos; career goals change from working for large corporations to helping others after their engineering volunteer work.
                </p>
              </div>
              <div className="my-6 h-px" style={{ background: "rgba(184, 92, 92,0.2)" }} />
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/stakeholder/profSeo.png" alt="Prof Seo Young-Bong" className="w-full h-full object-cover object-top" />
                </div>
                <div className="flex-1">
                  <div className="font-display font-bold text-brand-navy">서영봉 (Seo Young-Bong)</div>
                  <div className="text-xs mt-0.5" style={{ color: "#B85C5C" }}>Commissioner</div>
                  <div className="text-brand-navy/45 text-xs">Pusan National University</div>
                </div>
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-[#B85C5C]/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/logoPartner/PusanUniv.png" alt="Pusan National University" className="w-10 h-10 object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Angga Rusdinar */}
          <div className="rounded-3xl border border-[#B85C5C]/15 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300" style={{ background: "#FFFFFF" }}>
            <div className="p-8 flex flex-col h-full">
              <div className="flex-1">
                <div className="text-4xl font-serif leading-none mb-4" style={{ color: "#B85C5C" }}>&ldquo;</div>
                <p className="text-brand-navy/70 leading-relaxed text-sm italic">
                  So far, Indonesia has only held the advantage in terms of market size... This collaboration is expected to provide scientific contributions, innovations, and solutions to problems in the effort to enhance the nation&apos;s competitiveness.
                </p>
              </div>
              <div className="my-6 h-px" style={{ background: "rgba(184, 92, 92,0.2)" }} />
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/stakeholder/pakAngga.png" alt="Angga Rusdinar" className="w-full h-full object-cover object-top" />
                </div>
                <div className="flex-1">
                  <div className="font-display font-bold text-brand-navy">Angga Rusdinar</div>
                  <div className="text-xs mt-0.5" style={{ color: "#B85C5C" }}>Commissioner</div>
                  <div className="text-brand-navy/45 text-xs">Telkom University</div>
                </div>
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-[#B85C5C]/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/logoPartner/TELU.png" alt="Telkom University" className="w-10 h-10 object-contain" style={{ mixBlendMode: "multiply" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
