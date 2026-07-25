import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, RotateCcw, Target, Gauge, Calculator, BarChart3 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PharmaFooter } from "@/components/PharmaFooter";
import { gccMetrics, gccDimensions, gccDimensionColors } from "@/data/gcc-metrics";
import pharmaLogo from "@/assets/pharma-logo.png";
import { usePageMeta } from "@/hooks/use-page-meta";
import { saveToolSlice } from "@/lib/tool-state";

// ── Self-benchmarking against the 37-metric GCC maturity dataset ──
// Rated per dimension (9) rather than per metric (37) to stay usable; the
// underlying metrics and their published benchmarks are surfaced as the
// concrete targets for whichever dimensions lag.

const TIERS = [
  { level: 1, label: "Baseline", hint: "Below the large-GCC benchmark" },
  { level: 2, label: "Scaling", hint: "Approaching the benchmark" },
  { level: 3, label: "Large GCC", hint: "Meets the large-GCC benchmark" },
  { level: 4, label: "Wave 4", hint: "Meets the mature benchmark" },
] as const;

const MAX = TIERS.length;

// Explicit class maps — Tailwind cannot see interpolated class names.
const TEXT: Record<string, string> = {
  teal: "text-teal", indigo: "text-indigo", violet: "text-violet",
  gold: "text-gold", coral: "text-coral", primary: "text-primary",
};
const BG: Record<string, string> = {
  teal: "bg-teal/10", indigo: "bg-indigo/10", violet: "bg-violet/10",
  gold: "bg-gold/10", coral: "bg-coral/10", primary: "bg-primary/10",
};
const FILL: Record<string, string> = {
  teal: "bg-teal", indigo: "bg-indigo", violet: "bg-violet",
  gold: "bg-gold", coral: "bg-coral", primary: "bg-primary",
};

const WAVES = [
  { min: 0, label: "Wave 1–2 · Cost & Capacity", detail: "The centre is still measured mainly on cost and throughput. Priority is standardising core processes and building the data and governance foundation before reaching for innovation mandates." },
  { min: 40, label: "Wave 2–3 · Capability & Standardisation", detail: "End-to-end process ownership is taking hold. Priority is deepening domain capability, forming Centres of Excellence, and converting arbitrage savings into platform and AI investment." },
  { min: 60, label: "Wave 3 · Centre of Excellence", detail: "The centre sets global standards in several domains. Priority is winning genuine global mandates and decision rights — the step that separates a scaled centre from a strategic one." },
  { min: 80, label: "Wave 4 · Innovation Partner ('HQ Twin')", detail: "The centre co-creates strategy and contributes to the innovation pipeline. Priority is sustaining the edge: IP generation, enterprise-global mandates, and exporting innovation to the parent." },
];

function waveFor(pct: number) {
  return [...WAVES].reverse().find((w) => pct >= w.min) ?? WAVES[0];
}

