import { getBlogDetailState } from "@/lib/page-state/getBlogDetailState";
import HeroSection from "@/components/contents/blogDetail/HeroSection";
import ArticleContentSection from "@/components/contents/blogDetail/ArticleContentSection";
import SectionVisibility from "@/components/ui/SectionVisibility";
import { sectionVisibility } from "@/lib/config/sections";

export default async function BlogDetailLayout(props: { params: Promise<{ slug: string; }>; }) {
  const sections = sectionVisibility.blogDetail;
  const state = await getBlogDetailState(props);

  return (
    <>
      {/* Hero */}
      <SectionVisibility enabled={sections.hero}>
        <HeroSection {...state} />
      </SectionVisibility>

      {/* Content */}
      <SectionVisibility enabled={sections.articleContent}>
        <ArticleContentSection {...state} />
      </SectionVisibility>
    </>
  );
}
