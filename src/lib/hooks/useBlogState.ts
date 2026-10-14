"use client";
import { useState } from "react";

import { internalPosts, externalArticles } from "@/lib/data/blog";
export function useBlogState() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const filteredInternal = activeCategory === "Semua"
    ? internalPosts
    : internalPosts.filter((p) => p.category === activeCategory);
  const filteredExternal = activeCategory === "Semua"
    ? externalArticles
    : externalArticles.filter((a) => a.category === activeCategory);
  return { activeCategory, setActiveCategory, email, setEmail, subscribed, setSubscribed, filteredInternal, filteredExternal };
}
export type BlogSectionProps = ReturnType<typeof useBlogState>;
