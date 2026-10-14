import Link from "next/link";
import { products, catalogGroups } from "@/lib/data/products";
import ProductVisual from "./ProductVisual";
export default function CatalogSection({groupId}: {groupId: typeof catalogGroups[number]["id"]}) {
 const group=catalogGroups.find(g=>g.id===groupId)!;
 return <section id={group.id} className="cc-catalog-section" aria-labelledby={`${group.id}-heading`}><header><h2 id={`${group.id}-heading`}>{group.title}</h2><p>{group.description}</p></header>{products.filter(p=>p.category===groupId).map(product=><article key={product.id} className="cc-catalog-product"><Link href={`/products/${product.id}`} className="cc-catalog-visual" aria-label={`Learn more about ${product.name}`}><ProductVisual product={product}/></Link><div className="cc-catalog-copy"><h3><Link href={`/products/${product.id}`}>{product.name}</Link></h3><p>{product.description}</p><div className="cc-catalog-actions"><Link href="/contact-us" className="cc-button">Contact Us</Link><Link href={`/products/${product.id}`} className="cc-text-link">Learn More</Link></div></div></article>)}</section>;
}
