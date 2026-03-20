import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import NewsTicker from "./NewsTicker";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      <AnimatedBackground variant="hero" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-gold)" }}>
            <span className="text-primary-foreground font-bold text-lg font-['Space_Grotesk']">ET</span>
          </div>
          <span className="text-xl font-semibold tracking-tight font-['Space_Grotesk']">
            My <span className="text-gradient-gold">ET</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#navigator" className="hover:text-foreground transition-colors">Navigator</a>
          <a href="#dashboard" className="hover:text-foreground transition-colors">Dashboard</a>
          <a href="#tracker" className="hover:text-foreground transition-colors">Story Arc</a>
          <button className="px-5 py-2 rounded-lg text-primary-foreground font-medium text-sm" style={{ background: "var(--gradient-gold)" }}>
            Get Early Access
          </button>
        </div>
      </nav>

      {/* Ticker */}
      <NewsTicker />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-gold/30 text-gold mb-8" style={{ background: "hsl(38 92% 55% / 0.08)" }}>
              The Future of Business News
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6 font-['Space_Grotesk']"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            News That{" "}
            <span className="text-gradient-gold">Knows</span>
            <br />
            <span className="text-gradient-electric">You</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            Not just a filtered feed — a fundamentally different news experience tailored for{" "}
            <span className="text-foreground font-medium">every reader</span>. AI-powered briefings, interactive story arcs, and broadcast-quality video — all personalized.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="px-8 py-3.5 rounded-xl font-semibold text-primary-foreground text-base" style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
              Experience My ET →
            </button>
            <button className="px-8 py-3.5 rounded-xl font-semibold text-foreground text-base glass hover:border-gold/30 transition-colors">
              Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {[
              { value: "2M+", label: "Active Readers" },
              { value: "15+", label: "Languages" },
              { value: "98%", label: "Relevance Score" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient-gold font-['Space_Grotesk']">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="relative z-10 flex justify-center pb-8"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-gold" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
