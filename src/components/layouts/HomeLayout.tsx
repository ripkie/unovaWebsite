import { partners } from "@/lib/data/home";

import HeroSection from "@/components/contents/home/HeroSection";
import StatsSection from "@/components/contents/home/StatsSection";
import FeaturesSection from "@/components/contents/home/FeaturesSection";
import FeaturedProductSection from "@/components/contents/home/FeaturedProductSection";
import PartnersSection from "@/components/contents/home/PartnersSection";
import SectionVisibility from "@/components/ui/SectionVisibility";
import { sectionVisibility } from "@/lib/config/sections";

export default function HomeLayout() {
  const sections = sectionVisibility.home;

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <SectionVisibility enabled={sections.hero}>
        <HeroSection />
      </SectionVisibility>

      {/* ─── STATS ────────────────────────────────────────────────────── */}
      <SectionVisibility enabled={sections.stats}>
        <StatsSection />
      </SectionVisibility>

      {/* ─── FITUR ────────────────────────────────────────────────────── */}
      <SectionVisibility enabled={sections.features}>
        <FeaturesSection />
      </SectionVisibility>

      {/* ─── PRODUK HIGHLIGHT ─────────────────────────────────────────── */}
      <SectionVisibility enabled={sections.featuredProduct}>
        <FeaturedProductSection />
      </SectionVisibility>

      {/* ─── PARTNER SLIDER ── infinite loop yang benar ───────────────── */}
      {partners.length > 0 && (
        <SectionVisibility enabled={sections.partners}>
          <PartnersSection />
        </SectionVisibility>
      )}
    </>
  );
}
