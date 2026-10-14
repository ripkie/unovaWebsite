import Image from "next/image";
import { landingContent } from "@/lib/data/landing";
import HeroParticles from "./HeroParticles";
export default function HeroSection() {
  const content = landingContent.hero;
  return <section className="cc-hero" aria-labelledby="home-heading">
    <HeroParticles />
    <div className="cc-hero-heading">
      <h1 id="home-heading">{content.title.replace("\n", " ")}</h1>
      <p>{content.subtitle}</p>
      <a href="#beeboy" className="cc-hero-brand" aria-label="Kenali Beeboy"><span>beeboy</span></a>
    </div>
    <div className="cc-hero-image">
      <Image src={content.image} alt="Beeboy, robot mainan edukatif biru dan putih, dipegang dengan kedua tangan" width={1570} height={1002} priority sizes="(max-width: 760px) 100vw, 680px" />
    </div>
    <a href="#beeboy" className="cc-discover">Kenali teman bermainmu <span aria-hidden="true">↓</span></a>
  </section>;
}
