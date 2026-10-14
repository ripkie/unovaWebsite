import HeroSection from "@/components/contents/home/HeroSection";
import RobotSection from "@/components/contents/home/RobotSection";
import RfidSection from "@/components/contents/home/RfidSection";
import BoardMatSection from "@/components/contents/home/BoardMatSection";
import ContactSection from "@/components/contents/home/ContactSection";
import { VideoSection, StoriesSection, TestimonialsSection } from "@/components/contents/home/SupportingSections";
import SectionVisibility from "@/components/ui/SectionVisibility";
import { sectionVisibility } from "@/lib/config/sections";
export default function HomeLayout() {
  const sections = sectionVisibility.home;
  return <div className="cc-landing">
    <SectionVisibility enabled={sections.hero}><HeroSection /></SectionVisibility>
    <SectionVisibility enabled={sections.robot}><RobotSection /></SectionVisibility>
    <SectionVisibility enabled={sections.rfid}><RfidSection /></SectionVisibility>
    <SectionVisibility enabled={sections.boardMat}><BoardMatSection /></SectionVisibility>
    <SectionVisibility enabled={sections.videos}><VideoSection /></SectionVisibility>
    <SectionVisibility enabled={sections.stories}><StoriesSection /></SectionVisibility>
    <SectionVisibility enabled={sections.testimonials}><TestimonialsSection /></SectionVisibility>
    <SectionVisibility enabled={sections.contact}><ContactSection /></SectionVisibility>
  </div>;
}
