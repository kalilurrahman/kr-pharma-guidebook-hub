/**
 * Full-text retrieval over the whole handbook.
 *
 * The site's original search only matched chapter titles, leads, and tags —
 * so the substance (prose, tables, callouts, frameworks) was unfindable. This
 * flattens every chapter into addressable passages and ranks them, which is
 * also the grounding layer a future citation-backed copilot would sit on:
 * retrieve first, generate second.
 *
 * Deliberately dependency-free and synchronous — the corpus is small enough
 * (hundreds of passages) to index once at module load.
 */

import { chapters } from "@/data/pharma-data";

export type PassageKind =
  | "lead"
  | "prose"
  | "bullet"
  | "callout"
  | "table"
  | "quote"
  | "insight"
  | "step";

export interface Passage {
  id: string;
  chapterId: string;
  chapterNum: string;
  chapterTitle: string;
  partLabel: string;
  sectionTitle: string;
  kind: PassageKind;
  text: string;
  haystack: string; // lowercased, for matching
}

export interface SearchHit extends Passage {
  score: number;
  snippet: string;
}

const KIND_WEIGHT: Record<PassageKind, number> = {
  lead: 1.4,
  insight: 1.3,
  callout: 1.2,
  quote: 1.1,
  prose: 1.0,
  bullet: 1.0,
  step: 1.0,
  table: 0.9,
};

const STOP = new Set([
  "the", "a", "an", "and", "or", "of", "to", "in", "for", "on", "is", "are",
  "as", "at", "by", "it", "its", "that", "this", "with", "from", "be", "not",
]);

