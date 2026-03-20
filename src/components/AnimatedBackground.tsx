import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: "gold" | "electric" | "muted";
}

const AnimatedBackground = ({ variant = "hero" }: { variant?: "hero" | "dashboard" | "subtle" }) => {
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: variant === "hero" ? 30 : 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 8 + 6,
      color: i % 3 === 0 ? "gold" : i % 3 === 1 ? "electric" : "muted",
    }))
  );

  const colorMap = {
    gold: "bg-gold/30",
    electric: "bg-electric/20",
    muted: "bg-muted-foreground/10",
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 animate-bg-shift opacity-40"
        style={{
          background:
            variant === "hero"
              ? "linear-gradient(135deg, hsl(222 47% 4%) 0%, hsl(222 47% 10%) 30%, hsl(38 40% 10%) 60%, hsl(210 50% 8%) 100%)"
              : variant === "dashboard"
              ? "linear-gradient(180deg, hsl(222 47% 5%) 0%, hsl(222 47% 8%) 50%, hsl(210 30% 7%) 100%)"
              : "linear-gradient(180deg, hsl(222 47% 6%) 0%, hsl(222 47% 7%) 100%)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(38 92% 55% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(38 92% 55% / 0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Scan line effect */}
      {variant === "hero" && (
        <div className="absolute inset-0">
          <div
            className="absolute w-full h-px animate-scan-line"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(38 92% 55% / 0.15), transparent)",
            }}
          />
        </div>
      )}

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full ${colorMap[p.color]} animate-float`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            filter: `blur(${p.size > 3 ? 1 : 0}px)`,
          }}
        />
      ))}

      {/* Large ambient orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full animate-pulse-glow"
        style={{
          top: "-10%",
          right: "-10%",
          background: "radial-gradient(circle, hsl(38 92% 55% / 0.08), transparent 70%)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full animate-pulse-glow"
        style={{
          bottom: "10%",
          left: "-5%",
          background: "radial-gradient(circle, hsl(210 100% 55% / 0.06), transparent 70%)",
          animationDelay: "2s",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
