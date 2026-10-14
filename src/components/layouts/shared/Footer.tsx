import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
export default function Footer() {
  return <footer className="cc-footer">
    <div className="cc-footer-inner">
      <div className="cc-footer-brand"><Link href="/" aria-label="Creativity Corner — Home"><Image src="/cc-logo.png" alt="Creativity Corner logo" width={1459} height={1078} className="h-20 w-28 object-contain" /></Link><p>STEM toys that turn learning into play.</p><p className="cc-footer-origin">Born from Korea’s Beeboy,<br />built for Indonesia.</p></div>
      <div><h3>Explore CC</h3><ul>{[{href:"/",label:"Home"},{href:"/products",label:"Products"},{href:"/blog",label:"Blog"},{href:"/partnership",label:"Partnerships"},{href:"/about",label:"About Us"}].map(l=><li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul></div>
      <div><h3>Meet Beeboy</h3><ul><li><Link href="/#beeboy">Beeboy Robot</Link></li><li><Link href="/#kartu-rfid">RFID Cards</Link></li><li><Link href="/#board-mat">Board Mat</Link></li></ul></div>
      <div><h3>Let’s Connect</h3><ul><li><Link href="/contact-us">Contact Us</Link></li><li><Link href="/partnership">Partnerships</Link></li><li><a href="https://www.instagram.com/creativitycorner.cc/" className="cc-footer-social"><Instagram size={17} aria-hidden="true" /> creativitycorner.cc</a></li></ul></div>
    </div><div className="cc-footer-bottom">© {new Date().getFullYear()} Creativity Corner. All rights reserved.</div>
  </footer>;
}
