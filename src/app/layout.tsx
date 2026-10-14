import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SiteLayout from "@/components/layouts/SiteLayout";
import { siteConfig, siteIndexable } from "@/lib/config/site";
const font = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", weight: ["300", "400", "500", "600", "700", "800"], display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: "%s | Creativity Corner" },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: { icon: [{ url: "/icon.png", type: "image/png" }], apple: "/cc-logo.png" },
  authors: [{ name: siteConfig.name }], creator: siteConfig.name, publisher: siteConfig.name,
  robots: { index: siteIndexable, follow: true, googleBot: { index: siteIndexable, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};
export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return <html lang="id" className={font.variable}><body><SiteLayout>{children}</SiteLayout></body></html>;
}
