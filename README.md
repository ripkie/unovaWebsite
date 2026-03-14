# Unova Web — Company Profile

Website company profile Unova dibangun dengan **Next.js 15 App Router**, **Tailwind CSS v4**, dan **TypeScript**.

## 🚀 Cara Menjalankan

### Prasyarat
- Node.js 18.17 atau lebih baru
- npm / yarn / pnpm

### Instalasi

```bash
# Clone / ekstrak project
cd unova-web

# Install dependencies
npm install

# Jalankan development server
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
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + Tailwind theme
│   ├── loading.tsx         # Loading skeleton
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # XML sitemap (SEO)
│   ├── robots.ts           # robots.txt (SEO)
│   ├── products/
│   │   ├── page.tsx        # Halaman daftar produk
│   │   └── [slug]/
│   │       └── page.tsx    # Halaman detail produk
│   ├── blog/
│   │   ├── page.tsx        # Daftar artikel blog
│   │   └── [slug]/
│   │       └── page.tsx    # Detail artikel blog
│   ├── partnership/
│   │   └── page.tsx        # Program kemitraan
│   ├── about/
│   │   └── page.tsx        # Tentang kami
│   └── contact-us/
│       └── page.tsx        # Form kontak
├── components/
│   ├── Navbar.tsx          # Navigasi (fit-rounded on scroll)
│   └── Footer.tsx          # Footer dengan CTA
public/
└── images/
    ├── logo.png            # Logo Unova
    └── product-sensor.png  # Gambar produk sensor
```

---

## 🎨 Konfigurasi Brand

Edit `src/app/globals.css` pada bagian `@theme` untuk mengubah warna brand:

```css
@theme {
  --color-brand-navy: #091F58;   /* Warna utama gelap */
  --color-brand-blue: #6F96D1;   /* Warna aksen biru */
  --color-brand-light: #EDF0F5;  /* Background terang */
}
```

---

## ➕ Menambah Produk Baru

1. Buka `src/app/products/page.tsx`
2. Tambahkan objek produk baru ke array `products`
3. Buat entry di `src/app/products/[slug]/page.tsx` dalam objek `products`
4. Tambahkan gambar produk ke `public/images/`

---

## ✍️ Menambah Artikel Blog

1. Buka `src/app/blog/page.tsx` — tambahkan ke array `internalPosts`
2. Buat entry di `src/app/blog/[slug]/page.tsx` dalam objek `posts`
3. Update `src/app/sitemap.ts` dengan URL artikel baru

---

## 🤝 Menambah Logo Mitra

1. Buka `src/app/partnership/page.tsx`
2. Ganti array `partners` dengan nama/logo mitra asli
3. Untuk menggunakan gambar logo, ganti `<span>` dengan komponen `<Image>`

---

## 🌐 Deploy

### Vercel (Rekomendasi)
```bash
npm i -g vercel
vercel
```

### Domain
Ganti `https://unova.id` di `src/app/layout.tsx` dan `src/app/sitemap.ts` dengan domain asli.

---

## 📞 Kontak

Untuk pertanyaan teknis seputar pengembangan website ini, hubungi tim Unova.
