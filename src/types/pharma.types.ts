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

export interface ChapterSection {
  title: string;
  content: string[];
  pillars?: PillarCard[];
  table?: TableData;
  steps?: ProcessStep[];
  insightBox?: InsightBox;
  pullQuote?: PullQuote;
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
