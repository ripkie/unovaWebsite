"use client";

import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactInfoSection() {
  return (
    <section className="py-10 border-b border-[#B85C5C]/15" style={{ background: "#FFF9F5" }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Email */}
        <a
          href="mailto:unovahometech@gmail.com"
          className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#B85C5C]/15 hover:border-[#B85C5C]/35 hover:shadow-md transition-all group"
        >
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(184, 92, 92,0.1)" }}
          >
            <Mail size={20} style={{ color: "#B85C5C" }} />
          </div>
          <div className="min-w-0">
            <div className="text-brand-navy/40 text-xs font-semibold uppercase tracking-widest">
              Email
            </div>
            <div className="font-display font-bold text-brand-navy mt-1 group-hover:text-[#B85C5C] transition-colors break-all text-sm">
              unovahometech@gmail.com
            </div>
            <div className="flex items-center gap-1 text-brand-navy/40 text-xs mt-1">
              <Clock size={11} />
              Response within 24 hours
            </div>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/62xxxxxxxxxx"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#B85C5C]/15 hover:border-[#B85C5C]/35 hover:shadow-md transition-all group"
        >
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(184, 92, 92,0.1)" }}
          >
            <Phone size={20} style={{ color: "#B85C5C" }} />
          </div>
          <div>
            <div className="text-brand-navy/40 text-xs font-semibold uppercase tracking-widest">
              WhatsApp
            </div>
            <div className="font-display font-bold text-brand-navy mt-1 group-hover:text-[#B85C5C] transition-colors">
              +62 xxx-xxxx-xxxx
            </div>
            <div className="flex items-center gap-1 text-brand-navy/40 text-xs mt-1">
              <Clock size={11} />
              Monday–Friday, 9:00 AM–6:00 PM (UTC+7)
            </div>
          </div>
        </a>

        {/* Kantor */}
        <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#B85C5C]/15">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(184, 92, 92,0.1)" }}
          >
            <MapPin size={20} style={{ color: "#B85C5C" }} />
          </div>
          <div>
            <div className="text-brand-navy/40 text-xs font-semibold uppercase tracking-widest">
              Office
            </div>
            <div className="font-display font-bold text-brand-navy mt-1">
              Bandung, Indonesia
            </div>
            <div className="flex items-center gap-1 text-brand-navy/40 text-xs mt-1">
              <Clock size={11} />
              Visits by appointment
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
