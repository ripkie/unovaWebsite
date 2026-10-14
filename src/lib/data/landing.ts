/** Isi landing page. Tambahkan bahan nyata sebelum mengaktifkan section opsional. */
export const landingContent = {
  hero: { title: "Little play.\nBig ideas.", subtitle: "Meet Beeboy, a play companion for exploring, experimenting, and learning STEM.", image: "/images/beeboy/beeboy-held.png" },
  robot: { title: "Hi, I’m Beeboy!", lead: "A little friend for big curiosity.", description: "Introduce children to directions and sequences through play with Beeboy. Every journey is a chance to try new steps and find their own way.", image: "/images/beeboy/beeboy-robot.png" },
  rfid: { title: "Little cards. Endless possibilities.", lead: "Commands children can hold and play with.", description: "RFID cards let children give commands to Beeboy. Explore directions, plan the steps, and guide Beeboy around the board mat." },
  board: { title: "Adventure starts here.", lead: "One board mat. So many paths to explore.", description: "Trees, rocks, and obstacles become part of Beeboy’s journey. Invite children to choose a destination, plan a route, and try command sequences on the board mat.", image: "/images/beeboy/board-mat.png" },
  contact: { title: "Let’s play together.", description: "Want to get to know Beeboy or explore a partnership with Creativity Corner? We would love to hear from you." },
};
// Label dari referensi pengguna. Fungsi 1/3 SCAN tidak diasumsikan.
export const rfidCards = [
  { id: "right", label: "RIGHT", caption: "Right" },
  { id: "left", label: "LEFT", caption: "Left" },
  { id: "forward", label: "FORWARD", caption: "Forward" },
  { id: "delete", label: "DELETE", caption: "Delete" },
  { id: "go", label: "GO", caption: "Go" },
  { id: "scan-one", label: "1 SCAN", caption: "1 SCAN" },
  { id: "scan-three", label: "3 SCAN", caption: "3 SCAN" },
] as const;
export const playVideos: { title: string; src: string; poster: string }[] = [];
export const storyPreviews: { title: string; description: string; image: string }[] = [];
export const testimonials: { name: string; role: string; quote: string }[] = [];
