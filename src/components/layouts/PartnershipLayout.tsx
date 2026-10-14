import HeroSection from "@/components/contents/partnership/HeroSection";
import PartnerSliderSection from "@/components/contents/partnership/PartnerSliderSection";
import PartnerTypesSection from "@/components/contents/partnership/PartnerTypesSection";
import BenefitsSection from "@/components/contents/partnership/BenefitsSection";
import SectionVisibility from "@/components/ui/SectionVisibility";
import { sectionVisibility } from "@/lib/config/sections";

export default function PartnershipLayout() {
  const sections = sectionVisibility.partnership;

  return (
    <>
      {/* Hero */}
      <SectionVisibility enabled={sections.hero}>
        <HeroSection />
      </SectionVisibility>

      {/* Partner Logo Slider — padding dikurangi */}
      <SectionVisibility enabled={sections.partnerSlider}>
        <PartnerSliderSection />
      </SectionVisibility>

      {/* Partner Types — padding dikurangi */}
      <SectionVisibility enabled={sections.partnerTypes}>
        <PartnerTypesSection />
      </SectionVisibility>

      {/* Benefits — padding dikurangi */}
      <SectionVisibility enabled={sections.benefits}>
        <BenefitsSection />
      </SectionVisibility>
    </>
  );
}
