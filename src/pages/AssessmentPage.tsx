import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Gauge, RotateCcw, BarChart3, BookOpen, Target } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PharmaFooter } from "@/components/PharmaFooter";
import pharmaLogo from "@/assets/pharma-logo.png";
import { usePageMeta } from "@/hooks/use-page-meta";

// ── PDMF framework (Ch 2 · Pharma Digital Maturity Framework) ──
// 7 domains × 5 maturity levels: 1 Foundational → 5 Leading.

interface Domain {
  key: string;
  name: string;
  icon: string;
  colorText: string;
  colorBg: string;
  colorBar: string;
  description: string;
  chapter: string;
  levels: string[]; // index 0 = Level 1 … index 4 = Level 5
}

const LEVEL_NAMES = ["Foundational", "Developing", "Defined", "Advanced", "Leading"];

const DOMAINS: Domain[] = [
  {
    key: "data",
    name: "Data & Analytics",
    icon: "📊",
    colorText: "text-teal",
    colorBg: "bg-teal/10",
    colorBar: "bg-teal",
    description: "How data is governed, integrated, and used for decisions.",
    chapter: "Ch 11 · Enterprise Systems & Architecture",
    levels: [
      "Siloed data; spreadsheets and manual reporting; no single source of truth.",
      "Initial data warehousing; some standardised reporting; integration begun.",
      "Enterprise data lake/platform; governed, self-service analytics at scale.",
      "Real-time, cross-functional data products embedded in decisions.",
      "Data as a strategic asset; a predictive, AI-ready foundation enterprise-wide.",
    ],
  },
  {
    key: "aiml",
    name: "AI / ML",
    icon: "🤖",
    colorText: "text-violet",
    colorBg: "bg-violet/10",
    colorBar: "bg-violet",
    description: "How machine learning is built, deployed, and scaled.",
    chapter: "Ch 26 · Generative AI in Pharma",
    levels: [
      "No production AI; ad-hoc experiments at best.",
      "Pilot use cases and proofs-of-concept, not yet scaled.",
      "Multiple models in production with a functioning MLOps practice.",
      "AI embedded in core operations (predictive quality, NBA, PV signal).",
      "AI-native and self-optimising; AI contributes to discovery, exported globally.",
    ],
  },
  {
    key: "cloud",
    name: "Cloud & Infrastructure",
    icon: "☁️",
    colorText: "text-indigo",
    colorBg: "bg-indigo/10",
    colorBar: "bg-indigo",
    description: "The platform foundation underpinning everything else.",
    chapter: "Ch 11 · Enterprise Systems & Architecture",
    levels: [
      "On-premise, legacy systems; little to no cloud.",
      "Cloud migration underway; hybrid estate.",
      "Cloud-first; ~70%+ of workloads on cloud with modern architecture.",
      "Elastic, automated, well-governed cloud platform underpinning AI at scale.",
      "Fully cloud-native, composable platform enabling rapid innovation.",
    ],
  },
  {
    key: "quality",
    name: "Quality & Compliance",
    icon: "✅",
    colorText: "text-coral",
    colorBg: "bg-coral/10",
    colorBar: "bg-coral",
    description: "Digital maturity of GxP quality and compliance.",
    chapter: "Ch 7 · Quality Management & Compliance",
    levels: [
      "Paper-based QMS; manual, reactive compliance.",
      "eQMS pilots; partial digitisation of quality processes.",
      "Enterprise eQMS; electronic batch records; validated GxP systems.",
      "AI-assisted quality — predictive deviations, automated batch disposition.",
      "Autonomous, predictive quality with real-time release (ACUITAS-grade).",
    ],
  },
  {
    key: "commercial",
    name: "Commercial Digital",
    icon: "📈",
    colorText: "text-gold",
    colorBg: "bg-gold/10",
    colorBar: "bg-gold",
    description: "Digital maturity of sales, marketing, and engagement.",
    chapter: "Ch 9 · Commercial Excellence",
    levels: [
      "Relationship-only field sales; little digital or analytics.",
      "CRM in place; basic segmentation and reporting.",
      "Omnichannel engagement with integrated data and analytics.",
      "AI next-best-action orchestrating HCP/patient engagement across channels.",
      "Precision, outcome-based commercial model with continuous optimisation.",
    ],
  },
  {
    key: "manufacturing",
    name: "Manufacturing Digital",
    icon: "🏭",
    colorText: "text-teal",
    colorBg: "bg-teal/10",
    colorBar: "bg-teal",
    description: "Industry 4.0 maturity across manufacturing and supply.",
    chapter: "Ch 6 · Manufacturing & Supply Chain",
    levels: [
      "Manual, paper-based operations; reactive intervention.",
      "MES/EBR pilots; initial shop-floor connectivity.",
      "Connected sites with PAT and real-time process data.",
      "Digital twins and predictive quality across sites.",
      "Real-time release and autonomous, self-optimising manufacturing.",
    ],
  },
  {
    key: "talent",
    name: "Talent & Culture",
    icon: "🎓",
    colorText: "text-violet",
    colorBg: "bg-violet/10",
    colorBar: "bg-violet",
    description: "Digital skills, ways of working, and culture.",
    chapter: "Ch 28 · Talent & Digital Reskilling",
    levels: [
      "Traditional skills; limited digital literacy; change-resistant culture.",
      "Ad-hoc training; pockets of digital capability.",
      "Structured reskilling academies; growing data/AI literacy.",
      "Digital-native ways of working; strong AI literacy across functions.",
      "Continuous-learning culture; leadership pipeline; a talent magnet.",
    ],
  },
];

