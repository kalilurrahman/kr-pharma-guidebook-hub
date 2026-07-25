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

/* ── Portability ──────────────────────────────────────────────────────────
   Results otherwise live only in one browser. A consultant needs to save a
   client's session, reload it later, or hand it to a colleague — so the
   state is exportable as a small versioned JSON file, and importable with
   validation (never trust a file's shape). */

export const EXPORT_FORMAT = "pharma-gcc-handbook/tool-results";
export const EXPORT_VERSION = 1;

export interface ExportEnvelope {
  format: string;
  version: number;
  exportedAt: string;
  state: ToolState;
}

export function serialiseToolState(state: ToolState, exportedAt: string): string {
  const envelope: ExportEnvelope = {
    format: EXPORT_FORMAT,
    version: EXPORT_VERSION,
    exportedAt,
    state,
  };
  return JSON.stringify(envelope, null, 2);
}

export type ImportResult =
  | { ok: true; state: ToolState }
  | { ok: false; error: string };

/**
 * Parse and validate an exported file. Deliberately strict about the envelope
 * and lenient inside it: an unknown extra key is harmless, but a wrong format,
 * a future version, or a non-object state is rejected with a readable reason.
 */
export function parseImportedToolState(raw: string): ImportResult {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return { ok: false, error: "That file isn't valid JSON." };
  }
  if (!parsed || typeof parsed !== "object") {
    return { ok: false, error: "That file doesn't contain an object." };
  }
  const env = parsed as Partial<ExportEnvelope>;
  if (env.format !== EXPORT_FORMAT) {
    return { ok: false, error: "That file wasn't exported by this handbook." };
  }
  if (typeof env.version !== "number" || env.version > EXPORT_VERSION) {
    return {
      ok: false,
      error: `That file was exported by a newer version (v${String(env.version)}). Update and try again.`,
    };
  }
  if (!env.state || typeof env.state !== "object") {
    return { ok: false, error: "That file has no saved results in it." };
  }

  // Keep only the slices we recognise, so a tampered file can't inject keys.
  const src = env.state as Record<string, unknown>;
  const state: ToolState = {};
  if (typeof src.organisation === "string") state.organisation = src.organisation;
  for (const key of ["assessment", "roi", "benchmark"] as const) {
    const v = src[key];
    if (v && typeof v === "object") state[key] = v as never;
  }
  if (!state.assessment && !state.roi && !state.benchmark) {
    return { ok: false, error: "That file has no saved results in it." };
  }
  return { ok: true, state };
}

export function replaceToolState(state: ToolState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* no-op */
  }
}

/** Plain-text executive summary — for pasting into an email or a deck. */
export function toPlainTextSummary(state: ToolState, org: string): string {
  const lines: string[] = [];
  const name = org.trim() || "Your Organisation";
  lines.push(`${name} — Digital Transformation Summary`);
  lines.push("=".repeat(Math.min(name.length + 36, 72)));
  lines.push("");

  if (state.assessment) {
    const a = state.assessment;
    lines.push(`Digital maturity: PDMF Level ${a.overallLevel} — ${a.levelName} (avg ${a.average.toFixed(1)}/5.0)`);
    for (const d of a.domains) lines.push(`  · ${d.name}: ${d.level}/5 (${d.levelName})`);
    lines.push("");
  }
  if (state.benchmark) {
    const b = state.benchmark;
    lines.push(`GCC benchmark: ${Math.round(b.index)}% of Wave 4 — ${b.wave}`);
    for (const d of b.dimensions) lines.push(`  · ${d.name}: ${d.tierLabel}`);
    lines.push("");
  }
  if (state.roi) {
    const r = state.roi;
    lines.push(
      `Annual value at stake (at $${r.revenue.toFixed(1)}B revenue): ${formatUsdMillions(r.totalLow)} – ${formatUsdMillions(r.totalHigh)}`,
    );
    for (const l of r.levers) {
      lines.push(`  · ${l.name} [${l.tier}]: ${formatUsdMillions(l.low)} – ${formatUsdMillions(l.high)}`);
    }
    lines.push("");
  }
  if (state.assessment?.priorities.length) {
    lines.push("Priority actions:");
    for (const p of state.assessment.priorities) {
      lines.push(`  · ${p.name} (+${p.gap} to Level 5) — ${p.nextStep}`);
    }
    lines.push("");
  }

  lines.push("Indicative self-assessment based on the PDMF and published GCC benchmarks.");
  lines.push("Source: Pharma GCC Transformation Handbook.");
  return lines.join("\n");
}
