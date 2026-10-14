"use client";

import { useContactState } from "@/lib/hooks/useContactState";
import HeroSection from "@/components/contents/contact/HeroSection";
import ContactInfoSection from "@/components/contents/contact/ContactInfoSection";
import ContactMainSection from "@/components/contents/contact/ContactMainSection";
import SectionVisibility from "@/components/ui/SectionVisibility";
import { sectionVisibility } from "@/lib/config/sections";

export default function ContactLayout() {
  const sections = sectionVisibility.contact;
  const state = useContactState();

  return (
    <>
      {/* Header */}
      <SectionVisibility enabled={sections.hero}>
        <HeroSection />
      </SectionVisibility>

      {/* Contact Info — 3 cards viewport only, no interaction needed */}
      <SectionVisibility enabled={sections.contactInfo}>
        <ContactInfoSection />
      </SectionVisibility>

      {/* Google Maps + Form — 2 column layout */}
      <SectionVisibility enabled={sections.contactMain}>
        <ContactMainSection {...state} />
      </SectionVisibility>
    </>
  );
}
