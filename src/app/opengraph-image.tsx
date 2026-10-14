import { ImageResponse } from "next/og";
export const alt = "Creativity Corner — STEM Toys & Educational Robots";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", padding: "70px", background: "#FFFFFF", color: "#352E2B", borderBottom: "20px solid #B85C5C", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", color: "#B85C5C", fontSize: 32, fontWeight: 700 }}>CREATIVITY CORNER</div>
      <div style={{ display: "flex", marginTop: 40, fontSize: 78, fontWeight: 700, lineHeight: 1.1 }}>Learning into play.</div>
      <div style={{ display: "flex", marginTop: 28, fontSize: 32, color: "#625854" }}>STEM Toys · Educational Robots · Screen-Free Coding</div>
      <div style={{ display: "flex", marginTop: 42, fontSize: 25, color: "#984747" }}>Born from Korea’s Beeboy, built for Indonesia.</div>
      <div style={{ display: "flex", marginTop: 22, fontSize: 22, color: "#625854" }}>creativitycorner.cc</div>
    </div>, size);
}
