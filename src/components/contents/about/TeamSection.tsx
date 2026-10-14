import type { CSSProperties } from "react";
import MemberCard from "@/components/contents/about/MemberCard";
import type { AboutSectionProps } from "@/lib/page-state/getAboutState";

export default function TeamSection({ projectLeader, divisions }: AboutSectionProps) {
  return (
    <section className="cc-team-section" aria-labelledby="cc-team-heading">
      <div className="cc-team-container">
        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#B85C5C" }}>Our Team</span>
          <h2 id="cc-team-heading" className="mt-3 text-4xl font-display font-bold text-brand-navy">The People Behind Creativity Corner</h2>
        </div>
        <div className="cc-team-chart">
          <div className="cc-team-leader">
            <MemberCard member={projectLeader} role={projectLeader.role} leader />
          </div>
          {divisions.length > 0 && (
            <ul className="cc-team-divisions" style={{ "--team-columns": divisions.length } as CSSProperties}>
              {divisions.map((division) => (
                <li key={division.id} className="cc-team-division">
                  <h3 className="cc-team-division-heading">{division.name}</h3>
                  <div className="cc-team-members">
                    {division.members.map((member) => <MemberCard key={member.name} member={member} />)}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
