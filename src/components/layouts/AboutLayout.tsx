import { getAboutState } from "@/lib/page-state/getAboutState";
import HeroSection from "@/components/contents/about/HeroSection";
import StorySection from "@/components/contents/about/StorySection";
import ValuesSection from "@/components/contents/about/ValuesSection";
import MilestonesSection from "@/components/contents/about/MilestonesSection";
import WelcomeSection from "@/components/contents/about/WelcomeSection";
import TeamSection from "@/components/contents/about/TeamSection";
import CtaSection from "@/components/contents/about/CtaSection";
import SectionVisibility from "@/components/ui/SectionVisibility";
import { sectionVisibility } from "@/lib/config/sections";

export default function AboutLayout() {
  const sections = sectionVisibility.about;
  const state = getAboutState();

  return (
    <>
      {/* Hero */}
      <SectionVisibility enabled={sections.hero}>
        <HeroSection />
      </SectionVisibility>

      {/* Story + Mission/Vision */}
      <SectionVisibility enabled={sections.story}>
        <StorySection />
      </SectionVisibility>

      {/* Values */}
      <SectionVisibility enabled={sections.values}>
        <ValuesSection />
      </SectionVisibility>

      {/* Milestones */}
      <SectionVisibility enabled={sections.milestones}>
        <MilestonesSection />
      </SectionVisibility>

      {/* Welcome Message */}
      <SectionVisibility enabled={sections.welcome}>
        <WelcomeSection />
      </SectionVisibility>

      {/* TEAM */}
      <SectionVisibility enabled={sections.team}>
        <TeamSection {...state} />
      </SectionVisibility>

      {/* CTA */}
      <SectionVisibility enabled={sections.cta}>
        <CtaSection />
      </SectionVisibility>
    </>
  );
}
