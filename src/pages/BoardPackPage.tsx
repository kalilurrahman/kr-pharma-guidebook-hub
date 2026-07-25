import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Printer, FileText, Gauge, Calculator, Building2, CheckCircle2, Circle,
  Download, Upload, ClipboardCopy, Check,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PharmaFooter } from "@/components/PharmaFooter";
import pharmaLogo from "@/assets/pharma-logo.png";
import { usePageMeta } from "@/hooks/use-page-meta";
import {
  loadToolState, saveToolSlice, formatUsdMillions, serialiseToolState,
  parseImportedToolState, replaceToolState, toPlainTextSummary, type ToolState,
} from "@/lib/tool-state";

// The three waves are the handbook's own execution model (Ch 13 / Ch 30).
const WAVES = [
  {
    num: "Wave 1",
    window: "Months 1–12",
    title: "Stabilise & Connect",
    points: [
      "Establish digital leadership (CDO/CAIO) and light governance",
      "Deploy the cloud data foundation; complete a PDMF baseline",
      "Pilot eQMS/EBR, eCTD automation, and PV NLP intake",
    ],
    target: "PDMF Level 2 → 3",
  },
  {
    num: "Wave 2",
    window: "Months 13–24",
    title: "Differentiate & Scale",
    points: [
      "Operationalise AI discovery; run DCT-enabled trials",
      "Deploy the NBA commercial engine; scale the RWE programme",
      "Roll out PAT and digital twins across manufacturing sites",
    ],
    target: "PDMF Level 3 → 4",
  },
  {
    num: "Wave 3",
    window: "Months 25–36",
    title: "Lead & Innovate",
    points: [
      "Advance an AI-discovered candidate; enable real-time release",
      "Run autonomous PV signal monitoring; sign outcome-based contracts",
      "Establish the GCC as a global digital Centre of Excellence",
    ],
    target: "PDMF Level 4 → 5",
  },
];

function Missing({ to, label, icon: Icon }: { to: string; label: string; icon: typeof Gauge }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors no-underline"
    >
      <Circle className="w-3.5 h-3.5" />
      <Icon className="w-3.5 h-3.5" />
      Complete the {label} →
    </Link>
  );
}

function Ready({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-2 text-xs font-mono text-primary">
      <CheckCircle2 className="w-3.5 h-3.5" />
      {label} captured
    </span>
  );
}

