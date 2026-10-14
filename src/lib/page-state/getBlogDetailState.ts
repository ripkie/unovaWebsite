import { notFound } from "next/navigation";
import { posts } from "@/lib/data/blogDetail";
export async function getBlogDetailState({ params }: { params: Promise<{ slug: string; }>; }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();
  const relatedPosts = post.related.map((r) => posts[r]).filter(Boolean);
  return { slug, post, relatedPosts };
}
export type BlogDetailSectionProps = Awaited<ReturnType<typeof getBlogDetailState>>;
