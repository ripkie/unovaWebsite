import Link from "next/link";
import { landingContent } from "@/lib/data/landing";
export default function ContactSection() {
  const content = landingContent.contact;
  return <section id="hubungi-cc" className="cc-contact-section" aria-labelledby="contact-heading"><span className="cc-eyebrow">CREATIVITY CORNER</span><h2 id="contact-heading">{content.title}</h2><p>{content.description}</p><Link href="/contact-us" className="cc-button">Hubungi Kami <span aria-hidden="true">↗</span></Link><Link href="/partnership" className="cc-text-link">Jelajahi kemitraan</Link></section>;
}
