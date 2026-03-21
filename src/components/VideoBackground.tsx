import { useEffect, useRef, useState } from "react";
import heroVideo from "../../public/videos/hero.mp4.asset.json";
import dashboardVideo from "../../public/videos/dashboard.mp4.asset.json";
import articleVideo from "../../public/videos/article.mp4.asset.json";

type VideoVariant = "hero" | "dashboard" | "article";

const videoSources: Record<VideoVariant, string> = {
  hero: heroVideo.url,
  dashboard: dashboardVideo.url,
  article: articleVideo.url,
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
  const videoSrc = videoSources[variant];

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setOffsetY(rect.top * -0.08);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 8 + 6,
      color: (i % 3 === 0 ? "gold" : i % 3 === 1 ? "electric" : "muted") as Particle["color"],
    }))
  );

  const colorMap = {
    gold: "bg-gold/40",
    electric: "bg-electric/30",
    muted: "bg-muted-foreground/15",
  };

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">

      {/* 🎬 PRIMARY VIDEO — variant-specific, full coverage */}
      <div
        className="absolute inset-[-60px] z-0"
        style={{
          transform: `translateY(${offsetY}px) scale(1.05)`,
          willChange: "transform",
        }}
      >
        <video
          key={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* ✨ GLOW LAYER — second video blend for depth */}
      <video
        key={videoSrc + "-glow"}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-screen blur-[2px] z-10"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* 🌑 DARK OVERLAY for readability */}
      <div className="absolute inset-0 bg-background/40 z-20" />

      {/* ✨ GRADIENT SHIMMER */}
      <div
        className="absolute inset-0 z-30 animate-bg-shift opacity-20"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--gold) / 0.1) 0%, transparent 30%, hsl(var(--electric) / 0.08) 60%, transparent 100%)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* 🧱 GRID overlay */}
      <div
        className="absolute inset-0 z-30 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--gold) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold) / 0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* 📡 SCAN LINE */}
      <div className="absolute inset-0 z-30">
        <div className="absolute w-full h-[1px] animate-scan-line bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      {/* ✨ PARTICLES */}
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full ${colorMap[p.color]} animate-float z-30`}
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
      <div
        className="absolute w-[500px] h-[500px] rounded-full animate-pulse-glow top-[-10%] right-[-10%] z-30"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold) / 0.06), transparent 70%)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full animate-pulse-glow bottom-[10%] left-[-5%] z-30"
        style={{
          background: "radial-gradient(circle, hsl(var(--electric) / 0.04), transparent 70%)",
          animationDelay: "2s",
        }}
      />

      {/* 🌑 VIGNETTE */}
      <div
        className="absolute inset-0 z-40"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, hsl(var(--background)) 100%)",
        }}
      />
    </div>
  );
};

export default VideoBackground;
