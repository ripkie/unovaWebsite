# Creativity Corner website

Next.js CC dengan landing page baru yang mengikuti komposisi Primo: judul besar di tengah, Beeboy dipegang tangan, lalu pengenalan robot, kartu RFID, board mat, dan kontak. Menu, urutan, dan URL navbar CC tetap. Navbar memakai link tebal di sisi kanan tanpa tombol kontak berbentuk pill, sesuai referensi screenshot. Hero memiliki 17 partikel geometris yang mengambang dan berputar (11 pada mobile); animasi nonaktif saat pengguna memilih reduced motion. Font Plus Jakarta Sans. Palet soft berlaku di semua halaman; halaman selain Home mempertahankan layout dan konten sebelumnya.

## Menjalankan

```bash
npm ci
npm run dev
```

Produksi: `npm run build`, lalu `npm start`.

## Replace ke project yang sudah ada

1. Backup project atau commit perubahan lokal terlebih dahulu.
2. Copy/overwrite folder `src` dari ZIP ke project CC.
3. Copy folder baru `public/images/beeboy` ke lokasi yang sama pada project. Jangan hapus folder public yang lain.
4. Copy `README.md` dan `cleanup-old-home.ps1` ke root project (folder yang berisi package.json).
5. Jalankan cleanup untuk lima file Home lama. Script tidak menyentuh file lain.
6. Hapus cache `.next`, lalu build ulang. Setelah lolos, deploy seperti biasa.

Dependencies, package.json, package-lock.json, dan next.config.ts tidak berubah dalam pembaruan landing ini. Pertahankan `.env.local`, node_modules, semua gambar lama yang masih dipakai halaman lain, dan pengaturan hosting milikmu.

PowerShell dari root project:

```powershell
powershell -ExecutionPolicy Bypass -File .\cleanup-old-home.ps1
if (Test-Path ".next") {
    Remove-Item ".next" -Recurse -Force
}
npm run build
```

File lama yang dihapus oleh script:

- src/components/contents/home/StatsSection.tsx
- src/components/contents/home/FeaturesSection.tsx
- src/components/contents/home/FeaturedProductSection.tsx
- src/components/contents/home/PartnersSection.tsx
- src/lib/data/home.ts

HeroSection.tsx dan HomeLayout.tsx direplace, jangan dihapus. Tidak ada perubahan route atau penghapusan produk/artikel lama.

## Struktur file

| Folder/file | Fungsi |
| --- | --- |
| src/app | Routing, metadata, root layout, API kontak, sitemap, robots |
| src/components/layouts | Urutan section per halaman |
| src/components/layouts/shared | Navbar dan Footer |
| src/components/contents/home | Hero, Robot, RFID, Board Mat, Contact dan section opsional |
| src/components/contents | Section halaman lainnya |
| src/lib/data/landing.ts | Teks Home, tujuh kartu RFID, data video/cerita/testimoni |
| src/lib/config/sections.ts | Hide/show semua section, navbar/footer |
| src/app/globals.css | Palet global dan style landing/navbar/footer |
| src/lib/hooks, src/lib/page-state | State halaman lain dan validasi slug |
| public/images/beeboy | Tiga aset Beeboy/board mat dari pengguna |

## Hide/show section

Edit src/lib/config/sections.ts: true = tampil, false = hide. Home memakai:

```ts
home: {
  hero: true,
  robot: true,
  rfid: true,
  boardMat: true,
  videos: false,
  stories: false,
  testimonials: false,
  contact: true,
},
```

Video, cerita, dan testimoni default false karena bahan belum tersedia. Isi array playVideos, storyPreviews, atau testimonials di src/lib/data/landing.ts, lalu aktifkan flag yang sesuai. Data kosong tetap tidak menghasilkan placeholder/ruang kosong, walaupun flag true. Jangan masukkan testimoni atau informasi produk yang belum terkonfirmasi. Label 1 SCAN/3 SCAN ditampilkan sesuai gambar pengguna tanpa mengasumsikan fungsi teknisnya.

| Halaman lain | Flag |
| --- | --- |
| About | hero, story, values, milestones, welcome, team, cta |
| Products | hero, productCarousel, comingSoon |
| Partnership | hero, partnerSlider, partnerTypes, benefits |
| Blog | hero, categoryFilter, internalPosts, externalArticles, newsletter |
| Contact | hero, contactInfo, contactMain |
| Product detail | hero, specifications, howItWorks, useCases, compatibility |
| Blog detail | hero, articleContent |

siteVisibility.navbar dan siteVisibility.footer mengatur elemen bersama. Urutan diubah melalui layout. Untuk produksi, perubahan config memerlukan build/deploy ulang; bukan CMS/admin.

## Palet soft dan aset

| Fungsi | Hex |
| --- | --- |
| Background utama | #FFF9F5 |
| Background soft | #F5E7E4 |
| Tombol/aksen | #B85C5C |
| Hover/aksen gelap | #984747 |
| Dekorasi | #DAB5AF |
| Judul | #352E2B |
| Teks | #625854 |
| Kartu | #FFFFFF |

