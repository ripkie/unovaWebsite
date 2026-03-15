"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * States:
   * A) Homepage + not scrolled → transparent, dark text (hero is light #EDF0F5)
   * B) Homepage + scrolled     → pill, white/blur bg, dark text
   * C) Other pages + any       → pill, white/blur bg, dark text (heroes are white)
   *
   * Pill is always shown — only background & border change.
   */
  const isTransparent = isHome && !scrolled;

  const navStyle: React.CSSProperties = {
    maxWidth: "860px",
    borderRadius: "18px",
    transition: "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
    background: isTransparent
      ? "rgba(237, 240, 245, 0.01)"
      : "rgba(255, 255, 255, 0.92)",
    backdropFilter: isTransparent ? "none" : "blur(18px)",
    WebkitBackdropFilter: isTransparent ? "none" : "blur(18px)",
    border: isTransparent
      ? "1px solid rgba(9, 31, 88, 0.1)"
      : "1px solid rgba(111, 150, 209, 0.22)",
    boxShadow: isTransparent
      ? "none"
      : "0 4px 28px rgba(111, 150, 209, 0.13)",
  };

  const textColor = "rgba(9, 31, 88, 0.65)";
  const textActive = "#091F58";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav className="w-full" style={navStyle}>
        <div className="flex items-center justify-between px-5 py-3">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logoUnova.svg"
              alt="Unova"
              width={110}
              height={28}
              style={{
                height: "28px",
                width: "auto",
                filter: "brightness(0) saturate(100%) invert(11%) sepia(55%) saturate(900%) hue-rotate(202deg) brightness(95%)",
              }}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-xl text-sm transition-all duration-200"
                  style={{
                    color: isActive ? textActive : textColor,
                    fontWeight: isActive ? 600 : 500,
                    background: isActive ? "rgba(111, 150, 209, 0.1)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            href="/contact-us"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200"
            style={{ background: "#091F58" }}
          >
            Hubungi Kami
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: textActive }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden px-5 pb-4 border-t"
            style={{ borderColor: "rgba(111, 150, 209, 0.15)" }}
          >
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium"
                  style={{ color: textColor }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact-us"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white text-center"
                style={{ background: "#091F58" }}
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
