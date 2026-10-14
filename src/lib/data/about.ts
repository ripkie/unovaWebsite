import { Heart, Users, Lightbulb, Globe } from "lucide-react";

export const values = [
  {
    icon: Lightbulb,
    title: "Inovasi Berkelanjutan",
    desc: "Kami tidak pernah berhenti berinovasi. Setiap produk adalah hasil riset mendalam dan uji lapangan nyata.",
  },
  {
    icon: Users,
    title: "Berpusat pada Pengguna",
    desc: "Desain yang intuitif bukan kemewahan — ini adalah standar minimum kami untuk setiap solusi.",
  },
  {
    icon: Globe,
    title: "Berdampak Lokal, Berskala Global",
    desc: "Mengadaptasi semangat Beeboy dari Korea untuk kebutuhan anak, keluarga, sekolah, dan budaya Indonesia.",
  },
  {
    icon: Heart,
    title: "Integritas & Kepercayaan",
    desc: "Setiap janji adalah komitmen. Kami membangun hubungan jangka panjang dengan klien dan mitra.",
  },
];

export const milestones = [
  { date: "Pengembangan", event: "Adaptasi Beeboy, robot edukasi, board mat, storyline, dan obstacles untuk Indonesia" },
  { date: "Rencana validasi", event: "Workshop dan demonstrasi produk untuk mendukung pengembangan pengalaman belajar anak" },
];

export const deptConfig: Record<string, { label: string; bg: string; text: string; border: string; }> = {
  "C-Level": {
    label: "C-Level",
    bg: "rgba(41,41,41,0.06)",
    text: "#292929",
    border: "rgba(41,41,41,0.12)",
  },
  Engineering: {
    label: "Technical",
    bg: "rgba(163,28,29,0.08)",
    text: "#A31C1D",
    border: "rgba(163,28,29,0.2)",
  },
  Operations: {
    label: "Official",
    bg: "rgba(16,185,129,0.06)",
    text: "#059669",
    border: "rgba(16,185,129,0.15)",
  },
};
