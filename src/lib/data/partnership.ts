import { Globe, Code, Building } from "lucide-react";

import { getPartners } from "@/lib/partners";
import type { Partner } from "@/lib/partners";

export const partners: Partner[] = getPartners();

export const partnerTypes = [
  {
    icon: Globe,
    title: "Distribution Partners",
    desc: "Reach a wider market through Creativity Corner’s distribution network across Indonesia.",
    perks: ["Competitive margins", "Product training", "Marketing support", "Stock priority"],
  },
  {
    icon: Code,
    title: "Integration Partners",
    desc: "Integrate Creativity Corner solutions into your clients’ smart building projects.",
    perks: ["Full API access", "Technical support 24/7", "Co-marketing", "Free demo unit"],
  },
  {
    icon: Building,
    title: "Technology Partners",
    desc: "Develop solutions together on Creativity Corner’s open IoT platform.",
    perks: ["SDK & documentation", "Joint development", "Revenue sharing", "Co-branding"],
  },
];

export const benefits = [
  "Internationally certified products",
  "Dedicated technical support",
  "Training and certification",
  "Co-marketing & lead sharing",
  "Exclusive partner portal",
  "Priority product updates",
];

