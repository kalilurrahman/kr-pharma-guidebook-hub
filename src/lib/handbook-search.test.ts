import { describe, it, expect } from "vitest";
import {
  searchHandbook,
  groupByChapter,
  highlightParts,
  passageCount,
} from "@/lib/handbook-search";

describe("handbook search index", () => {
  it("indexes a substantial number of passages from the real corpus", () => {
    expect(passageCount()).toBeGreaterThan(200);
  });

  it("strips HTML markup out of indexed text", () => {
    // Chapter prose contains <strong> emphasis; it must not leak into results.
    const hits = searchHandbook("data as a strategic asset", { limit: 20 });
    expect(hits.length).toBeGreaterThan(0);
    for (const h of hits) {
      expect(h.text).not.toMatch(/<[^>]+>/);
      expect(h.snippet).not.toMatch(/<[^>]+>/);
    }
  });
});

describe("searchHandbook", () => {
  it("returns nothing for empty or stop-word-only queries", () => {
    expect(searchHandbook("")).toEqual([]);
    expect(searchHandbook("   ")).toEqual([]);
    expect(searchHandbook("the and of")).toEqual([]);
  });

  it("finds body content the old title-only search could not reach", () => {
    // 'eCTD' appears in chapter body/tables, not in any chapter title.
    const hits = searchHandbook("eCTD");
    expect(hits.length).toBeGreaterThan(0);
    expect(hits.some((h) => h.text.toLowerCase().includes("ectd"))).toBe(true);
  });

  it("ranks results deterministically and in non-increasing score order", () => {
    const a = searchHandbook("real-world evidence");
    const b = searchHandbook("real-world evidence");
    expect(a.map((h) => h.id)).toEqual(b.map((h) => h.id));
    for (let i = 1; i < a.length; i++) {
      expect(a[i - 1].score).toBeGreaterThanOrEqual(a[i].score);
    }
  });

  it("surfaces the on-topic chapter first for a distinctive query", () => {
    const groups = groupByChapter(searchHandbook("digital twin"));
    expect(groups.length).toBeGreaterThan(0);
    // Ch 24 is the dedicated Digital Twins chapter.
    expect(groups[0].chapterId).toBe("ch24");
  });

  it("respects the limit option", () => {
    const hits = searchHandbook("digital", { limit: 5 });
    expect(hits.length).toBeLessThanOrEqual(5);
  });

  it("can scope results to a single chapter", () => {
    const hits = searchHandbook("digital", { chapterId: "ch24" });
    expect(hits.length).toBeGreaterThan(0);
    expect(hits.every((h) => h.chapterId === "ch24")).toBe(true);
  });

  it("requires multi-term queries to match a meaningful share of terms", () => {
    // A real phrase should hit; nonsense padding should not drag it in.
    const nonsense = searchHandbook("zzzqqq wwwvvv xxxyyy");
    expect(nonsense).toEqual([]);
  });

  it("requires ALL terms for a short query, so intent is not diluted", () => {
    // "chain of identity" (a CGT concept) must not return every "supply chain"
    // mention. Every hit has to contain both meaningful terms.
    const hits = searchHandbook("chain of identity");
    expect(hits.length).toBeGreaterThan(0);
    for (const h of hits) {
      const hay = h.text.toLowerCase();
      expect(hay.includes("chain")).toBe(true);
      expect(hay.includes("identity")).toBe(true);
    }
  });

  it("still tolerates a partial match on longer queries", () => {
    const hits = searchHandbook("decentralised clinical trial patient recruitment");
    expect(hits.length).toBeGreaterThan(0);
  });

  it("produces a bounded snippet with an ellipsis when truncating", () => {
    const hits = searchHandbook("pharmacovigilance");
    expect(hits.length).toBeGreaterThan(0);
    for (const h of hits.slice(0, 5)) {
      expect(h.snippet.length).toBeLessThan(300);
      if (h.snippet.length < h.text.length) {
        expect(h.snippet).toMatch(/…/);
      }
    }
  });

  it("always attributes a hit to a chapter and section", () => {
    for (const h of searchHandbook("governance").slice(0, 10)) {
      expect(h.chapterId).toBeTruthy();
      expect(h.chapterNum).toBeTruthy();
      expect(h.chapterTitle).toBeTruthy();
      expect(h.sectionTitle).toBeTruthy();
    }
  });
});

describe("groupByChapter", () => {
  it("groups hits and orders chapters by summed score", () => {
    const groups = groupByChapter(searchHandbook("clinical trials"));
    expect(groups.length).toBeGreaterThan(0);
    for (let i = 1; i < groups.length; i++) {
      expect(groups[i - 1].total).toBeGreaterThanOrEqual(groups[i].total);
    }
    // No chapter appears twice.
    const ids = groups.map((g) => g.chapterId);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("highlightParts", () => {
  it("marks only the query terms and preserves the original text", () => {
    const parts = highlightParts("Digital twins predict batch failure", "twins");
    expect(parts.map((p) => p.text).join("")).toBe("Digital twins predict batch failure");
    expect(parts.filter((p) => p.hit).map((p) => p.text)).toEqual(["twins"]);
  });

  it("is case-insensitive and handles repeated terms without regex state bleed", () => {
    const parts = highlightParts("Twins and twins and TWINS", "twins");
    expect(parts.filter((p) => p.hit)).toHaveLength(3);
  });

  it("returns the text unchanged when there is nothing to highlight", () => {
    const parts = highlightParts("Nothing to see", "");
    expect(parts).toEqual([{ text: "Nothing to see", hit: false }]);
  });

  it("does not throw on regex metacharacters in the query", () => {
    expect(() => highlightParts("cost is $2.6B (capitalised)", "$2.6b (")).not.toThrow();
  });
});
