import type { ReactNode } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { siteVisibility } from "@/lib/config/sections";
export default function SiteLayout({ children }: { children: ReactNode; }) {
  return <>
    {siteVisibility.navbar && <Navbar />}
    <main>{children}</main>
    {siteVisibility.footer && <Footer />}
  </>;
}
