import { Heart, Users, Lightbulb, Globe } from "lucide-react";

export const values = [
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    desc: "We never stop innovating. Every product is the result of in-depth research and real-world testing.",
  },
  {
    icon: Users,
    title: "User-Centered Design",
    desc: "Intuitive design is not a luxury—it is our minimum standard for every solution.",
  },
  {
    icon: Globe,
    title: "Local Impact, Global Reach",
    desc: "Adapting the spirit of Korea’s Beeboy to the needs of children, families, schools, and Indonesian culture.",
  },
  {
    icon: Heart,
    title: "Integrity & Trust",
    desc: "Every promise is a commitment. We build lasting relationships with our customers and partners.",
  },
];

export const milestones = [
  { date: "Development", event: "Adapting Beeboy, educational robots, board mats, storylines, and obstacles for Indonesia" },
  { date: "Validation Plans", event: "Workshops and product demonstrations to support the development of children’s learning experiences" },
];

export const deptConfig: Record<string, { label: string; bg: string; text: string; border: string; }> = {
  "C-Level": {
    label: "C-Level",
    bg: "rgba(53, 46, 43,0.06)",
    text: "#352E2B",
    border: "rgba(53, 46, 43,0.12)",
  },
  Engineering: {
    label: "Technical",
    bg: "rgba(184, 92, 92,0.08)",
    text: "#B85C5C",
    border: "rgba(184, 92, 92,0.2)",
  },
  Operations: {
    label: "Official",
    bg: "rgba(16,185,129,0.06)",
    text: "#059669",
    border: "rgba(16,185,129,0.15)",
  },
};
