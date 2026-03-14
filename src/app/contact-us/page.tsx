"use client";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageCircle, Clock } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "produk",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    setSent(true);
  };

  return (
    <>
      {/* Header */}
      <section className="relative pt-40 pb-20 bg-brand-navy overflow-hidden noise">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
            Hubungi Kami
          </span>
          <h1 className="mt-4 text-5xl md:text-6xl font-display font-bold text-white">
            Mari Berbicara
          </h1>
          <p className="mt-6 text-white/60 text-xl max-w-xl mx-auto">
            Ada pertanyaan, ingin demo produk, atau siap mulai proyek? Tim kami
            siap membantu Anda.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-brand-light border-b border-brand-blue/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-5">
          {[
            {
              icon: Mail,
              title: "Email",
              value: "hello@unova.id",
              sub: "Respon dalam 24 jam",
            },
            {
              icon: Phone,
              title: "WhatsApp",
              value: "+62 xxx-xxxx-xxxx",
              sub: "Senin–Jumat, 09.00–18.00 WIB",
            },
            {
              icon: MapPin,
              title: "Kantor",
              value: "Jakarta, Indonesia",
              sub: "Kunjungi dengan perjanjian",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-brand-blue/10 hover:border-brand-blue/30 hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-navy/5 flex items-center justify-center shrink-0">
                <c.icon size={20} className="text-brand-blue" />
              </div>
              <div>
                <div className="text-brand-navy/40 text-xs font-semibold uppercase tracking-wide">
                  {c.title}
                </div>
                <div className="font-display font-bold text-brand-navy mt-1">{c.value}</div>
                <div className="flex items-center gap-1 text-brand-navy/50 text-xs mt-1">
                  <Clock size={11} />
                  {c.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {sent ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✅</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-brand-navy">
                Pesan Terkirim!
              </h2>
              <p className="mt-3 text-brand-navy/60 text-lg">
                Terima kasih telah menghubungi Unova. Tim kami akan menghubungi Anda
                dalam 1×24 jam kerja.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-8 px-6 py-3 rounded-xl bg-brand-navy text-white font-semibold hover:bg-brand-blue transition-colors"
              >
                Kirim Pesan Lain
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={24} className="text-brand-blue" />
                </div>
                <h2 className="text-3xl font-display font-bold text-brand-navy">
                  Kirim Pesan
                </h2>
                <p className="mt-2 text-brand-navy/60">
                  Isi formulir di bawah dan kami akan segera merespons.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-brand-navy/60 text-sm font-medium mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-blue/20 bg-brand-light text-brand-navy placeholder-brand-navy/30 focus:outline-none focus:border-brand-blue transition-colors"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-navy/60 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-blue/20 bg-brand-light text-brand-navy placeholder-brand-navy/30 focus:outline-none focus:border-brand-blue transition-colors"
                      placeholder="email@perusahaan.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-brand-navy/60 text-sm font-medium mb-2">
                    Perusahaan / Organisasi
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-blue/20 bg-brand-light text-brand-navy placeholder-brand-navy/30 focus:outline-none focus:border-brand-blue transition-colors"
                    placeholder="Nama perusahaan (opsional)"
                  />
                </div>

                <div>
                  <label className="block text-brand-navy/60 text-sm font-medium mb-2">
                    Topik Utama *
                  </label>
                  <select
                    required
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-blue/20 bg-brand-light text-brand-navy focus:outline-none focus:border-brand-blue transition-colors"
                  >
                    <option value="produk">Informasi Produk</option>
                    <option value="demo">Minta Demo</option>
                    <option value="partnership">Program Kemitraan</option>
                    <option value="support">Dukungan Teknis</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-brand-navy/60 text-sm font-medium mb-2">
                    Pesan *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-blue/20 bg-brand-light text-brand-navy placeholder-brand-navy/30 focus:outline-none focus:border-brand-blue transition-colors resize-none"
                    placeholder="Ceritakan kebutuhan atau pertanyaan Anda..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-navy text-white font-semibold text-lg hover:bg-brand-blue transition-colors shadow-lg shadow-brand-navy/20"
                >
                  Kirim Pesan
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}
