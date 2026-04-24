import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* CTA Section - Bisa di On/off kan*/}
      {/* <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase">
              Mari Berkolaborasi
            </span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-display font-bold leading-tight">
              Siap Wujudkan
              <br />
              <span className="text-gradient-white">Ekosistem Cerdas?</span>
            </h2>
            <p className="mt-4 text-white/60 text-lg leading-relaxed max-w-md">
              Dari konsultasi hingga implementasi penuh - tim Unova siap membantu Anda
              membangun solusi IoT yang tepat dan efisien.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact-us"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-brand-blue text-white font-semibold text-lg hover:bg-white hover:text-brand-navy transition-all duration-300"
            >
              Hubungi Kami
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Lihat Produk
            </Link>
          </div>
        </div>
      </div> */}

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/logoUnova.svg"
            alt="Unova"
            width={110}
            height={28}
            style={{ height: "28px", width: "auto", filter: "brightness(0) invert(1)" }}
          />
          <p className="mt-4 text-white/50 text-sm leading-relaxed">
            Inovasi teknologi untuk kehidupan yang lebih cerdas dan terkoneksi.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Instagram, href: "https://www.instagram.com/creativitycorner.cc/?utm_source=ig_web_button_share_sheet" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-blue hover:text-white transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">
            Navigasi
          </h4>
          <ul className="space-y-3">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Produk" },
              { href: "/blog", label: "Blog" },
              { href: "/partnership", label: "Kemitraan" },
              { href: "/about", label: "Tentang Kami" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">
            Produk
          </h4>
          <ul className="space-y-3">
            {[
              "Gas Leak Prevention",
              "Humidifier & Dehumidifier 2in1",
              "Safety Listrik",
              "API Platform",
            ].map((p) => (
              <li key={p}>
                <Link
                  href="/products"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">
            Kontak
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-white/60 text-sm">
              <MapPin size={14} className="mt-0.5 shrink-0 text-brand-blue" />
              Bandung, Indonesia
            </li>
            <li className="flex items-start gap-2 text-white/60 text-sm">
              <Mail size={14} className="mt-0.5 shrink-0 text-brand-blue" />
              unovahometech@gmail.com
            </li>
            <li className="flex items-start gap-2 text-white/60 text-sm">
              <Phone size={14} className="mt-0.5 shrink-0 text-brand-blue" />
              +62 xxx-xxxx-xxxx
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/30 text-sm">
          <span>© {new Date().getFullYear()} Unova - All Rights Reserved.</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white/60 transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="hover:text-white/60 transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
