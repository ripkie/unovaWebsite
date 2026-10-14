import { getTeam, getReportsTo } from "@/lib/team";

export function getAboutState() {
  const allMembers = getTeam();
  const cLevel = allMembers.filter((m) => m.department === "C-Level");
  const cto = cLevel.find((m) => m.id === "cto");
  const coo = cLevel.find((m) => m.id === "coo");
  const engineeringTeam = cto ? getReportsTo(cto.id) : [];
  const operationsTeam = coo ? getReportsTo(coo.id) : [];
  return { allMembers, cLevel, cto, coo, engineeringTeam, operationsTeam };
}
export type AboutSectionProps = ReturnType<typeof getAboutState>;
