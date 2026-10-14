"use client";

import { CheckCircle } from "lucide-react";

import type { BlogSectionProps } from "@/lib/hooks/useBlogState";
export default function NewsletterSection({ email, setEmail, subscribed, setSubscribed }: Pick<BlogSectionProps, "email" | "setEmail" | "subscribed" | "setSubscribed">) {
  return (
    <section className="py-16 border-t border-[#B85C5C]/15" style={{ background: "#FFF9F5" }}>
      <div className="max-w-lg mx-auto px-6 text-center">
        <h2 className="text-2xl font-display font-bold text-brand-navy">Update Terbaru ke Inbox Anda</h2>
        <p className="mt-2 text-brand-navy/55 text-sm">Tips keamanan rumah, update produk, dan insight industri.</p>
        {subscribed ? (
          <div className="mt-6 px-6 py-4 rounded-2xl bg-green-50 border border-green-200 text-green-700 font-semibold text-sm flex items-center justify-center gap-2">
            {/* ✅ diganti CheckCircle icon */}
            <CheckCircle size={16} />
            Terima kasih! Anda akan menerima update terbaru dari Creativity Corner.
          </div>
        ) : (
          <div className="mt-6 flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@anda.com"
              className="flex-1 px-4 py-3 rounded-xl border border-[#B85C5C]/25 bg-white text-brand-navy placeholder-brand-navy/30 focus:outline-none focus:border-[#B85C5C] transition-colors text-sm"
            />
            <button
              onClick={() => email && setSubscribed(true)}
              className="px-6 py-3 rounded-xl text-white text-sm font-semibold transition-colors whitespace-nowrap"
              style={{ background: "#B85C5C" }}
            >
              Subscribe
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
