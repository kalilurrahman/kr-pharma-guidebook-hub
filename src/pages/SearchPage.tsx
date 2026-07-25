import { useState, useMemo, useDeferredValue } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, BookOpen, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PharmaFooter } from "@/components/PharmaFooter";
import pharmaLogo from "@/assets/pharma-logo.png";
import { usePageMeta } from "@/hooks/use-page-meta";
import {
  searchHandbook,
  groupByChapter,
  highlightParts,
  passageCount,
  type PassageKind,
} from "@/lib/handbook-search";

const KIND_LABEL: Record<PassageKind, string> = {
  lead: "Overview",
  prose: "Narrative",
  bullet: "Key point",
  callout: "Callout",
  table: "Table row",
  quote: "Pull quote",
  insight: "Insight",
  step: "Framework",
};

const SUGGESTIONS = [
  "real-world evidence",
  "GxP validation",
  "decentralised trials",
  "digital twin",
  "eCTD",
  "patent cliff",
  "agentic AI",
  "chain of identity",
];

function Highlighted({ text, query }: { text: string; query: string }) {
  const parts = useMemo(() => highlightParts(text, query), [text, query]);
  return (
    <>
      {parts.map((p, i) =>
        p.hit ? (
          <mark key={i} className="bg-primary/25 text-foreground rounded px-0.5">
            {p.text}
          </mark>
        ) : (
          <span key={i}>{p.text}</span>
        ),
      )}
    </>
  );
}

const SearchPage = () => {
  usePageMeta(
    "Deep Search",
    "Search the full text of all 30 chapters of the Pharma GCC Transformation Handbook — narrative, tables, frameworks, and callouts — with cited results.",
    "/search",
  );

  const [query, setQuery] = useState("");
  const deferred = useDeferredValue(query);

  const { hits, groups } = useMemo(() => {
    const h = searchHandbook(deferred, { limit: 60 });
    return { hits: h, groups: groupByChapter(h) };
  }, [deferred]);

  const total = useMemo(() => passageCount(), []);
  const active = deferred.trim().length > 1;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="header-glass sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-mono">
              <ArrowLeft className="w-4 h-4" />
              Back to Handbook
            </Link>
            <div className="flex items-center gap-3">
              <img src={pharmaLogo} alt="Pharma Handbook" width={28} height={28} className="rounded-lg" />
              <span className="font-display text-sm font-bold text-foreground hidden sm:inline">
                Deep Search — Full Handbook
              </span>
              <span className="font-display text-sm font-bold text-foreground sm:hidden">Deep Search</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero + search box */}
      <section className="gradient-hero py-14 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <Search className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-xs text-primary tracking-wider uppercase">
              {total.toLocaleString()} passages · 30 chapters
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Search the <span className="gradient-text">Full Handbook</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-7">
            Searches the entire body of every chapter — narrative, tables, frameworks, callouts, and pull quotes — and returns the passage with its chapter and section citation.
          </p>

          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a concept, standard, metric, or framework…"
              aria-label="Search the handbook"
              autoFocus
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-card/80 backdrop-blur border border-border text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/60"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {!active && (
            <div className="flex flex-wrap gap-2 justify-center mt-5">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="px-3 py-1.5 rounded-full border border-border bg-card/60 font-mono text-[11px] text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <main className="container mx-auto py-8 px-4 flex-1 max-w-4xl">
        {!active ? (
          <div className="text-center py-10">
            <p className="font-body text-sm text-muted-foreground">
              Type at least two characters to search. Results cite the chapter and section they came from.
            </p>
          </div>
        ) : hits.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-display text-lg text-foreground mb-2">No passages match “{deferred}”</p>
            <p className="font-body text-sm text-muted-foreground">
              Try a broader term, or one of the suggested topics above.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-baseline justify-between gap-4 mb-5 flex-wrap">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                {hits.length} passage{hits.length !== 1 ? "s" : ""} across {groups.length} chapter{groups.length !== 1 ? "s" : ""}
              </p>
              <Link to="/reader" className="font-mono text-xs text-primary hover:underline flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> Open the full reader
              </Link>
            </div>

            <div className="space-y-7">
              {groups.map((g, gi) => (
                <motion.section
                  key={g.chapterId}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(gi * 0.04, 0.3) }}
                >
                  <div className="flex items-baseline gap-2 mb-2.5 flex-wrap">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                      Chapter {g.chapterNum}
                    </span>
                    <h2 className="font-display text-sm font-bold text-foreground">{g.chapterTitle}</h2>
                    <span className="font-mono text-[10px] text-muted-foreground">{g.partLabel}</span>
                  </div>

                  <div className="space-y-2.5">
                    {g.hits.slice(0, 4).map((h) => (
                      <div key={h.id} className="card-pharma">
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                            {KIND_LABEL[h.kind]}
                          </span>
                          <span className="font-mono text-[10px] text-muted-foreground">§ {h.sectionTitle}</span>
                        </div>
                        <p className="font-body text-[13px] text-muted-foreground leading-relaxed">
                          <Highlighted text={h.snippet} query={deferred} />
                        </p>
                      </div>
                    ))}
                    {g.hits.length > 4 && (
                      <p className="font-mono text-[10px] text-muted-foreground pl-1">
                        + {g.hits.length - 4} more passage{g.hits.length - 4 !== 1 ? "s" : ""} in this chapter
                      </p>
                    )}
                  </div>
                </motion.section>
              ))}
            </div>
          </>
        )}

        <div className="mt-12 p-4 rounded-xl border border-border bg-muted/30">
          <p className="font-mono text-xs text-muted-foreground leading-relaxed">
            🔎 <strong>How this works:</strong> every chapter is flattened into addressable passages (narrative, key points,
            callouts, framework steps, table rows, pull quotes) and ranked by term frequency, phrase match, section-title
            relevance, and passage type. It is deterministic full-text retrieval — no model is generating these answers, and
            every result cites the chapter and section it came from. This is also the grounding layer a citation-backed
            copilot would build on: retrieve first, generate second.
          </p>
        </div>
      </main>

      <PharmaFooter />
    </div>
  );
};

export default SearchPage;
