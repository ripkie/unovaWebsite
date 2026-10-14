import { Home } from "lucide-react";
import { slugIconMap } from "@/lib/data/blogDetail";
export default function SlugIcon({ name, size = 24 }: { name: string; size?: number; }) {
  const Icon = slugIconMap[name] ?? Home;
  return <Icon size={size} className="text-white/80" />;
}