const BenchmarkPage = () => {
  usePageMeta(
    "GCC Self-Benchmarking",
    "Benchmark your Global Capability Centre against 37 pharma GCC maturity metrics across 9 dimensions — get a maturity index, a gap heatmap, and the published benchmarks to target.",
    "/benchmark",
  );

  const [tiers, setTiers] = useState<Record<string, number>>({});

  const rated = Object.keys(tiers).length;
  const complete = rated === gccDimensions.length;

  // Metric counts per dimension, straight from the dataset.
  const countByDimension = useMemo(() => {
    const m: Record<string, number> = {};
    for (const d of gccDimensions) m[d] = gccMetrics.filter((x) => x.dimension === d).length;
    return m;
  }, []);

  const { index, gaps } = useMemo(() => {
    const vals = gccDimensions.map((d) => tiers[d]).filter((v): v is number => typeof v === "number");
    const pct = vals.length ? (vals.reduce((a, b) => a + b, 0) / (gccDimensions.length * MAX)) * 100 : 0;
    const g = gccDimensions
      .filter((d) => typeof tiers[d] === "number")
      .map((d) => ({ dimension: d, tier: tiers[d], gap: MAX - tiers[d] }))
      .filter((x) => x.gap > 0)
      .sort((a, b) => b.gap - a.gap)
      .slice(0, 3);
    return { index: pct, gaps: g };
  }, [tiers]);

  const setTier = (d: string, level: number) => setTiers((p) => ({ ...p, [d]: level }));
  const reset = () => setTiers({});

  // Persist a render-ready summary for the Board Pack.
  useEffect(() => {
    if (!complete) return;
    saveToolSlice("benchmark", {
      index,
      wave: waveFor(index).label,
      dimensions: gccDimensions.map((d) => ({
        name: d,
        tier: tiers[d],
        tierLabel: TIERS[tiers[d] - 1].label,
      })),
      gaps: gaps.map((g) => ({
        name: g.dimension,
        gap: g.gap,
        targets: gccMetrics
          .filter((m) => m.dimension === g.dimension)
          .slice(0, 3)
          .map((m) => ({ metric: m.metric, target: m.matureBenchmark })),
      })),
      savedAt: new Date().toISOString(),
    });
  }, [complete, index, gaps, tiers]);

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
                GCC Self-Benchmarking
              </span>
              <span className="font-display text-sm font-bold text-foreground sm:hidden">Benchmark</span>
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
            <span className="font-mono text-xs text-primary tracking-wider uppercase">
              Interactive · {gccMetrics.length} Metrics · {gccDimensions.length} Dimensions
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Benchmark Your <span className="gradient-text">GCC</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-2">
            Rate your centre against the published benchmarks in each of the nine maturity dimensions. Get a maturity index, a gap heatmap, and the specific benchmarks to target next.
          </p>
          <p className="font-mono text-[11px] text-muted-foreground/70">
            Runs entirely in your browser — nothing is stored or sent.
          </p>
        </div>
      </section>

      <main className="container mx-auto py-8 px-4 flex-1 max-w-4xl">
        {/* Progress */}
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
              {rated} / {gccDimensions.length} dimensions rated
            </div>
            <div className="h-1.5 w-40 rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={false}
                animate={{ width: `${(rated / gccDimensions.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
          {rated > 0 && (
            <button
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          )}
        </div>

        {/* Dimension rating cards */}
        <div className="space-y-4">
          {gccDimensions.map((d, i) => {
            const color = gccDimensionColors[d] ?? "primary";
            const sel = tiers[d];
            return (
              <motion.div
                key={d}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="card-pharma"
              >
                <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`font-display text-sm font-bold ${TEXT[color]}`}>{d}</h3>
                      {typeof sel === "number" && (
                        <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full ${BG[color]} ${TEXT[color]}`}>
                          {TIERS[sel - 1].label}
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                      {countByDimension[d]} benchmark{countByDimension[d] !== 1 ? "s" : ""} in this dimension
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {TIERS.map((t) => {
                    const isSel = sel === t.level;
                    return (
                      <button
                        key={t.level}
                        onClick={() => setTier(d, t.level)}
                        aria-pressed={isSel}
                        className={`text-left p-2.5 rounded-lg border transition-colors ${
                          isSel
                            ? `${BG[color]} border-current ${TEXT[color]}`
                            : "bg-muted/40 border-border hover:border-primary/40"
                        }`}
                      >
                        <div className={`font-mono text-[9px] font-bold uppercase tracking-wider mb-1 ${isSel ? TEXT[color] : "text-foreground"}`}>
                          {t.label}
                        </div>
                        <div className="font-body text-[10.5px] leading-snug text-muted-foreground">{t.hint}</div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Results */}
        <AnimatePresence>
          {complete && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-10"
            >
              {/* Index */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 text-center mb-6">
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
                  Your GCC Maturity Index
                </div>
                <div className="font-display text-5xl font-bold gradient-text mb-1" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {Math.round(index)}%
                </div>
                <div className="font-display text-base font-bold text-foreground mb-3">
                  {waveFor(index).label}
                </div>
                <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto">
                  {waveFor(index).detail}
                </p>
              </div>

              {/* Heatmap */}
              <div className="card-pharma mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <h3 className="font-display text-sm font-bold text-foreground">Dimension Heatmap</h3>
                </div>
                <div className="space-y-2.5">
                  {gccDimensions.map((d) => {
                    const color = gccDimensionColors[d] ?? "primary";
                    const tier = tiers[d];
                    return (
                      <div key={d} className="flex items-center gap-3">
                        <div className="w-44 flex-shrink-0 font-body text-xs text-foreground truncate" title={d}>
                          {d}
                        </div>
                        <div className="flex-1 flex gap-1">
                          {TIERS.map((t) => (
                            <div
                              key={t.level}
                              className={`h-3.5 flex-1 rounded-sm ${t.level <= tier ? FILL[color] : "bg-muted"}`}
                              style={{ opacity: t.level <= tier ? 0.45 + 0.55 * (t.level / MAX) : 1 }}
                            />
                          ))}
                        </div>
                        <div className={`w-12 text-right font-mono text-[10px] font-bold ${TEXT[color]}`}>
                          {TIERS[tier - 1].label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Priority gaps with real benchmarks as targets */}
              {gaps.length > 0 && (
                <div className="card-pharma mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="w-4 h-4 text-coral" />
                    <h3 className="font-display text-sm font-bold text-foreground">Largest Gaps — and the Benchmarks to Target</h3>
                  </div>
                  <p className="font-body text-xs text-muted-foreground mb-4">
                    Published mature-GCC benchmarks for the dimensions furthest from Wave 4.
                  </p>
                  <div className="space-y-4">
                    {gaps.map((g) => {
                      const color = gccDimensionColors[g.dimension] ?? "primary";
                      const metrics = gccMetrics.filter((m) => m.dimension === g.dimension).slice(0, 3);
                      return (
                        <div key={g.dimension} className="p-3 rounded-lg border border-border bg-muted/30">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className={`font-display text-xs font-bold ${TEXT[color]}`}>{g.dimension}</span>
                            <span className="font-mono text-[9px] uppercase tracking-wider text-coral">
                              {g.gap} tier{g.gap !== 1 ? "s" : ""} to Wave 4
                            </span>
                          </div>
                          <div className="space-y-2">
                            {metrics.map((m) => (
                              <div key={m.metric} className="grid grid-cols-1 sm:grid-cols-[1fr_1.3fr] gap-1 sm:gap-3">
                                <div className="font-body text-[11px] text-foreground font-semibold">{m.metric}</div>
                                <div className="font-body text-[11px] text-muted-foreground">
                                  <span className="font-mono text-[9px] uppercase tracking-wider text-primary mr-1.5">Target</span>
                                  {m.matureBenchmark}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Link to="/assessment" className="card-pharma group flex items-center gap-3 no-underline hover:border-primary/50 transition-colors">
                  <div className="p-2.5 rounded-lg bg-teal/10">
                    <Gauge className="w-5 h-5 text-teal" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xs font-bold text-foreground mb-0.5">Maturity Assessment</h3>
                    <p className="font-body text-[11px] text-muted-foreground">Score your PDMF level</p>
                  </div>
                </Link>
                <Link to="/roi" className="card-pharma group flex items-center gap-3 no-underline hover:border-primary/50 transition-colors">
                  <div className="p-2.5 rounded-lg bg-gold/10">
                    <Calculator className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xs font-bold text-foreground mb-0.5">ROI Calculator</h3>
                    <p className="font-body text-[11px] text-muted-foreground">Value at stake</p>
                  </div>
                </Link>
                <Link to="/gcc-metrics" className="card-pharma group flex items-center gap-3 no-underline hover:border-primary/50 transition-colors">
                  <div className="p-2.5 rounded-lg bg-violet/10">
                    <BarChart3 className="w-5 h-5 text-violet" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xs font-bold text-foreground mb-0.5">All Benchmarks</h3>
                    <p className="font-body text-[11px] text-muted-foreground">Full {gccMetrics.length}-metric detail</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Method */}
        <div className="mt-10 p-4 rounded-xl border border-border bg-muted/30">
          <p className="font-mono text-xs text-muted-foreground leading-relaxed">
            📐 <strong>Method:</strong> each dimension is self-rated against the published large-GCC and mature (Wave 4) benchmarks in the {gccMetrics.length}-metric dataset; the index is the mean tier as a percentage of Wave 4. Sources include KPMG, Zinnov, BCG, ANSR, Deloitte, ZS, and NASSCOM. This is an indicative self-benchmark for framing discussion — not an audited assessment.
          </p>
        </div>
      </main>

      <PharmaFooter />
    </div>
  );
};

export default BenchmarkPage;
