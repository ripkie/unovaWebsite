"use client";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageCircle, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "produk",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Gagal mengirim pesan. Coba lagi.");
      } else {
        setSent(true);
      }
    } catch {
      setError("Koneksi gagal. Periksa internet Anda dan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-white border-b border-[#6F96D1]/15">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ background: "#EDF0F5", color: "#6F96D1" }}
          >
            Hubungi Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy">
            Mari Berbicara
          </h1>
          <p className="mt-4 text-brand-navy/55 text-lg max-w-xl mx-auto leading-relaxed">
            Ada pertanyaan, ingin demo produk, atau siap mulai proyek?
            Tim kami siap membantu Anda.
          </p>
        </div>
      </section>

      {/* Contact Info — 3 cards viewport only, no interaction needed */}
      <section className="py-10 border-b border-[#6F96D1]/15" style={{ background: "#EDF0F5" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-5">
          {/* Email */}
          <a
            href="mailto:hello@unova.id"
            className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#6F96D1]/15 hover:border-[#6F96D1]/35 hover:shadow-md transition-all group"
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(111,150,209,0.1)" }}
            >
              <Mail size={20} style={{ color: "#6F96D1" }} />
            </div>
            <div>
              <div className="text-brand-navy/40 text-xs font-semibold uppercase tracking-widest">
                Email
              </div>
              <div className="font-display font-bold text-brand-navy mt-1 group-hover:text-[#6F96D1] transition-colors">
                hello@unova.id
              </div>
              <div className="flex items-center gap-1 text-brand-navy/40 text-xs mt-1">
                <Clock size={11} />
                Respon dalam 24 jam
              </div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/62xxxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#6F96D1]/15 hover:border-[#6F96D1]/35 hover:shadow-md transition-all group"
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(111,150,209,0.1)" }}
            >
              <Phone size={20} style={{ color: "#6F96D1" }} />
            </div>
            <div>
              <div className="text-brand-navy/40 text-xs font-semibold uppercase tracking-widest">
                WhatsApp
              </div>
              <div className="font-display font-bold text-brand-navy mt-1 group-hover:text-[#6F96D1] transition-colors">
                +62 xxx-xxxx-xxxx
              </div>
              <div className="flex items-center gap-1 text-brand-navy/40 text-xs mt-1">
                <Clock size={11} />
                Senin–Jumat, 09.00–18.00 WIB
              </div>
            </div>
          </a>

          {/* Kantor */}
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#6F96D1]/15">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(111,150,209,0.1)" }}
            >
              <MapPin size={20} style={{ color: "#6F96D1" }} />
            </div>
            <div>
              <div className="text-brand-navy/40 text-xs font-semibold uppercase tracking-widest">
                Kantor
              </div>
              <div className="font-display font-bold text-brand-navy mt-1">
                Bandung, Indonesia
              </div>
              <div className="flex items-center gap-1 text-brand-navy/40 text-xs mt-1">
                <Clock size={11} />
                Kunjungi dengan perjanjian
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps + Form — 2 column layout */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Google Maps Embed */}
            <div>
              <h2 className="text-2xl font-display font-bold text-brand-navy mb-2">
                Lokasi Kami
              </h2>
              <p className="text-brand-navy/50 text-sm mb-5">
                Bandung Techno Park, Bandung, Jawa Barat
              </p>
              <div className="rounded-2xl overflow-hidden border border-[#6F96D1]/20 shadow-sm" style={{ height: "420px" }}>
                {/* 
                  CARA GANTI EMBED MAPS:
                  1. Buka Google Maps → cari lokasi kantor
                  2. Klik Share → Embed a map
                  3. Copy src="..." dari iframe yang diberikan
                  4. Paste di bawah menggantikan src yang ada
                */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2983532867847!2d107.63154387499041!3d-6.914463993081456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e639a1d2b9b3%3A0x5a9e1b1b1b1b1b1b!2sBandung%20Techno%20Park!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kantor Unova"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              {sent ? (
                <div className="text-center py-16">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: "rgba(16,185,129,0.1)" }}
                  >
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-brand-navy">
                    Pesan Terkirim!
                  </h2>
                  <p className="mt-3 text-brand-navy/55">
                    Terima kasih telah menghubungi Unova. Tim kami akan menghubungi
                    Anda dalam 1×24 jam kerja.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 px-6 py-3 rounded-xl text-white font-semibold transition-colors"
                    style={{ background: "#091F58" }}
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
                      style={{ background: "rgba(111,150,209,0.1)" }}
                    >
                      <MessageCircle size={22} style={{ color: "#6F96D1" }} />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-brand-navy">
                      Kirim Pesan
                    </h2>
                    <p className="mt-1 text-brand-navy/50 text-sm">
                      Isi formulir di bawah dan kami akan segera merespons.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-brand-navy/60 text-xs font-semibold uppercase tracking-wide mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border text-brand-navy placeholder-brand-navy/30 focus:outline-none transition-colors text-sm"
                          style={{
                            borderColor: "rgba(111,150,209,0.25)",
                            background: "#EDF0F5",
                          }}
                          placeholder="Nama Anda"
                        />
                      </div>
                      <div>
                        <label className="block text-brand-navy/60 text-xs font-semibold uppercase tracking-wide mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border text-brand-navy placeholder-brand-navy/30 focus:outline-none transition-colors text-sm"
                          style={{
                            borderColor: "rgba(111,150,209,0.25)",
                            background: "#EDF0F5",
                          }}
                          placeholder="email@perusahaan.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-brand-navy/60 text-xs font-semibold uppercase tracking-wide mb-2">
                        Perusahaan / Organisasi
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-brand-navy placeholder-brand-navy/30 focus:outline-none transition-colors text-sm"
                        style={{
                          borderColor: "rgba(111,150,209,0.25)",
                          background: "#EDF0F5",
                        }}
                        placeholder="Nama perusahaan (opsional)"
                      />
                    </div>

                    <div>
                      <label className="block text-brand-navy/60 text-xs font-semibold uppercase tracking-wide mb-2">
                        Topik Utama *
                      </label>
                      <select
                        required
                        value={form.interest}
                        onChange={(e) => setForm({ ...form, interest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-brand-navy focus:outline-none transition-colors text-sm"
                        style={{
                          borderColor: "rgba(111,150,209,0.25)",
                          background: "#EDF0F5",
                        }}
                      >
                        <option value="produk">Informasi Produk</option>
                        <option value="demo">Minta Demo</option>
                        <option value="partnership">Program Kemitraan</option>
                        <option value="support">Dukungan Teknis</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-brand-navy/60 text-xs font-semibold uppercase tracking-wide mb-2">
                        Pesan *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-brand-navy placeholder-brand-navy/30 focus:outline-none transition-colors resize-none text-sm"
                        style={{
                          borderColor: "rgba(111,150,209,0.25)",
                          background: "#EDF0F5",
                        }}
                        placeholder="Ceritakan kebutuhan atau pertanyaan Anda..."
                      />
                    </div>

                    {error && (
                      <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="group w-full flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-white font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ background: "#091F58" }}
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Mengirim...
                        </>
                      ) : (
                        <>
                          Kirim Pesan
                          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
