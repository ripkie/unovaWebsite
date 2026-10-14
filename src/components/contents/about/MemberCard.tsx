import type { TeamMember } from "@/lib/team";

export default function MemberCard({ member, role, leader = false }: { member: TeamMember; role?: string; leader?: boolean }) {
  return (
    <div className="cc-team-member rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ background: "white", border: "1px solid rgba(184,92,92,.2)", boxShadow: "0 2px 12px rgba(184,92,92,.07)" }}>
      <div className={`${leader ? "w-20 h-20" : "w-16 h-16"} rounded-2xl flex items-center justify-center mb-3 shrink-0 overflow-hidden`} style={{ background: "rgba(184,92,92,.08)", color: "#B85C5C" }}>
        {member.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="w-1/2 h-1/2 opacity-40">
            <circle cx="20" cy="14" r="7" fill="currentColor" />
            <path d="M6 34c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        )}
      </div>
      {role && !leader && <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2" style={{ background: "rgba(184,92,92,.08)", color: "#B85C5C" }}>{role}</span>}
      {leader ? <h3 className="font-display font-bold text-brand-navy text-xl">{member.name}</h3> : <h4 className="font-display font-bold text-brand-navy text-base">{member.name}</h4>}
      <p className="text-xs font-medium mt-1" style={{ color: "#B85C5C" }}>{member.role}</p>
    </div>
  );
}
