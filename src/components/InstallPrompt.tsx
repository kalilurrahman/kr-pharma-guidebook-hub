import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const wasDismissed = localStorage.getItem("pharma-install-dismissed");
    if (wasDismissed) {
      setDismissed(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShowPrompt(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setDismissed(true);
    localStorage.setItem("pharma-install-dismissed", "true");
  };

  if (!showPrompt || dismissed) return null;

  return (
    <div className="install-prompt-card animate-slide-in-right">
      <button onClick={handleDismiss} className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-foreground">
        <X className="w-4 h-4" />
      </button>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
          <Download className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h4 className="font-display text-sm font-bold text-foreground">Install App</h4>
          <p className="text-xs text-muted-foreground">Access offline</p>
        </div>
      </div>
      <button
        onClick={handleInstall}
        className="w-full gradient-bg text-primary-foreground text-sm font-semibold py-2 rounded-lg hover:opacity-90 transition-opacity"
      >
        Install Now
      </button>
    </div>
  );
}
