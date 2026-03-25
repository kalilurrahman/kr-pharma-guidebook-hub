import { motion } from "framer-motion";
import type { Chapter } from "@/types/pharma.types";

interface ChapterCardProps {
  chapter: Chapter;
  onClick: () => void;
  index: number;
}

const colorMap: Record<string, string> = {
  "Part I · Foundations": "border-t-primary",
  "Part II · Value Chain": "border-t-violet",
  "Part III · Commercial": "border-t-gold",
  "Part IV · Enterprise Enablers": "border-t-indigo",
};

export function ChapterCard({ chapter, onClick, index }: ChapterCardProps) {
  const borderColor = colorMap[chapter.partLabel] ?? "border-t-primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className={`card-pharma border-t-[3px] ${borderColor}`}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="font-mono text-xs text-primary tracking-wider">Chapter {chapter.num}</span>
        <span className="font-mono text-[10px] text-muted-foreground">{chapter.partLabel}</span>
      </div>

      <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-tight">{chapter.title}</h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{chapter.lead}</p>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {chapter.metrics.slice(0, 2).map((m) => (
          <div key={m.label} className="stat-gradient-bg rounded-lg p-2 text-center">
            <div className="font-display text-sm font-bold text-primary">{m.value}</div>
            <div className="font-mono text-[9px] text-muted-foreground uppercase">{m.label}</div>
          </div>
        ))}
      </div>

      {chapter.tags && (
        <div className="flex flex-wrap gap-1.5">
          {chapter.tags.map((tag) => (
            <span key={tag} className="tag-pill text-[10px]">{tag}</span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
