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
  { value: "~USD 2.4T", label: "Projected Global Spend by 2029", interpretation: "Global medicine spending is projected to approach USD 2.3T by 2028 and ~USD 2.4T by 2029 at a 5–8% CAGR (IQVIA, 2025, list-price basis) — outsized value accrues to the digitally mature.", chapter: "Ch 1 · Industry Landscape", chapterAnchor: "ch01", category: "market" },
  { value: "~USD 2.2B", label: "R&D Cost per Launched Asset", interpretation: "Deloitte's 2024 analysis puts the average cost to bring an asset to market at ~$2.23B (up from $2.12B in 2023); older capitalised estimates run to $2.6B. AI can compress timelines 20–30%, saving hundreds of millions per program.", chapter: "Ch 1 · Industry Landscape", chapterAnchor: "ch01", category: "market" },
  { value: "12–15 years", label: "Average Development Timeline", interpretation: "From target identification to approval. Decentralised trials and AI-powered design could cut 3–5 years from this cycle.", chapter: "Ch 1 · Industry Landscape", chapterAnchor: "ch01", category: "market" },
  { value: "~90%", label: "Phase I Attrition Rate", interpretation: "Only ~10% of compounds entering Phase I reach patients. AI biomarker selection and digital twins are key to reducing expensive late-stage failures.", chapter: "Ch 1 · Industry Landscape", chapterAnchor: "ch01", category: "market" },

  // R&D & Drug Discovery
  { value: "20–30%", label: "AI Timeline Reduction Potential", interpretation: "AI can compress drug discovery and development timelines by up to a third — the single biggest efficiency lever in pharma R&D.", chapter: "Ch 4 · R&D & Drug Discovery", chapterAnchor: "ch04", category: "rnd" },
  { value: "+10pp", label: "Phase II Success Rate Uplift (AI)", interpretation: "AI-driven patient stratification and biomarker selection can improve Phase II success rates by 10 percentage points — worth billions in avoided failures.", chapter: "Ch 5 · Clinical Trials", chapterAnchor: "ch05", category: "rnd" },
  { value: "Phase III", label: "First AI-Drug Clinical Proof (rentosertib)", interpretation: "Insilico's INS018_055 (AI-nominated target + AI-generated molecule) reached a candidate in ~18 months and posted positive Phase IIa IPF data in 2025 (Nature Medicine) — now in Phase III, the clearest prospective proof-of-concept for end-to-end AI discovery.", chapter: "Ch 4 · R&D & Drug Discovery", chapterAnchor: "ch04", category: "rnd" },
  { value: "214M+", label: "AlphaFold Protein Structures", interpretation: "DeepMind's AlphaFold DB holds 214M+ predicted structures; AlphaFold 3 (May 2024) extended prediction to protein–ligand complexes. Its creators shared the 2024 Nobel Prize in Chemistry.", chapter: "Ch 4 · R&D & Drug Discovery", chapterAnchor: "ch04", category: "rnd" },
  { value: "~42%", label: "Biologics Share of Pharma (2023)", interpretation: "Biologics already accounted for ~$559B — about 42% of global medicine spend — in 2023 (IQVIA/HHS), growing ~3x faster than small molecules. Digital infrastructure for cell/gene manufacturing is now the constraint.", chapter: "Ch 17 · Biologics & Cell/Gene Therapy", chapterAnchor: "ch17", category: "rnd" },

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
  { value: "$100–290B", label: "US Non-Adherence Cost / yr", interpretation: "Medication non-adherence costs the US ~$100–290B/yr; non-optimised medication therapy is estimated at ~$528B (Watanabe et al.). Digital therapeutics, connected devices, and smart packaging target the root causes.", chapter: "Ch 10 · Patient Engagement", chapterAnchor: "ch10", category: "patient" },
  { value: "15–25%", label: "Therapy Persistence Uplift (Digital)", interpretation: "Digital therapeutics, connected devices, and personalised engagement programs improve therapy persistence by 15–25% — better outcomes and better economics.", chapter: "Ch 10 · Patient Engagement", chapterAnchor: "ch10", category: "patient" },
  { value: "~$249B", label: "Precision Medicine Market 2030", interpretation: "Precision medicine is projected at ~$249B by 2030 ($87.5B in 2023, ~16% CAGR; Grand View). Genomics-driven stratification and companion diagnostics demand new digital infrastructure.", chapter: "Ch 23 · Precision Medicine & Genomics", chapterAnchor: "ch23", category: "patient" },

  // Digital Maturity
  { value: "~20%", label: "Digital Leaders in Pharma", interpretation: "Only about 1 in 5 pharma companies qualify as digital leaders. The maturity gap creates competitive advantage for early movers.", chapter: "Ch 2 · Digital Maturity Model", chapterAnchor: "ch02", category: "digital" },
  { value: "80%", label: "Still at Foundational Stage", interpretation: "The vast majority of pharma companies remain at foundational digital maturity — significant whitespace for transformation investment.", chapter: "Ch 2 · Digital Maturity Model", chapterAnchor: "ch02", category: "digital" },
  { value: "2,117", label: "GCCs in India (FY2026)", interpretation: "India hosts the world's largest GCC ecosystem — ~2,117 centres and 2.36M professionals ($98.4B revenue) as of FY2026 (NASSCOM–Zinnov), including 130+ pharma & life-sciences GCCs. The engine room of pharma digital delivery.", chapter: "Ch 16 · Pharma GCCs in India", chapterAnchor: "ch16", category: "digital" },
  { value: "40%", label: "Faster AI-Driven Recruitment", interpretation: "AI-powered talent matching and predictive analytics reduce recruitment timelines by 40% in mature GCC operations.", chapter: "Ch 16 · Pharma GCCs in India", chapterAnchor: "ch16", category: "digital" },
  { value: "~$80B", label: "Digital Health VC (2020–24)", interpretation: "US digital-health venture funding totalled ~$80B across 2020–24 (Rock Health), peaking at $29.1B in 2021. 2025 rebounded +35% to $14.2B, with AI now ~54% of all funding.", chapter: "Ch 29 · Investment & M&A Strategy", chapterAnchor: "ch29", category: "digital" },
  { value: "~60%", label: "Workforce Needs Reskilling by 2027", interpretation: "~60% of workers need reskilling by 2027 and 77% of employers plan to reskill their workforce over 2025–2030 (WEF Future of Jobs). Talent, not technology, is the #1 barrier to pharma transformation.", chapter: "Ch 28 · Digital Talent & Workforce", chapterAnchor: "ch28", category: "digital" },

  // 2026 refresh: blockbuster & policy developments
  { value: "$36.5B", label: "Lilly Tirzepatide Sales (2025)", interpretation: "GLP-1 obesity/diabetes drugs are pharma's largest revenue engine — tirzepatide (Mounjaro + Zepbound) was ~56% of Lilly's 2025 revenue; Novo's semaglutide (Ozempic + Wegovy) added ~$29B. Oral GLP-1s (oral Wegovy approved Dec 2025) are shifting manufacturing toward high-volume oral solid-dose.", chapter: "Ch 9 · Commercial Excellence", chapterAnchor: "ch09", category: "market" },
  { value: "38–79%", label: "IRA Price Cuts — First 10 (live Jan 2026)", interpretation: "Medicare's first 10 negotiated 'maximum fair prices' took effect 1 Jan 2026 (38–79% off list; ~$6B first-year savings). A second round of 15 drugs — including Ozempic/Wegovy — is priced for 2027 (CMS/KFF). Structural pressure on the blockbuster model.", chapter: "Ch 8 · Regulatory Affairs", chapterAnchor: "ch08", category: "market" },
  { value: "~$236B", label: "Revenue at Risk 2025–2030 (Patent Cliff)", interpretation: "~70 products (Keytruda, Eliquis, Opdivo) lose exclusivity by 2030, ~$236B of at-risk revenue — the primary driver of the 2025 M&A rebound (~$180B) and sustained AI/pipeline investment.", chapter: "Ch 29 · Investment & M&A Strategy", chapterAnchor: "ch29", category: "market" },
  { value: "$600M", label: "Isomorphic Labs Raise (2025)", interpretation: "DeepMind's drug-design spinout raised its first external round (Thrive Capital) and is nearing first-in-human trials, monetising via Eli Lilly (up to $1.7B) and Novartis (up to $1.2B) deals — the clearest near-term test of AI-first discovery.", chapter: "Ch 4 · R&D & Drug Discovery", chapterAnchor: "ch04", category: "rnd" },
  { value: "~40%", label: "PV Capacity Reclaimed (Agentic AI)", interpretation: "Autonomous, multi-step 'agentic' AI is the defining 2025–26 enterprise trend — early adopters reclaim up to ~40% of pharmacovigilance capacity and cut regulatory-writing cycles from weeks to hours. A prime India-GCC shared-services opportunity.", chapter: "Ch 26 · Generative AI in Pharma", chapterAnchor: "ch26", category: "digital" },
  { value: "~1,900", label: "Active Cell & Gene Therapy Trials", interpretation: "~1,905 cell & gene therapy trials were ongoing globally in H1 2025 (ARM/ASGCT), with 4,000+ in the pipeline and APAC now leading new-trial initiation. Value has shifted to digitised, scalable manufacturing (chain-of-identity, electronic batch records).", chapter: "Ch 17 · Biologics & Cell/Gene Therapy", chapterAnchor: "ch17", category: "rnd" },
  { value: "~$5B", label: "Enhertu ADC Sales (2025)", interpretation: "Antibody-drug conjugates are now a top oncology pillar (Enhertu ~$5B in 2025), fuelling landmark deals — Pfizer–Seagen ($43B), AbbVie–ImmunoGen ($10.1B). Complex conjugation and cold-chain logistics raise the digital-manufacturing bar.", chapter: "Ch 17 · Biologics & Cell/Gene Therapy", chapterAnchor: "ch17", category: "rnd" },
  { value: "900M+", label: "ABDM Health IDs (2026)", interpretation: "India's Ayushman Bharat Digital Mission has issued 900M+ ABHA IDs with 1B+ health records linked — national-scale infrastructure for real-world evidence, patient engagement, and GCC-led analytics.", chapter: "Ch 16 · Pharma GCCs in India", chapterAnchor: "ch16", category: "patient" },
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
            📊 All statistics extracted from the <strong>Pharma Digital Transformation Handbook — Comprehensive Edition, Refreshed 2026</strong>, curated by{" "}
            <a href="https://kalilurrahman.lovable.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Kalilur Rahman</a>.
          </p>
        </div>
      </main>

      <PharmaFooter />
    </div>
  );
};

export default KeyStatsPage;
