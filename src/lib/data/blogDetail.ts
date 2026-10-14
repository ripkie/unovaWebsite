import { Home, Zap, BarChart3, ShieldAlert, Wind, type LucideIcon } from "lucide-react";

export const slugIconMap: Record<string, LucideIcon> = { Home, Zap, BarChart3, ShieldAlert, Wind };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  iconName: string;
  color: string;
  content: { type: "h2" | "h3" | "p" | "ul" | "blockquote"; text?: string; items?: string[]; }[];
  tags: string[];
  related: string[];
}

export const posts: Record<string, BlogPost> = {
  "smart-home-2025-trend": {
    slug: "smart-home-2025-trend",
    title: "Smart Home Trends in 2025: From Connectivity to Artificial Intelligence",
    excerpt: "How smart home ecosystems are moving beyond automation toward systems that truly learn and adapt.",
    category: "Technology",
    date: "March 10, 2025",
    readTime: "6 min",
    author: "Creativity Corner Team",
    authorRole: "Product & Research",
    iconName: "Home",
    color: "from-[#B85C5C] to-[#984747]",
    tags: ["Smart Home", "AI", "IoT", "2025 Trends"],
    related: ["knx-vs-matter-protokol", "roi-smart-building"],
    content: [
      { type: "p", text: "The smart home industry has completed its first stage of transformation: the race to connect devices to the internet. In 2025, the second stage begins, as homes become more than connected—they become intelligent." },
      { type: "h2", text: "1. Generative AI Enters the Home" },
      { type: "p", text: "Voice assistants are moving beyond simple answers. Large language models (LLMs) are beginning to be integrated into home management systems, enabling more natural, contextual interactions. Imagine saying, ‘I’m having guests tonight; please get the house ready,’ and having the system adjust lighting, temperature, music, and even drink supplies through a smart refrigerator." },
      { type: "h2", text: "2. Matter 1.3 Expands the Ecosystem" },
      { type: "p", text: "Matter, supported by Apple, Google, Amazon, and Samsung, continues to evolve. Version 1.3 adds support for new device categories, including EV chargers, washing machines, and solar energy devices. It is a strong signal that cross-brand interoperability is becoming a reality rather than a promise." },
      { type: "blockquote", text: "‘Interoperability is no longer a premium feature—it is a basic expectation for modern consumers.’ — Connectivity Standards Alliance, 2025" },
      { type: "h2", text: "3. Energy Efficiency as a Key Driver" },
      { type: "p", text: "As electricity prices rise in many countries, including Indonesia, smart home ROI becomes easier to calculate. Intelligent energy systems that automatically optimize air conditioners, water heaters, and lighting can now reduce monthly electricity bills by 20–35%." },
      { type: "ul", items: ["Smart thermostats with machine learning: average savings of 23%", "Adaptive occupancy sensors: automatically switching devices off when rooms are empty", "Solar panels and home batteries: optimizing renewable energy use", "Automatic peak shaving: reducing consumption when electricity rates are high"] },
      { type: "h2", text: "4. Security and Privacy Take Priority" },
      { type: "p", text: "Following major IoT security incidents, consumers and regulators are becoming more demanding. In 2025, mandatory security standards are emerging in several countries, and consumers are increasingly choosing products based on their security track record as well as their features." },
      { type: "h2", text: "Implications for Indonesia" },
      { type: "p", text: "Indonesia’s high smartphone penetration and rapidly growing middle class offer significant potential. Government smart city projects, combined with greater consumer awareness, create unprecedented momentum for the domestic IoT industry." },
      { type: "p", text: "At Creativity Corner, we are preparing for these trends with a product range that supports Matter, integrates local AI assistants, and is designed for Indonesia’s tropical climate." },
    ],
  },
  "knx-vs-matter-protokol": {
    slug: "knx-vs-matter-protokol",
    title: "KNX vs Matter: Which Protocol Is Right for Your Project?",
    excerpt: "An in-depth comparison of two leading industry standards in installation, scalability, and total cost.",
    category: "Guides",
    date: "February 25, 2025",
    readTime: "9 min",
    author: "Creativity Corner Engineering Team",
    authorRole: "Engineering",
    iconName: "Zap",
    color: "from-slate-600 to-slate-800",
    tags: ["KNX", "Matter", "IoT Protocols", "Smart Building"],
    related: ["smart-home-2025-trend", "roi-smart-building"],
    content: [
      { type: "p", text: "One of the questions we hear most often from system integrators and building architects is: which is better, KNX or Matter? As with most engineering decisions, the answer is: it depends." },
      { type: "h2", text: "Understanding Their Different Approaches" },
      { type: "p", text: "KNX comes from commercial and industrial building automation. The standard has been around since 1990 and was designed for large, reliable professional installations. Matter comes from the consumer world, driven by Silicon Valley to simplify fragmented smart home ecosystems." },
      { type: "h2", text: "A Head-to-Head Comparison" },
      { type: "ul", items: ["Installation: KNX requires a certified programmer and ETS software; Matter can be configured through a smartphone app", "Scalability: KNX excels with more than 100 control points; Matter is best suited to 10–50 devices", "Reliability: KNX uses dedicated wiring and does not depend on Wi-Fi; Matter relies on IP infrastructure", "Upfront costs: KNX hardware and installation cost more; Matter is more affordable", "Brand flexibility: Matter offers broader interoperability across consumer brands", "Long-term support: KNX has an ecosystem spanning more than 30 years; Matter is still developing"] },
      { type: "h2", text: "Recommendations by Project" },
      { type: "p", text: "Choose KNX for offices, hotels, hospitals, or premium residential projects larger than 300 m² that prioritize reliability and independence from internet connectivity. Choose Matter for smart apartments, villas, or home renovations where easy setup and integration with consumer ecosystems such as Google, Apple, and Amazon are priorities." },
      { type: "blockquote", text: "‘Many of our best projects use both: KNX for the infrastructure backbone and Matter for the consumer layer.’" },
    ],
  },
  "roi-smart-building": {
    slug: "roi-smart-building",
    title: "Calculating Smart Building ROI: A Practical Guide",
    excerpt: "A step-by-step guide to measuring energy savings and operational efficiency from IoT installations.",
    category: "Business",
    date: "February 12, 2025",
    readTime: "7 min",
    author: "Creativity Corner Business Team",
    authorRole: "Business Development",
    iconName: "BarChart3",
    color: "from-emerald-600 to-teal-700",
    tags: ["ROI", "Smart Building", "Energy Efficiency", "Business"],
    related: ["smart-home-2025-trend", "knx-vs-matter-protokol"],
    content: [
      { type: "p", text: "The most important question from corporate clients is: how long until the investment pays for itself? The answer is more interesting than you might expect—our smart building projects show an average payback period of 18–36 months." },
      { type: "h2", text: "Savings You Can Measure" },
      { type: "ul", items: ["HVAC energy savings: 20–30% through adaptive occupancy-based control", "Lighting savings: 40–60% through automatic dimming and motion sensors", "Operational efficiency: a 15–25% reduction in maintenance costs through predictive maintenance", "Higher property value: a 5–10% premium for certified smart properties", "Less downtime: real-time monitoring detects problems before they become critical"] },
      { type: "h2", text: "A Simple Estimation Formula" },
      { type: "p", text: "ROI (%) = ((Annual Savings − Annual Maintenance Costs) / Total Investment) × 100. For a 1,000 m² office building with an energy bill of IDR 50 million per month, a 25% saving means IDR 12.5 million per month, or IDR 150 million per year. With a smart building investment of IDR 200–300 million, the payback period is approximately 18–24 months." },
      { type: "h2", text: "Factors That Affect ROI" },
      { type: "p", text: "Sensor quality and data accuracy underpin every saving. Systems using accurate real-time data can optimize performance up to twice as effectively as systems based on fixed schedules. This is why sensor hardware quality has such a strong influence on overall system ROI." },
    ],
  },
  "gas-leak-prevention-rumah": {
    slug: "gas-leak-prevention-rumah",
    title: "Why Every Kitchen Needs a Gas Detector: Surprising Facts",
    excerpt: "BNPB data identifies gas leaks as a major cause of household fires. Here is how technology can help prevent them.",
    category: "Technology",
    date: "January 5, 2025",
    readTime: "5 min",
    author: "Creativity Corner Team",
    authorRole: "Product & Safety",
    iconName: "ShieldAlert",
    color: "from-red-600 to-orange-600",
    tags: ["LPG", "Home Safety", "Gas Detectors", "Fire Safety"],
    related: ["smart-home-2025-trend", "kualitas-udara-dalam-ruangan"],
    content: [
      { type: "p", text: "Every year, hundreds of house fires in Indonesia share the same trigger: LPG leaks. Data from the National Disaster Management Agency (BNPB) identifies gas leaks and electrical short circuits as two major causes of residential fires. More worryingly, many of these incidents are preventable." },
      { type: "h2", text: "Why Are Gas Leaks So Dangerous?" },
      { type: "p", text: "LPG is heavier than air. When a leak occurs, gas collects near floors and in low spaces, where sparks can easily ignite it. LPG concentrations of 1.8–9.5% in air can trigger an explosion if there is an ignition source." },
      { type: "blockquote", text: "‘In many cases, people do not notice the smell of gas because they have become used to their surroundings. This is called olfactory fatigue.’" },
      { type: "h2", text: "Modern Gas Detection Technology" },
      { type: "p", text: "IoT-based gas detectors such as Creativity Corner’s Gas Leak Prevention are more reliable than the human sense of smell. Semiconductor or electrochemical sensors can detect gas concentrations as low as 100 ppm, well before you can smell them." },
      { type: "ul", items: ["Automatic detection without relying on human senses", "An electromagnetic valve shuts off the gas supply in under 10 seconds", "A loud alarm can wake residents even while they sleep", "Smartphone notifications alert you wherever you are", "Unaffected by becoming used to a smell—always on duty, 24/7"] },
      { type: "h2", text: "What Should You Do If You Smell Gas?" },
      { type: "ul", items: ["DO NOT turn any electrical switches on or off", "DO NOT use matches or lighters", "Open all windows and doors immediately", "Manually close the gas regulator valve", "Leave the house and contact the fire department"] },
      { type: "p", text: "An automatic gas detector is designed to shut off the gas before you notice the leak, helping reduce the need for these emergency steps." },
    ],
  },
  "kualitas-udara-dalam-ruangan": {
    slug: "kualitas-udara-dalam-ruangan",
    title: "Indoor Air Quality: A Hidden Threat in Your Home",
    excerpt: "A WHO study suggests indoor air can be five times more polluted than outdoor air. A guide to maintaining healthy air at home.",
    category: "Industry",
    date: "December 20, 2024",
    readTime: "8 min",
    author: "Creativity Corner Team",
    authorRole: "Health & Technology",
    iconName: "Wind",
    color: "from-green-600 to-emerald-700",
    tags: ["Air Quality", "Health", "PM2.5", "Humidity", "IAQ"],
    related: ["gas-leak-prevention-rumah", "smart-home-2025-trend"],
    content: [
      { type: "p", text: "We spend an average of 90% of our time indoors. According to the World Health Organization, indoor air quality (IAQ) can be two to five times worse than outdoor air. The impact on long-term health is significant." },
      { type: "h2", text: "Common Pollutants at Home" },
      { type: "ul", items: ["PM2.5: fine particles from cooking smoke, dust, and vehicle emissions entering through ventilation", "CO₂: high levels can cause drowsiness, headaches, and reduced concentration", "VOCs: volatile organic compounds from paint, new furniture, and household cleaners", "Excess humidity: encourages mold and dust mites", "Low humidity: airway irritation, dry skin, and greater susceptibility to viral infections"] },
      { type: "h2", text: "Real Effects on Health" },
      { type: "p", text: "Long-term PM2.5 exposure is associated with higher cardiovascular and respiratory disease risks. Children and older adults are especially vulnerable. Even CO₂ concentrations above 1,000 ppm, easily reached in enclosed rooms, have been shown to reduce cognitive performance by up to 15%." },
      { type: "blockquote", text: "‘Clean air is not a luxury. It is a basic health need that should be accessible to everyone.’ — Creativity Corner Research Team" },
      { type: "h2", text: "The Solution: Active Monitoring and Control" },
      { type: "p", text: "The first step is understanding your current air conditions. Without data, you cannot take appropriate action. Smart IAQ monitors measure PM2.5, CO₂, VOCs, temperature, and humidity in real time and send readings to your smartphone." },
      { type: "ul", items: ["Automatic ventilation when CO₂ exceeds 800 ppm", "Humidifier activated when humidity falls below 40%", "Dehumidifier activated when humidity exceeds 70%", "Air purifier switched on when PM2.5 exceeds 35 μg/m³", "Smartphone alerts when readings exceed safe limits"] },
      { type: "h2", text: "Creativity Corner Products for Air Quality" },
      { type: "p", text: "The Humidifier & Dehumidifier 2-in-1 we are developing is designed for Indonesia’s tropical climate, where humidity can change dramatically between wet and dry seasons. One device, two functions, automatically controlled using real-time sensor readings." },
    ],
  },
};
