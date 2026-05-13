import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakartaBody = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Unova – Smarter Ways, Brighter Days",
    template: "%s | Unova",
  },

  icons: {
    icon: [{ url: "/logoUnovaTab.svg", type: "image/svg+xml" }],
  },

  description:
    "Unova menghadirkan solusi IoT dan teknologi cerdas untuk kehidupan yang lebih efisien dan terkoneksi. Smart home, smart building, dan ekosistem IoT untuk Indonesia.",
  keywords: [
    "IoT Indonesia",
    "smart home",
    "smart building",
    "KNX",
    "Matter",
    "sensor IoT",
    "otomasi rumah",
    "teknologi cerdas",
    "Unova",
  ],
  authors: [{ name: "Unova" }],
  creator: "Unova",
  publisher: "Unova",
  metadataBase: new URL("https://unova.id"),

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://unova.id",
    siteName: "Unova",
    title: "Unova – Smarter Ways, Brighter Days",
    description:
      "Ekosistem IoT terpercaya untuk smart home dan smart building di Indonesia.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Unova – Smarter Ways, Brighter Days",
    description:
      "Ekosistem IoT terpercaya untuk smart home dan smart building di Indonesia.",
    creator: "@unova_id",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${plusJakarta.variable} ${plusJakartaBody.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}