function stripHtml(s: string): string {
  return s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function push(
  out: Passage[],
  base: Omit<Passage, "id" | "kind" | "text" | "haystack">,
  kind: PassageKind,
  raw: string,
) {
  const text = stripHtml(raw);
  if (text.length < 12) return;
  out.push({
    ...base,
    id: `${base.chapterId}:${out.length}`,
    kind,
    text,
    haystack: text.toLowerCase(),
  });
}

function buildIndex(): Passage[] {
  const out: Passage[] = [];

  for (const ch of chapters) {
    const chapterMeta = {
      chapterId: ch.id,
      chapterNum: ch.num,
      chapterTitle: ch.title,
      partLabel: ch.partLabel,
    };

    push(out, { ...chapterMeta, sectionTitle: "Overview" }, "lead", ch.lead);

    for (const s of ch.sections ?? []) {
      const base = { ...chapterMeta, sectionTitle: s.title || "Overview" };

      for (const p of s.content ?? []) push(out, base, "prose", p);
      for (const b of s.bulletPoints ?? []) push(out, base, "bullet", b);
      if (s.callout) push(out, base, "callout", `${s.callout.label}. ${s.callout.content}`);
      if (s.pullQuote) push(out, base, "quote", s.pullQuote.text);
      if (s.insightBox) push(out, base, "insight", `${s.insightBox.title}. ${s.insightBox.description}`);
      for (const st of s.steps ?? []) push(out, base, "step", `${st.num} ${st.title}. ${st.description}`);
      for (const pl of s.pillars ?? []) push(out, base, "step", `${pl.num} ${pl.title}. ${pl.description}`);
      if (s.table) {
        // One passage per row keeps table hits precise and citable.
        for (const row of s.table.rows) {
          push(out, base, "table", row.join(" · "));
        }
      }
    }
  }

  return out;
}

let INDEX: Passage[] | null = null;
function getIndex(): Passage[] {
  if (!INDEX) INDEX = buildIndex();
  return INDEX;
}

export function passageCount(): number {
  return getIndex().length;
}

function tokenize(q: string): string[] {
  return q
    .toLowerCase()
    .split(/[^a-z0-9%$+.-]+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 1 && !STOP.has(t));
}

function makeSnippet(text: string, terms: string[], phrase: string): string {
  const lower = text.toLowerCase();
  let at = phrase ? lower.indexOf(phrase) : -1;
  if (at < 0) {
    for (const t of terms) {
      at = lower.indexOf(t);
      if (at >= 0) break;
    }
  }
  if (at < 0) at = 0;
  const WINDOW = 220;
  let start = Math.max(0, at - Math.floor(WINDOW / 3));
  // Snap to a word boundary so snippets don't start mid-word.
  if (start > 0) {
    const sp = text.indexOf(" ", start);
    if (sp > 0 && sp - start < 20) start = sp + 1;
  }
  const end = Math.min(text.length, start + WINDOW);
  return (start > 0 ? "… " : "") + text.slice(start, end).trim() + (end < text.length ? " …" : "");
}

export interface SearchOptions {
  limit?: number;
  chapterId?: string;
}

export function searchHandbook(query: string, opts: SearchOptions = {}): SearchHit[] {
  const { limit = 40, chapterId } = opts;
  const terms = tokenize(query);
  if (!terms.length) return [];
  const phrase = query.trim().toLowerCase();
  const usePhrase = phrase.includes(" ");

  const hits: SearchHit[] = [];

  for (const p of getIndex()) {
    if (chapterId && p.chapterId !== chapterId) continue;

    let matched = 0;
    let score = 0;

    for (const t of terms) {
      let idx = p.haystack.indexOf(t);
      if (idx < 0) continue;
      matched += 1;
      let occurrences = 0;
      while (idx >= 0 && occurrences < 6) {
        occurrences += 1;
        idx = p.haystack.indexOf(t, idx + t.length);
      }
      // Diminishing returns on repetition; longer terms are more specific.
      score += (1 + Math.log(occurrences)) * (1 + t.length / 12);
    }

    if (!matched) continue;

    // Short queries are precise intents — a two-word query like "chain of
    // identity" should not return every mention of "supply chain". Require all
    // terms for 1–2 term queries, and a clear majority for longer ones.
    const coverage = matched / terms.length;
    const minCoverage = terms.length <= 2 ? 1 : 0.6;
    if (coverage < minCoverage) continue;
    score *= 0.5 + coverage;

    // Exact phrase is a strong signal.
    if (usePhrase && p.haystack.includes(phrase)) score *= 2.2;

    // Title relevance: a hit inside a section about the query ranks higher.
    const titleHay = `${p.sectionTitle} ${p.chapterTitle}`.toLowerCase();
    const titleMatches = terms.filter((t) => titleHay.includes(t)).length;
    score *= 1 + 0.35 * titleMatches;

    score *= KIND_WEIGHT[p.kind];

    // Mild length normalisation so long paragraphs don't dominate.
    score /= 1 + Math.log(1 + p.text.length / 400);

    hits.push({ ...p, score, snippet: makeSnippet(p.text, terms, usePhrase ? phrase : "") });
  }

  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, limit);
}

/** Chapter-level rollup of a result set, most relevant chapter first. */
export function groupByChapter(hits: SearchHit[]) {
  const map = new Map<string, { chapterId: string; chapterNum: string; chapterTitle: string; partLabel: string; total: number; hits: SearchHit[] }>();
  for (const h of hits) {
    const g = map.get(h.chapterId) ?? {
      chapterId: h.chapterId,
      chapterNum: h.chapterNum,
      chapterTitle: h.chapterTitle,
      partLabel: h.partLabel,
      total: 0,
      hits: [],
    };
    g.total += h.score;
    g.hits.push(h);
    map.set(h.chapterId, g);
  }
  return [...map.values()].sort((a, b) => b.total - a.total);
}

/** Split text around query terms so the UI can highlight without innerHTML. */
export function highlightParts(text: string, query: string): { text: string; hit: boolean }[] {
  const terms = tokenize(query);
  if (!terms.length) return [{ text, hit: false }];
  const escaped = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escaped.join("|")})`, "gi");
  const termSet = new Set(terms);
  // Split with a capture group yields matched terms as their own parts, so a
  // set membership test is enough — and avoids a stateful `re.test()` bug.
  return text
    .split(re)
    .filter((part) => part !== "")
    .map((part) => ({ text: part, hit: termSet.has(part.toLowerCase()) }));
}
