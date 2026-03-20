import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/bg-news-hero.mp4.asset.json";
import dashboardVideo from "@/assets/bg-news-dashboard.mp4.asset.json";
import articleVideo from "@/assets/bg-news-article.mp4.asset.json";

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
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Video layer with parallax */}
      <div
        className="absolute inset-[-40px]"
        style={{ transform: `translateY(${offsetY}px)`, willChange: "transform" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ minHeight: "calc(100% + 80px)" }}
        >
          <source src={videoSources[variant]} type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: variant === "hero"
            ? "linear-gradient(180deg, hsl(var(--background) / 0.4) 0%, hsl(var(--background) / 0.65) 40%, hsl(var(--background) / 0.85) 100%)"
            : "linear-gradient(180deg, hsl(var(--background) / 0.6) 0%, hsl(var(--background) / 0.75) 50%, hsl(var(--background) / 0.9) 100%)",
        }}
      />

      {/* Animated gradient shimmer */}
      <div
        className="absolute inset-0 animate-bg-shift opacity-20"
        style={{
          background: "linear-gradient(135deg, hsl(var(--gold) / 0.08) 0%, transparent 30%, hsl(var(--electric) / 0.06) 60%, transparent 100%)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--gold) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold) / 0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Scan line */}
      <div className="absolute inset-0">
        <div
          className="absolute w-full h-[1px] animate-scan-line"
          style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.15), transparent)" }}
        />
      </div>

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

      {/* Ambient orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full animate-pulse-glow"
        style={{
          top: "-10%",
          right: "-10%",
          background: "radial-gradient(circle, hsl(var(--gold) / 0.06), transparent 70%)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full animate-pulse-glow"
        style={{
          bottom: "10%",
          left: "-5%",
          background: "radial-gradient(circle, hsl(var(--electric) / 0.04), transparent 70%)",
          animationDelay: "2s",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, hsl(var(--background) / 0.7) 100%)" }}
      />
    </div>
  );
};

export default VideoBackground;
