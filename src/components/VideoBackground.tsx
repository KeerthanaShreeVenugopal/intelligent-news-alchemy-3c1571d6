import { useEffect, useRef, useState } from "react";

type VideoVariant = "hero" | "dashboard" | "article";

const videoSources: Record<VideoVariant, string> = {
  hero: "/videos/hero.mp4",
  dashboard: "/videos/dashboard.mp4",
  article: "/videos/article.mp4",
};

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: "gold" | "electric" | "muted";
}

const VideoBackground = ({ variant = "hero" }: { variant?: VideoVariant }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setOffsetY(rect.top * -0.1);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 8 + 6,
      color: i % 3 === 0 ? "gold" : i % 3 === 1 ? "electric" : "muted",
    }))
  );

  const colorMap = {
    gold: "bg-gold/40",
    electric: "bg-electric/30",
    muted: "bg-muted-foreground/15",
  };

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">

      {/* 🎬 VIDEO BACKGROUND */}
     {/* 🎬 BASE VIDEO (topvdo) */}
<div
  className="absolute inset-[-40px] z-0"
  style={{
    transform: `translateY(${offsetY}px)`,
    willChange: "transform",
  }}
>
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/videos/topvdo.mp4" type="video/mp4" />
  </video>
</div>

{/* ✨ GLOW VIDEO (bottomvdo) */}
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen blur-sm z-10"
>
  <source src="/videos/bottomvdo.mp4" type="video/mp4" />
</video>

{/* 🌑 DARK OVERLAY */}
<div className="absolute inset-0 bg-black/10 z-20" />

      {/* ✨ GRADIENT SHIMMER */}
      <div
        className="absolute inset-0 animate-bg-shift opacity-20"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,200,0,0.08) 0%, transparent 30%, rgba(0,150,255,0.06) 60%, transparent 100%)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* 🧱 GRID */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,200,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,200,0,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* 📡 SCAN LINE */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-[1px] animate-scan-line bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />
      </div>

      {/* ✨ PARTICLES */}
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

      {/* 🌟 ORBS */}
      <div className="absolute w-[500px] h-[500px] rounded-full animate-pulse-glow top-[-10%] right-[-10%]"
        style={{
          background: "radial-gradient(circle, rgba(255,200,0,0.06), transparent 70%)",
        }}
      />
      <div className="absolute w-[400px] h-[400px] rounded-full animate-pulse-glow bottom-[10%] left-[-5%]"
        style={{
          background: "radial-gradient(circle, rgba(0,150,255,0.04), transparent 70%)",
          animationDelay: "2s",
        }}
      />

      {/* 🌑 VIGNETTE */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />
    </div>
  );
};

export default VideoBackground;