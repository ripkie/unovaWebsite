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

  const navStyle: React.CSSProperties = { maxWidth: "1280px" };
  const textColor = "#625854";
  const textActive = "#352E2B";

  return (
    <header className="cc-site-header fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full" style={navStyle} aria-label="Navigasi utama">
        <div className="cc-navbar-inner">

          {/* Logo */}
          <Link href="/" aria-label="Creativity Corner — Beranda" className="flex items-center shrink-0">
            <Image
              src="/cc-logo.png"
              alt="Logo Creativity Corner"
              width={1459}
              height={1078}
              priority
              className="h-12 md:h-14 w-[76px] object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="cc-navbar-links hidden lg:flex items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className="cc-nav-link px-1 py-2 text-sm transition-all duration-200"
                  style={{
                    color: isActive ? textActive : textColor,
                    fontWeight: 700,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Search bar — hanya di halaman /products */}
          {isProducts && (
            <div ref={searchRef} className="hidden lg:block relative">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl border text-sm" style={{ borderColor: "rgba(184, 92, 92,0.25)", background: "#FFFFFF", width: 160 }}>
                <Search size={14} style={{ color: "#B85C5C" }} className="shrink-0" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setShowDropdown(true); }}
                  onFocus={() => setShowDropdown(true)}
                  placeholder="Cari produk..."
                  aria-label="Cari produk"
                  className="bg-transparent outline-none text-brand-navy placeholder-brand-navy/30 w-full text-sm"
                />
                {search && (
                  <button aria-label="Hapus pencarian" onClick={() => { setSearch(""); setShowDropdown(false); }}>
                    <X size={13} style={{ color: "#B85C5C" }} />
                  </button>
                )}
              </div>
              {/* Dropdown hasil */}
              {showDropdown && search && (
                <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl border border-[#B85C5C]/20 shadow-lg overflow-hidden z-50">
                  {filtered.length > 0 ? filtered.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => { router.push(`/products/${p.id}`); setSearch(""); setShowDropdown(false); }}
                      className="w-full text-left px-4 py-3 hover:bg-[#FFFFFF] transition-colors border-b border-[#B85C5C]/10 last:border-0"
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
            className="cc-navbar-contact hidden lg:inline-flex"
          >
            Hubungi Kami
          </Link>

          {/* Mobile toggle */}
          <button
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            aria-controls="cc-mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="cc-navbar-toggle lg:hidden p-2 rounded-lg"
            style={{ color: textActive }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            id="cc-mobile-menu"
            className="lg:hidden px-5 pb-4 border-t"
            style={{ borderColor: "rgba(184, 92, 92, 0.15)" }}
          >
            <div className="flex flex-col gap-1 pt-3">
              {/* Search bar mobile — hanya di /products */}
              {isProducts && (
                <div className="relative mb-2">
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm" style={{ borderColor: "rgba(184, 92, 92,0.25)", background: "#FFFFFF" }}>
                    <Search size={14} style={{ color: "#B85C5C" }} className="shrink-0" />
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => { setSearch(e.target.value); setShowDropdown(true); }}
                      onFocus={() => setShowDropdown(true)}
                      placeholder="Cari produk..."
                  aria-label="Cari produk"
                      className="bg-transparent outline-none text-brand-navy placeholder-brand-navy/30 w-full text-sm"
                    />
                    {search && (
                      <button aria-label="Hapus pencarian" onClick={() => { setSearch(""); setShowDropdown(false); }}>
                        <X size={13} style={{ color: "#B85C5C" }} />
                      </button>
                    )}
                  </div>
                  {showDropdown && search && (
                    <div className="absolute top-full mt-1 left-0 right-0 bg-white rounded-2xl border border-[#B85C5C]/20 shadow-lg overflow-hidden z-50">
                      {filtered.length > 0 ? filtered.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => { router.push(`/products/${p.id}`); setSearch(""); setShowDropdown(false); setMenuOpen(false); }}
                          className="w-full text-left px-4 py-3 hover:bg-[#FFFFFF] transition-colors border-b border-[#B85C5C]/10 last:border-0"
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
                style={{ background: "#B85C5C" }}
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
