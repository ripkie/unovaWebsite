/**
 * lib/team.ts
 *
 * Single source of truth untuk data tim Unova.
 * Data dibaca dari `package.json > unova.team`
 *
 * Cara edit tim:
 *   1. Buka package.json
 *   2. Edit array `unova.team`
 *   3. Field per anggota:
 *      - id        : string unik (snake_case), dipakai untuk reportsTo
 *      - name      : nama lengkap
 *      - role      : jabatan yang ditampilkan
 *      - department: "C-Level" | "Engineering" | "Operations"
 *      - reportsTo : id atasan langsung, null untuk CEO
 *      - bio       : deskripsi singkat (1-2 kalimat)
 *      - photo     : path ke foto di /public/images/team/nama.jpg
 *                    atau null untuk tampilkan avatar default
 *
 * Migrasi ke CMS:
 *   Ganti fungsi getTeam() dengan fetch ke CMS API.
 *   Semua halaman yang import dari sini otomatis terupdate.
 */

import pkgJson from "../../package.json";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: "C-Level" | "Engineering" | "Operations";
  reportsTo: string | null;
  bio: string;
  photo: string | null;
}

export function getTeam(): TeamMember[] {
  return ((pkgJson as any).unova?.team ?? []) as TeamMember[];
}

/** Ambil hanya C-Level */
export function getCLevel(): TeamMember[] {
  return getTeam().filter((m) => m.reportsTo === null || m.department === "C-Level");
}

/** Ambil anggota yang melapor ke ID tertentu */
export function getReportsTo(managerId: string): TeamMember[] {
  return getTeam().filter((m) => m.reportsTo === managerId);
}
