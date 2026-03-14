"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Produk" },
  { href: "/blog", label: "Blog" },
  { href: "/partnership", label: "Kemitraan" },
  { href: "/about", label: "Tentang Kami" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav
        className={`transition-all duration-500 ease-in-out w-full ${
          scrolled
            ? "max-w-3xl rounded-2xl glass shadow-lg shadow-brand-blue/10 border border-white/30"
            : "max-w-7xl"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className={`transition-all duration-500 ${
                scrolled ? "h-7" : "h-8"
              }`}
            >
              <Image
                src="/images/logo.png"
                alt="Unova"
                width={120}
                height={32}
                className={`object-contain transition-all duration-500 ${
                  scrolled ? "h-7 brightness-0" : "h-8 brightness-0 invert"
                }`}
                style={{ width: "auto" }}
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-brand-blue/10 ${
                  scrolled
                    ? "text-brand-navy hover:text-brand-navy"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact-us"
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
              scrolled
                ? "bg-brand-navy text-white hover:bg-brand-blue"
                : "bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm"
            }`}
          >
            Hubungi Kami
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-brand-navy" : "text-white"
            }`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`md:hidden px-5 pb-4 border-t ${
              scrolled ? "border-brand-blue/20" : "border-white/20"
            }`}
          >
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    scrolled
                      ? "text-brand-navy hover:bg-brand-blue/10"
                      : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact-us"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-brand-navy text-white text-center"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
