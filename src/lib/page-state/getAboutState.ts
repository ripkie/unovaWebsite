import { getTeam } from "@/lib/team";
export function getAboutState() { return getTeam(); }
export type AboutSectionProps = ReturnType<typeof getAboutState>;
