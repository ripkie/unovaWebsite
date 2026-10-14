import { ShieldAlert, Wind, Package, Droplets, Bell } from "lucide-react";

export const products = [
  {
    id: "gas-leak-prevention",
    name: "Gas Leak Prevention",
    tagline: "Automatic protection against gas leaks",
    description: "A gas leak detector with an alarm and an automatic valve that shuts off the regulator when a leak is detected. It provides rapid protection to help prevent fires and explosions in gas systems.",
    image: "/images/fotoProduct/FP-Gas_Leak.png",
    badge: "Available",
    badgeColor: "bg-green-500",
    focus: "Safety",
    focusColor: "text-red-400 bg-red-500/10",
    specs: ["LPG & Natural Gas Detection", "Automatic Valve", "85 dB Alarm", "App Notifications"],
    price: "Starting from IDR 1xx,xxx",
    highlights: [
      { icon: ShieldAlert, text: "Detection response in under 10 seconds" },
      { icon: Bell, text: "Audible alarm & push notifications" },
      { icon: Package, text: "Automatic valve shuts off the regulator" },
    ],
  },
  {
    id: "humidifier-dehumidifier-2in1",
    name: "Humidifier & Dehumidifier 2in1",
    tagline: "Automatically maintain your home’s humidity",
    description: "One device, two functions: add moisture when the air is too dry and remove it when it is too humid. Includes a PM2.5 sensor, quiet mode, and full app control.",
    image: "/images/fotoProduct/FP-Humidifier.jpeg",
    badge: "Unavailable",
    badgeColor: "bg-gray-400",
    focus: "Health",
    focusColor: "text-green-600 bg-green-500/10",
    specs: ["Auto Humidity Control", "PM2.5 Sensor", "Quiet mode <25dB", "App Control"],
    price: "Coming Soon",
    highlights: [
      { icon: Droplets, text: "Automatic humidity control" },
      { icon: Wind, text: "PM2.5 air filtration" },
      { icon: Bell, text: "App notifications & control" },
    ],
  },
];

export const comingSoon = [
  {
    id: "air-quality-monitor",
    name: "Air Quality Monitor",
    desc: "Monitor air quality in real time: CO₂, VOCs, PM2.5, temperature, and humidity in one compact device.",
    icon: Wind,
    focus: "Health",
    eta: "Q4 2025",
    features: ["CO₂ & VOC sensor", "PM2.5 detector", "Real-time dashboard", "Historical data"],
  },
  {
    id: "smart-smoke-detector",
    name: "Smart Smoke Detector",
    desc: "A smart smoke detector connected to the Creativity Corner ecosystem. Receive smartphone alerts before smoke fills the room.",
    icon: ShieldAlert,
    focus: "Safety",
    eta: "Q1 2026",
    features: ["Photoelectric sensor", "App alert", "Interconnected", "10yr battery"],
  },
];
