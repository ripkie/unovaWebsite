import { ShieldAlert, Bell, Droplets, Zap } from "lucide-react";
import { getPartners } from "@/lib/partners";
import type { Partner } from "@/lib/partners";

export const partners: Partner[] = getPartners();

export const features = [
  {
    icon: ShieldAlert,
    title: "Deteksi Bahaya Dini",
    desc: "Sensor cerdas mendeteksi kebocoran gas, asap, dan karbon monoksida sebelum menjadi bencana.",
    color: "bg-red-500/10 text-red-500",
  },
  {
    icon: Droplets,
    title: "Udara Sehat Setiap Hari",
    desc: "Monitor dan jaga kualitas udara, kelembapan, dan suhu optimal untuk kesehatan keluarga.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Bell,
    title: "Alert Real-Time",
    desc: "Notifikasi instan ke smartphone Anda kapan pun ada kondisi berbahaya di rumah.",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    icon: Zap,
    title: "Respons Otomatis",
    desc: "Valve otomatis, alarm suara, dan integrasi perangkat merespons tanpa butuh interaksi manual.",
    color: "bg-green-500/10 text-green-500",
  },
];

export const stats = [
  { value: "< 10s", label: "Waktu Respons Deteksi" },
  { value: "99.9%", label: "Akurasi Sensor" },
  { value: "24/7", label: "Monitoring Aktif" },
  { value: "2 Thn", label: "Garansi Produk" },
];
