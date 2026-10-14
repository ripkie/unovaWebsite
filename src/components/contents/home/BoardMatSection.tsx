import Image from "next/image";
import { landingContent } from "@/lib/data/landing";
export default function BoardMatSection() {
  const content = landingContent.board;
  return <section id="board-mat" className="cc-section cc-product-row" aria-labelledby="board-heading">
    <div className="cc-product-copy"><span className="cc-eyebrow">BOARD MAT</span><h2 id="board-heading">{content.title}</h2><p className="cc-lead">{content.lead}</p><p>{content.description}</p><a href="#hubungi-cc" className="cc-text-link">Ask About Beeboy <span aria-hidden="true">↗</span></a></div>
    <div className="cc-product-visual cc-board-visual"><Image src={content.image} alt="Beeboy forest grid board mat with trees, rocks, obstacles, mountains, and crystals" width={968} height={970} sizes="(max-width: 760px) 85vw, 450px" /></div>
  </section>;
}
