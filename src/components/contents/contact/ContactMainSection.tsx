"use client";
import ContactForm from "@/components/forms/ContactForm";

import { MessageCircle, CheckCircle } from "lucide-react";

import type { ContactSectionProps } from "@/lib/hooks/useContactState";
export default function ContactMainSection({ form, setForm, sent, setSent, loading, error, handleSubmit }: Pick<ContactSectionProps, "form" | "setForm" | "sent" | "setSent" | "loading" | "error" | "handleSubmit">) {
  return (
    <section className="py-12 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Google Maps Embed */}
          <div>
            <h2 className="text-2xl font-display font-bold text-brand-navy mb-2">
              Our Location
            </h2>
            <p className="text-brand-navy/50 text-sm mb-5">
              Bandung Techno Park, Bandung, West Java
            </p>
            <div className="rounded-2xl overflow-hidden border border-[#B85C5C]/20 shadow-sm" style={{ height: "420px" }}>
              {/* 
                  CARA GANTI EMBED MAPS:
                  1. Buka Google Maps → cari lokasi kantor
                  2. Klik Share → Embed a map
                  3. Copy src="..." dari iframe yang diberikan
                  4. Paste di bawah menggantikan src yang ada
                */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5357.788879557982!2d107.6277440762055!3d-6.970454668254775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9ace29fcd5f%3A0xfa6ffa9182123965!2sBandung%20Techno%20Park!5e1!3m2!1sen!2sen!4v1773636518086!5m2!1sen!2sen"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Creativity Corner Office Location"
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
                  Message Sent!
                </h2>
                <p className="mt-3 text-brand-navy/55">
                  Thank you for contacting Creativity Corner. Our team will get back to you within one business day.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 px-6 py-3 rounded-xl text-white font-semibold transition-colors"
                  style={{ background: "#352E2B" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(184, 92, 92,0.1)" }}
                  >
                    <MessageCircle size={22} style={{ color: "#B85C5C" }} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-brand-navy">
                    Send Message
                  </h2>
                  <p className="mt-1 text-brand-navy/50 text-sm">
                    Fill out the form below and we will get back to you soon.
                  </p>
                </div>

                <ContactForm form={form} setForm={setForm} loading={loading} error={error} handleSubmit={handleSubmit} />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
