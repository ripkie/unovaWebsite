import type { CSSProperties } from "react";

// Posisi dan fase tetap: hasil server/client identik, tanpa timer atau listener.
const particles = [
  [8, 25, 24, 18, -6, "pink", "pentagon", 35],
  [23, 22, 35, 23, -15, "red", "pentagon", -40],
  [29, 14, 27, 19, -4, "red", "square", 20],
  [42, 11, 30, 22, -12, "sage", "square", -15],
  [45, 20, 32, 26, -19, "blue", "round", 25],
  [62, 18, 22, 21, -9, "mauve", "pentagon", -20],
  [49, 38, 48, 24, -5, "pink", "pentagon", 30],
  [67, 46, 44, 28, -18, "pink", "pentagon", -5],
  [89, 40, 22, 20, -11, "mauve", "square", 40],
  [31, 63, 48, 25, -8, "mauve", "square", -35],
  [35, 74, 43, 22, -16, "blue", "round", -20],
  [12, 87, 28, 26, -12, "sand", "pentagon", 15],
  [78, 85, 34, 21, -3, "red", "round", 30],
  [82, 90, 32, 24, -20, "blue", "square", -15],
  [86, 86, 25, 19, -6, "sand", "pentagon", 10],
  [75, 94, 40, 27, -17, "sand", "round", -25],
  [50, 96, 39, 23, -14, "mauve", "square", 30],
] as const;

export default function HeroParticles() {
  return <div className="cc-hero-particles" aria-hidden="true">
    {particles.map(([x, y, size, duration, delay, color, shape, rotation], i) =>
      <span key={i} className={`cc-particle cc-particle-${color} cc-particle-${shape}`} style={{
        left: `${x}%`, top: `${y}%`, "--particle-size": `${size}px`,
        "--particle-duration": `${duration}s`, "--particle-delay": `${delay}s`,
        "--particle-rotation": `${rotation}deg`, "--particle-direction": i % 2 ? -1 : 1,
      } as CSSProperties}><i /></span>
    )}
  </div>;
}
