import { deptConfig } from "@/lib/data/about";
import type { TeamMember } from "@/lib/team";
export default function MemberCard({ member, size = "md" }: { member: TeamMember; size?: "lg" | "md" | "sm"; }) {
  const dept = deptConfig[member.department] ?? deptConfig["C-Level"];
  const avatarSize = size === "lg" ? "w-20 h-20 text-4xl" : size === "md" ? "w-16 h-16 text-3xl" : "w-12 h-12 text-2xl";

  return (
    <div
      className="rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{
        background: "white",
        border: `1px solid ${dept.border}`,
        boxShadow: "0 2px 12px rgba(163,28,29,0.07)",
      }}
    >
      <div
        className={`${avatarSize} rounded-2xl flex items-center justify-center mb-3 shrink-0`}
        style={{ background: dept.bg }}
      >
        {member.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={member.photo} alt={member.name} className="w-full h-full rounded-2xl object-cover" />
        ) : (
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-1/2 h-1/2 opacity-40">
            <circle cx="20" cy="14" r="7" fill="currentColor" style={{ color: dept.text }} />
            <path d="M6 34c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ color: dept.text }} />
          </svg>
        )}
      </div>
      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2" style={{ background: dept.bg, color: dept.text }}>
        {dept.label}
      </span>
      <h3 className={`font-display font-bold text-brand-navy ${size === "lg" ? "text-xl" : "text-base"}`}>
        {member.name}
      </h3>
      <p className="text-xs font-medium mt-0.5" style={{ color: "#A31C1D" }}>{member.role}</p>
      {size !== "sm" && (
        <p className="mt-3 text-brand-navy/55 text-xs leading-relaxed">{member.bio}</p>
      )}
    </div>
  );
}
