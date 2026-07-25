#!/usr/bin/env node
/**
 * Fact-freshness audit for the Pharma GCC Transformation Handbook.
 *
 * Why this exists: the handbook's figures were re-verified against named
 * primary sources in the 2026 refresh. Content authored in parallel branches
 * has already reintroduced superseded figures once (PRs #31/#32), and it was
 * only caught by a manual sweep. This script makes that check automatic.
 *
 * Usage:  npm run audit:facts     (exits non-zero if any stale figure is found)
 *
 * When a figure legitimately changes, update CANONICAL below in the same
 * commit — the table doubles as the provenance record for each number.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

/** Superseded figure -> what it should now be, with the source behind it. */
const CANONICAL = [
  {
    id: "india-gcc-count",
    stale: /(?<![\d.,])1,?600\+?\s*(?:GCC|centres|centers)/i,
    correct: "~2,117 GCCs (FY2026)",
    source: "NASSCOM–Zinnov FY2026",
  },
  {
    id: "gcc-headcount",
    stale: /(?<![\d.,])1\.9\s*(?:M|million)\s*(?:GCC\s*)?(?:employees|professionals)/i,
    correct: "2.36M professionals (FY2026)",
    source: "NASSCOM–Zinnov FY2026",
  },
  {
    id: "pharma-gcc-count",
    stale: /(?<![\d.,])30\+\s*(?:pharma|multinational)/i,
    correct: "130+ pharma & life-sciences GCCs",
    source: "Zinnov / AMCHAM 2025",
  },
  {
    id: "abdm-health-ids",
    stale: /(?<![\d.,])600\s*(?:M\+|million)\s*(?:digital\s*)?(?:health|ABHA)/i,
    correct: "900M+ ABHA IDs (2026)",
    source: "ABDM / NHA",
  },
  {
    id: "alphafold-structures",
    stale: /(?<![\d.,])(?:200|350)\s*(?:M\+|million)\s*(?:protein|structures)/i,
    correct: "214M+ predicted structures",
    source: "Varadi et al., Nucleic Acids Research 2024",
  },
  {
    id: "market-2030",
    stale: /(?:\$2\.3\s*T|2\.3\s*trillion)\s*by\s*2030/i,
    correct: "~$2.3T by 2028; ~$2.4T by 2029 (list-price basis)",
    source: "IQVIA 2025",
  },
  {
    id: "dct-adoption",
    stale: /60\s*%\+?[^.]{0,60}(?:decentrali|trial starts)/i,
    correct: "majority of new trial programmes (no matching-scope source for 60%)",
    source: "—",
  },
  {
    id: "ich-e6r3-year",
    stale: /E6\(R3\)[^.]{0,40}\b2023\b/i,
    correct: "Step 4 adopted Jan 2025 (EU effective Jul 2025)",
    source: "ICH",
  },
  {
    id: "dated-llm-names",
    stale: /\bGPT-4\b|\bGPT-4o\b|Claude 3\.\d|Gemini 1\.5/i,
    correct: "current frontier families (Claude, GPT-5, Gemini)",
    source: "—",
  },
];

/**
 * Exscientia needs context, not a bare match: it is legitimate to mention the
 * company when the Nov-2024 Recursion merger is acknowledged nearby.
 */
// "absor" covers absorb / absorbed / absorption (note the b→p stem change).
const EXSCIENTIA_OK =
  /absor\w*|acquir\w*|merger|merged|incorporat\w*|incl\.|discontinu\w*|in 2024|Nov 2024/i;

const TEXT_EXT = new Set([".ts", ".tsx", ".html"]);
const SKIP_DIR = new Set(["node_modules", "dist", ".git", "coverage"]);
const TARGETS = ["src", "public"];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIR.has(entry)) continue;
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (TEXT_EXT.has(extname(p))) out.push(p);
  }
  return out;
}

/** Strip tags/markup so prose split across elements is still matched. */
const toText = (raw) => raw.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");

const findings = [];

for (const root of TARGETS) {
  let files = [];
  try {
    files = walk(root);
  } catch {
    continue; // target dir absent
  }
  for (const file of files) {
    const text = toText(readFileSync(file, "utf8"));

    for (const rule of CANONICAL) {
      const re = new RegExp(rule.stale.source, rule.stale.flags.replace("g", "") + "g");
      for (const m of text.matchAll(re)) {
        findings.push({
          file,
          rule: rule.id,
          found: m[0].trim(),
          correct: rule.correct,
          source: rule.source,
          context: text.slice(Math.max(0, m.index - 70), m.index + m[0].length + 70).trim(),
        });
      }
    }

    for (const m of text.matchAll(/Exscientia/g)) {
      const window = text.slice(Math.max(0, m.index - 150), m.index + 150);
      if (!EXSCIENTIA_OK.test(window)) {
        findings.push({
          file,
          rule: "exscientia-standalone",
          found: "Exscientia (no merger context)",
          correct: "Recursion absorbed Exscientia (Nov 2024) — say so nearby",
          source: "Recursion/Exscientia merger, Nov 2024",
          context: window.trim(),
        });
      }
    }
  }
}

if (findings.length === 0) {
  console.log("✓ fact audit clean — no superseded figures found in src/ or public/");
  process.exit(0);
}

console.error(`✗ fact audit found ${findings.length} superseded figure(s):\n`);
for (const f of findings) {
  console.error(`  ${f.file}  [${f.rule}]`);
  console.error(`    found:   ${f.found}`);
  console.error(`    current: ${f.correct}  (${f.source})`);
  console.error(`    context: …${f.context.slice(0, 160)}…\n`);
}
console.error("If a figure legitimately changed, update CANONICAL in scripts/audit-facts.mjs.");
process.exit(1);
