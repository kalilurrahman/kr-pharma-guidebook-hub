import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, BarChart3, Filter, TrendingUp, Building2 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PharmaFooter } from "@/components/PharmaFooter";
import { gccMetrics, gccDimensions, gccDimensionColors, gccHighlightStats } from "@/data/gcc-metrics";
import type { GccMetric } from "@/data/gcc-metrics";
import pharmaLogo from "@/assets/pharma-logo.png";

function MetricRow({ m, i }: { m: GccMetric; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.02 }}
      className="card-pharma cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-${gccDimensionColors[m.dimension] ?? "primary"}/10 text-${gccDimensionColors[m.dimension] ?? "primary"} border border-${gccDimensionColors[m.dimension] ?? "primary"}/20`}>
              {m.dimension}
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">{m.source}</span>
          </div>
          <h3 className="font-display text-sm font-bold text-foreground">{m.metric}</h3>
          <p className="font-body text-xs text-muted-foreground mt-0.5">{m.description}</p>
        </div>
        <TrendingUp className={`w-4 h-4 text-primary flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-border">
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                <div className="font-mono text-[9px] text-primary uppercase tracking-wider mb-1">Mature GCC (Wave 4)</div>
                <div className="font-body text-xs text-foreground">{m.matureBenchmark}</div>
              </div>
              <div className="p-3 rounded-lg bg-muted border border-border">
                <div className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider mb-1">Large GCC (1,000+ FTEs)</div>
                <div className="font-body text-xs text-foreground">{m.largeBenchmark}</div>
              </div>
              <div className="p-3 rounded-lg bg-accent/5 border border-accent/10">
                <div className="font-mono text-[9px] text-accent-foreground uppercase tracking-wider mb-1">🏢 Novartis Hyderabad</div>
                <div className="font-body text-xs text-foreground">{m.novartisInsight}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const GccMetricsPage = () => {
  const [activeDimension, setActiveDimension] = useState<string>("all");

  const filtered = useMemo(() => {
    if (activeDimension === "all") return gccMetrics;
    return gccMetrics.filter((m) => m.dimension === activeDimension);
  }, [activeDimension]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="header-glass sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-mono">
              <ArrowLeft className="w-4 h-4" />
              Back to Handbook
            </Link>
            <div className="flex items-center gap-3">
              <img src={pharmaLogo} alt="Pharma Handbook" width={28} height={28} className="rounded-lg" />
              <span className="font-display text-sm font-bold text-foreground hidden sm:inline">
                GCC Maturity Metrics & Benchmarks
              </span>
              <span className="font-display text-sm font-bold text-foreground sm:hidden">
                GCC Metrics
              </span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="gradient-hero py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <Building2 className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-xs text-primary tracking-wider uppercase">37 Metrics · 9 Dimensions</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pharma GCC Maturity <span className="gradient-text">Benchmarks</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-8">
            Comprehensive metrics framework for evaluating Global Capability Centre maturity — benchmarked against KPMG Wave 4 standards with Novartis Hyderabad insights.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-px max-w-3xl mx-auto rounded-2xl overflow-hidden glass-card">
            {gccHighlightStats.map((s) => (
              <div key={s.label} className="p-4 text-center bg-background/5 backdrop-blur-sm">
                <div className="font-display text-lg sm:text-xl font-bold text-primary">{s.value}</div>
                <div className="font-mono text-[8px] text-muted-foreground uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto py-8 px-4 flex-1 max-w-5xl">
        {/* Filter bar */}
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <button
            onClick={() => setActiveDimension("all")}
            className={`nav-pill text-xs ${activeDimension === "all" ? "active" : ""}`}
          >
            All ({gccMetrics.length})
          </button>
          {gccDimensions.map((d) => {
            const count = gccMetrics.filter((m) => m.dimension === d).length;
            return (
              <button
                key={d}
                onClick={() => setActiveDimension(d)}
                className={`nav-pill text-xs ${activeDimension === d ? "active" : ""}`}
              >
                {d} ({count})
              </button>
            );
          })}
        </div>

        {/* Metrics list */}
        <div className="space-y-3">
          {filtered.map((m, i) => (
            <MetricRow key={m.metric} m={m} i={i} />
          ))}
        </div>

        {/* Source attribution */}
        <div className="mt-12 p-4 rounded-xl border border-border bg-muted/30">
          <p className="font-mono text-xs text-muted-foreground">
            📊 <strong>Sources:</strong> KPMG GCC Maturity Framework, Zinnov GCC Landscape Report, BCG Digital Transformation in Pharma, ANSR GCC Report, Deloitte Life Sciences Outlook, ZS Associates Commercial Excellence, Novartis Annual Reports, Qatalys Talent Analytics. Data reflects 2024–2025 benchmarks.
          </p>
        </div>
      </main>

      <PharmaFooter />
    </div>
  );
};

export default GccMetricsPage;
