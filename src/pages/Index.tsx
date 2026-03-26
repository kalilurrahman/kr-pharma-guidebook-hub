import { useState, useMemo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PharmaHeader } from "@/components/PharmaHeader";
import { CoverSection } from "@/components/CoverSection";
import { OverviewSection } from "@/components/OverviewSection";
import { ChapterViewer } from "@/components/ChapterViewer";
import { ResourcesSection } from "@/components/ResourcesSection";
import { PharmaFooter } from "@/components/PharmaFooter";
import { InstallPrompt } from "@/components/InstallPrompt";
import { chapters } from "@/data/pharma-data";

const sectionToPartFilter: Record<string, string> = {
  foundations: "Part I · Foundations",
  "value-chain": "Part II · Value Chain",
  commercial: "Part III · Commercial",
  enablers: "Part IV · Enterprise Enablers",
};

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  const handleSectionChange = useCallback((id: string) => {
    setActiveSection(id);
    setSearchQuery("");
    setSelectedChapter(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChapterSelect = useCallback((chapterId: string) => {
    setSelectedChapter(chapterId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredChapters = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (q) {
      return chapters.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.lead.toLowerCase().includes(q) ||
          c.tags?.some((t) => t.toLowerCase().includes(q)) ||
          c.partLabel.toLowerCase().includes(q)
      );
    }
    const partFilter = sectionToPartFilter[activeSection];
    if (partFilter) {
      return chapters.filter((c) => c.partLabel === partFilter);
    }
    return null;
  }, [searchQuery, activeSection]);

  const isSearching = searchQuery.trim().length > 0;
  const showOverview = !isSearching && activeSection === "overview" && !selectedChapter;
  const showResources = !isSearching && activeSection === "resources" && !selectedChapter;
  const showFilteredGrid = filteredChapters !== null && !selectedChapter;

  const currentChapter = selectedChapter ? chapters.find((c) => c.id === selectedChapter) : null;
  const currentChapterIndex = selectedChapter ? chapters.findIndex((c) => c.id === selectedChapter) : -1;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <PharmaHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeSection={isSearching ? "" : activeSection}
        onSectionChange={handleSectionChange}
      />

      {showOverview && !selectedChapter && <CoverSection />}

      <main className="container mx-auto py-8 px-4 flex-1">
        <AnimatePresence mode="wait">
          {selectedChapter && currentChapter ? (
            <ChapterViewer
              key={selectedChapter}
              chapter={currentChapter}
              onBack={() => setSelectedChapter(null)}
              onPrev={currentChapterIndex > 0 ? () => handleChapterSelect(chapters[currentChapterIndex - 1].id) : undefined}
              onNext={currentChapterIndex < chapters.length - 1 ? () => handleChapterSelect(chapters[currentChapterIndex + 1].id) : undefined}
              hasPrev={currentChapterIndex > 0}
              hasNext={currentChapterIndex < chapters.length - 1}
            />
          ) : showResources ? (
            <motion.div key="resources" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ResourcesSection />
            </motion.div>
          ) : showOverview ? (
            <motion.div key="overview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <OverviewSection onChapterSelect={handleChapterSelect} />
            </motion.div>
          ) : showFilteredGrid ? (
            <motion.div key={`filtered-${activeSection}-${searchQuery}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {filteredChapters.length > 0 ? (
                <div>
                  {isSearching && (
                    <p className="text-sm text-muted-foreground mb-6 font-mono">
                      {filteredChapters.length} result{filteredChapters.length !== 1 ? "s" : ""} for "{searchQuery}"
                    </p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredChapters.map((ch) => (
                      <div key={ch.id}>
                        <div
                          onClick={() => handleChapterSelect(ch.id)}
                          className="card-pharma border-t-[3px] border-t-primary cursor-pointer"
                        >
                          <span className="font-mono text-xs text-primary tracking-wider">Chapter {ch.num}</span>
                          <h3 className="font-display text-lg font-semibold text-foreground mb-2 mt-1">{ch.title}</h3>
                          <p className="font-body text-sm text-muted-foreground">{ch.lead}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-xl text-muted-foreground font-body">No results found for "{searchQuery}"</p>
                  <p className="text-sm text-muted-foreground mt-2 font-body">Try different keywords or browse sections above.</p>
                </div>
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </main>

      <PharmaFooter />
      <InstallPrompt />
    </div>
  );
};

export default Index;
