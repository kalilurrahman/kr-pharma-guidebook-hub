import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calculator, TrendingUp, Gauge, BookOpen } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PharmaFooter } from "@/components/PharmaFooter";
import pharmaLogo from "@/assets/pharma-logo.png";
import { usePageMeta } from "@/hooks/use-page-meta";

// ── Value levers ──
// Annual value gap between a digital laggard and a digital leader, benchmarked
// to a ~$5B-revenue company (Ch 1 · The Cost of Inaction — Quantified).
// Figures scale linearly with revenue; capture factor reflects how much of the
// gap remains open given the organisation's current position.

interface Lever {
  key: string;
  name: string;
  note: string;
  chapter: string;
  low: number; // $M/yr at $5B revenue
  high: number;
  colorText: string;
  colorBar: string;
  colorBg: string;
}

const LEVERS: Lever[] = [
  { key: "rnd", name: "R&D Discovery Acceleration", note: "Target-to-IND 4–5yr → 12–18mo", chapter: "Ch 4 · R&D & Drug Discovery", low: 200, high: 400, colorText: "text-violet", colorBar: "bg-violet", colorBg: "bg-violet/10" },
  { key: "clinical", name: "Clinical Recruitment", note: "On-schedule; 30–50% faster enrolment", chapter: "Ch 5 · Clinical Trials", low: 150, high: 300, colorText: "text-teal", colorBar: "bg-teal", colorBg: "bg-teal/10" },
  { key: "regulatory", name: "Regulatory Submission", note: "12–15mo NDA prep; 50% fewer queries", chapter: "Ch 8 · Regulatory Affairs", low: 100, high: 200, colorText: "text-indigo", colorBar: "bg-indigo", colorBg: "bg-indigo/10" },
  { key: "manufacturing", name: "Manufacturing Release", note: "2–4 days RTRT; lower batch failure", chapter: "Ch 6 · Manufacturing", low: 80, high: 150, colorText: "text-gold", colorBar: "bg-gold", colorBg: "bg-gold/10" },
  { key: "commercial", name: "Commercial Effectiveness", note: "Higher call rate & new-to-brand yield", chapter: "Ch 9 · Commercial Excellence", low: 50, high: 120, colorText: "text-coral", colorBar: "bg-coral", colorBg: "bg-coral/10" },
];

// How much of the gap remains capturable given current maturity.
const POSITIONS = [
  { key: "laggard", label: "Laggard", factor: 1.0, hint: "Most of the gap is open" },
  { key: "developing", label: "Developing", factor: 0.5, hint: "About half captured" },
  { key: "leader", label: "Leader", factor: 0.15, hint: "Largely captured" },
] as const;

const BENCHMARK_REVENUE = 5; // $B basis for the Ch 1 figures

function fmtM(m: number): string {
  if (m >= 1000) return `$${(m / 1000).toFixed(m >= 10000 ? 1 : 2)}B`;
  return `$${Math.round(m)}M`;
}

