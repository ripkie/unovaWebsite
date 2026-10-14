import Image from "next/image";
import { CornerUpRight, CornerUpLeft, ArrowUp, Trash2, Play, RectangleVertical, Copy } from "lucide-react";
import { rfidCards } from "@/lib/data/landing";
import type { CatalogProduct } from "@/lib/data/products";
const icons = { right: CornerUpRight, left: CornerUpLeft, forward: ArrowUp, delete: Trash2, go: Play, "scan-one": RectangleVertical, "scan-three": Copy };
export default function ProductVisual({product}: {product: CatalogProduct}) {
 if(product.image) return <Image src={product.image} alt={product.name} width={product.imageWidth!} height={product.imageHeight!} sizes="(max-width: 760px) 90vw, 500px" className="cc-catalog-image" />;
 return <div className="cc-rfid-grid" aria-label="Beeboy RFID command cards">{rfidCards.map(c=>{const Icon=icons[c.id];return <figure key={c.id} className="cc-rfid-card"><div><Icon size={48} aria-hidden="true"/><span>{c.label}</span></div><figcaption>{c.caption}</figcaption></figure>;})}</div>;
}
