"use client";

import { useProductsState } from "@/lib/hooks/useProductsState";
import HeroSection from "@/components/contents/products/HeroSection";
import ProductCarouselSection from "@/components/contents/products/ProductCarouselSection";
import ComingSoonSection from "@/components/contents/products/ComingSoonSection";
import SectionVisibility from "@/components/ui/SectionVisibility";
import { sectionVisibility } from "@/lib/config/sections";

export default function ProductsLayout() {
  const sections = sectionVisibility.products;
  const state = useProductsState();

  return (
    <>
      {/* Header */}
      <SectionVisibility enabled={sections.hero}>
        <HeroSection />
      </SectionVisibility>

      {/* Available Products — Swipeable */}
      <SectionVisibility enabled={sections.productCarousel}>
        <ProductCarouselSection {...state} />
      </SectionVisibility>

      {/* Coming Soon */}
      <SectionVisibility enabled={sections.comingSoon}>
        <ComingSoonSection />
      </SectionVisibility>
    </>
  );
}