const LEVEL_INTERPRETATION: Record<number, { headline: string; detail: string }> = {
  1: {
    headline: "Foundational — investment urgently needed",
    detail:
      "Prioritise the foundations — data, cloud, and governance — before scaling AI. Deploying technology onto broken processes automates dysfunction. Start with a single source of truth and executive sponsorship.",
  },
  2: {
    headline: "Developing — build momentum on the foundation",
    detail:
      "Momentum is building. Connect and standardise the foundation, establish governance, and begin scaling proven use cases from pilot to production. This is Wave 1 territory: stabilise and connect.",
  },
  3: {
    headline: "Defined — scale AI into core operations",
    detail:
      "A solid enterprise foundation is in place. Focus on scaling AI into core operations, building Centres of Excellence, and moving from isolated wins to embedded capability. This is the Wave 2 differentiate-and-scale phase.",
  },
  4: {
    headline: "Advanced — push toward autonomous capability",
    detail:
      "AI is embedded in operations. Push toward autonomous, self-optimising capability, export innovation through an empowered GCC, and pursue outcome-based models. You are entering Wave 3: lead and innovate.",
  },
  5: {
    headline: "Leading — sustain the edge and set standards",
    detail:
      "AI-native and self-optimising across the enterprise. Sustain the advantage, set industry standards, and operate the GCC as a global innovation engine and 'HQ Twin'. The frontier is yours to define.",
  },
};

function bandForAverage(avg: number): number {
  if (avg < 1.5) return 1;
  if (avg < 2.5) return 2;
  if (avg < 3.5) return 3;
  if (avg < 4.5) return 4;
  return 5;
}

