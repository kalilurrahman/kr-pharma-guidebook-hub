import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BarChart3, BookOpen, ArrowRight, TrendingUp } from "lucide-react";
import { chapters, parts } from "@/data/pharma-data";
import { ChapterCard } from "@/components/ChapterCard";

interface OverviewSectionProps {
  onChapterSelect: (chapterId: string) => void;
}

const industryStats = [
  { value: "$1.6T", label: "Global Pharma Revenue", color: "text-primary" },
  { value: "$2.6B", label: "Cost per New Drug", color: "text-coral" },
  { value: "<10%", label: "Phase I → Approval", color: "text-gold" },
  { value: "12–15yr", label: "Avg. Time to Market", color: "text-teal" },
  { value: "1,600+", label: "GCCs in India", color: "text-indigo" },
  { value: "30", label: "Chapters · 9 Parts", color: "text-violet" },
];

const transformationPillars = [
  { icon: "🧬", title: "R&D & Drug Discovery", desc: "AI-powered target identification, AlphaFold protein structure prediction, generative molecular design" },
  { icon: "🏥", title: "Clinical Trials & DCT", desc: "Decentralised trials, digital biomarkers, risk-based monitoring, AI recruitment" },
  { icon: "🏭", title: "Smart Manufacturing", desc: "PAT sensors, digital twin, real-time release testing, predictive maintenance" },
  { icon: "📋", title: "Quality & Compliance", desc: "Electronic batch records, eQMS, GxP validation, ACUITAS framework" },
  { icon: "📊", title: "Commercial & Sales", desc: "Omnichannel HCP engagement, NBA analytics, AI-driven launch excellence" },
  { icon: "🌐", title: "Enterprise & GCC", desc: "Cloud data platforms, cybersecurity, GCC maturity metrics, talent strategy" },
];

export function OverviewSection({ onChapterSelect }: OverviewSectionProps) {
  return (
    <div className="space-y-12">
      {/* Industry Impact Stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-3 sm:grid-cols-6 gap-px rounded-2xl overflow-hidden glass-card"
      >
        {industryStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.08 }}
            className="p-4 sm:p-5 text-center bg-background/5 backdrop-blur-sm"
          >
            <div className={`font-display text-lg sm:text-xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
            <div className="font-mono text-[8px] text-muted-foreground uppercase tracking-wider leading-tight">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Transformation Pillars Grid */}
      <div>
        <h2 className="font-display text-xl font-bold text-foreground mb-6">Digital Transformation Pillars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {transformationPillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="card-pharma"
            >
              <div className="text-2xl mb-2">{p.icon}</div>
              <h3 className="font-display text-sm font-bold text-foreground mb-1">{p.title}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick links to Reader, GCC & Key Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link to="/reader" className="card-pharma group flex items-center gap-4 no-underline hover:border-primary/50 transition-colors">
          <div className="p-3 rounded-lg bg-primary/10">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-sm font-bold text-foreground mb-0.5">📖 Online Reader</h3>
            <p className="font-body text-xs text-muted-foreground">Full handbook with sidebar navigation & search</p>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>
        <Link to="/gcc-metrics" className="card-pharma group flex items-center gap-4 no-underline hover:border-primary/50 transition-colors">
          <div className="p-3 rounded-lg bg-gold/10">
            <BarChart3 className="w-6 h-6 text-gold" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-sm font-bold text-foreground mb-0.5">📊 GCC Metrics</h3>
            <p className="font-body text-xs text-muted-foreground">37 benchmarks across 9 dimensions</p>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>
        <Link to="/key-stats" className="card-pharma group flex items-center gap-4 no-underline hover:border-primary/50 transition-colors">
          <div className="p-3 rounded-lg bg-violet/10">
            <TrendingUp className="w-6 h-6 text-violet" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-sm font-bold text-foreground mb-0.5">📈 Key Stats</h3>
            <p className="font-body text-xs text-muted-foreground">CXO-ready stats with chapter links</p>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>
      </div>

      {/* ACUITAS Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card p-8 rounded-2xl text-center"
      >
        <h2 className="font-display text-2xl font-bold text-foreground mb-4">The ACUITAS Quality Framework</h2>
        <div className="grid grid-cols-7 gap-1 max-w-lg mx-auto mb-4">
          {["A", "C", "U", "I", "T", "A", "S"].map((letter, i) => (
            <div key={i} className="metric-card py-3">
              <div className="font-display text-xl font-bold text-primary">{letter}</div>
              <div className="font-mono text-[7px] text-muted-foreground uppercase leading-tight mt-1">
                {["AI-Driven", "Continuous", "User-Centric", "Integrated", "Traceability", "Adaptive", "System"][i]}
              </div>
            </div>
          ))}
        </div>
        <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto">
          AI-driven Continuous Understanding and Integrated Testing Architecture System — Kalilur Rahman's proprietary quality engineering framework for GxP-regulated environments.
        </p>
      </motion.div>

      {/* Pharma Value Chain SVG */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card p-6 rounded-2xl overflow-x-auto"
      >
        <h2 className="font-display text-lg font-bold text-foreground mb-4 text-center">Pharmaceutical Digital Value Chain</h2>
        <svg viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto" style={{ minWidth: 400 }}>
          {[
            { x: 10, label: "R&D\nDiscovery", fill: "hsl(var(--primary))" },
            { x: 93, label: "Clinical\nTrials", fill: "hsl(172,83%,32%)" },
            { x: 176, label: "Regulatory\n& CMC", fill: "hsl(244,58%,42%)" },
            { x: 259, label: "Mfg\n& SC", fill: "hsl(215,20%,65%)" },
            { x: 342, label: "Quality\nControl", fill: "hsl(38,90%,43%)" },
            { x: 425, label: "Commercial\n& Sales", fill: "hsl(346,84%,50%)" },
            { x: 508, label: "Patient\nEngagement", fill: "hsl(var(--primary))" },
          ].map((seg, i) => (
            <g key={i}>
              <polygon
                points={`${seg.x},10 ${seg.x + 78},10 ${seg.x + 88},45 ${seg.x + 78},80 ${seg.x},80 ${seg.x + 10},45`}
                fill={seg.fill}
                opacity={0.9}
              />
              {seg.label.split("\n").map((line, li) => (
                <text
                  key={li}
                  x={seg.x + 44}
                  y={38 + li * 16}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="bold"
                  fill="white"
                >
                  {line}
                </text>
              ))}
            </g>
          ))}
          <line x1="10" y1="100" x2="590" y2="100" stroke="hsl(172,83%,32%)" strokeWidth="2.5" />
          <text x="300" y="115" textAnchor="middle" fontSize="9" fill="hsl(172,83%,32%)" fontWeight="bold">
            UNIFIED DIGITAL THREAD · DATA FLOWS ACROSS ALL FUNCTIONS
          </text>
        </svg>
      </motion.div>

      {/* Parts and chapters */}
      {parts.map((part) => {
        const partChapters = chapters.filter((c) => part.chapters.includes(c.id));
        return (
          <div key={part.label}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{part.icon}</span>
              <h2 className="font-display text-xl font-bold text-foreground">{part.label}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {partChapters.map((chapter, i) => (
                <ChapterCard
                  key={chapter.id}
                  chapter={chapter}
                  index={i}
                  onClick={() => onChapterSelect(chapter.id)}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
