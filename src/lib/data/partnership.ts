import { Globe, Code, Building } from "lucide-react";

import { getPartners } from "@/lib/partners";
import type { Partner } from "@/lib/partners";

export const partners: Partner[] = getPartners();

export const partnerTypes = [
  {
    icon: Globe,
    title: "Mitra Distribusi",
    desc: "Jangkau pasar lebih luas dengan jaringan distribusi Creativity Corner di seluruh Indonesia.",
    perks: ["Margin kompetitif", "Training produk", "Marketing support", "Prioritas stok"],
  },
  {
    icon: Code,
    title: "Mitra Integrasi",
    desc: "Integrasikan solusi Creativity Corner ke dalam proyek smart building klien Anda.",
    perks: ["Akses API penuh", "Technical support 24/7", "Co-marketing", "Demo unit gratis"],
  },
  {
    icon: Building,
    title: "Mitra Teknologi",
    desc: "Kembangkan solusi bersama di atas platform IoT Creativity Corner yang terbuka.",
    perks: ["SDK & dokumentasi", "Joint development", "Revenue sharing", "Co-branding"],
  },
];

export const benefits = [
  "Produk bersertifikat internasional",
  "Dukungan teknis dedicated",
  "Training dan sertifikasi",
  "Co-marketing & lead sharing",
  "Portal mitra eksklusif",
  "Prioritas pembaruan produk",
];

