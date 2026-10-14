import { getProductDetailState } from "@/lib/page-state/getProductDetailState";
import HeroSection from "@/components/contents/productDetail/HeroSection";
import SpecificationsSection from "@/components/contents/productDetail/SpecificationsSection";
import HowItWorksSection from "@/components/contents/productDetail/HowItWorksSection";
import UseCasesSection from "@/components/contents/productDetail/UseCasesSection";
import CompatibilitySection from "@/components/contents/productDetail/CompatibilitySection";
import SectionVisibility from "@/components/ui/SectionVisibility";
import { sectionVisibility } from "@/lib/config/sections";

export default async function ProductDetailLayout(props: { params: Promise<{ slug: string; }>; }) {
  const sections = sectionVisibility.productDetail;
  const state = await getProductDetailState(props);

  return (
    <>
      {/* Hero */}
      <SectionVisibility enabled={sections.hero}>
        <HeroSection {...state} />
      </SectionVisibility>

      {/* Highlights + Specs */}
      <SectionVisibility enabled={sections.specifications}>
        <SpecificationsSection {...state} />
      </SectionVisibility>

      {/* How it works */}
      <SectionVisibility enabled={sections.howItWorks}>
        <HowItWorksSection />
      </SectionVisibility>

      {/* Use Cases */}
      <SectionVisibility enabled={sections.useCases}>
        <UseCasesSection {...state} />
      </SectionVisibility>

      {/* Compatible */}
      <SectionVisibility enabled={sections.compatibility}>
        <CompatibilitySection {...state} />
      </SectionVisibility>
    </>
  );
}
