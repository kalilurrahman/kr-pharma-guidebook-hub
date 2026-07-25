import { describe, it, expect } from "vitest";
import {
  bandForAverage,
  pdmfLevelName,
  meanScore,
  PDMF_LEVEL_NAMES,
  waveFor,
  gccMaturityIndex,
  GCC_MAX_TIER,
  GCC_WAVES,
  revenueScale,
  scaleLever,
  sumRange,
  BENCHMARK_REVENUE_B,
  CAPTURE_FACTORS,
  largestGaps,
} from "@/lib/scoring";

describe("bandForAverage — PDMF banding boundaries", () => {
  it("maps the full scale to levels 1–5", () => {
    expect(bandForAverage(1.0)).toBe(1);
    expect(bandForAverage(2.0)).toBe(2);
    expect(bandForAverage(3.0)).toBe(3);
    expect(bandForAverage(4.0)).toBe(4);
    expect(bandForAverage(5.0)).toBe(5);
  });

  it("rounds up exactly on each .5 boundary", () => {
    expect(bandForAverage(1.5)).toBe(2);
    expect(bandForAverage(2.5)).toBe(3);
    expect(bandForAverage(3.5)).toBe(4);
    expect(bandForAverage(4.5)).toBe(5);
  });

  it("stays in the lower band just below each boundary", () => {
    expect(bandForAverage(1.499)).toBe(1);
    expect(bandForAverage(2.499)).toBe(2);
    expect(bandForAverage(3.499)).toBe(3);
    expect(bandForAverage(4.499)).toBe(4);
  });

  it("clamps sensibly outside the nominal 1–5 range", () => {
    expect(bandForAverage(0)).toBe(1);
    expect(bandForAverage(-3)).toBe(1);
    expect(bandForAverage(99)).toBe(5);
  });

  it("never returns a level without a name", () => {
    for (const avg of [0, 1, 1.5, 2.5, 3, 3.5, 4.5, 5, 42]) {
      const name = pdmfLevelName(bandForAverage(avg));
      expect(PDMF_LEVEL_NAMES).toContain(name as (typeof PDMF_LEVEL_NAMES)[number]);
    }
  });
});

describe("meanScore", () => {
  it("averages ratings and returns 0 for an empty set", () => {
    expect(meanScore([3, 2, 4, 3, 2, 3, 4])).toBeCloseTo(3.0, 10);
    expect(meanScore([5])).toBe(5);
    expect(meanScore([])).toBe(0);
  });

  it("reproduces the browser-verified assessment case (avg 3.0 → Level 3 Defined)", () => {
    const avg = meanScore([3, 2, 4, 3, 2, 3, 4]);
    expect(bandForAverage(avg)).toBe(3);
    expect(pdmfLevelName(bandForAverage(avg))).toBe("Defined");
  });
});

describe("waveFor — GCC wave thresholds", () => {
  it("is inclusive at each threshold", () => {
    expect(waveFor(0).label).toMatch(/Wave 1–2/);
    expect(waveFor(40).label).toMatch(/Wave 2–3/);
    expect(waveFor(60).label).toMatch(/Wave 3/);
    expect(waveFor(80).label).toMatch(/Wave 4/);
    expect(waveFor(100).label).toMatch(/Wave 4/);
  });

  it("stays in the lower wave just below each threshold", () => {
    expect(waveFor(39.9).label).toMatch(/Wave 1–2/);
    expect(waveFor(59.9).label).toMatch(/Wave 2–3/);
    expect(waveFor(79.9).label).toMatch(/Wave 3 ·/);
  });

  it("never falls through for any percentage, including out-of-range", () => {
    for (const pct of [-10, 0, 13, 40, 55, 60, 72, 80, 95, 100, 150]) {
      const w = waveFor(pct);
      expect(GCC_WAVES).toContain(w);
      expect(w.detail.length).toBeGreaterThan(40);
    }
  });
});

