import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "@tanstack/react-router";
import {
  AlertTriangle,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock,
  Droplets,
  FlaskConical,
  Layers,
  Leaf,
  MapPin,
  PlusCircle,
  Save,
  Sprout,
  Sun,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useBackend } from "../hooks/useBackend";
import type { CropRecommendation, SoilInput } from "../types";

const RESULTS_KEY = "cropwise_current_recs";
const ANALYZED_INPUT_KEY = "cropwise_current_input";

function ScoreBadge({ score }: { score: number }) {
  if (score >= 80) {
    return (
      <span
        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30"
        data-ocid="results.score_badge"
      >
        <CheckCircle2 className="h-3 w-3" />
        {score}% Match
      </span>
    );
  }
  if (score >= 60) {
    return (
      <span
        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/20 text-accent border border-accent/30"
        data-ocid="results.score_badge"
      >
        <Sun className="h-3 w-3" />
        {score}% Match
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-muted text-muted-foreground border border-border"
      data-ocid="results.score_badge"
    >
      <AlertTriangle className="h-3 w-3" />
      {score}% Match
    </span>
  );
}

const soilLabels: Record<string, string> = {
  clay: "Clay",
  loam: "Loam",
  sand: "Sandy",
  siltLoam: "Silt Loam",
  sandyLoam: "Sandy Loam",
};

const climateLabels: Record<string, string> = {
  tropical: "Tropical",
  temperate: "Temperate",
  arid: "Arid",
  semiarid: "Semi-Arid",
  mediterranean: "Mediterranean",
  continental: "Continental",
};

const landLabels: Record<string, string> = {
  flat: "Flat",
  hilly: "Hilly",
  slope: "Slope",
  terraced: "Terraced",
};

interface InputSummaryProps {
  input: SoilInput;
}

function InputSummary({ input }: InputSummaryProps) {
  const params = [
    {
      icon: <FlaskConical className="h-4 w-4" />,
      label: "Soil Type",
      value: soilLabels[input.soilType] ?? input.soilType,
    },
    {
      icon: <Droplets className="h-4 w-4" />,
      label: "Water Availability",
      value: `${input.waterAvailabilityMm} mm/yr`,
    },
    {
      icon: <Sun className="h-4 w-4" />,
      label: "Climate Zone",
      value: climateLabels[input.climateZone] ?? input.climateZone,
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      label: "Land Type",
      value: landLabels[input.landType] ?? input.landType,
    },
  ];

  return (
    <div
      className="rounded-xl border border-border bg-card p-4"
      data-ocid="results.input_summary"
    >
      <div className="flex items-center gap-2 mb-3">
        <Layers className="h-4 w-4 text-primary" />
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Analysis Parameters
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {params.map(({ icon, label, value }) => (
          <div
            key={label}
            className="flex flex-col gap-1 p-3 rounded-lg bg-secondary/50 border border-border"
          >
            <div className="flex items-center gap-1.5 text-muted-foreground">
              {icon}
              <span className="text-xs">{label}</span>
            </div>
            <span className="text-sm font-semibold text-foreground">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CropCardProps {
  recommendation: CropRecommendation;
  rank: number;
  index: number;
  onNavigate: (cropId: string) => void;
}

function CropCard({ recommendation, rank, index, onNavigate }: CropCardProps) {
  const { crop, matchScore, suitabilityReason } = recommendation;

  return (
    <Card
      className="group relative overflow-hidden border-border bg-card hover:border-primary/40 transition-smooth cursor-pointer shadow-subtle hover:shadow-elevated"
      onClick={() => onNavigate(crop.id)}
      data-ocid={`results.crop_card.${index + 1}`}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onNavigate(crop.id)}
      aria-label={`View details for ${crop.name}`}
    >
      {/* Rank accent */}
      <div
        className={`absolute top-0 left-0 w-1 h-full ${
          rank === 1
            ? "bg-primary"
            : rank === 2
              ? "bg-accent"
              : "bg-muted-foreground/30"
        }`}
      />

      <CardHeader className="pb-2 pl-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl" role="img" aria-label={crop.name}>
              {crop.imageEmoji}
            </span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                {rank === 1 && (
                  <Badge
                    variant="secondary"
                    className="text-xs bg-primary/15 text-primary border-primary/30 border"
                  >
                    <Sprout className="h-3 w-3 mr-1" />
                    Top Pick
                  </Badge>
                )}
                <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                  {crop.name}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground capitalize mt-0.5">
                {crop.category}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <ScoreBadge score={matchScore} />
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="pl-6 space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {suitabilityReason}
        </p>

        <Separator className="opacity-50" />

        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-muted/40">
            <CalendarDays className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground text-center leading-tight">
              Season
            </span>
            <span className="text-sm font-semibold text-foreground">
              {crop.growingSeasonDays}d
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-muted/40">
            <BarChart3 className="h-4 w-4 text-accent" />
            <span className="text-xs text-muted-foreground text-center leading-tight">
              Yield / ha
            </span>
            <span className="text-sm font-semibold text-foreground">
              {crop.typicalYieldKgPerHectare >= 1000
                ? `${(crop.typicalYieldKgPerHectare / 1000).toFixed(1)}t`
                : `${crop.typicalYieldKgPerHectare}kg`}
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-muted/40">
            <TrendingUp className="h-4 w-4 text-chart-2" />
            <span className="text-xs text-muted-foreground text-center leading-tight">
              Price/kg
            </span>
            <span className="text-sm font-semibold text-foreground">
              ${crop.marketPricePerKg.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {crop.nutrients.slice(0, 3).map((n) => (
            <span
              key={n}
              className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary/80 border border-primary/20"
            >
              {n}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function ResultsPage() {
  const navigate = useNavigate();
  const backend = useBackend();
  const [recommendations, setRecommendations] = useState<CropRecommendation[]>(
    [],
  );
  const [input, setInput] = useState<SoilInput | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const rawResults = localStorage.getItem(RESULTS_KEY);
      const rawInput = localStorage.getItem(ANALYZED_INPUT_KEY);
      if (rawResults) setRecommendations(JSON.parse(rawResults));
      if (rawInput) setInput(JSON.parse(rawInput));
    } catch {
      // silently ignore parse errors
    }
  }, []);

  function handleSaveAnalysis() {
    if (!input || recommendations.length === 0) return;
    const top = recommendations[0];
    backend.saveAnalysis(input, top.crop.id, top.crop.name, top.matchScore);
    setSaved(true);
    toast.success("Analysis saved!", {
      description: `${top.crop.name} recommendation saved to history.`,
      duration: 4000,
    });
  }

  function handleNavigateToCrop(cropId: string) {
    navigate({ to: "/crops/$cropId", params: { cropId } });
  }

  function handleNewAnalysis() {
    navigate({ to: "/analyze" });
  }

  const isEmpty = recommendations.length === 0;

  return (
    <div className="min-h-full bg-background">
      {/* Page header */}
      <div className="border-b border-border bg-card px-6 py-5 shadow-subtle">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
            <Leaf className="h-3.5 w-3.5" />
            <span>CropWise AI Advisor</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">Recommendations</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Crop Recommendations
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {isEmpty
                  ? "No matching crops found for your conditions."
                  : `${recommendations.length} crops ranked by suitability for your field.`}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={handleNewAnalysis}
                className="gap-2"
                data-ocid="results.new_analysis_button"
              >
                <PlusCircle className="h-4 w-4" />
                New Analysis
              </Button>
              <Button
                size="sm"
                onClick={handleSaveAnalysis}
                disabled={isEmpty || saved}
                className="gap-2"
                data-ocid="results.save_button"
              >
                {saved ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Saved
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" />
                    Save Analysis
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Page body */}
      <div className="max-w-4xl mx-auto px-6 py-6 space-y-6">
        {/* Input parameters summary */}
        {input && <InputSummary input={input} />}

        {/* Results list or empty state */}
        {isEmpty ? (
          <div
            className="flex flex-col items-center justify-center py-20 gap-4 text-center"
            data-ocid="results.empty_state"
          >
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
              <Sprout className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                No recommendations yet
              </h2>
              <p className="text-sm text-muted-foreground mt-1 max-w-sm">
                Complete the soil and climate analysis to see which crops are
                best suited to your land conditions.
              </p>
            </div>
            <Button
              onClick={handleNewAnalysis}
              className="gap-2 mt-2"
              data-ocid="results.empty_cta_button"
            >
              <PlusCircle className="h-4 w-4" />
              Start New Analysis
            </Button>
          </div>
        ) : (
          <div className="space-y-4" data-ocid="results.crop_list">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                Showing top {recommendations.length} results — click a card to
                view full details, costs & profit estimates
              </span>
            </div>
            {recommendations.map((rec, i) => (
              <CropCard
                key={rec.crop.id}
                recommendation={rec}
                rank={i + 1}
                index={i}
                onNavigate={handleNavigateToCrop}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
