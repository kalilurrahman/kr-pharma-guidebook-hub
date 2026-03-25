import { motion } from "framer-motion";
import { coverStats } from "@/data/pharma-data";

export function CoverSection() {
  return (
    <section className="gradient-hero relative overflow-hidden min-h-[85vh] flex flex-col items-center justify-center px-6 py-20">
      {/* Animated molecular background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse-dot" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full animate-pulse-dot" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-secondary rounded-full animate-pulse-dot" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary rounded-full animate-pulse-dot" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-secondary rounded-full animate-pulse-dot" style={{ animationDelay: "0.7s" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-8">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-dot" />
          <span className="font-mono text-xs text-primary tracking-wider uppercase">Second Edition · 2025</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
          The <span className="gradient-text">Pharma GCC</span>
          <br />Transformation Handbook
        </h1>

        <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-12">
          A definitive practitioner's guide to building, scaling, and leading world-class pharmaceutical Global Capability Centres in the AI era.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px max-w-2xl mx-auto rounded-2xl overflow-hidden glass-card mb-12">
          {coverStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="p-6 text-center bg-background/5 backdrop-blur-sm"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center font-display text-lg font-bold text-primary-foreground">
            KR
          </div>
          <div className="text-left">
            <div className="font-display text-foreground font-semibold">Kalilur Rahman</div>
            <div className="font-body text-xs text-muted-foreground">Global IT Executive · AI Thought Leader · Kaggle Legacy Grandmaster</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
