"use client";
import { Send } from "lucide-react";
import type { ContactSectionProps } from "@/lib/hooks/useContactState";
export default function ContactForm({ form, setForm, loading, error, handleSubmit }: Pick<ContactSectionProps, "form" | "setForm" | "loading" | "error" | "handleSubmit">) {
  return (<form onSubmit={handleSubmit} className="space-y-4">
    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-brand-navy/60 text-xs font-semibold uppercase tracking-wide mb-2">
          Full Name *
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border text-brand-navy placeholder-brand-navy/30 focus:outline-none transition-colors text-sm"
          style={{
            borderColor: "rgba(184, 92, 92,0.25)",
            background: "#FFFFFF",
          }}
          placeholder="Your name"
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
            borderColor: "rgba(184, 92, 92,0.25)",
            background: "#FFFFFF",
          }}
          placeholder="email@company.com"
        />
      </div>
    </div>

    <div>
      <label className="block text-brand-navy/60 text-xs font-semibold uppercase tracking-wide mb-2">
        Company / Organization
      </label>
      <input
        type="text"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
        className="w-full px-4 py-3 rounded-xl border text-brand-navy placeholder-brand-navy/30 focus:outline-none transition-colors text-sm"
        style={{
          borderColor: "rgba(184, 92, 92,0.25)",
          background: "#FFFFFF",
        }}
        placeholder="Company name (optional)"
      />
    </div>

    <div>
      <label className="block text-brand-navy/60 text-xs font-semibold uppercase tracking-wide mb-2">
        Subject *
      </label>
      <select
        required
        value={form.interest}
        onChange={(e) => setForm({ ...form, interest: e.target.value })}
        className="w-full px-4 py-3 rounded-xl border text-brand-navy focus:outline-none transition-colors text-sm"
        style={{
          borderColor: "rgba(184, 92, 92,0.25)",
          background: "#FFFFFF",
        }}
      >
        <option value="produk">Product Information</option>
        <option value="demo">Request a Demo</option>
        <option value="partnership">Partnership Program</option>
        <option value="support">Technical Support</option>
        <option value="lainnya">Other</option>
      </select>
    </div>

    <div>
      <label className="block text-brand-navy/60 text-xs font-semibold uppercase tracking-wide mb-2">
        Message *
      </label>
      <textarea
        required
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full px-4 py-3 rounded-xl border text-brand-navy placeholder-brand-navy/30 focus:outline-none transition-colors resize-none text-sm"
        style={{
          borderColor: "rgba(184, 92, 92,0.25)",
          background: "#FFFFFF",
        }}
        placeholder="Tell us about your needs or questions..."
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
      style={{ background: "#352E2B" }}
    >
      {loading ? (
        <>
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message
          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </button>
  </form>);
}
