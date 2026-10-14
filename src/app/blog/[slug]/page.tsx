import { notFound } from "next/navigation";
import BlogDetailLayout from "@/components/layouts/BlogDetailLayout";
import { posts } from "@/lib/data/blogDetail";
import { pageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/structured-data";
type Props = { params: Promise<{ slug: string; }>; };
export function generateStaticParams() { return Object.keys(posts).map(slug => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params; const post = posts[slug]; if (!post) notFound();
  return pageMetadata({ title: post.title, description: post.excerpt, path: `/blog/${slug}`, article: true });
}
export default async function BlogPostPage(props: Props) {
  const { slug } = await props.params; const post = posts[slug]; if (!post) notFound();
  return <><JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${slug}` }])} /><BlogDetailLayout {...props} /></>;
}
