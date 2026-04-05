import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Beaker, Factory, ShoppingCart, Heart, Cpu, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PharmaFooter } from "@/components/PharmaFooter";
import pharmaLogo from "@/assets/pharma-logo.png";

interface StatCard {
  value: string;
  label: string;
  interpretation: string;
  chapter: string;
  chapterAnchor: string;
  category: string;
}

const categories = [
  { id: "all", label: "All Stats", icon: TrendingUp },
  { id: "market", label: "Market & Industry", icon: TrendingUp },
  { id: "rnd", label: "R&D & Discovery", icon: Beaker },
  { id: "manufacturing", label: "Manufacturing", icon: Factory },
  { id: "commercial", label: "Commercial", icon: ShoppingCart },
  { id: "patient", label: "Patient & Access", icon: Heart },
  { id: "digital", label: "Digital Maturity", icon: Cpu },
];

const stats: StatCard[] = [
  // Market & Industry
  { value: "USD 1.6T", label: "Global Pharma Market (2024)", interpretation: "The pharmaceutical industry is the world's largest healthcare sector. Growth is driven by biologics, cell/gene therapies, and emerging-market expansion.", chapter: "Ch 1 · Industry Landscape", chapterAnchor: "ch01", category: "market" },
  { value: "> USD 2.3T", label: "Projected Market by 2030", interpretation: "A 44% growth trajectory over 6 years signals massive opportunity for digitally mature organisations to capture outsized value.", chapter: "Ch 1 · Industry Landscape", chapterAnchor: "ch01", category: "market" },
  { value: "> USD 2.6B", label: "Cost per New Molecular Entity", interpretation: "Fully capitalised cost to bring one drug to market. AI and digital tools can compress this by 20–30%, saving hundreds of millions per program.", chapter: "Ch 1 · Industry Landscape", chapterAnchor: "ch01", category: "market" },
  { value: "12–15 years", label: "Average Development Timeline", interpretation: "From target identification to approval. Decentralised trials and AI-powered design could cut 3–5 years from this cycle.", chapter: "Ch 1 · Industry Landscape", chapterAnchor: "ch01", category: "market" },
  { value: "~90%", label: "Phase I Attrition Rate", interpretation: "Only ~10% of compounds entering Phase I reach patients. AI biomarker selection and digital twins are key to reducing expensive late-stage failures.", chapter: "Ch 1 · Industry Landscape", chapterAnchor: "ch01", category: "market" },

  // R&D & Drug Discovery
  { value: "20–30%", label: "AI Timeline Reduction Potential", interpretation: "AI can compress drug discovery and development timelines by up to a third — the single biggest efficiency lever in pharma R&D.", chapter: "Ch 4 · R&D & Drug Discovery", chapterAnchor: "ch04", category: "rnd" },
  { value: "+10pp", label: "Phase II Success Rate Uplift (AI)", interpretation: "AI-driven patient stratification and biomarker selection can improve Phase II success rates by 10 percentage points — worth billions in avoided failures.", chapter: "Ch 5 · Clinical Trials", chapterAnchor: "ch05", category: "rnd" },
  { value: "18 months", label: "Insilico INS018_055 to Phase II", interpretation: "Insilico Medicine's AI-discovered molecule reached Phase II in 18 months vs industry average of 4–6 years — a landmark proof point for AI drug discovery.", chapter: "Ch 4 · R&D & Drug Discovery", chapterAnchor: "ch04", category: "rnd" },
  { value: "350M+", label: "AlphaFold Protein Structures", interpretation: "DeepMind's AlphaFold predicted structures for virtually all known proteins, transforming target identification and drug design.", chapter: "Ch 4 · R&D & Drug Discovery", chapterAnchor: "ch04", category: "rnd" },
  { value: "$500B+", label: "Biologics Market by 2030", interpretation: "Biopharmaceuticals are the fastest-growing pharma segment. Digital infrastructure for cell/gene therapy manufacturing is critical.", chapter: "Ch 17 · Biologics & Cell/Gene Therapy", chapterAnchor: "ch17", category: "rnd" },

  // Manufacturing & Quality
  { value: "Billions $", label: "Annual Global Waste (Batch Failures)", interpretation: "Batch failures, rework, and deviations cost the industry billions annually. Digital manufacturing and PAT can dramatically reduce this.", chapter: "Ch 6 · Manufacturing & Supply Chain", chapterAnchor: "ch06", category: "manufacturing" },
  { value: "10–20%", label: "Yield Improvement (Digital/PAT)", interpretation: "Process Analytical Technology with real-time monitoring delivers double-digit yield improvements in biologics and small-molecule manufacturing.", chapter: "Ch 6 · Manufacturing & Supply Chain", chapterAnchor: "ch06", category: "manufacturing" },
  { value: "25–35%", label: "Batch Cycle Time Reduction", interpretation: "Digital twins and advanced process control compress batch cycles by up to a third, enabling faster scale-up and supply responsiveness.", chapter: "Ch 24 · Digital Twins", chapterAnchor: "ch24", category: "manufacturing" },
  { value: "20–30%", label: "Deviation Rate Reduction", interpretation: "Predictive quality systems catch deviations before they occur, reducing CAPA burden and improving right-first-time metrics.", chapter: "Ch 7 · Quality Management", chapterAnchor: "ch07", category: "manufacturing" },

  // Commercial Effectiveness
  { value: "20–25%", label: "Field Force Productivity Gain (AI)", interpretation: "AI-driven next-best-action engines and territory optimisation boost rep productivity by up to 25% — the single biggest lever in commercial effectiveness.", chapter: "Ch 9 · Commercial Excellence", chapterAnchor: "ch09", category: "commercial" },
  { value: "$200M+", label: "Annual AI Commercial Gains (Top Pharma)", interpretation: "Leading pharma companies deploying AI-driven commercial analytics across sales forces report $200M+ in measurable annual value.", chapter: "Ch 9 · Commercial Excellence", chapterAnchor: "ch09", category: "commercial" },
  { value: "15–25%", label: "Promotional ROI Improvement", interpretation: "Omnichannel orchestration and AI-powered content personalisation improve promotional ROI by 15–25% across HCP and patient channels.", chapter: "Ch 9 · Commercial Excellence", chapterAnchor: "ch09", category: "commercial" },
  { value: "50%", label: "GenAI Content Automation", interpretation: "Generative AI can automate up to 50% of commercial content creation — from MLR-compliant materials to personalised HCP engagement.", chapter: "Ch 26 · Generative AI in Pharma", chapterAnchor: "ch26", category: "commercial" },

  // Patient Engagement
  { value: "USD 300B", label: "US Non-Adherence Cost (Annual)", interpretation: "Medication non-adherence costs the US healthcare system $300B annually. Digital therapeutics and smart packaging can address root causes at scale.", chapter: "Ch 10 · Patient Engagement", chapterAnchor: "ch10", category: "patient" },
  { value: "15–25%", label: "Therapy Persistence Uplift (Digital)", interpretation: "Digital therapeutics, connected devices, and personalised engagement programs improve therapy persistence by 15–25% — better outcomes and better economics.", chapter: "Ch 10 · Patient Engagement", chapterAnchor: "ch10", category: "patient" },
  { value: "$120B", label: "Precision Medicine Market 2030", interpretation: "Genomics-driven precision medicine is reshaping drug development and patient stratification — requiring entirely new digital infrastructure.", chapter: "Ch 23 · Precision Medicine & Genomics", chapterAnchor: "ch23", category: "patient" },

  // Digital Maturity
  { value: "~20%", label: "Digital Leaders in Pharma", interpretation: "Only about 1 in 5 pharma companies qualify as digital leaders. The maturity gap creates competitive advantage for early movers.", chapter: "Ch 2 · Digital Maturity Model", chapterAnchor: "ch02", category: "digital" },
  { value: "80%", label: "Still at Foundational Stage", interpretation: "The vast majority of pharma companies remain at foundational digital maturity — significant whitespace for transformation investment.", chapter: "Ch 2 · Digital Maturity Model", chapterAnchor: "ch02", category: "digital" },
  { value: "1,600+", label: "GCCs in India", interpretation: "India hosts the world's largest GCC ecosystem. Pharma companies increasingly leverage Indian GCCs for AI, analytics, and digital transformation capabilities.", chapter: "Ch 16 · Pharma GCCs in India", chapterAnchor: "ch16", category: "digital" },
  { value: "40%", label: "Faster AI-Driven Recruitment", interpretation: "AI-powered talent matching and predictive analytics reduce recruitment timelines by 40% in mature GCC operations.", chapter: "Ch 16 · Pharma GCCs in India", chapterAnchor: "ch16", category: "digital" },
  { value: "$45B+", label: "Digital Health VC Investment (2020–24)", interpretation: "Venture capital investment in digital health and AI-pharma assets has exceeded $45B, signalling massive market confidence in digital transformation.", chapter: "Ch 29 · Investment & M&A Strategy", chapterAnchor: "ch29", category: "digital" },
  { value: "70%", label: "Workforce Needs Reskilling by 2027", interpretation: "The talent gap is the #1 barrier to pharma digital transformation. Strategic reskilling programs are essential for execution.", chapter: "Ch 28 · Digital Talent & Workforce", chapterAnchor: "ch28", category: "digital" },
];

