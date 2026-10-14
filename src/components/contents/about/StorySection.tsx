import { Target, Eye } from "lucide-react";

export default function StorySection() {
  return (
    <section className="py-10 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#B85C5C" }}>Our Story</span>
            <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">It Started with One Question</h2>
            <div className="mt-6 space-y-4 text-brand-navy/65 leading-relaxed">
              <p>Creativity Corner grew from Korea’s Beeboy initiative, with the aim of making STEM learning something children can touch, play with, and explore.</p>
              <p>In Indonesia, we adapt the play experience to local families, schools, and culture. Educational robots, instruction cards, board mats, storylines, and obstacles are part of this development.</p>
              <p>Through research, development, and workshops, we connect technology with learning experiences for children and their caregivers.</p>
            </div>
          </div>
          <div className="space-y-5">
            <div className="p-7 rounded-2xl bg-white border border-[#B85C5C]/15 hover:border-[#B85C5C]/35 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(184, 92, 92,0.1)" }}>
                  <Target size={20} style={{ color: "#B85C5C" }} />
                </div>
                <h3 className="font-display font-bold text-brand-navy text-lg">Mission</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-brand-navy/60 leading-relaxed">
                <li>Develop innovative products that support children’s educational needs.</li>
                <li>Connect technology with user needs to create sustainable solutions.</li>
                <li>Create solutions that meet real needs without compromising quality.</li>
                <li>Serve communities through activities grounded in engineering expertise.</li>
              </ul>
            </div>
            <div className="p-7 rounded-2xl bg-white border border-[#B85C5C]/15 hover:border-[#B85C5C]/35 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(184, 92, 92,0.1)" }}>
                  <Eye size={20} style={{ color: "#B85C5C" }} />
                </div>
                <h3 className="font-display font-bold text-brand-navy text-lg">Vision</h3>
              </div>
              <p className="text-brand-navy/60 leading-relaxed">
                Become a leading company in children’s education and entertainment, with products that support development through enjoyable activities without relying on gadgets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
