/**
 * lib/partners.ts
 *
 * Single source of truth untuk data mitra Unova.
 *
 * Cara kerja saat ini:
 *   - Data dibaca dari `package.json > unova.partners`
 *   - Untuk menambah mitra: edit field tersebut, atau ganti `logo: null`
 *     dengan path ke file gambar di /public/images/partners/nama-mitra.svg
 *
 * Migrasi ke CMS (Sanity / Contentful / Strapi):
 *   - Cukup ganti fungsi `getPartners()` di bawah dengan fetch ke CMS API
 *   - Semua komponen yang mengimpor dari sini akan otomatis terupdate
 *   - Tidak perlu ubah kode di halaman apapun
 *
 * Contoh setelah pakai CMS:
 *   export async function getPartners(): Promise<Partner[]> {
 *     const res = await fetch(`${process.env.CMS_URL}/api/partners`);
 *     return res.json();
 *   }
 */

import pkgJson from "../../package.json";

export interface Partner {
  name: string;
  category: string;
  /** Path ke logo di /public, atau URL eksternal. null = tampilkan nama saja. */
  logo: string | null;
}

/**
 * Ambil daftar mitra.
 * Saat ini sinkronus (dari package.json).
 * Ganti dengan async fetch saat migrasi ke CMS.
 */
export function getPartners(): Partner[] {
  const pkg = pkgJson as { unova?: { partners?: Partner[] } };
  return pkg.unova?.partners ?? [];
}
