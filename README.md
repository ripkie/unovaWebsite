# Creativity Corner website

Website CC dengan layout, konten, produk, dan interaksi Unova yang telah disetujui. Palet CC, font Plus Jakarta Sans, dan logo CC dipertahankan. Struktur routing, layout, section, data, dan state tetap terpisah. Pembaruan SEO menyesuaikan identitas teks dan pengantar Home/About berdasarkan PDF Beeboy, tanpa mengganti struktur visual atau katalog produk.

## Menjalankan

```bash
npm ci
npm run dev
```

Produksi: `npm run build`, kemudian `npm start`.

## Struktur

| Folder | Fungsi |
| --- | --- |
| `src/app/` | Routing Next.js, metadata, root layout, API kontak, sitemap, dan robots |
| `src/components/layouts/` | Urutan section untuk setiap halaman |
| `src/components/layouts/shared/` | Navbar dan Footer |
| `src/components/contents/` | Komponen section per halaman: home, about, products, partnership, blog, contact, productDetail, blogDetail |
| `src/components/forms/` | Form kontak |
| `src/components/ui/` | Komponen kecil bersama, termasuk SectionVisibility |
| `src/lib/config/sections.ts` | Pengaturan tampil/sembunyi section dan navbar/footer |
| `src/lib/data/` | Konten dan data per halaman |
| `src/lib/hooks/` | State carousel produk, filter blog/newsletter, dan form kontak |
| `src/lib/page-state/` | Persiapan data halaman server serta validasi slug detail |
| `src/lib/team.ts`, `src/lib/partners.ts` | Pembaca konfigurasi tim/mitra dari package.json |
| `public/` | Logo CC, foto produk, foto tim, dan aset lainnya |

Route `page.tsx` hanya memanggil layout halaman. Contoh: `src/app/page.tsx` → `HomeLayout.tsx` → `contents/home/*Section.tsx`.

## Tampilkan / sembunyikan section

Edit `src/lib/config/sections.ts`. `true` menampilkan section, `false` menyembunyikannya. Semua flag default `true` agar tampilan sama dengan versi sebelumnya.

Contoh, sembunyikan statistik Home:

```ts
home: {
  hero: true,
  stats: false,
  features: true,
  featuredProduct: true,
  partners: true,
},
```

Konfigurasi yang tersedia:

| Halaman | Flag section |
| --- | --- |
| Home | hero, stats, features, featuredProduct, partners |
| About | hero, story, values, milestones, welcome, team, cta |
| Products | hero, productCarousel, comingSoon |
| Partnership | hero, partnerSlider, partnerTypes, benefits |
| Blog | hero, categoryFilter, internalPosts, externalArticles, newsletter |
| Contact | hero, contactInfo, contactMain |
| Product detail | hero, specifications, howItWorks, useCases, compatibility |
| Blog detail | hero, articleContent |

Navbar/Footer diatur dengan `siteVisibility.navbar` dan `siteVisibility.footer` pada file yang sama.

Layout memakai `SectionVisibility` tanpa elemen pembungkus HTML; section tersembunyi tidak meninggalkan ruang kosong. Urutan section bisa diubah langsung di `src/components/layouts/*Layout.tsx`. Jika ingin override untuk satu layout saja, ubah deklarasi lokalnya:

```ts
const sections = { ...sectionVisibility.home, stats: false };
```

Saat development, perubahan config mengikuti hot reload. Untuk produksi, build dan deploy ulang. Pengaturan ini berbasis source code; belum berupa CMS/admin atau preferensi pengguna.

## Mengubah isi

Edit section di `components/contents/<halaman>/`, dan data di `lib/data/<halaman>.ts`. State interaktif ada di hooks; section menerima state lewat props dari layout. Form kontak dipisah ke `components/forms/ContactForm.tsx` dan tetap memakai `/api/contact`.

Tim/mitra tetap berasal dari `package.json > unova`, sesuai versi yang disetujui. Identitas teks dan metadata sekarang menggunakan Creativity Corner serta domain creativitycorner.cc. Produk dan artikel lama tetap dipertahankan sesuai arahan. Logo yang tampil memakai aset CC asli tanpa filter warna.

## Konfigurasi email

Salin `.env.example` ke `.env.local` lalu isi `RESEND_API_KEY` dan `EMAIL_TO`. Kredensial unggahan asli tidak disertakan. Pengiriman email langsung tidak diuji pada refactor ini.

