import { motion } from "framer-motion";
import { chapters, parts } from "@/data/pharma-data";
import { ChapterCard } from "@/components/ChapterCard";

interface OverviewSectionProps {
  onChapterSelect: (chapterId: string) => void;
}

export function OverviewSection({ onChapterSelect }: OverviewSectionProps) {
  return (
    <div className="space-y-12">
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
