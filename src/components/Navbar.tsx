"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On homepage: hero is light (#EDF0F5), so always use dark text
  // On other pages: hero is white, so always use dark text
  // After scroll: pill shrinks, same dark text on white/blur bg
  // → All pages now have light backgrounds, so navbar is always dark text + visible bg

  const pillStyle: React.CSSProperties = scrolled
    ? {
      maxWidth: "800px",
      borderRadius: "16px",
      background: "rgba(255,255,255,0.94)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      border: "1px solid rgba(111,150,209,0.2)",
      boxShadow: "0 4px 24px rgba(111,150,209,0.1)",
    }
    : {
      // Always visible: subtle white pill even before scroll
      maxWidth: "100%",
      borderRadius: "0",
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: "none",
      borderBottom: "1px solid rgba(111,150,209,0.12)",
      boxShadow: "none",
    };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <nav
        className="transition-all duration-400 ease-in-out w-full"
        style={pillStyle}
      >
        <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/logoUnova.svg"
              alt="Unova"
              style={{
                height: "18px",
                width: "105px",
                filter: "invert(10%) sepia(60%) saturate(800%) hue-rotate(205deg) brightness(40%)",
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
                  className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive ? "#091F58" : "rgba(9,31,88,0.55)",
                    background: isActive ? "rgba(111,150,209,0.1)" : "transparent",
                    fontWeight: isActive ? 600 : 500,
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
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 text-white"
            style={{ background: "#091F58" }}
          >
            Hubungi Kami
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: "#091F58" }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden px-6 pb-4 border-t max-w-7xl mx-auto"
            style={{ borderColor: "rgba(111,150,209,0.15)" }}
          >
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{ color: "rgba(9,31,88,0.65)" }}
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
