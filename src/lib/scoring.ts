/**
 * Pure scoring functions shared by the interactive diagnostics.
 *
 * These produce the numbers a client ultimately reads in a board pack, so they
 * live here — outside the components — to be unit-testable at their threshold
 * boundaries, where off-by-one errors hide. Behaviour is intentionally
 * identical to the original in-component implementations.
 */

/* ── PDMF maturity (assessment) ─────────────────────────────────────────── */

export const PDMF_LEVEL_NAMES = ["Foundational", "Developing", "Defined", "Advanced", "Leading"] as const;
export const PDMF_MAX_LEVEL = 5;

/**
 * Band a mean domain score (1–5) to a PDMF level using nearest-band cutoffs
 * at .5 boundaries: a boundary value rounds *up* (2.5 → Level 3).
 */
export function bandForAverage(avg: number): number {
  if (avg < 1.5) return 1;
  if (avg < 2.5) return 2;
  if (avg < 3.5) return 3;
  if (avg < 4.5) return 4;
  return 5;
}

export function pdmfLevelName(level: number): string {
  return PDMF_LEVEL_NAMES[level - 1] ?? "";
}

/** Mean of the provided domain scores; 0 when nothing has been rated. */
export function meanScore(values: number[]): number {
  if (!values.length) return 0;
  return values.reduce((a, b) => a + b, 0) / values.length;
}

/* ── GCC benchmark ──────────────────────────────────────────────────────── */

export const GCC_TIER_LABELS = ["Baseline", "Scaling", "Large GCC", "Wave 4"] as const;
export const GCC_MAX_TIER = GCC_TIER_LABELS.length; // 4

export interface WaveBand {
  min: number;
  label: string;
  detail: string;
}

export const GCC_WAVES: WaveBand[] = [
  {
    min: 0,
    label: "Wave 1–2 · Cost & Capacity",
    detail:
      "The centre is still measured mainly on cost and throughput. Priority is standardising core processes and building the data and governance foundation before reaching for innovation mandates.",
  },
  {
    min: 40,
    label: "Wave 2–3 · Capability & Standardisation",
    detail:
      "End-to-end process ownership is taking hold. Priority is deepening domain capability, forming Centres of Excellence, and converting arbitrage savings into platform and AI investment.",
  },
  {
    min: 60,
    label: "Wave 3 · Centre of Excellence",
    detail:
      "The centre sets global standards in several domains. Priority is winning genuine global mandates and decision rights — the step that separates a scaled centre from a strategic one.",
  },
  {
    min: 80,
    label: "Wave 4 · Innovation Partner ('HQ Twin')",
    detail:
      "The centre co-creates strategy and contributes to the innovation pipeline. Priority is sustaining the edge: IP generation, enterprise-global mandates, and exporting innovation to the parent.",
  },
];

/** Highest wave whose threshold the index meets; thresholds are inclusive. */
export function waveFor(pct: number): WaveBand {
  return [...GCC_WAVES].reverse().find((w) => pct >= w.min) ?? GCC_WAVES[0];
}

/**
 * Maturity index as a percentage of full Wave 4 across all dimensions.
 * Unrated dimensions still count against the denominator, so a partial
 * assessment cannot inflate the score.
 */
export function gccMaturityIndex(tiers: number[], dimensionCount: number): number {
  if (!tiers.length || dimensionCount <= 0) return 0;
  return (tiers.reduce((a, b) => a + b, 0) / (dimensionCount * GCC_MAX_TIER)) * 100;
}

/* ── ROI / value at stake ───────────────────────────────────────────────── */

/** Revenue ($B) the Ch 1 laggard-vs-leader gap figures are benchmarked to. */
export const BENCHMARK_REVENUE_B = 5;

/** How much of a lever's gap is still capturable, by current position. */
export const CAPTURE_FACTORS = { laggard: 1.0, developing: 0.5, leader: 0.15 } as const;

export function revenueScale(revenueB: number): number {
  return revenueB / BENCHMARK_REVENUE_B;
}

/**
 * Scale a lever's benchmarked annual range to this organisation: linear in
 * revenue, then reduced by how much of the gap is already captured.
 */
export function scaleLever(
  benchmark: { low: number; high: number },
  revenueB: number,
  captureFactor: number,
): { low: number; high: number } {
  const scale = revenueScale(revenueB);
  return {
    low: benchmark.low * scale * captureFactor,
    high: benchmark.high * scale * captureFactor,
  };
}

export function sumRange(ranges: { low: number; high: number }[]): { low: number; high: number } {
  return {
    low: ranges.reduce((a, r) => a + r.low, 0),
    high: ranges.reduce((a, r) => a + r.high, 0),
  };
}

/* ── Shared gap helper ──────────────────────────────────────────────────── */

/**
 * Rank items by distance from the top of their scale, largest gap first,
 * dropping anything already at the top. Ties keep their original order.
 */
export function largestGaps<T>(
  items: T[],
  scoreOf: (item: T) => number,
  maxScore: number,
  limit = 3,
): { item: T; score: number; gap: number }[] {
  return items
    .map((item) => ({ item, score: scoreOf(item), gap: maxScore - scoreOf(item) }))
    .filter((r) => r.gap > 0)
    .sort((a, b) => b.gap - a.gap)
    .slice(0, limit);
}