const AssessmentPage = () => {
  usePageMeta(
    "PDMF Maturity Self-Assessment",
    "Score your organisation's digital maturity across the 7 domains of the Pharma Digital Maturity Framework (PDMF) — get an instant level, domain breakdown, and prioritised next steps.",
    "/assessment",
  );
  const [scores, setScores] = useState<Record<string, number>>({});

  const answeredCount = Object.keys(scores).length;
  const allAnswered = answeredCount === DOMAINS.length;

  const { average, overallLevel, priorities } = useMemo(() => {
    const values = DOMAINS.map((d) => scores[d.key]).filter((v): v is number => typeof v === "number");
    const avg = values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
    const level = values.length ? bandForAverage(avg) : 0;
    const priors = DOMAINS.filter((d) => typeof scores[d.key] === "number")
      .map((d) => ({ domain: d, level: scores[d.key], gap: 5 - scores[d.key] }))
      .sort((a, b) => b.gap - a.gap)
      .filter((p) => p.gap > 0)
      .slice(0, 3);
    return { average: avg, overallLevel: level, priorities: priors };
  }, [scores]);

  const setScore = (key: string, level: number) =>
    setScores((prev) => ({ ...prev, [key]: level }));
  const reset = () => setScores({});

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
                PDMF Digital Maturity Self-Assessment
              </span>
              <span className="font-display text-sm font-bold text-foreground sm:hidden">
                PDMF Assessment
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
            <Gauge className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-xs text-primary tracking-wider uppercase">Interactive · 5-Level PDMF · 7 Domains</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Digital Maturity <span className="gradient-text">Self-Assessment</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-2">
            Rate your organisation across the seven domains of the Pharma Digital Maturity Framework. Get an instant PDMF level, a domain-by-domain breakdown, and prioritised next steps.
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
              {answeredCount} / {DOMAINS.length} domains rated
            </div>
            <div className="h-1.5 w-40 rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={false}
                animate={{ width: `${(answeredCount / DOMAINS.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
          {answeredCount > 0 && (
            <button
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          )}
        </div>

        {/* Domain questions */}
        <div className="space-y-4">
          {DOMAINS.map((d, i) => {
            const selected = scores[d.key];
            return (
              <motion.div
                key={d.key}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="card-pharma"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl leading-none">{d.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`font-display text-sm font-bold ${d.colorText}`}>{d.name}</h3>
                      {typeof selected === "number" && (
                        <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full ${d.colorBg} ${d.colorText}`}>
                          L{selected} · {LEVEL_NAMES[selected - 1]}
                        </span>
                      )}
                    </div>
                    <p className="font-body text-xs text-muted-foreground mt-0.5">{d.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                  {d.levels.map((desc, idx) => {
                    const level = idx + 1;
                    const isSel = selected === level;
                    return (
                      <button
                        key={level}
                        onClick={() => setScore(d.key, level)}
                        aria-pressed={isSel}
                        className={`text-left p-2.5 rounded-lg border transition-colors ${
                          isSel
                            ? `${d.colorBg} border-current ${d.colorText}`
                            : "bg-muted/40 border-border hover:border-primary/40 text-foreground"
                        }`}
                      >
                        <div className={`font-mono text-[9px] font-bold uppercase tracking-wider mb-1 ${isSel ? d.colorText : "text-muted-foreground"}`}>
                          L{level} · {LEVEL_NAMES[idx]}
                        </div>
                        <div className="font-body text-[11px] leading-snug text-muted-foreground">{desc}</div>
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
          {allAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-10"
            >
              {/* Overall score */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 text-center mb-6">
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
                  Your Overall PDMF Maturity
                </div>
                <div className="font-display text-5xl font-bold gradient-text mb-1">
                  Level {overallLevel}
                </div>
                <div className="font-display text-lg font-bold text-foreground mb-1">
                  {LEVEL_NAMES[overallLevel - 1]}
                </div>
                <div className="font-mono text-xs text-muted-foreground mb-4">
                  Weighted average {average.toFixed(1)} / 5.0
                </div>
                <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto">
                  <strong className="text-foreground">{LEVEL_INTERPRETATION[overallLevel].headline}.</strong>{" "}
                  {LEVEL_INTERPRETATION[overallLevel].detail}
                </p>
              </div>

              {/* Domain breakdown */}
              <div className="card-pharma mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <h3 className="font-display text-sm font-bold text-foreground">Domain Breakdown</h3>
                </div>
                <div className="space-y-3">
                  {DOMAINS.map((d) => {
                    const level = scores[d.key];
                    return (
                      <div key={d.key} className="flex items-center gap-3">
                        <div className="w-40 flex-shrink-0 flex items-center gap-2 min-w-0">
                          <span className="text-sm">{d.icon}</span>
                          <span className="font-body text-xs text-foreground truncate">{d.name}</span>
                        </div>
                        <div className="flex-1 h-3 rounded-full bg-muted overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${d.colorBar}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${(level / 5) * 100}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                        <div className={`w-8 text-right font-mono text-xs font-bold ${d.colorText}`} style={{ fontVariantNumeric: "tabular-nums" }}>
                          {level}/5
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Priority focus areas */}
              {priorities.length > 0 && (
                <div className="card-pharma mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-4 h-4 text-coral" />
                    <h3 className="font-display text-sm font-bold text-foreground">Priority Focus Areas</h3>
                  </div>
                  <div className="space-y-3">
                    {priorities.map((p) => (
                      <div key={p.domain.key} className="flex items-start gap-3 p-3 rounded-lg border border-border bg-muted/30">
                        <span className="text-lg leading-none">{p.domain.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-display text-xs font-bold text-foreground">{p.domain.name}</span>
                            <span className="font-mono text-[9px] uppercase tracking-wider text-coral">
                              +{p.gap} to Level 5
                            </span>
                          </div>
                          <p className="font-body text-[11px] text-muted-foreground mt-1">
                            Currently {LEVEL_NAMES[p.level - 1]} (L{p.level}). Next step: {p.domain.levels[p.level]}
                          </p>
                          <div className="font-mono text-[10px] text-primary mt-1">→ {p.domain.chapter}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link to="/gcc-metrics" className="card-pharma group flex items-center gap-4 no-underline hover:border-primary/50 transition-colors">
                  <div className="p-3 rounded-lg bg-gold/10">
                    <BarChart3 className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-sm font-bold text-foreground mb-0.5">Benchmark Deeper</h3>
                    <p className="font-body text-xs text-muted-foreground">Compare against 37 GCC maturity metrics</p>
                  </div>
                </Link>
                <Link to="/reader" className="card-pharma group flex items-center gap-4 no-underline hover:border-primary/50 transition-colors">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-sm font-bold text-foreground mb-0.5">Build the Roadmap</h3>
                    <p className="font-body text-xs text-muted-foreground">Read the 36-month implementation playbook</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Disclaimer */}
        <div className="mt-10 p-4 rounded-xl border border-border bg-muted/30">
          <p className="font-mono text-xs text-muted-foreground">
            📐 This self-assessment is an indicative diagnostic based on the PDMF (Ch 2). It is a directional starting point for discussion, not a substitute for a formal, evidence-based maturity assessment across your organisation.
          </p>
        </div>
      </main>

      <PharmaFooter />
    </div>
  );
};

export default AssessmentPage;
