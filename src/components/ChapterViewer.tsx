import { motion } from "framer-motion";
import type { Chapter } from "@/types/pharma.types";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ChapterViewerProps {
  chapter: Chapter;
  onBack: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const pillarColorMap: Record<string, string> = {
  teal: "border-t-primary",
  violet: "border-t-violet",
  gold: "border-t-gold",
  coral: "border-t-coral",
  indigo: "border-t-indigo",
};

const pillarTextMap: Record<string, string> = {
  teal: "text-primary",
  violet: "text-violet",
  gold: "text-gold",
  coral: "text-coral",
  indigo: "text-indigo",
};

const calloutStyles: Record<string, string> = {
  executive: "bg-gradient-to-br from-gold/10 to-gold/5 border-l-4 border-l-gold",
  "case-study": "bg-muted/50 border-l-4 border-l-indigo",
  spotlight: "bg-muted/50 border-l-4 border-l-primary",
  kpi: "bg-navy text-foreground border-none",
};

export function ChapterViewer({ chapter, onBack, onPrev, onNext, hasPrev, hasNext }: ChapterViewerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="max-w-4xl mx-auto"
    >
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-mono text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Overview
      </button>

      {/* Chapter header */}
      <div className="mb-12">
        <div className="font-mono text-xs text-primary tracking-wider uppercase mb-2">{chapter.partLabel}</div>
        <div className="font-mono text-xs text-muted-foreground mb-3">Chapter {chapter.num}</div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">{chapter.title}</h1>
        <p className="font-body text-lg text-muted-foreground italic leading-relaxed max-w-2xl">{chapter.lead}</p>
      </div>

      {/* Metrics strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
        {chapter.metrics.map((m) => (
          <div key={m.label} className="metric-card">
            <div className="font-display text-xl sm:text-2xl font-bold text-primary mb-1">{m.value}</div>
            <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Chapter content */}
      <div className="chapter-content space-y-8">
        {chapter.sections.map((section, si) => (
          <div key={si}>
            {section.title && <h2>{section.title}</h2>}

            {section.content.map((text, ti) => (
              <p key={ti} dangerouslySetInnerHTML={{ __html: text }} />
            ))}

            {/* Callout box */}
            {section.callout && (
              <div className={`rounded-xl p-6 my-7 ${calloutStyles[section.callout.type]}`}>
                <div className="font-mono text-[10px] uppercase tracking-wider mb-3 text-primary font-bold">
                  {section.callout.label}
                </div>
                <p className="font-body text-sm leading-relaxed text-muted-foreground italic" dangerouslySetInnerHTML={{ __html: section.callout.content }} />
              </div>
            )}

            {/* Bullet points */}
            {section.bulletPoints && (
              <ul className="space-y-2 my-4">
                {section.bulletPoints.map((bp, bi) => (
                  <li key={bi} dangerouslySetInnerHTML={{ __html: bp }} />
                ))}
              </ul>
            )}

            {/* SVG Diagram */}
            {section.diagram && (
              <div className="my-8 rounded-xl overflow-hidden border border-border">
                <div className="bg-navy-mid px-4 py-2.5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-coral" />
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider ml-2">
                    {section.diagram.title}
                  </span>
                </div>
                <div
                  className="p-6 bg-card overflow-x-auto"
                  dangerouslySetInnerHTML={{ __html: section.diagram.svgContent }}
                />
              </div>
            )}

            {/* Pull quote */}
            {section.pullQuote && (
              <div className="pull-quote">
                <p className="font-display text-lg italic text-foreground leading-relaxed mb-2">"{section.pullQuote.text}"</p>
                <cite className="font-mono text-xs text-primary tracking-wider">{section.pullQuote.cite}</cite>
              </div>
            )}

            {/* Process steps */}
            {section.steps && (
              <div className="space-y-0 my-7">
                {section.steps.map((step, idx) => (
                  <div key={idx} className="grid grid-cols-[44px_1fr] gap-5 pb-7 relative">
                    {idx < section.steps!.length - 1 && (
                      <div className="absolute left-[21px] top-[44px] w-0.5 bottom-0 bg-gradient-to-b from-primary to-transparent" />
                    )}
                    <div className="w-11 h-11 rounded-full bg-card flex items-center justify-center font-mono text-sm text-primary font-medium border border-border flex-shrink-0">
                      {step.num}
                    </div>
                    <div className="pt-2">
                      <h4 className="font-display text-base text-foreground font-semibold mb-2">{step.title}</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pillars grid */}
            {section.pillars && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-7">
                {section.pillars.map((pillar, pi) => (
                  <div
                    key={pi}
                    className={`card-pharma border-t-[3px] ${pillarColorMap[pillar.colorVariant ?? "teal"]}`}
                  >
                    <div className={`font-mono text-xs mb-2 ${pillarTextMap[pillar.colorVariant ?? "teal"]}`}>
                      {pillar.num}
                    </div>
                    <h4 className="font-display text-sm text-foreground font-semibold mb-2">{pillar.title}</h4>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Table */}
            {section.table && (
              <div className="overflow-x-auto my-7 rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-card">
                      {section.table.headers.map((h) => (
                        <th key={h} className="font-mono text-[10px] text-primary uppercase tracking-wider text-left px-4 py-3 border-b border-border">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, ri) => (
                      <tr key={ri} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-4 py-3 font-body text-sm text-muted-foreground">
                            {ci === 0 ? <span className="font-semibold text-foreground">{cell}</span> : cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Insight box */}
            {section.insightBox && (
              <div className="insight-box my-7">
                <div className="font-mono text-[10px] text-primary uppercase tracking-wider mb-3">
                  {section.insightBox.icon} {section.insightBox.label}
                </div>
                <h4 className="font-display text-base text-foreground font-semibold mb-3">{section.insightBox.title}</h4>
                <p className="font-body text-sm text-muted-foreground/80 leading-relaxed">{section.insightBox.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Chapter navigation */}
      <div className="flex justify-between items-center mt-16 pt-8 border-t border-border">
        {hasPrev ? (
          <button onClick={onPrev} className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors text-sm font-body text-muted-foreground">
            <ArrowLeft className="w-4 h-4" />
            Previous Chapter
          </button>
        ) : <div />}
        {hasNext ? (
          <button onClick={onNext} className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors text-sm font-body text-muted-foreground">
            Next Chapter
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : <div />}
      </div>
    </motion.div>
  );
}
