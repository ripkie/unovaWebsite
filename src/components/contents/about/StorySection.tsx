import { Target, Eye } from "lucide-react";

export default function StorySection() {
  return (
    <section className="py-10 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#A31C1D" }}>Kisah Kami</span>
            <h2 className="mt-3 text-4xl font-display font-bold text-brand-navy">Dimulai dari Satu Pertanyaan</h2>
            <div className="mt-6 space-y-4 text-brand-navy/65 leading-relaxed">
              <p>Creativity Corner lahir dari inisiatif Beeboy Korea dengan tujuan menghadirkan pembelajaran STEM yang dapat disentuh, dimainkan, dan dieksplorasi anak.</p>
              <p>Di Indonesia, kami mengadaptasi pengalaman bermain untuk kebutuhan keluarga, sekolah, dan budaya lokal. Robot edukasi, kartu instruksi, board mat, storyline, dan obstacles menjadi bagian dari pengembangan ini.</p>
              <p>Melalui kegiatan riset, pengembangan, dan workshop, kami menghubungkan teknologi dengan pengalaman belajar anak dan pendampingnya.</p>
            </div>
          </div>
          <div className="space-y-5">
            <div className="p-7 rounded-2xl bg-white border border-[#A31C1D]/15 hover:border-[#A31C1D]/35 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(163,28,29,0.1)" }}>
                  <Target size={20} style={{ color: "#A31C1D" }} />
                </div>
                <h3 className="font-display font-bold text-brand-navy text-lg">Misi</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-brand-navy/60 leading-relaxed">
                <li>Mengembangkan produk inovatif untuk mendukung kebutuhan pendidikan anak.</li>
                <li>Menghubungkan teknologi dengan kebutuhan pengguna untuk menciptakan solusi berkelanjutan.</li>
                <li>Menciptakan solusi terbaik yang memenuhi kebutuhan tanpa mengorbankan kualitas.</li>
                <li>Memberikan layanan kepada masyarakat melalui kegiatan berbasis keahlian teknik.</li>
              </ul>
            </div>
            <div className="p-7 rounded-2xl bg-white border border-[#A31C1D]/15 hover:border-[#A31C1D]/35 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(163,28,29,0.1)" }}>
                  <Eye size={20} style={{ color: "#A31C1D" }} />
                </div>
                <h3 className="font-display font-bold text-brand-navy text-lg">Visi</h3>
              </div>
              <p className="text-brand-navy/60 leading-relaxed">
                Menjadi perusahaan terdepan dalam pendidikan dan hiburan anak, dengan produk yang mendukung perkembangan melalui aktivitas menyenangkan tanpa bergantung pada gadget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
