"use client";

import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactInfoSection() {
  return (
    <section className="py-10 border-b border-[#A31C1D]/15" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Email */}
        <a
          href="mailto:unovahometech@gmail.com"
          className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#A31C1D]/15 hover:border-[#A31C1D]/35 hover:shadow-md transition-all group"
        >
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(163,28,29,0.1)" }}
          >
            <Mail size={20} style={{ color: "#A31C1D" }} />
          </div>
          <div className="min-w-0">
            <div className="text-brand-navy/40 text-xs font-semibold uppercase tracking-widest">
              Email
            </div>
            <div className="font-display font-bold text-brand-navy mt-1 group-hover:text-[#A31C1D] transition-colors break-all text-sm">
              unovahometech@gmail.com
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
          className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#A31C1D]/15 hover:border-[#A31C1D]/35 hover:shadow-md transition-all group"
        >
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(163,28,29,0.1)" }}
          >
            <Phone size={20} style={{ color: "#A31C1D" }} />
          </div>
          <div>
            <div className="text-brand-navy/40 text-xs font-semibold uppercase tracking-widest">
              WhatsApp
            </div>
            <div className="font-display font-bold text-brand-navy mt-1 group-hover:text-[#A31C1D] transition-colors">
              +62 xxx-xxxx-xxxx
            </div>
            <div className="flex items-center gap-1 text-brand-navy/40 text-xs mt-1">
              <Clock size={11} />
              Senin–Jumat, 09.00–18.00 WIB
            </div>
          </div>
        </a>

        {/* Kantor */}
        <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#A31C1D]/15">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(163,28,29,0.1)" }}
          >
            <MapPin size={20} style={{ color: "#A31C1D" }} />
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
  );
}
