import { describe, it, expect } from "vitest";
import {
  serialiseToolState,
  parseImportedToolState,
  toPlainTextSummary,
  formatUsdMillions,
  EXPORT_FORMAT,
  EXPORT_VERSION,
  type ToolState,
} from "@/lib/tool-state";

const STATE: ToolState = {
  organisation: "Acme Pharma — India GCC",
  assessment: {
    overallLevel: 3,
    levelName: "Defined",
    average: 3.0,
    domains: [
      { name: "Data & Analytics", level: 3, levelName: "Defined" },
      { name: "AI / ML", level: 2, levelName: "Developing" },
    ],
    priorities: [
      { name: "AI / ML", level: 2, gap: 3, nextStep: "Scale models to production", chapter: "Ch 26" },
    ],
    savedAt: "2026-07-25T12:00:00.000Z",
  },
  benchmark: {
    index: 64,
    wave: "Wave 3 · Centre of Excellence",
    dimensions: [{ name: "Digital Maturity", tier: 1, tierLabel: "Baseline" }],
    gaps: [{ name: "Digital Maturity", gap: 3, targets: [{ metric: "Cloud Adoption Rate", target: "≥70%" }] }],
    savedAt: "2026-07-25T12:00:00.000Z",
  },
  roi: {
    revenue: 8,
    totalLow: 464,
    totalHigh: 936,
    levers: [{ name: "R&D Discovery Acceleration", low: 160, high: 320, tier: "Developing" }],
    savedAt: "2026-07-25T12:00:00.000Z",
  },
};

describe("formatUsdMillions", () => {
  it("formats millions and rolls over to billions", () => {
    expect(formatUsdMillions(464)).toBe("$464M");
    expect(formatUsdMillions(999)).toBe("$999M");
    expect(formatUsdMillions(1000)).toBe("$1.00B");
    expect(formatUsdMillions(12500)).toBe("$12.5B");
  });
});

describe("export / import round-trip", () => {
  it("round-trips a full state without loss", () => {
    const json = serialiseToolState(STATE, "2026-07-25T12:00:00.000Z");
    const result = parseImportedToolState(json);
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.state).toEqual(STATE);
  });

  it("writes a versioned envelope, not a bare state blob", () => {
    const env = JSON.parse(serialiseToolState(STATE, "2026-07-25T12:00:00.000Z"));
    expect(env.format).toBe(EXPORT_FORMAT);
    expect(env.version).toBe(EXPORT_VERSION);
    expect(env.exportedAt).toBe("2026-07-25T12:00:00.000Z");
    expect(env.state).toBeTypeOf("object");
  });

  it("round-trips a partial state (only one tool completed)", () => {
    const partial: ToolState = { roi: STATE.roi };
    const result = parseImportedToolState(serialiseToolState(partial, "x"));
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.state.roi).toEqual(STATE.roi);
      expect(result.state.assessment).toBeUndefined();
    }
  });
});

describe("parseImportedToolState validation", () => {
  it("rejects malformed JSON with a readable message", () => {
    const r = parseImportedToolState("{not json");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toMatch(/valid JSON/i);
  });

  it("rejects a non-object payload", () => {
    for (const raw of ["null", "42", '"a string"']) {
      expect(parseImportedToolState(raw).ok).toBe(false);
    }
  });

  it("rejects a file from a different app", () => {
    const r = parseImportedToolState(JSON.stringify({ format: "something/else", version: 1, state: {} }));
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toMatch(/wasn't exported by this handbook/i);
  });

  it("rejects a newer export version rather than guessing", () => {
    const r = parseImportedToolState(
      JSON.stringify({ format: EXPORT_FORMAT, version: EXPORT_VERSION + 1, state: STATE }),
    );
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toMatch(/newer version/i);
  });

  it("rejects an envelope with no recognised results", () => {
    const r = parseImportedToolState(JSON.stringify({ format: EXPORT_FORMAT, version: 1, state: {} }));
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toMatch(/no saved results/i);
  });

  it("strips unrecognised keys so a tampered file cannot inject state", () => {
    // Built as raw JSON text, not an object literal: `__proto__` in a literal
    // sets the prototype (and JSON.stringify drops it), whereas JSON.parse of
    // this text yields a genuine own property — which is what we must ignore.
    const raw = `{
      "format": "${EXPORT_FORMAT}",
      "version": 1,
      "state": {
        "roi": ${JSON.stringify(STATE.roi)},
        "__proto__": { "polluted": true },
        "evil": "payload"
      }
    }`;
    const r = parseImportedToolState(raw);
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(Object.keys(r.state).sort()).toEqual(["roi"]);
      expect((r.state as Record<string, unknown>).evil).toBeUndefined();
    }
    // Nothing leaked onto Object.prototype.
    expect((Object.prototype as Record<string, unknown>).polluted).toBeUndefined();
    expect(({} as Record<string, unknown>).polluted).toBeUndefined();
  });

  it("ignores a non-string organisation instead of trusting it", () => {
    const r = parseImportedToolState(
      JSON.stringify({ format: EXPORT_FORMAT, version: 1, state: { organisation: 123, roi: STATE.roi } }),
    );
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.state.organisation).toBeUndefined();
  });
});

describe("toPlainTextSummary", () => {
  it("includes the headline numbers from every completed tool", () => {
    const txt = toPlainTextSummary(STATE, "Acme Pharma");
    expect(txt).toContain("Acme Pharma");
    expect(txt).toContain("PDMF Level 3 — Defined");
    expect(txt).toContain("Wave 3 · Centre of Excellence");
    expect(txt).toContain("$464M – $936M");
    expect(txt).toContain("Priority actions:");
    expect(txt).toContain("Pharma GCC Transformation Handbook");
  });

  it("falls back to a placeholder when no organisation is given", () => {
    expect(toPlainTextSummary(STATE, "   ")).toContain("Your Organisation");
  });

  it("omits sections for tools that were not completed", () => {
    const txt = toPlainTextSummary({ roi: STATE.roi }, "Acme");
    expect(txt).toContain("Annual value at stake");
    expect(txt).not.toContain("PDMF Level");
    expect(txt).not.toContain("GCC benchmark:");
  });
});
