import { useState, useEffect, useRef } from "react";
import { PharmaHeader } from "@/components/PharmaHeader";
import { PharmaFooter } from "@/components/PharmaFooter";
import { BookOpen, Maximize2, Minimize2, ChevronUp } from "lucide-react";

const ReaderPage = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      window.scrollTo({ top: 0 });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {!isFullscreen && (
        <header className="header-glass sticky top-0 z-50 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-14">
              <a href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-mono">
                ← Back to Handbook
              </a>
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="font-display text-sm font-bold text-foreground hidden sm:inline">
                  Online Reader — Ultimate Edition 2025
                </span>
                <span className="font-display text-sm font-bold text-foreground sm:hidden">
                  Reader Mode
                </span>
              </div>
              <button
                onClick={toggleFullscreen}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors text-xs font-mono text-muted-foreground"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Fullscreen</span>
              </button>
            </div>
          </div>
        </header>
      )}

      <main className={`flex-1 ${isFullscreen ? "fixed inset-0 z-[100]" : ""}`}>
        {isFullscreen && (
          <button
            onClick={toggleFullscreen}
            className="fixed top-4 right-4 z-[110] flex items-center gap-1.5 px-3 py-2 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-colors text-xs font-mono text-muted-foreground shadow-lg"
          >
            <Minimize2 className="w-3.5 h-3.5" />
            Exit
          </button>
        )}
        <iframe
          ref={iframeRef}
          src="/handbook-reader.html"
          title="Pharma Digital Transformation Handbook — Online Reader"
          className="w-full border-0"
          style={{
            height: isFullscreen ? "100vh" : "calc(100vh - 3.5rem)",
            minHeight: isFullscreen ? "100vh" : "calc(100dvh - 3.5rem)",
            colorScheme: "light",
          }}
        />
      </main>

      {!isFullscreen && <PharmaFooter />}

      {showScrollTop && !isFullscreen && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ReaderPage;
