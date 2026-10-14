import { ShieldAlert, Wind, Package, Droplets, Bell } from "lucide-react";

export const products = [
  {
    id: "gas-leak-prevention",
    name: "Gas Leak Prevention",
    tagline: "Proteksi otomatis dari kebocoran gas",
    description: "Gas leak detector dengan alarm dan valve otomatis yang menutup regulator saat kebocoran terdeteksi. Memberikan perlindungan cepat untuk mencegah risiko kebakaran dan ledakan pada sistem gas.",
    image: "/images/fotoProduct/FP-Gas_Leak.png",
    badge: "Tersedia",
    badgeColor: "bg-green-500",
    focus: "Keamanan",
    focusColor: "text-red-400 bg-red-500/10",
    specs: ["Deteksi LPG & Gas Alam", "Valve Otomatis", "Alarm 85dB", "Notifikasi App"],
    price: "Mulai dari Rp 1xx.xxx",
    highlights: [
      { icon: ShieldAlert, text: "Respon deteksi < 10 detik" },
      { icon: Bell, text: "Alarm suara & push notification" },
      { icon: Package, text: "Valve otomatis menutup regulator" },
    ],
  },
  {
    id: "humidifier-dehumidifier-2in1",
    name: "Humidifier & Dehumidifier 2in1",
    tagline: "Jaga kelembapan udara rumah secara otomatis",
    description: "Satu perangkat dua fungsi — tambah kelembapan saat terlalu kering, kurangi saat terlalu lembap. Dilengkapi sensor PM2.5, mode senyap, dan kontrol penuh via aplikasi.",
    image: "/images/fotoProduct/FP-Humidifier.jpeg",
    badge: "Tidak Tersedia",
    badgeColor: "bg-gray-400",
    focus: "Kesehatan",
    focusColor: "text-green-600 bg-green-500/10",
    specs: ["Auto Humidity Control", "Sensor PM2.5", "Quiet mode <25dB", "App Control"],
    price: "Segera Hadir",
    highlights: [
      { icon: Droplets, text: "Kontrol kelembapan otomatis" },
      { icon: Wind, text: "Filter udara PM2.5" },
      { icon: Bell, text: "Notifikasi & kontrol via app" },
    ],
  },
];

export const comingSoon = [
  {
    id: "air-quality-monitor",
    name: "Air Quality Monitor",
    desc: "Monitor kualitas udara real-time: CO₂, VOC, PM2.5, suhu, dan kelembapan dalam satu perangkat kompak.",
    icon: Wind,
    focus: "Kesehatan",
    eta: "Q4 2025",
    features: ["CO₂ & VOC sensor", "PM2.5 detector", "Real-time dashboard", "Historical data"],
  },
  {
    id: "smart-smoke-detector",
    name: "Smart Smoke Detector",
    desc: "Detektor asap pintar dengan koneksi ke ekosistem Creativity Corner. Alert ke smartphone sebelum asap memenuhi ruangan.",
    icon: ShieldAlert,
    focus: "Keamanan",
    eta: "Q1 2026",
    features: ["Photoelectric sensor", "App alert", "Interconnected", "10yr battery"],
  },
];
