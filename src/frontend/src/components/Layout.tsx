import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex shrink-0">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setMobileOpen(false)}
            role="button"
            tabIndex={-1}
            aria-label="Close sidebar"
            data-ocid="sidebar.overlay"
          />
          <div className="relative z-10 shadow-elevated">
            <Sidebar mobile onClose={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      {/* Main area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Mobile top bar */}
        <header className="flex md:hidden items-center gap-3 px-4 py-3 border-b border-border bg-card shadow-subtle shrink-0">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setMobileOpen(true)}
            data-ocid="mobile.hamburger_button"
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <span className="font-display text-base font-bold text-foreground">
              CropWise
            </span>
            <span className="text-xs text-muted-foreground">AI Advisor</span>
          </div>
        </header>

        {/* Page content */}
        <main
          className={cn(
            "flex-1 overflow-y-auto",
            "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border",
          )}
          data-ocid="main.content"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
