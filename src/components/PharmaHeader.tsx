import { useState } from "react";
import { Search, Menu, X, BookOpen, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import pharmaLogo from "@/assets/pharma-logo.png";

interface PharmaHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeSection: string;
  onSectionChange: (id: string) => void;
}

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "foundations", label: "Foundations" },
  { id: "value-chain", label: "Value Chain" },
  { id: "commercial", label: "Commercial" },
  { id: "enablers", label: "Enablers" },
  { id: "resources", label: "📥 Resources" },
];

const READER_PATH = "/reader";

export function PharmaHeader({ searchQuery, onSearchChange, activeSection, onSectionChange }: PharmaHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header-glass sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src={pharmaLogo} alt="Pharma Handbook" width={36} height={36} className="rounded-lg" />
            <div>
              <h1 className="font-display text-sm font-bold text-foreground leading-tight">Pharma GCC</h1>
              <p className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">Transformation Handbook</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`nav-pill ${activeSection === item.id ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
            <Link
              to={READER_PATH}
              className="nav-pill flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Reader
            </Link>
            <Link
              to="/gcc-metrics"
              className="nav-pill flex items-center gap-1.5"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              GCC Metrics
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search chapters..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input-pharma pl-10 w-48 lg:w-64"
              />
            </div>
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <div className="relative sm:hidden mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search chapters..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input-pharma pl-10"
              />
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`nav-pill w-full text-left ${activeSection === item.id ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
            <Link
              to={READER_PATH}
              className="nav-pill w-full text-left flex items-center gap-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Online Reader
            </Link>
            <Link
              to="/gcc-metrics"
              className="nav-pill w-full text-left flex items-center gap-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              GCC Metrics
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
