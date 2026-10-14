import { CornerUpRight, CornerUpLeft, ArrowUp, Trash2, Play, RectangleVertical, Copy } from "lucide-react";
import { landingContent, rfidCards } from "@/lib/data/landing";
const cardIcons = { right: CornerUpRight, left: CornerUpLeft, forward: ArrowUp, delete: Trash2, go: Play, "scan-one": RectangleVertical, "scan-three": Copy };
export default function RfidSection() {
  const content = landingContent.rfid;
  return <section id="kartu-rfid" className="cc-section cc-product-row cc-product-row-reverse" aria-labelledby="rfid-heading">
    <div className="cc-product-copy"><span className="cc-eyebrow">KARTU RFID</span><h2 id="rfid-heading">{content.title}</h2><p className="cc-lead">{content.lead}</p><p>{content.description}</p><div className="cc-direction-key"><span>Kanan</span><span>Kiri</span><span>Maju</span></div></div>
    <div className="cc-rfid-grid" aria-label="Tujuh kartu perintah RFID Beeboy">{rfidCards.map(card => { const Icon = cardIcons[card.id]; return <figure key={card.id} className={`cc-rfid-card cc-rfid-${card.id}`}><div><Icon size={48} strokeWidth={2.5} aria-hidden="true" fill={card.id === "go" ? "currentColor" : "none"} /><span>{card.label}</span></div><figcaption>{card.caption}</figcaption></figure>; })}</div>
  </section>;
}