const RoiCalculatorPage = () => {
  usePageMeta(
    "ROI / Cost-of-Inaction Calculator",
    "Estimate the annual value at stake of pharma digital transformation — scaled from the handbook's benchmarked cost-of-inaction analysis across five value levers.",
    "/roi",
  );
  const [revenue, setRevenue] = useState(5); // $B
  const [positions, setPositions] = useState<Record<string, number>>(
    Object.fromEntries(LEVERS.map((l) => [l.key, 0.5])),
  );

  const scale = revenue / BENCHMARK_REVENUE;
  const setPosition = (key: string, factor: number) =>
    setPositions((p) => ({ ...p, [key]: factor }));

  const { rows, totalLow, totalHigh, maxMid } = useMemo(() => {
    const rs = LEVERS.map((l) => {
      const factor = positions[l.key];
      const low = l.low * scale * factor;
      const high = l.high * scale * factor;
      const mid = (low + high) / 2;
      return { lever: l, factor, low, high, mid };
    });
    const tLow = rs.reduce((a, r) => a + r.low, 0);
    const tHigh = rs.reduce((a, r) => a + r.high, 0);
    const mMid = Math.max(...rs.map((r) => r.mid), 1);
    return { rows: rs, totalLow: tLow, totalHigh: tHigh, maxMid: mMid };
  }, [positions, scale]);

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
                Transformation ROI &amp; Value-at-Stake
              </span>
              <span className="font-display text-sm font-bold text-foreground sm:hidden">
                ROI Calculator
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
            <Calculator className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-xs text-primary tracking-wider uppercase">Interactive · Cost of Inaction</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Digital Transformation <span className="gradient-text">ROI Calculator</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-2">
            Estimate the annual value at stake between a digital laggard and a digital leader for your organisation — scaled from the handbook's benchmarked cost-of-inaction analysis.
          </p>
          <p className="font-mono text-[11px] text-muted-foreground/70">
            Indicative model · scales the Ch 1 benchmark · runs in your browser
          </p>
        </div>
      </section>

      <main className="container mx-auto py-8 px-4 flex-1 max-w-4xl">
        {/* Revenue input */}
        <div className="card-pharma mb-6">
          <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
            <div>
              <h3 className="font-display text-sm font-bold text-foreground">Annual Revenue</h3>
              <p className="font-body text-xs text-muted-foreground">Drag to match your organisation's scale.</p>
            </div>
            <div className="font-display text-2xl font-bold text-primary" style={{ fontVariantNumeric: "tabular-nums" }}>
              ${revenue.toFixed(1)}B
            </div>
          </div>
          <input
            type="range"
            min={0.5}
            max={50}
            step={0.5}
            value={revenue}
            onChange={(e) => setRevenue(parseFloat(e.target.value))}
            aria-label="Annual revenue in billions of dollars"
            className="w-full accent-[hsl(var(--primary))] cursor-pointer"
          />
          <div className="flex justify-between font-mono text-[10px] text-muted-foreground mt-1">
            <span>$0.5B</span>
            <span>$50B</span>
          </div>
        </div>

        {/* Headline result */}
        <motion.div
          layout
          className="glass-card rounded-2xl p-6 sm:p-8 text-center mb-6"
        >
          <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
            Estimated Annual Value at Stake
          </div>
          <div className="font-display text-4xl sm:text-5xl font-bold gradient-text mb-2" style={{ fontVariantNumeric: "tabular-nums" }}>
            {fmtM(totalLow)} – {fmtM(totalHigh)}
          </div>
          <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto">
            Per year, based on a ${revenue.toFixed(1)}B revenue base and your selected maturity per lever. This is the value a digital leader captures that a laggard forgoes — the quantified cost of inaction.
          </p>
        </motion.div>

        {/* Levers */}
        <div className="space-y-4 mb-6">
          {rows.map(({ lever, factor, low, high, mid }) => (
            <div key={lever.key} className="card-pharma">
              <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                <div className="min-w-0">
                  <h3 className={`font-display text-sm font-bold ${lever.colorText}`}>{lever.name}</h3>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{lever.note}</p>
                  <p className="font-mono text-[10px] text-primary mt-1">→ {lever.chapter}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className={`font-display text-lg font-bold ${lever.colorText}`} style={{ fontVariantNumeric: "tabular-nums" }}>
                    {fmtM(low)} – {fmtM(high)}
                  </div>
                  <div className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">per year</div>
                </div>
              </div>

              {/* value bar */}
              <div className="h-2 rounded-full bg-muted overflow-hidden mb-3">
                <motion.div
                  className={`h-full rounded-full ${lever.colorBar}`}
                  initial={false}
                  animate={{ width: `${(mid / maxMid) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* maturity selector */}
              <div className="grid grid-cols-3 gap-2">
                {POSITIONS.map((pos) => {
                  const isSel = Math.abs(factor - pos.factor) < 0.001;
                  return (
                    <button
                      key={pos.key}
                      onClick={() => setPosition(lever.key, pos.factor)}
                      aria-pressed={isSel}
                      className={`p-2 rounded-lg border text-center transition-colors ${
                        isSel
                          ? `${lever.colorBg} border-current ${lever.colorText}`
                          : "bg-muted/40 border-border hover:border-primary/40 text-muted-foreground"
                      }`}
                    >
                      <div className={`font-mono text-[10px] font-bold uppercase tracking-wider ${isSel ? lever.colorText : "text-foreground"}`}>
                        {pos.label}
                      </div>
                      <div className="font-body text-[9px] text-muted-foreground leading-tight mt-0.5">{pos.hint}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Link to="/assessment" className="card-pharma group flex items-center gap-4 no-underline hover:border-primary/50 transition-colors">
            <div className="p-3 rounded-lg bg-teal/10">
              <Gauge className="w-6 h-6 text-teal" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-sm font-bold text-foreground mb-0.5">Assess Your Maturity</h3>
              <p className="font-body text-xs text-muted-foreground">Score your PDMF level to inform these inputs</p>
            </div>
          </Link>
          <Link to="/reader" className="card-pharma group flex items-center gap-4 no-underline hover:border-primary/50 transition-colors">
            <div className="p-3 rounded-lg bg-primary/10">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-sm font-bold text-foreground mb-0.5">See the Analysis</h3>
              <p className="font-body text-xs text-muted-foreground">Read Ch 1 · The Cost of Inaction, Quantified</p>
            </div>
          </Link>
        </div>

        {/* Assumptions */}
        <div className="p-4 rounded-xl border border-border bg-muted/30">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-primary" />
            <h4 className="font-mono text-xs text-primary uppercase tracking-wider">Method &amp; Assumptions</h4>
          </div>
          <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">
            Lever ranges are the annual laggard-vs-leader gaps benchmarked to a ~$5B-revenue company in Ch 1 (sources: Insilico, Tufts CSDD, IQVIA, ISPE, Veeva). Figures scale linearly with revenue and are multiplied by a capture factor per lever (Laggard 100% · Developing 50% · Leader 15%). This is an indicative directional model for framing the opportunity — not a forecast or a substitute for a bottom-up business case.
          </p>
        </div>
      </main>

      <PharmaFooter />
    </div>
  );
};

export default RoiCalculatorPage;
