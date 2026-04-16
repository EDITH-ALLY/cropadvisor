import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";
import {
  Calendar,
  ChevronRight,
  CloudRain,
  Droplets,
  FlaskConical,
  History,
  Layers,
  MapPin,
  Trash2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useBackend } from "../hooks/useBackend";
import type { SavedAnalysis } from "../types";

function formatDate(ts: number): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(ts));
}

function matchScoreColor(score: number): string {
  if (score >= 80) return "text-primary";
  if (score >= 60) return "text-accent";
  return "text-muted-foreground";
}

function matchScoreLabel(score: number): string {
  if (score >= 90) return "Excellent";
  if (score >= 70) return "Good";
  if (score >= 50) return "Moderate";
  return "Marginal";
}

const labelMap: Record<string, string> = {
  clay: "Clay",
  loam: "Loam",
  sand: "Sand",
  siltLoam: "Silt Loam",
  sandyLoam: "Sandy Loam",
  tropical: "Tropical",
  temperate: "Temperate",
  arid: "Arid",
  semiarid: "Semi-Arid",
  mediterranean: "Mediterranean",
  continental: "Continental",
  flat: "Flat",
  hilly: "Hilly",
  slope: "Slope",
  terraced: "Terraced",
};

interface ParamChipProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function ParamChip({ icon, label, value }: ParamChipProps) {
  return (
    <div className="flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1.5">
      <span className="text-muted-foreground shrink-0">{icon}</span>
      <div className="min-w-0">
        <p className="text-[9px] uppercase tracking-wide text-muted-foreground leading-none">
          {label}
        </p>
        <p className="text-xs font-medium text-foreground mt-0.5 truncate">
          {value}
        </p>
      </div>
    </div>
  );
}

interface AnalysisCardProps {
  analysis: SavedAnalysis;
  index: number;
  onDelete: (id: string) => void;
  onView: (analysis: SavedAnalysis) => void;
}

function AnalysisCard({
  analysis,
  index,
  onDelete,
  onView,
}: AnalysisCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.28, delay: index * 0.05 }}
      data-ocid={`history.item.${index + 1}`}
      className={cn(
        "group relative rounded-lg border border-border bg-card",
        "hover:border-primary/40 transition-smooth overflow-hidden",
      )}
    >
      {/* Main clickable area as a proper button */}
      <button
        type="button"
        className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset rounded-lg"
        onClick={() => onView(analysis)}
      >
        {/* Card header */}
        <div className="flex items-start justify-between gap-3 px-5 pt-5 pb-3 pr-14">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
              <span className="text-xl" aria-hidden="true">
                🌱
              </span>
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-base font-semibold text-foreground leading-tight truncate">
                {analysis.topCropName}
              </h3>
              <div className="flex items-center gap-2 mt-0.5">
                <span
                  className={cn(
                    "text-sm font-semibold",
                    matchScoreColor(analysis.topMatchScore),
                  )}
                >
                  {analysis.topMatchScore}% match
                </span>
                <Badge
                  variant="secondary"
                  className="text-[10px] px-1.5 py-0 h-4"
                >
                  {matchScoreLabel(analysis.topMatchScore)}
                </Badge>
              </div>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-smooth mt-1 shrink-0" />
        </div>

        <Separator />

        {/* Card body */}
        <div className="px-5 pt-3 pb-5">
          <div className="flex items-center gap-1.5 mb-3">
            <Calendar className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            <span className="text-xs text-muted-foreground">
              {formatDate(analysis.createdAt)}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <ParamChip
              icon={<Layers className="h-3 w-3" />}
              label="Soil"
              value={
                labelMap[analysis.input.soilType] ?? analysis.input.soilType
              }
            />
            <ParamChip
              icon={<Droplets className="h-3 w-3" />}
              label="Water"
              value={`${analysis.input.waterAvailabilityMm} mm`}
            />
            <ParamChip
              icon={<CloudRain className="h-3 w-3" />}
              label="Climate"
              value={
                labelMap[analysis.input.climateZone] ??
                analysis.input.climateZone
              }
            />
            <ParamChip
              icon={<MapPin className="h-3 w-3" />}
              label="Land"
              value={
                labelMap[analysis.input.landType] ?? analysis.input.landType
              }
            />
          </div>
        </div>
      </button>

      {/* Delete button — absolutely positioned outside the main button */}
      <div className="absolute top-4 right-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-smooth text-muted-foreground hover:text-destructive"
              data-ocid={`history.delete_button.${index + 1}`}
              aria-label={`Delete analysis for ${analysis.topCropName}`}
            >
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent data-ocid="history.delete_dialog">
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Analysis?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently remove the saved analysis for{" "}
                <strong>{analysis.topCropName}</strong> from{" "}
                {formatDate(analysis.createdAt)}. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel data-ocid="history.cancel_button">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => onDelete(analysis.id)}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                data-ocid="history.confirm_button"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </motion.div>
  );
}

export default function HistoryPage() {
  const backend = useBackend();
  const navigate = useNavigate();
  const [analyses, setAnalyses] = useState<SavedAnalysis[]>(() =>
    backend.listSavedAnalyses().sort((a, b) => b.createdAt - a.createdAt),
  );

  function handleDelete(id: string) {
    backend.deleteAnalysis(id);
    setAnalyses((prev) => prev.filter((a) => a.id !== id));
  }

  function handleView(analysis: SavedAnalysis) {
    // Re-run recommendations from saved input and store with the keys ResultsPage reads
    const recs = backend.getCropRecommendations(analysis.input);
    localStorage.setItem(
      "cropwise_current_input",
      JSON.stringify(analysis.input),
    );
    localStorage.setItem("cropwise_current_recs", JSON.stringify(recs));
    navigate({ to: "/results" });
  }

  return (
    <div className="min-h-full bg-background" data-ocid="history.page">
      {/* Page header */}
      <div className="sticky top-0 z-10 bg-card border-b border-border shadow-subtle px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
              <History className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-foreground leading-tight">
                Saved Analyses
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Review and revisit your past crop recommendations
              </p>
            </div>
          </div>
          {analyses.length > 0 && (
            <Badge
              variant="secondary"
              className="text-sm font-semibold px-3 py-1"
              data-ocid="history.count_badge"
            >
              {analyses.length}{" "}
              {analyses.length === 1 ? "analysis" : "analyses"}
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 max-w-4xl mx-auto">
        {analyses.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center py-24 text-center"
            data-ocid="history.empty_state"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted border border-border mb-6">
              <History className="h-9 w-9 text-muted-foreground" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              No analyses yet
            </h2>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              Once you analyze your soil conditions and get crop
              recommendations, your results will be saved here for future
              reference.
            </p>
            <Button
              onClick={() => navigate({ to: "/analyze" })}
              className="gap-2"
              data-ocid="history.new_analysis_button"
            >
              <FlaskConical className="h-4 w-4" />
              Start New Analysis
            </Button>
          </motion.div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {analyses.map((analysis, index) => (
                <AnalysisCard
                  key={analysis.id}
                  analysis={analysis}
                  index={index}
                  onDelete={handleDelete}
                  onView={handleView}
                />
              ))}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: analyses.length * 0.05 + 0.2 }}
              className="pt-4 flex justify-center"
            >
              <Button
                variant="outline"
                onClick={() => navigate({ to: "/analyze" })}
                className="gap-2"
                data-ocid="history.new_analysis_secondary_button"
              >
                <FlaskConical className="h-4 w-4" />
                New Analysis
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
