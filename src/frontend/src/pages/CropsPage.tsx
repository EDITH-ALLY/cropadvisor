import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";
import {
  BookOpen,
  CalendarDays,
  ChevronRight,
  Droplets,
  Search,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { CROP_DATABASE } from "../data/cropDatabase";
import type { CropInfo } from "../types";

const CATEGORY_COLORS: Record<string, string> = {
  Cereal: "bg-amber-500/15 text-amber-700 border-amber-400/30",
  Legume: "bg-green-500/15 text-green-700 border-green-400/30",
  Fiber: "bg-blue-500/15 text-blue-700 border-blue-400/30",
  Sugar: "bg-pink-500/15 text-pink-700 border-pink-400/30",
  Oilseed: "bg-yellow-500/15 text-yellow-700 border-yellow-400/30",
  Vegetable: "bg-red-500/15 text-red-700 border-red-400/30",
  "Root Vegetable": "bg-orange-500/15 text-orange-700 border-orange-400/30",
  Fruit: "bg-purple-500/15 text-purple-700 border-purple-400/30",
};

const ALL_CATEGORIES = Array.from(
  new Set(CROP_DATABASE.map((c) => c.category)),
);

interface CropCardProps {
  crop: CropInfo;
  index: number;
  onClick: () => void;
}

function CropCard({ crop, index, onClick }: CropCardProps) {
  const catClass =
    CATEGORY_COLORS[crop.category] ??
    "bg-muted text-muted-foreground border-border";

  return (
    <button
      type="button"
      onClick={onClick}
      data-ocid={`crops.item.${index + 1}`}
      className={cn(
        "group w-full text-left rounded-xl border border-border bg-card p-4",
        "hover:border-primary/40 hover:shadow-elevated transition-smooth",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      )}
      aria-label={`View details for ${crop.name}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-3xl shrink-0" aria-hidden="true">
            {crop.imageEmoji}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              <h3 className="font-display text-sm font-bold text-foreground leading-tight truncate">
                {crop.name}
              </h3>
              <span
                className={cn(
                  "inline-block text-[10px] font-semibold px-1.5 py-0.5 rounded border",
                  catClass,
                )}
              >
                {crop.category}
              </span>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
              {crop.description}
            </p>
          </div>
        </div>
        <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-smooth" />
      </div>

      <div className="mt-3 pt-3 border-t border-border grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center gap-0.5">
          <CalendarDays className="h-3.5 w-3.5 text-primary" />
          <span className="text-[10px] text-muted-foreground">Season</span>
          <span className="text-xs font-semibold text-foreground">
            {crop.growingSeasonDays}d
          </span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <Droplets className="h-3.5 w-3.5 text-accent" />
          <span className="text-[10px] text-muted-foreground">Water</span>
          <span className="text-xs font-semibold text-foreground">
            {crop.waterRequirementMm}mm
          </span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <TrendingUp className="h-3.5 w-3.5 text-chart-2" />
          <span className="text-[10px] text-muted-foreground">Price/kg</span>
          <span className="text-xs font-semibold text-foreground">
            ${crop.marketPricePerKg.toFixed(2)}
          </span>
        </div>
      </div>
    </button>
  );
}

export default function CropsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = CROP_DATABASE.filter((crop) => {
    const matchesSearch =
      search === "" ||
      crop.name.toLowerCase().includes(search.toLowerCase()) ||
      crop.category.toLowerCase().includes(search.toLowerCase()) ||
      crop.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || crop.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-full bg-background" data-ocid="crops.page">
      {/* Page Header */}
      <div className="sticky top-0 z-10 border-b border-border bg-card shadow-subtle px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
              <BookOpen className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-foreground leading-tight">
                Crop Library
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                {CROP_DATABASE.length} crops with growing requirements and
                economics
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              type="search"
              placeholder="Search crops by name, category, or description…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
              data-ocid="crops.search_input"
            />
          </div>

          {/* Category filters */}
          <div
            className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border"
            data-ocid="crops.filter.tab"
          >
            {["All", ...ALL_CATEGORIES].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                data-ocid={`crops.category.${cat.toLowerCase().replace(/\s+/g, "_")}`}
                className={cn(
                  "shrink-0 text-xs font-medium px-3 py-1.5 rounded-full border transition-smooth",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        {filtered.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-24 text-center"
            data-ocid="crops.empty_state"
          >
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <Search className="h-7 w-7 text-muted-foreground" />
            </div>
            <h2 className="font-display text-xl font-semibold text-foreground">
              No crops found
            </h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-xs">
              Try adjusting your search term or select a different category.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="text-xs font-semibold">
                {filtered.length} {filtered.length === 1 ? "crop" : "crops"}
              </Badge>
              {search && (
                <span className="text-xs text-muted-foreground">
                  matching &ldquo;{search}&rdquo;
                </span>
              )}
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              data-ocid="crops.list"
            >
              {filtered.map((crop, i) => (
                <CropCard
                  key={crop.id}
                  crop={crop}
                  index={i}
                  onClick={() =>
                    navigate({
                      to: "/crops/$cropId",
                      params: { cropId: crop.id },
                    })
                  }
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
