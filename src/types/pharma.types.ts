export interface ChapterMetric {
  value: string;
  label: string;
}

export interface PillarCard {
  num: string;
  title: string;
  description: string;
  colorVariant?: "teal" | "violet" | "gold" | "coral" | "indigo";
}

export interface InsightBox {
  icon: string;
  label: string;
  title: string;
  description: string;
}

export interface PullQuote {
  text: string;
  cite: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface DiagramData {
  title: string;
  svgContent: string;
}

export interface CalloutBox {
  type: "executive" | "case-study" | "spotlight" | "kpi";
  label: string;
  content: string;
}

export interface ChapterSection {
  title: string;
  content: string[];
  pillars?: PillarCard[];
  table?: TableData;
  steps?: ProcessStep[];
  insightBox?: InsightBox;
  pullQuote?: PullQuote;
  diagram?: DiagramData;
  callout?: CalloutBox;
  bulletPoints?: string[];
}

export interface Chapter {
  id: string;
  num: string;
  partLabel: string;
  title: string;
  lead: string;
  metrics: ChapterMetric[];
  sections: ChapterSection[];
  tags?: string[];
}

export interface HandbookStats {
  chapters: number;
  words: string;
  pillars: number;
  phases: number;
}

export interface ResourceFile {
  name: string;
  filename: string;
  type: "pdf" | "docx" | "xlsx" | "pptx";
  size: string;
  description: string;
}
