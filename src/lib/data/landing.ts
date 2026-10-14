/** Isi landing page. Tambahkan bahan nyata sebelum mengaktifkan section opsional. */
export const landingContent = {
  hero: { title: "Main kecil.\nIde besar.", subtitle: "Kenalkan Beeboy, teman bermain untuk menjelajah, mencoba, dan belajar STEM.", image: "/images/beeboy/beeboy-held.png" },
  robot: { title: "Halo, aku Beeboy!", lead: "Teman kecil untuk rasa ingin tahu yang besar.", description: "Kenalkan anak pada arah dan urutan melalui permainan bersama robot Beeboy. Setiap perjalanan menjadi kesempatan untuk mencoba langkah baru dan menemukan jalan sendiri.", image: "/images/beeboy/beeboy-robot.png" },
  rfid: { title: "Kartu kecil. Banyak kemungkinan.", lead: "Perintah yang bisa dipegang dan dimainkan.", description: "Kartu RFID menjadi alat bermain untuk memberi perintah kepada Beeboy. Kenali arah, susun langkah, lalu ajak Beeboy menjelajah board mat." },
  board: { title: "Petualangan dimulai di sini.", lead: "Satu board mat, banyak jalan untuk dijelajahi.", description: "Pohon, bebatuan, dan rintangan menjadi bagian dari perjalanan Beeboy. Ajak anak memilih tujuan, memikirkan jalur, dan mencoba urutan perintah di atas board mat.", image: "/images/beeboy/board-mat.png" },
  contact: { title: "Mari bermain bersama.", description: "Ingin mengenal Beeboy lebih dekat atau menjajaki kerja sama dengan Creativity Corner? Kami siap mendengar ceritamu." },
};
// Label dari referensi pengguna. Fungsi 1/3 SCAN tidak diasumsikan.
export const rfidCards = [
  { id: "right", label: "RIGHT", caption: "Kanan" },
  { id: "left", label: "LEFT", caption: "Kiri" },
  { id: "forward", label: "FORWARD", caption: "Maju" },
  { id: "delete", label: "DELETE", caption: "Hapus" },
  { id: "go", label: "GO", caption: "Jalankan" },
  { id: "scan-one", label: "1 SCAN", caption: "1 SCAN" },
  { id: "scan-three", label: "3 SCAN", caption: "3 SCAN" },
] as const;
export const playVideos: { title: string; src: string; poster: string }[] = [];
export const storyPreviews: { title: string; description: string; image: string }[] = [];
export const testimonials: { name: string; role: string; quote: string }[] = [];
