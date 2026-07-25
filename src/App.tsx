import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";

// Secondary routes are code-split so the landing page ships the smallest possible bundle.
const ReaderPage = lazy(() => import("./pages/ReaderPage.tsx"));
const GccMetricsPage = lazy(() => import("./pages/GccMetricsPage.tsx"));
const KeyStatsPage = lazy(() => import("./pages/KeyStatsPage.tsx"));
const AssessmentPage = lazy(() => import("./pages/AssessmentPage.tsx"));
const RoiCalculatorPage = lazy(() => import("./pages/RoiCalculatorPage.tsx"));
const BenchmarkPage = lazy(() => import("./pages/BenchmarkPage.tsx"));
const BoardPackPage = lazy(() => import("./pages/BoardPackPage.tsx"));
const SearchPage = lazy(() => import("./pages/SearchPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-screen bg-background" aria-busy="true" />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/reader" element={<ReaderPage />} />
            <Route path="/gcc-metrics" element={<GccMetricsPage />} />
            <Route path="/key-stats" element={<KeyStatsPage />} />
            <Route path="/assessment" element={<AssessmentPage />} />
            <Route path="/roi" element={<RoiCalculatorPage />} />
            <Route path="/benchmark" element={<BenchmarkPage />} />
            <Route path="/board-pack" element={<BoardPackPage />} />
            <Route path="/search" element={<SearchPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
