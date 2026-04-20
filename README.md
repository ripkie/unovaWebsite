# Unova Web - Company Profile

Website company profile Unova dibangun dengan **Next.js 15 App Router**, **Tailwind CSS v4**, dan **TypeScript**.

## 🚀 Cara Menjalankan

### Prasyarat
- Node.js 18.17 atau lebih baru
- npm / yarn / pnpm

### Instalasi

```bash
cd unova-web
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build untuk Produksi

```bash
npm run build
npm run start
```

---

## 📁 Struktur Project

```
src/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles + Tailwind theme
│   ├── loading.tsx             # Loading skeleton
│   ├── not-found.tsx           # 404 page
│   ├── sitemap.ts              # XML sitemap (SEO)
│   ├── robots.ts               # robots.txt (SEO)
│   ├── products/
│   │   ├── page.tsx            # Daftar produk
│   │   └── [slug]/page.tsx     # Detail produk (Gas Leak Prevention, dll)
│   ├── blog/
│   │   ├── page.tsx            # Daftar artikel
│   │   └── [slug]/page.tsx     # Detail artikel
│   ├── partnership/page.tsx    # Halaman kemitraan
│   ├── about/page.tsx          # Tentang kami
│   └── contact-us/page.tsx    # Form kontak
├── components/
│   ├── Navbar.tsx              # Navigasi fit-rounded on scroll
│   └── Footer.tsx              # Footer dengan CTA
├── lib/
│   └── partners.ts             # Utility data mitra (CMS-ready)
public/
├── logoUnova.svg               # Logo SVG vector Unova
└── images/
    ├── product-sensor.png      # Gambar produk
    └── partners/               # Taruh logo mitra di sini
```

---

## 🎨 Konfigurasi Brand

Edit `src/app/globals.css` pada bagian `@theme`:

```css
@theme {
  --color-brand-navy: #091F58;   /* Warna utama gelap */
  --color-brand-blue: #6F96D1;   /* Warna aksen biru */
  --color-brand-light: #EDF0F5;  /* Background terang */
}
```

---

## 🤝 Mengelola Data Mitra

### Cara Cepat — Edit `package.json`

Buka `package.json` dan edit bagian `unova.partners`:

```json
"unova": {
  "partners": [
    {
      "name": "Nama Perusahaan",
      "category": "Kategori",
      "logo": null
    },
    {
      "name": "Mitra dengan Logo",
      "category": "Teknologi",
      "logo": "/images/partners/nama-mitra.svg"
    }
  ]
}
```

**Untuk logo:**
1. Simpan file SVG/PNG ke `public/images/partners/`
2. Isi field `logo` dengan path: `"/images/partners/nama-mitra.svg"`
3. Jika `logo: null`, tampilan akan menggunakan nama teks

### Migrasi ke CMS (Sanity / Contentful / Strapi)

Saat siap, cukup edit `src/lib/partners.ts`:

```typescript
// Ganti fungsi ini dengan fetch ke CMS
export async function getPartners(): Promise<Partner[]> {
  const res = await fetch(`${process.env.CMS_URL}/api/partners`, {
    next: { revalidate: 3600 } // ISR: revalidate setiap 1 jam
  });
  return res.json();
}
```

Semua halaman (Home, Partnership) akan otomatis menggunakan data terbaru.

---

## ➕ Menambah Produk Baru

1. Edit `src/app/products/page.tsx` → tambah ke array `products` (atau `comingSoon`)
2. Buat entry di `src/app/products/[slug]/page.tsx` → tambah ke objek `products`
3. Tambah gambar produk ke `public/images/`
4. Update `src/app/sitemap.ts` dengan URL produk baru

---

## ✍️ Menambah Artikel Blog

1. `src/app/blog/page.tsx` → tambah ke `internalPosts`
2. `src/app/blog/[slug]/page.tsx` → tambah ke objek `posts`
3. `src/app/sitemap.ts` → tambah URL artikel baru

---

## 🌐 Deploy ke Vercel

```bash
npm i -g vercel
vercel
```

Ganti `https://unova.id` di:
- `src/app/layout.tsx` (metadataBase)
- `src/app/sitemap.ts`
- `src/app/robots.ts`

---

## 🔮 Roadmap Teknis

- [ ] Integrasi CMS (Sanity/Contentful) — edit `src/lib/partners.ts` + buat `src/lib/products.ts`
- [ ] Halaman blog dari CMS dengan MDX support
- [ ] Formulir kontak dengan email integration (Resend / SendGrid)
- [ ] Analytics (Vercel Analytics / GA4)
- [ ] i18n Bahasa Inggris untuk pasar regional
