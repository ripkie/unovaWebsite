"use client";

import { categories } from "@/lib/data/blog";
import type { BlogSectionProps } from "@/lib/hooks/useBlogState";
export default function CategoryFilterSection({ activeCategory, setActiveCategory }: Pick<BlogSectionProps, "activeCategory" | "setActiveCategory">) {
  return (
    <div className="bg-[#FFFFFF] border-b border-[#B85C5C]/15 sticky top-[72px] z-20">
      <div className="max-w-7xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all"
            style={
              activeCategory === cat
                ? { background: "#352E2B", color: "white" }
                : { color: "rgba(53, 46, 43,0.55)", background: "transparent" }
            }
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