const BoardPackPage = () => {
  usePageMeta(
    "Board Pack Generator",
    "Assemble a print-ready board pack from your maturity assessment, GCC benchmark, and value-at-stake analysis — with a sequenced 36-month roadmap.",
    "/board-pack",
  );

  const [state, setState] = useState<ToolState>({});
  const [org, setOrg] = useState("");

  useEffect(() => {
    const s = loadToolState();
    setState(s);
    setOrg(s.organisation ?? "");
  }, []);

  const fileInput = useRef<HTMLInputElement>(null);
  const [notice, setNotice] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const onOrgChange = (v: string) => {
    setOrg(v);
    saveToolSlice("organisation", v);
  };

  const slug = (s: string) =>
    (s.trim() || "board-pack").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48);

  const handleExport = () => {
    const json = serialiseToolState({ ...state, organisation: org }, new Date().toISOString());
    const url = URL.createObjectURL(new Blob([json], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `${slug(org)}-results.json`;
    a.click();
    URL.revokeObjectURL(url);
    setNotice({ kind: "ok", text: "Results downloaded." });
  };

  const handleImportFile = async (file: File) => {
    const result = parseImportedToolState(await file.text());
    if (!result.ok) {
      setNotice({ kind: "err", text: result.error });
      return;
    }
    replaceToolState(result.state);
    setState(result.state);
    setOrg(result.state.organisation ?? "");
    setNotice({ kind: "ok", text: "Results loaded from file." });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(toPlainTextSummary({ ...state, organisation: org }, org));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setNotice({ kind: "err", text: "Your browser blocked clipboard access." });
    }
  };

  const { assessment, roi, benchmark } = state;
  const anyData = Boolean(assessment || roi || benchmark);
  const today = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  const orgLabel = org.trim() || "Your Organisation";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="header-glass sticky top-0 z-50 border-b border-border no-print">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-mono">
              <ArrowLeft className="w-4 h-4" />
              Back to Handbook
            </Link>
            <div className="flex items-center gap-3">
              <img src={pharmaLogo} alt="Pharma Handbook" width={28} height={28} className="rounded-lg" />
              <span className="font-display text-sm font-bold text-foreground hidden sm:inline">
                Board Pack Generator
              </span>
              <span className="font-display text-sm font-bold text-foreground sm:hidden">Board Pack</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="gradient-hero py-16 px-4 no-print">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <FileText className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-xs text-primary tracking-wider uppercase">Assembles Your Tool Results</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Board Pack <span className="gradient-text">Generator</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-2">
            Turns your maturity assessment, GCC benchmark, and value-at-stake analysis into one print-ready pack — with a sequenced 36-month roadmap.
          </p>
          <p className="font-mono text-[11px] text-muted-foreground/70">
            Results are read from this browser only — nothing is stored or sent.
          </p>
        </div>
      </section>

      <main className="container mx-auto py-8 px-4 flex-1 max-w-4xl">
        {/* Controls */}
        <div className="card-pharma mb-6 no-print">
          <h3 className="font-display text-sm font-bold text-foreground mb-3">Pack Inputs</h3>
          <label htmlFor="org" className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
            Organisation name (appears on the cover)
          </label>
          <input
            id="org"
            type="text"
            value={org}
            onChange={(e) => onOrgChange(e.target.value)}
            placeholder="e.g. Acme Pharma — India GCC"
            className="w-full px-3 py-2 rounded-lg bg-muted/40 border border-border text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 mb-4"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
            {assessment ? <Ready label="Maturity assessment" /> : <Missing to="/assessment" label="maturity assessment" icon={Gauge} />}
            {benchmark ? <Ready label="GCC benchmark" /> : <Missing to="/benchmark" label="GCC benchmark" icon={Building2} />}
            {roi ? <Ready label="Value at stake" /> : <Missing to="/roi" label="ROI calculator" icon={Calculator} />}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => window.print()}
              disabled={!anyData}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
            >
              <Printer className="w-4 h-4" />
              Print / Save as PDF
            </button>
            <button
              onClick={handleCopy}
              disabled={!anyData}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-muted/40 font-mono text-xs uppercase tracking-wider text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary/50 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <ClipboardCopy className="w-3.5 h-3.5" />}
              {copied ? "Copied" : "Copy summary"}
            </button>
            <button
              onClick={handleExport}
              disabled={!anyData}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-muted/40 font-mono text-xs uppercase tracking-wider text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary/50 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Save results
            </button>
            <button
              onClick={() => fileInput.current?.click()}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-muted/40 font-mono text-xs uppercase tracking-wider text-foreground hover:border-primary/50 transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              Load results
            </button>
            <input
              ref={fileInput}
              type="file"
              accept="application/json,.json"
              aria-label="Load saved results file"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) void handleImportFile(f);
                e.target.value = "";
              }}
            />
          </div>

          {notice && (
            <p
              role="status"
              className={`font-mono text-xs mt-3 ${notice.kind === "ok" ? "text-primary" : "text-coral"}`}
            >
              {notice.text}
            </p>
          )}
          {!anyData && !notice && (
            <p className="font-body text-xs text-muted-foreground mt-3">
              Complete at least one tool above, or load a previously saved results file.
            </p>
          )}
        </div>

        {/* ── The pack ── */}
        {anyData && (
          <div className="space-y-6">
            {/* Cover */}
            <section className="glass-card rounded-2xl p-8 pack-page">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-3">
                Digital Transformation · Board Pack
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-2">{orgLabel}</h2>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Digital maturity, competitive benchmark, and value at stake — with a sequenced 36-month execution plan.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] text-muted-foreground">
                <span>Prepared {today}</span>
                <span>Framework: PDMF · ACUITAS</span>
                <span>Source: Pharma GCC Transformation Handbook</span>
              </div>
            </section>

            {/* Executive summary */}
            <section className="card-pharma pack-page">
              <h3 className="font-display text-base font-bold text-foreground mb-3">1 · Executive Summary</h3>
              <div className="space-y-2.5 font-body text-sm text-muted-foreground">
                {assessment && (
                  <p>
                    Digital maturity assessed at <strong className="text-foreground">PDMF Level {assessment.overallLevel} — {assessment.levelName}</strong>{" "}
                    (weighted average {assessment.average.toFixed(1)} / 5.0) across the seven PDMF domains.
                  </p>
                )}
                {benchmark && (
                  <p>
                    Against published GCC maturity benchmarks the centre indexes at{" "}
                    <strong className="text-foreground">{Math.round(benchmark.index)}%</strong> of Wave 4, placing it at{" "}
                    <strong className="text-foreground">{benchmark.wave}</strong>.
                  </p>
                )}
                {roi && (
                  <p>
                    The annual value at stake between a digital laggard and a digital leader at a{" "}
                    <strong className="text-foreground">${roi.revenue.toFixed(1)}B</strong> revenue base is{" "}
                    <strong className="text-foreground">{formatUsdMillions(roi.totalLow)} – {formatUsdMillions(roi.totalHigh)}</strong> per year.
                  </p>
                )}
                <p className="pt-1">
                  The recommendation is a sequenced, three-wave programme (§5): foundations before scaled AI, scaled AI before
                  autonomous operations. Attempting later-wave outcomes on an early-wave foundation is the most common and most
                  expensive failure mode.
                </p>
              </div>
            </section>

            {/* Maturity */}
            {assessment && (
              <section className="card-pharma pack-page">
                <h3 className="font-display text-base font-bold text-foreground mb-1">2 · Digital Maturity (PDMF)</h3>
                <p className="font-body text-xs text-muted-foreground mb-4">
                  Self-assessed across the seven domains of the Pharma Digital Maturity Framework.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <caption className="sr-only">PDMF domain maturity levels</caption>
                    <thead>
                      <tr>
                        <th scope="col" className="text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground pb-2">Domain</th>
                        <th scope="col" className="text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground pb-2">Level</th>
                        <th scope="col" className="text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground pb-2">Stage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {assessment.domains.map((d) => (
                        <tr key={d.name} className="border-t border-border">
                          <td className="py-2 font-body text-xs text-foreground">{d.name}</td>
                          <td className="py-2 font-mono text-xs text-primary" style={{ fontVariantNumeric: "tabular-nums" }}>{d.level}/5</td>
                          <td className="py-2 font-body text-xs text-muted-foreground">{d.levelName}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Benchmark */}
            {benchmark && (
              <section className="card-pharma pack-page">
                <h3 className="font-display text-base font-bold text-foreground mb-1">3 · GCC Benchmark Position</h3>
                <p className="font-body text-xs text-muted-foreground mb-4">
                  Position against published mature-GCC benchmarks across the nine maturity dimensions.
                </p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm">
                    <caption className="sr-only">GCC maturity dimensions and tiers</caption>
                    <thead>
                      <tr>
                        <th scope="col" className="text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground pb-2">Dimension</th>
                        <th scope="col" className="text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground pb-2">Tier</th>
                      </tr>
                    </thead>
                    <tbody>
                      {benchmark.dimensions.map((d) => (
                        <tr key={d.name} className="border-t border-border">
                          <td className="py-2 font-body text-xs text-foreground">{d.name}</td>
                          <td className="py-2 font-body text-xs text-muted-foreground">{d.tierLabel}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {benchmark.gaps.length > 0 && (
                  <>
                    <h4 className="font-display text-sm font-bold text-foreground mb-2">Largest gaps — benchmarks to target</h4>
                    <div className="space-y-3">
                      {benchmark.gaps.map((g) => (
                        <div key={g.name} className="p-3 rounded-lg border border-border bg-muted/30">
                          <div className="font-display text-xs font-bold text-foreground mb-1.5">{g.name}</div>
                          {g.targets.map((t) => (
                            <div key={t.metric} className="font-body text-[11px] text-muted-foreground">
                              <span className="text-foreground font-semibold">{t.metric}</span> — target: {t.target}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </section>
            )}

            {/* Value at stake */}
            {roi && (
              <section className="card-pharma pack-page">
                <h3 className="font-display text-base font-bold text-foreground mb-1">4 · Value at Stake</h3>
                <p className="font-body text-xs text-muted-foreground mb-4">
                  Estimated annual laggard-vs-leader gap at a ${roi.revenue.toFixed(1)}B revenue base.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <caption className="sr-only">Annual value at stake by lever</caption>
                    <thead>
                      <tr>
                        <th scope="col" className="text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground pb-2">Value Lever</th>
                        <th scope="col" className="text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground pb-2">Position</th>
                        <th scope="col" className="text-right font-mono text-[10px] uppercase tracking-wider text-muted-foreground pb-2">Annual Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {roi.levers.map((l) => (
                        <tr key={l.name} className="border-t border-border">
                          <td className="py-2 font-body text-xs text-foreground">{l.name}</td>
                          <td className="py-2 font-body text-xs text-muted-foreground">{l.tier}</td>
                          <td className="py-2 text-right font-mono text-xs text-primary" style={{ fontVariantNumeric: "tabular-nums" }}>
                            {formatUsdMillions(l.low)} – {formatUsdMillions(l.high)}
                          </td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-primary/40">
                        <td className="py-2 font-display text-xs font-bold text-foreground">Total</td>
                        <td />
                        <td className="py-2 text-right font-display text-xs font-bold text-primary" style={{ fontVariantNumeric: "tabular-nums" }}>
                          {formatUsdMillions(roi.totalLow)} – {formatUsdMillions(roi.totalHigh)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Roadmap */}
            <section className="card-pharma pack-page">
              <h3 className="font-display text-base font-bold text-foreground mb-1">5 · Recommended 36-Month Roadmap</h3>
              <p className="font-body text-xs text-muted-foreground mb-4">
                The handbook's three-wave execution model. Each wave earns the right to the next.
              </p>
              <div className="space-y-3">
                {WAVES.map((w) => (
                  <div key={w.num} className="p-3 rounded-lg border border-border bg-muted/30">
                    <div className="flex items-baseline gap-2 flex-wrap mb-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold">{w.num}</span>
                      <span className="font-display text-xs font-bold text-foreground">{w.title}</span>
                      <span className="font-mono text-[10px] text-muted-foreground">{w.window}</span>
                    </div>
                    <ul className="space-y-1 mb-1.5">
                      {w.points.map((p) => (
                        <li key={p} className="font-body text-[11px] text-muted-foreground">▸ {p}</li>
                      ))}
                    </ul>
                    <div className="font-mono text-[10px] text-primary">Target: {w.target}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Priority actions */}
            {assessment && assessment.priorities.length > 0 && (
              <section className="card-pharma pack-page">
                <h3 className="font-display text-base font-bold text-foreground mb-1">6 · Immediate Priority Actions</h3>
                <p className="font-body text-xs text-muted-foreground mb-4">
                  The domains furthest from PDMF Level 5, with the next step for each.
                </p>
                <div className="space-y-3">
                  {assessment.priorities.map((p) => (
                    <div key={p.name} className="p-3 rounded-lg border border-border bg-muted/30">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-display text-xs font-bold text-foreground">{p.name}</span>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-coral">+{p.gap} to Level 5</span>
                      </div>
                      <p className="font-body text-[11px] text-muted-foreground">Next step: {p.nextStep}</p>
                      <div className="font-mono text-[10px] text-primary mt-1">Reference: {p.chapter}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Basis */}
            <section className="p-4 rounded-xl border border-border bg-muted/30 pack-page">
              <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">
                <strong>Basis &amp; limitations.</strong> This pack is assembled from self-reported inputs scored against the PDMF
                and the handbook's {""}published GCC benchmark set (sources incl. KPMG, Zinnov, BCG, ANSR, Deloitte, ZS, NASSCOM).
                Value figures scale a benchmarked laggard-vs-leader gap by revenue and self-assessed position. It is an indicative
                diagnostic for framing board discussion — not an audited assessment, a forecast, or a bottom-up business case.
              </p>
            </section>
          </div>
        )}
      </main>

      <div className="no-print">
        <PharmaFooter />
      </div>
    </div>
  );
};

export default BoardPackPage;
