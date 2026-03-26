import { motion } from "framer-motion";
import { Download, FileText, File } from "lucide-react";
import type { ResourceFile } from "@/types/pharma.types";

const resources: ResourceFile[] = [
  {
    name: "Pharma Digital Transformation Handbook 2026",
    filename: "Pharma_Digital_Transformation_Handbook_2026.pdf",
    type: "pdf",
    size: "~5 MB",
    description: "The complete PDF edition of the Pharma Digital Transformation Handbook — all 14 chapters with diagrams, tables, and regional spotlights.",
  },
  {
    name: "Pharma Digital Transformation Handbook 2025",
    filename: "Pharma_Digital_Transformation_Handbook_2025.docx",
    type: "docx",
    size: "~2 MB",
    description: "Editable Word document version of the handbook for annotations, customisation, and internal distribution.",
  },
];

const iconMap = {
  pdf: <FileText className="w-6 h-6" />,
  docx: <File className="w-6 h-6" />,
  xlsx: <File className="w-6 h-6" />,
  pptx: <File className="w-6 h-6" />,
};

const colorMap = {
  pdf: "text-coral",
  docx: "text-indigo",
  xlsx: "text-teal",
  pptx: "text-gold",
};

export function ResourcesSection() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-foreground mb-2">📥 Downloadable Resources</h2>
        <p className="font-body text-muted-foreground">
          Download the full handbook in PDF or editable Word format. New resources are added regularly — check back for updates.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {resources.map((res, i) => (
          <motion.a
            key={res.filename}
            href={`/resources/${res.filename}`}
            download
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card-pharma group flex flex-col gap-4 no-underline"
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg bg-muted ${colorMap[res.type]}`}>
                {iconMap[res.type]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-wider text-primary mb-1">
                  {res.type.toUpperCase()} · {res.size}
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-1 leading-tight">
                  {res.name}
                </h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  {res.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-primary font-mono text-xs group-hover:translate-x-1 transition-transform">
              <Download className="w-3.5 h-3.5" />
              Download {res.type.toUpperCase()}
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-xl border border-border bg-muted/30">
        <p className="font-mono text-xs text-muted-foreground">
          💡 <strong>Auto-sync:</strong> Resources added to the <code className="text-primary">/public/resources/</code> folder via GitHub are automatically available for download.
          Upload new PDFs, templates, or frameworks and they'll appear here on the next deployment.
        </p>
      </div>
    </div>
  );
}