Token Tailwind berada di globals.css. Warna inline pada halaman lama juga diselaraskan. Logo asli CC dan gambar produk tidak diubah warnanya. Kartu RFID dibuat dengan SVG/icon agar tajam dan memakai biru lembut sesuai referensi alat bermain. Robot dan board memakai berkas pengguna; tidak ada aset Primo yang disalin.

Foto/render robot dari pengguna tetap dipakai sebagaimana diberikan. Foto samping/belakang, video, cover cerita, usia, harga, sertifikasi, dan testimoni tidak dibuat sebagai fakta produk baru.

## SEO dan konfigurasi

Domain canonical https://creativitycorner.cc. Metadata per halaman, JSON-LD Organization/WebSite/Breadcrumb, gambar sosial, sitemap 12 URL, robots, preview noindex, dan redirect detail Humidifier tetap tersedia. Gambar sosial mengikuti palet soft. Navbar dan footer mengarah ke halaman yang ada.

Produk dan artikel smart-home lama tetap ada pada halaman lain sesuai scope pembaruan ini. Data tim/mitra tetap berasal dari package.json > unova. Pembaruan konten halaman lain dilakukan terpisah dari redesign Home.

Pertahankan konfigurasi pada .env.local/hosting:

```dotenv
NEXT_PUBLIC_SITE_URL=https://creativitycorner.cc
SITE_INDEXABLE=true
GOOGLE_SITE_VERIFICATION=
```

Form kontak tetap memakai /api/contact; isi RESEND_API_KEY dan EMAIL_TO pada environment sendiri. Tidak ada kredensial yang disertakan dalam ZIP.

## Validasi pembaruan

- Build produksi dan pemeriksaan TypeScript lolos.
- Seluruh 12 halaman memiliki canonical, title, description, satu H1, metadata sosial dan JSON-LD; sitemap sesuai route nyata.
- Hide/show lima section utama Home, Products, dan About diuji melalui render React. Section opsional kosong tidak menghasilkan markup.
- Menu desktop/mobile, breakpoint CSS, referensi aset, dan teks halaman lain diperiksa dari source/HTML hasil build.
- Pengujian visual browser desktop/mobile belum dijalankan di lingkungan pengerjaan ini. Periksa tampilan di npm run dev sebelum deploy; pengiriman email langsung juga belum diuji.

Pembaruan ini berupa source ZIP dan belum dideploy ke domain produksi.

## Patch animasi dan navbar (setelah versi landing pertama)

Jika versi landing sebelumnya sudah direplace, cukup copy/overwrite:

- src/app/globals.css
- src/components/layouts/shared/Navbar.tsx
- src/components/contents/home/HeroSection.tsx
- src/components/contents/home/HeroParticles.tsx (baru)
- README.md (panduan)

Tidak ada file lama tambahan yang harus dihapus. Aset gambar, menu/link, palet soft, font, data, konfigurasi section, dan SEO tetap. Bersihkan .next lalu npm run build. Tampilan ini disesuaikan dari screenshot pengguna; pengujian visual browser belum tersedia.

## English website update

All visible website copy is now English: Home, About, Products, product details, Blog, full articles, Partnerships, Contact, navbar/footer, forms, loading/404 states, accessibility labels, team bios and partner categories, email notifications, and SEO metadata. The document language is en, Open Graph locale is en_US, and WebSite schema inLanguage is en. Dates and reading-time labels are localized; IDR remains the currency.

For this update, copy/overwrite src and package.json from the ZIP. package.json contains translated team/partner data only; dependencies are unchanged. Keep .env.local, public assets, package-lock.json, next.config.ts, and existing hosting settings. No files need to be deleted. Clear .next and run npm run build after replacement.

Routes, slugs, form API field names and topic IDs, menu destinations, section visibility, animation, colors, and typography are preserved. Comments and this developer README may still use Indonesian; they are not website copy. User-entered messages and external destination websites keep their own language.

Email error messages and notification templates are English. The email input now uses type=email so native validation recognizes the field correctly. Sending via the real email service was not performed.

## CC Products catalog update

Products now follows the Primo shop structure with category links and product rows: Beeboy, Adventure Maps, and RFID Cards. Three detail routes are available: /products/beeboy, /products/forest-board-mat, and /products/rfid-command-cards. Prices, sales status, kit quantities, age ratings, warranty, and certifications are omitted until confirmed. Contact Us replaces checkout; Learn More opens the product detail page. Story names and further adventure maps can be added to src/lib/data/products.ts when provided. Existing smart-home blog articles remain separate from this catalog update.

Copy/overwrite src, next.config.ts, README.md, and cleanup-old-products.ps1 from this ZIP. No dependency changes or new image files. Keep package.json and .env.local from your current English website. Run the cleanup script from the project root after replacement:

```powershell
powershell -ExecutionPolicy Bypass -File .\cleanup-old-products.ps1
if (Test-Path ".next") { Remove-Item ".next" -Recurse -Force }
npm run build
```

The script removes only four retired files listed inside it. It does not delete new catalog components or assets. Product visibility flags now use hero, categories, playsets, adventureMaps, and rfidCards. Detail flags use hero, specifications, howItWorks, and compatibility. Hiding a catalog group also removes its category link. The navbar search uses the new catalog. The two old smart-home product detail URLs permanently redirect to /products. Sitemap now follows the three real detail routes (14 website URLs total).