## Validasi

Pemeriksaan TypeScript, build produksi, perbandingan hasil render halaman sebelum/sesudah, dan pengujian flag hide/show pada Home, Products, dan About dilakukan saat refactor. Semua flag pada hasil akhir tetap aktif.


## SEO — domain produksi

Domain canonical: `https://creativitycorner.cc`. Pengaturan ada di `src/lib/config/site.ts`; helper metadata di `src/lib/seo/metadata.ts` dan schema di `src/lib/seo/structured-data.ts`.

Yang diperbarui:

- Nama brand/domain pada metadata, header konten, dan footer menjadi Creativity Corner.
- Judul/deskripsi unik dan canonical untuk setiap halaman, termasuk detail produk/artikel.
- Pengantar Home, About, kisah/visi, dan pengantar kemitraan disesuaikan dengan halaman 3 dan 14 PDF Beeboy yang diberikan. Layout dan flag section tetap sama.
- Open Graph/Twitter image 1200 × 630 melalui `/opengraph-image`.
- Organization dan WebSite JSON-LD di Home; breadcrumb schema pada halaman lainnya.
- Sitemap mengikuti registri halaman detail yang ada. Tidak memakai tanggal lastModified buatan.
- Detail artikel/produk valid diprerender; slug tidak dikenal tetap 404.
- Preview Vercel otomatis noindex. Untuk staging di hosting lain, set SITE_INDEXABLE=false.
- URL detail Humidifier yang sebelumnya 404 diarahkan permanen ke katalog produk. Tidak ada datasheet baru yang dibuat.
- Aset lama yang tidak dipakai di public dihapus dari archive.

Produk smart-home dan artikel lama tetap ada sesuai arahan. Data tersebut tidak dipresentasikan sebagai spesifikasi Beeboy. Harga target, sertifikasi yang masih direncanakan, angka performa riset, serta pilihan nama/logo dalam PDF tidak dimasukkan ke schema sebagai fakta produk. Tidak ada markup Product/Offer/Review baru dari data harga placeholder. Data tim masih memakai roster sebelumnya; tidak diperbarui dari struktur organisasi PDF dalam pekerjaan SEO ini.

### Cara replace

Copy isi ZIP ke proyek yang sudah memakai struktur terbaru. Sertakan `src`, `next.config.ts`, `package.json`, `README.md`, `.env.example`, serta aset `public` yang dibutuhkan. Dependencies tidak berubah. File package.json hanya memperbarui penyebutan brand pada bio tim; field `unova` tetap dipakai agar pembaca konfigurasi yang ada tidak berubah. Pertahankan `.env.local` dan kredensial milikmu.

Build ulang setelah replace:

```powershell
if (Test-Path ".next") { Remove-Item ".next" -Recurse -Force }
npm run build
```

### Setelah deploy

1. Pastikan domain utama melayani situs melalui HTTPS.
2. Tambahkan properti domain `creativitycorner.cc` ke Google Search Console dan lakukan verifikasi DNS. Alternatif properti URL-prefix memakai token HTML-meta: set GOOGLE_SITE_VERIFICATION pada environment hosting.
3. Submit `https://creativitycorner.cc/sitemap.xml` di Search Console.
4. Gunakan URL Inspection dan Rich Results Test pada domain live.
5. Jika hosting/domain preview berbeda, pastikan noindex; halaman produksi harus SITE_INDEXABLE=true.

Pengaturan opsional `.env.local` atau hosting:

```dotenv
NEXT_PUBLIC_SITE_URL=https://creativitycorner.cc
GOOGLE_SITE_VERIFICATION=
SITE_INDEXABLE=true
```

Token verifikasi tidak dibuat oleh aplikasi; gunakan token milik properti Search Console kamu. Perubahan kode belum dideploy dan properti Search Console belum didaftarkan dari sesi ini.

Validasi SEO: build produksi lolos; seluruh 12 halaman memiliki canonical yang tepat, judul/deskripsi, satu H1, metadata sosial dan JSON-LD; sitemap sesuai URL halaman yang valid. Preview noindex, escaping JSON-LD, slug metadata invalid/404, serta gambar sosial juga diperiksa. Pengiriman email tidak diuji.

Acuan teknis:
- https://nextjs.org/docs/15/app/api-reference/functions/generate-metadata
- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
