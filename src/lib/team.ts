import pkgJson from "../../package.json";

export interface TeamMember { name: string; photo: string | null; role: string; }
export interface TeamDivision { id: string; name: string; members: TeamMember[]; }
export interface ProjectTeam {
  projectLeader: TeamMember & { role: string };
  divisions: TeamDivision[];
}

/** Edit names and photo paths in package.json > unova.team. */
export function getTeam(): ProjectTeam { return pkgJson.unova.team; }