const categoryColors: Record<string, string> = {
  market: "border-l-primary",
  rnd: "border-l-violet",
  manufacturing: "border-l-gold",
  commercial: "border-l-coral",
  patient: "border-l-teal",
  digital: "border-l-indigo",
};

const categoryBgColors: Record<string, string> = {
  market: "bg-primary/10 text-primary",
  rnd: "bg-violet/10 text-violet",
  manufacturing: "bg-gold/10 text-gold",
  commercial: "bg-coral/10 text-coral",
  patient: "bg-teal/10 text-teal",
  digital: "bg-indigo/10 text-indigo",
};

const KeyStatsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all" ? stats : stats.filter((s) => s.category === activeCategory);

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
                Key Stats Dashboard
              </span>
              <span className="font-display text-sm font-bold text-foreground sm:hidden">
                Key Stats
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
            <TrendingUp className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-xs text-primary tracking-wider uppercase">{stats.length} Key Statistics · 6 Domains · 30 Chapters</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pharma DX <span className="gradient-text">Key Stats</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-4">
            Quantitative facts extracted from the Master Handbook — with CXO-ready interpretations and direct chapter links.
          </p>
          <p className="font-mono text-[10px] text-muted-foreground">
            Curated by{" "}
            <a href="https://kalilurrahman.lovable.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Kalilur Rahman
            </a>
          </p>
        </div>
      </section>

      <main className="container mx-auto py-8 px-4 flex-1 max-w-5xl">
        {/* Filter bar */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const count = cat.id === "all" ? stats.length : stats.filter((s) => s.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`nav-pill text-xs flex items-center gap-1.5 ${activeCategory === cat.id ? "active" : ""}`}
              >
                <Icon className="w-3 h-3" />
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.03 }}
                className={`card-pharma border-l-4 ${categoryColors[stat.category]} flex flex-col gap-3`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-primary mb-2">{stat.label}</div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${categoryBgColors[stat.category]}`}>
                    {stat.category === "rnd" ? "R&D" : stat.category}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{stat.interpretation}</p>
                <a
                  href={`/reader#${stat.chapterAnchor}`}
                  className="flex items-center gap-1.5 text-primary font-mono text-[10px] hover:underline mt-auto"
                >
                  <ExternalLink className="w-3 h-3" />
                  {stat.chapter}
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Attribution */}
        <div className="mt-12 p-4 rounded-xl border border-border bg-muted/30 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            📊 All statistics extracted from the <strong>Pharma Digital Transformation Handbook — Comprehensive Edition 2025</strong>, curated by{" "}
            <a href="https://kalilurrahman.lovable.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Kalilur Rahman</a>.
          </p>
        </div>
      </main>

      <PharmaFooter />
    </div>
  );
};

export default KeyStatsPage;
