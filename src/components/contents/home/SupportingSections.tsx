import Image from "next/image";
import { playVideos, storyPreviews, testimonials } from "@/lib/data/landing";
// Bahan kosong tidak menghasilkan section/ruang kosong, meskipun flag diaktifkan.
export function VideoSection() {
  if (!playVideos.length) return null;
  return <section className="cc-section cc-support-section"><h2>See Beeboy in action.</h2><div className="cc-support-grid">{playVideos.map(v => <figure key={v.src}><video controls preload="none" poster={v.poster} aria-label={v.title}><source src={v.src} /></video><figcaption>{v.title}</figcaption></figure>)}</div></section>;
}
export function StoriesSection() {
  if (!storyPreviews.length) return null;
  return <section className="cc-section cc-support-section"><h2>Explore stories together.</h2><div className="cc-support-grid">{storyPreviews.map(s => <article key={s.title}><Image src={s.image} alt={s.title} width={400} height={400} sizes="(max-width: 760px) 90vw, 400px" /><h3>{s.title}</h3><p>{s.description}</p></article>)}</div></section>;
}
export function TestimonialsSection() {
  if (!testimonials.length) return null;
  return <section className="cc-section cc-support-section"><h2>Their stories with Beeboy.</h2><div className="cc-support-grid">{testimonials.map(t => <figure key={t.name}><blockquote>{t.quote}</blockquote><figcaption>{t.name} · {t.role}</figcaption></figure>)}</div></section>;
}
