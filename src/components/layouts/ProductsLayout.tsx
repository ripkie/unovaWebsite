import HeroSection from "@/components/contents/products/HeroSection";
import CatalogNavigation from "@/components/contents/products/CatalogNavigation";
import CatalogSection from "@/components/contents/products/CatalogSection";
import SectionVisibility from "@/components/ui/SectionVisibility";
import { sectionVisibility } from "@/lib/config/sections";
export default function ProductsLayout() {
 const s=sectionVisibility.products;
 const visibleGroups=[...(s.playsets?["playsets"]:[]),...(s.adventureMaps?["adventure-maps"]:[]),...(s.rfidCards?["rfid-cards"]:[])];
 return <div className="cc-shop"><SectionVisibility enabled={s.hero}><HeroSection/></SectionVisibility><SectionVisibility enabled={s.categories && visibleGroups.length>0}><CatalogNavigation visibleGroups={visibleGroups}/></SectionVisibility><SectionVisibility enabled={s.playsets}><CatalogSection groupId="playsets"/></SectionVisibility><SectionVisibility enabled={s.adventureMaps}><CatalogSection groupId="adventure-maps"/></SectionVisibility><SectionVisibility enabled={s.rfidCards}><CatalogSection groupId="rfid-cards"/></SectionVisibility></div>;
}
