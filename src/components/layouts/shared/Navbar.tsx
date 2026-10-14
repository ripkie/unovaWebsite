"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Produk" },
  { href: "/blog", label: "Blog" },
  { href: "/partnership", label: "Kemitraan" },
  { href: "/about", label: "Tentang Kami" },
];

const productList = [
  { id: "gas-leak-prevention", name: "Gas Leak Prevention", desc: "Proteksi otomatis dari kebocoran gas" },
  { id: "humidifier-dehumidifier-2in1", name: "Humidifier & Dehumidifier 2in1", desc: "Jaga kelembapan udara rumah secara otomatis" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isProducts = pathname === "/products";
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = productList.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase())
  );

  const isTransparent = false;

  const navStyle: React.CSSProperties = {
    maxWidth: "1000px",
    borderRadius: "18px",
    transition: "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
    background: isTransparent
      ? "rgba(255, 255, 255, 0.01)"
      : "rgba(255, 255, 255, 0.92)",
    backdropFilter: isTransparent ? "none" : "blur(18px)",
    WebkitBackdropFilter: isTransparent ? "none" : "blur(18px)",
    border: isTransparent
      ? "1px solid rgba(41, 41, 41, 0.1)"
      : "1px solid rgba(163, 28, 29, 0.22)",
    boxShadow: isTransparent
      ? "none"
      : "0 4px 28px rgba(163, 28, 29, 0.13)",
  };

  const textColor = "rgba(41, 41, 41, 0.65)";
  const textActive = "#292929";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav className="w-full" style={navStyle}>
        <div className="flex items-center justify-between px-5 py-3 gap-3">

          {/* Logo */}
          <Link href="/" aria-label="Creativity Corner — Beranda" className="flex items-center shrink-0">
            <Image
              src="/cc-logo.png"
              alt="Logo Creativity Corner"
              width={1459}
              height={1078}
              priority
              className="h-10 w-[54px] object-contain"
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
                  className="px-3 py-2 rounded-xl text-xs md:text-sm transition-all duration-200"
                  style={{
                    color: isActive ? textActive : textColor,
                    fontWeight: isActive ? 600 : 500,
                    background: isActive ? "rgba(163, 28, 29, 0.1)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Search bar — hanya di halaman /products */}
          {isProducts && (
            <div ref={searchRef} className="hidden md:block relative">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl border text-sm" style={{ borderColor: "rgba(163,28,29,0.25)", background: "#FFFFFF", width: 160 }}>
                <Search size={14} style={{ color: "#A31C1D" }} className="shrink-0" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setShowDropdown(true); }}
                  onFocus={() => setShowDropdown(true)}
                  placeholder="Cari produk..."
                  className="bg-transparent outline-none text-brand-navy placeholder-brand-navy/30 w-full text-sm"
                />
                {search && (
                  <button onClick={() => { setSearch(""); setShowDropdown(false); }}>
                    <X size={13} style={{ color: "#A31C1D" }} />
                  </button>
                )}
              </div>
              {/* Dropdown hasil */}
              {showDropdown && search && (
                <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl border border-[#A31C1D]/20 shadow-lg overflow-hidden z-50">
                  {filtered.length > 0 ? filtered.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => { router.push(`/products/${p.id}`); setSearch(""); setShowDropdown(false); }}
                      className="w-full text-left px-4 py-3 hover:bg-[#FFFFFF] transition-colors border-b border-[#A31C1D]/10 last:border-0"
                    >
                      <div className="text-brand-navy font-semibold text-sm">{p.name}</div>
                      <div className="text-brand-navy/45 text-xs mt-0.5">{p.desc}</div>
                    </button>
                  )) : (
                    <div className="px-4 py-3 text-brand-navy/40 text-sm">Produk tidak ditemukan</div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* CTA */}
          <Link
            href="/contact-us"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-xl text-xs md:text-sm font-semibold text-white transition-all duration-200 shrink-0"
            style={{ background: "#292929" }}
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
            style={{ borderColor: "rgba(163, 28, 29, 0.15)" }}
          >
            <div className="flex flex-col gap-1 pt-3">
              {/* Search bar mobile — hanya di /products */}
              {isProducts && (
                <div className="relative mb-2">
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm" style={{ borderColor: "rgba(163,28,29,0.25)", background: "#FFFFFF" }}>
                    <Search size={14} style={{ color: "#A31C1D" }} className="shrink-0" />
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => { setSearch(e.target.value); setShowDropdown(true); }}
                      onFocus={() => setShowDropdown(true)}
                      placeholder="Cari produk..."
                      className="bg-transparent outline-none text-brand-navy placeholder-brand-navy/30 w-full text-sm"
                    />
                    {search && (
                      <button onClick={() => { setSearch(""); setShowDropdown(false); }}>
                        <X size={13} style={{ color: "#A31C1D" }} />
                      </button>
                    )}
                  </div>
                  {showDropdown && search && (
                    <div className="absolute top-full mt-1 left-0 right-0 bg-white rounded-2xl border border-[#A31C1D]/20 shadow-lg overflow-hidden z-50">
                      {filtered.length > 0 ? filtered.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => { router.push(`/products/${p.id}`); setSearch(""); setShowDropdown(false); setMenuOpen(false); }}
                          className="w-full text-left px-4 py-3 hover:bg-[#FFFFFF] transition-colors border-b border-[#A31C1D]/10 last:border-0"
                        >
                          <div className="text-brand-navy font-semibold text-sm">{p.name}</div>
                          <div className="text-brand-navy/45 text-xs mt-0.5">{p.desc}</div>
                        </button>
                      )) : (
                        <div className="px-4 py-3 text-brand-navy/40 text-sm">Produk tidak ditemukan</div>
                      )}
                    </div>
                  )}
                </div>
              )}
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
                style={{ background: "#292929" }}
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
