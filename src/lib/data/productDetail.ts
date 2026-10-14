import React from "react";

import { UtensilsCrossed, Building2, Hotel } from "lucide-react";

export interface ProductData {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  price: string;
  image: string;
  focus: string;
  description: string;
  highlights: string[];
  specs: Record<string, string>;
  useCases: { icon: React.ElementType; title: string; desc: string; }[];
  compatibleWith: string[];
}

export const products: Record<string, ProductData> = {
  "gas-leak-prevention": {
    id: "gas-leak-prevention",
    name: "Gas Leak Prevention",
    tagline: "Automatic protection against gas leaks",
    badge: "Available Now",
    badgeColor: "bg-green-500",
    price: "IDR 1xx,xxx",
    image: "/images/fotoProduct/FP-Gas_Leak.png",
    focus: "Safety",
    description:
      "Gas Leak Prevention is Creativity Corner’s home safety solution for detecting LPG and natural gas leaks in real time. An automatic valve immediately shuts off the gas regulator when a leak is detected, while a loud alarm and smartphone notifications provide layered protection against fires and explosions.",
    highlights: [
      "Detects leaks of LPG, natural gas, and toxic gas (CO)",
      "Automatic electromagnetic valve shuts off the regulator in under 10 seconds",
      "85 dB audible alarm + smartphone push notifications",
      "Wi-Fi connectivity—monitor gas status from anywhere",
      "Dual-element sensor for high accuracy and fewer false alarms",
      "24-hour battery backup during power outages",
      "Easy plug-and-play installation with a video guide",
      "Compatible with the Creativity Corner ecosystem and other smart home systems",
    ],
    specs: {
      "Detected Gases": "LPG, Natural Gas (Methane), CO",
      "Sensitivity": "100–10,000 ppm (adjustable)",
      "Response Time": "Under 10 seconds after detection",
      "Audible Alarm": "85 dB @ 1 meter",
      "Connectivity": "Wi-Fi 2.4GHz (IEEE 802.11 b/g/n)",
      "Input Voltage": "220V AC / Backup 3.7V Li-ion",
      "Battery Backup": "Up to 24 hours",
      "Sensor Dimensions": "Ø 110mm × 38mm",
      "Valve Dimensions": "1/2 inch BSP, DN15",
      "Operating Temperature": "0°C to +50°C",
      "Certifications": "SNI, CE, RoHS",
      "Warranty": "2 years",
    },
    useCases: [
      { icon: UtensilsCrossed, title: "Home Kitchens", desc: "Protect gas stoves against leaks from regulators, hoses, and loose fittings." },
      { icon: Building2, title: "Restaurants & Cafés", desc: "24/7 commercial kitchen safety with remote dashboard monitoring." },
      { icon: Hotel, title: "Hotels & Boarding Houses", desc: "Protect dozens of units at once with a centralized alert system for management." },
    ],
    compatibleWith: ["Creativity Corner App", "Google Home", "Amazon Alexa", "Home Assistant", "MQTT"],
  },
};
