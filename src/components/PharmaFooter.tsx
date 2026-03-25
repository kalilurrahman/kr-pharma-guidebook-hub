import { ExternalLink } from "lucide-react";

export function PharmaFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-3">Pharma GCC Handbook</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              A definitive practitioner's guide to building, scaling, and leading world-class pharmaceutical Global Capability Centres in the AI era.
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-3">v2.0 · 30,075 words · 14 chapters · 2025</p>
          </div>
          <div>
            <h4 className="font-mono text-xs text-primary tracking-wider uppercase mb-3">Frameworks</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li>ACUITAS™ Quality Engineering</li>
              <li>CLARITY™ AI Product Management</li>
              <li>Three-Horizon Transformation</li>
              <li>Regulatory-by-Design</li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs text-primary tracking-wider uppercase mb-3">Author</h4>
            <p className="font-display text-foreground font-semibold">Kalilur Rahman</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Global IT Executive · AI Thought Leader</p>
            <div className="flex gap-3 mt-3">
              <a href="https://kalilurrahman.lovable.app" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:text-teal-light transition-colors flex items-center gap-1 font-mono">
                Portfolio <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://www.linkedin.com/in/kalilurrahman/" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:text-teal-light transition-colors flex items-center gap-1 font-mono">
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://github.com/kalilurrahman/kr-claudiator-skills" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:text-teal-light transition-colors flex items-center gap-1 font-mono">
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <div className="glass-card p-4 rounded-lg mb-6">
            <h4 className="font-mono text-xs text-primary tracking-wider uppercase mb-2">AI Content Notice</h4>
            <p className="text-xs text-muted-foreground leading-relaxed font-body">
              Content in this handbook is produced with the assistance of Artificial Intelligence including large language models such as Claude by Anthropic. AI systems can produce hallucinations — outputs that appear plausible but may be factually incorrect. All content must be critically reviewed and vetted by qualified professionals before use in any professional, commercial, technical, legal, or safety-critical context. Kalilur Rahman accepts no liability for outcomes arising from use of AI-generated content without independent human verification.
            </p>
          </div>
          <p className="text-center font-mono text-xs text-muted-foreground">
            © 2025 Kalilur Rahman. All rights reserved. Built with Lovable.
          </p>
        </div>
      </div>
    </footer>
  );
}
