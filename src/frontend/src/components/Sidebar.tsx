import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  ChevronRight,
  FlaskConical,
  History,
  Sprout,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "New Analysis",
    to: "/analyze",
    icon: FlaskConical,
    description: "Enter soil & climate data",
  },
  {
    label: "Results",
    to: "/results",
    icon: Sprout,
    description: "View crop recommendations",
  },
  {
    label: "Crop Library",
    to: "/crops",
    icon: BookOpen,
    description: "Browse all crops",
  },
  {
    label: "Saved Analyses",
    to: "/history",
    icon: History,
    description: "Past recommendations",
  },
];

function useAnalysisCount(): number {
  const [count, setCount] = useState(() => {
    try {
      const raw = localStorage.getItem("cropwise_analyses");
      const arr = raw ? (JSON.parse(raw) as unknown[]) : [];
      return Array.isArray(arr) ? arr.length : 0;
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    function refresh() {
      try {
        const raw = localStorage.getItem("cropwise_analyses");
        const arr = raw ? (JSON.parse(raw) as unknown[]) : [];
        setCount(Array.isArray(arr) ? arr.length : 0);
      } catch {
        setCount(0);
      }
    }
    window.addEventListener("storage", refresh);
    // Poll for same-tab changes
    const id = setInterval(refresh, 2000);
    return () => {
      window.removeEventListener("storage", refresh);
      clearInterval(id);
    };
  }, []);

  return count;
}

interface SidebarProps {
  onClose?: () => void;
  mobile?: boolean;
}

export function Sidebar({ onClose, mobile }: SidebarProps) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const analysisCount = useAnalysisCount();

  return (
    <aside
      className={cn(
        "flex flex-col h-full bg-card border-r border-border",
        mobile ? "w-72" : "w-64",
      )}
      data-ocid="sidebar"
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-5 py-5 border-b border-border">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Sprout className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <span className="font-display text-base font-bold text-foreground leading-tight block">
              CropWise
            </span>
            <span className="text-[10px] text-muted-foreground tracking-wide uppercase">
              AI Advisor
            </span>
          </div>
        </div>
        {mobile && onClose && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
            data-ocid="sidebar.close_button"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Nav */}
      <nav
        className="flex-1 px-3 py-4 space-y-1 overflow-y-auto"
        data-ocid="sidebar.nav"
      >
        <p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Navigation
        </p>
        {navItems.map((item) => {
          const isActive =
            currentPath === item.to ||
            (item.to !== "/analyze" && currentPath.startsWith(item.to));
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              data-ocid={`sidebar.nav.${item.label.toLowerCase().replace(/\s+/g, "_")}_link`}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-smooth",
                isActive
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              <item.icon
                className={cn(
                  "h-4 w-4 shrink-0 transition-smooth",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-foreground",
                )}
              />
              <div className="flex-1 min-w-0">
                <span className="block text-sm font-medium leading-tight">
                  {item.label}
                </span>
                <span className="block text-[11px] text-muted-foreground truncate leading-tight mt-0.5">
                  {item.description}
                </span>
              </div>
              {item.to === "/history" && analysisCount > 0 && (
                <Badge
                  variant="secondary"
                  className="text-[10px] px-1.5 py-0 h-4 shrink-0"
                  data-ocid="sidebar.history_count_badge"
                >
                  {analysisCount}
                </Badge>
              )}
              {isActive && (
                <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer branding */}
      <div className="px-5 py-4 border-t border-border">
        <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.hostname : "",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </aside>
  );
}