describe("gccMaturityIndex", () => {
  it("reproduces the browser-verified benchmark case (64% → Wave 3)", () => {
    const tiers = [3, 2, 3, 2, 1, 3, 4, 2, 3]; // 23 of 36
    const idx = gccMaturityIndex(tiers, 9);
    expect(Math.round(idx)).toBe(64);
    expect(waveFor(idx).label).toMatch(/Wave 3 · Centre of Excellence/);
  });

  it("returns 100% only when every dimension is at the top tier", () => {
    expect(gccMaturityIndex(Array(9).fill(GCC_MAX_TIER), 9)).toBe(100);
    expect(gccMaturityIndex(Array(9).fill(1), 9)).toBeCloseTo(25, 10);
  });

  it("counts unrated dimensions against the denominator, so partials cannot inflate", () => {
    // Three dimensions rated at the top, but nine exist.
    const partial = gccMaturityIndex([4, 4, 4], 9);
    expect(partial).toBeCloseTo((12 / 36) * 100, 10);
    expect(partial).toBeLessThan(100);
  });

  it("degrades to 0 on empty or nonsensical input", () => {
    expect(gccMaturityIndex([], 9)).toBe(0);
    expect(gccMaturityIndex([3, 3], 0)).toBe(0);
  });
});

describe("ROI scaling", () => {
  it("treats the benchmark revenue as scale 1.0", () => {
    expect(revenueScale(BENCHMARK_REVENUE_B)).toBe(1);
    expect(revenueScale(10)).toBe(2);
    expect(revenueScale(2.5)).toBe(0.5);
  });

  it("scales linearly with revenue and by capture factor", () => {
    const bench = { low: 200, high: 400 };
    expect(scaleLever(bench, 5, CAPTURE_FACTORS.laggard)).toEqual({ low: 200, high: 400 });
    expect(scaleLever(bench, 5, CAPTURE_FACTORS.developing)).toEqual({ low: 100, high: 200 });
    expect(scaleLever(bench, 10, CAPTURE_FACTORS.developing)).toEqual({ low: 200, high: 400 });
    expect(scaleLever(bench, 5, CAPTURE_FACTORS.leader)).toEqual({ low: 30, high: 60 });
  });

  it("reproduces the browser-verified totals at $5B and $8B, all Developing", () => {
    // The five Ch 1 levers.
    const levers = [
      { low: 200, high: 400 },
      { low: 150, high: 300 },
      { low: 100, high: 200 },
      { low: 80, high: 150 },
      { low: 50, high: 120 },
    ];
    const at5 = sumRange(levers.map((l) => scaleLever(l, 5, CAPTURE_FACTORS.developing)));
    expect(Math.round(at5.low)).toBe(290);
    expect(Math.round(at5.high)).toBe(585);

    const at8 = sumRange(levers.map((l) => scaleLever(l, 8, CAPTURE_FACTORS.developing)));
    expect(Math.round(at8.low)).toBe(464);
    expect(Math.round(at8.high)).toBe(936);
    // Exactly 1.6x the $5B case.
    expect(at8.low / at5.low).toBeCloseTo(1.6, 10);
  });

  it("keeps low <= high for every position and revenue", () => {
    for (const rev of [0.5, 5, 12.5, 50]) {
      for (const f of Object.values(CAPTURE_FACTORS)) {
        const r = scaleLever({ low: 80, high: 150 }, rev, f);
        expect(r.low).toBeLessThanOrEqual(r.high);
      }
    }
  });

  it("sums an empty set to zero", () => {
    expect(sumRange([])).toEqual({ low: 0, high: 0 });
  });
});

describe("largestGaps", () => {
  const items = [
    { name: "data", level: 3 },
    { name: "aiml", level: 2 },
    { name: "cloud", level: 5 },
    { name: "commercial", level: 2 },
  ];

  it("ranks by gap descending and drops items already at the top", () => {
    const gaps = largestGaps(items, (i) => i.level, 5);
    expect(gaps.map((g) => g.item.name)).toEqual(["aiml", "commercial", "data"]);
    expect(gaps.every((g) => g.gap > 0)).toBe(true);
    expect(gaps.some((g) => g.item.name === "cloud")).toBe(false);
  });

  it("preserves original order for tied gaps", () => {
    const gaps = largestGaps(items, (i) => i.level, 5);
    const tied = gaps.filter((g) => g.gap === 3).map((g) => g.item.name);
    expect(tied).toEqual(["aiml", "commercial"]);
  });

  it("respects the limit and handles an all-maxed set", () => {
    expect(largestGaps(items, (i) => i.level, 5, 1)).toHaveLength(1);
    expect(largestGaps([{ level: 5 }], (i) => i.level, 5)).toEqual([]);
  });
});
