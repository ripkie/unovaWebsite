import Image from "next/image";
import { landingContent } from "@/lib/data/landing";
export default function RobotSection() {
  const content = landingContent.robot;
  return <section id="beeboy" className="cc-section cc-product-row" aria-labelledby="beeboy-heading">
    <div className="cc-product-copy"><span className="cc-eyebrow">KENALAN DENGAN BEEBOY</span><h2 id="beeboy-heading">{content.title}</h2><p className="cc-lead">{content.lead}</p><p>{content.description}</p><a href="#kartu-rfid" className="cc-text-link">Kenali kartu perintah <span aria-hidden="true">↗</span></a></div>
    <div className="cc-product-visual cc-robot-visual"><Image src={content.image} alt="Robot Beeboy biru dan putih, tampak depan" width={1570} height={1002} sizes="(max-width: 760px) 90vw, 480px" /></div>
  </section>;
}
