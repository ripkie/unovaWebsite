import type { ReactNode } from "react";
/** No wrapper DOM: hidden sections render nothing and leave no empty space. */
export default function SectionVisibility({ enabled, children }: { enabled: boolean; children: ReactNode; }) {
  return enabled ? children : null;
}
