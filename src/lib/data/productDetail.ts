import React from "react";

import { UtensilsCrossed, Building2, Hotel } from "lucide-react";

export interface ProductData {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  price: string;
  image: string;
  focus: string;
  description: string;
  highlights: string[];
  specs: Record<string, string>;
  useCases: { icon: React.ElementType; title: string; desc: string; }[];
  compatibleWith: string[];
}

export const products: Record<string, ProductData> = {
  "gas-leak-prevention": {
    id: "gas-leak-prevention",
    name: "Gas Leak Prevention",
    tagline: "Proteksi otomatis dari kebocoran gas",
    badge: "Tersedia Sekarang",
    badgeColor: "bg-green-500",
    price: "Rp 1xx.xxx",
    image: "/images/fotoProduct/FP-Gas_Leak.png",
    focus: "Keamanan",
    description:
      "Gas Leak Prevention adalah solusi keamanan rumah dari Creativity Corner yang mendeteksi kebocoran LPG dan gas alam secara real-time. Dilengkapi valve otomatis yang langsung menutup regulator gas saat kebocoran terdeteksi, serta alarm suara keras dan notifikasi ke smartphone - memberikan perlindungan berlapis untuk mencegah risiko kebakaran dan ledakan.",
    highlights: [
      "Deteksi kebocoran LPG, gas alam, dan gas beracun (CO)",
      "Valve elektromagnetik otomatis menutup regulator < 10 detik",
      "Alarm suara 85dB + notifikasi push ke smartphone",
      "Koneksi Wi-Fi — pantau status gas dari mana saja",
      "Sensor dual-element untuk akurasi tinggi, false alarm rendah",
      "Backup baterai 24 jam saat listrik padam",
      "Instalasi mudah — plug & play dengan panduan video",
      "Kompatibel dengan ekosistem Creativity Corner dan smart home lain",
    ],
    specs: {
      "Gas yang Dideteksi": "LPG, Gas Alam (Metana), CO",
      "Sensitivitas": "100–10.000 ppm (adjustable)",
      "Waktu Respons": "< 10 detik sejak deteksi",
      "Alarm Suara": "85 dB @ 1 meter",
      "Konektivitas": "Wi-Fi 2.4GHz (IEEE 802.11 b/g/n)",
      "Tegangan Input": "220V AC / Backup 3.7V Li-ion",
      "Backup Baterai": "Hingga 24 jam",
      "Dimensi Sensor": "Ø 110mm × 38mm",
      "Dimensi Valve": "1/2 inch BSP, DN15",
      "Suhu Operasi": "0°C hingga +50°C",
      "Sertifikasi": "SNI, CE, RoHS",
      "Garansi": "2 tahun",
    },
    useCases: [
      { icon: UtensilsCrossed, title: "Dapur Rumah Tangga", desc: "Proteksi kompor gas dari kebocoran regulator, selang, maupun fitting yang longgar." },
      { icon: Building2, title: "Restoran & Café", desc: "Keamanan operasional dapur komersial 24/7 dengan monitoring jarak jauh via dashboard." },
      { icon: Hotel, title: "Hotel & Kost", desc: "Lindungi puluhan unit sekaligus dengan sistem alert terpusat ke manajemen." },
    ],
    compatibleWith: ["Creativity Corner App", "Google Home", "Amazon Alexa", "Home Assistant", "MQTT"],
  },
};
