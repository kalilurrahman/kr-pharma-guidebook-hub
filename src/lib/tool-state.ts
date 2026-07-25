/**
 * Shared, client-only persistence for the interactive tools.
 *
 * Each tool writes a *summary* of its result (already derived, ready to
 * render) so the Board Pack can assemble a deliverable without duplicating
 * any of the tools' scoring logic. Everything lives in localStorage — no
 * data leaves the browser.
 */

const STORAGE_KEY = "pharma-handbook.tools.v1";

export interface AssessmentSummary {
  overallLevel: number;
  levelName: string;
  average: number;
  domains: { name: string; level: number; levelName: string }[];
  priorities: { name: string; level: number; gap: number; nextStep: string; chapter: string }[];
  savedAt: string;
}

export interface RoiSummary {
  revenue: number;
  totalLow: number;
  totalHigh: number;
  levers: { name: string; low: number; high: number; tier: string }[];
  savedAt: string;
}

export interface BenchmarkSummary {
  index: number;
  wave: string;
  dimensions: { name: string; tier: number; tierLabel: string }[];
  gaps: { name: string; gap: number; targets: { metric: string; target: string }[] }[];
  savedAt: string;
}

export interface ToolState {
  organisation?: string;
  assessment?: AssessmentSummary;
  roi?: RoiSummary;
  benchmark?: BenchmarkSummary;
}

export function loadToolState(): ToolState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? (parsed as ToolState) : {};
  } catch {
    // Private mode, disabled storage, or corrupt JSON — degrade to empty.
    return {};
  }
}

export function saveToolSlice<K extends keyof ToolState>(key: K, value: ToolState[K]): void {
  try {
    const next: ToolState = { ...loadToolState(), [key]: value };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Persistence is a convenience, never a requirement — fail silently.
  }
}

export function clearToolState(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* no-op */
  }
}

export function formatUsdMillions(m: number): string {
  if (m >= 1000) return `$${(m / 1000).toFixed(m >= 10000 ? 1 : 2)}B`;
  return `$${Math.round(m)}M`;
}
