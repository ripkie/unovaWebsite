"use client";

import { useBlogState } from "@/lib/hooks/useBlogState";
import HeroSection from "@/components/contents/blog/HeroSection";
import CategoryFilterSection from "@/components/contents/blog/CategoryFilterSection";
import InternalPostsSection from "@/components/contents/blog/InternalPostsSection";
import ExternalArticlesSection from "@/components/contents/blog/ExternalArticlesSection";
import NewsletterSection from "@/components/contents/blog/NewsletterSection";
import SectionVisibility from "@/components/ui/SectionVisibility";
import { sectionVisibility } from "@/lib/config/sections";

export default function BlogLayout() {
  const sections = sectionVisibility.blog;
  const state = useBlogState();
  const { filteredExternal } = state;
  return (
    <>
      {/* ── Hero: light, clean ── */}
      <SectionVisibility enabled={sections.hero}>
        <HeroSection />
      </SectionVisibility>

      {/* ── Category Filter ── */}
      <SectionVisibility enabled={sections.categoryFilter}>
        <CategoryFilterSection {...state} />
      </SectionVisibility>

      {/* ── Internal Posts ── */}
      <SectionVisibility enabled={sections.internalPosts}>
        <InternalPostsSection {...state} />
      </SectionVisibility>

      {/* ── External Articles ── */}
      {filteredExternal.length > 0 && (
        <SectionVisibility enabled={sections.externalArticles}>
          <ExternalArticlesSection {...state} />
        </SectionVisibility>
      )}

      {/* ── Newsletter ── */}
      <SectionVisibility enabled={sections.newsletter}>
        <NewsletterSection {...state} />
      </SectionVisibility>
    </>
  );
}
