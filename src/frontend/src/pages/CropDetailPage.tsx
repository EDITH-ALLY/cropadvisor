import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CROP_DATABASE } from "@/data/cropDatabase";
import type { EconomicsInput, YieldScenario } from "@/types";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Bug,
  Calendar,
  DollarSign,
  Droplets,
  Leaf,
  Scale,
  Scissors,
  Sprout,
  Sun,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";

const SCENARIO_MULTIPLIER: Record<YieldScenario, number> = {
  optimistic: 1.2,
  realistic: 1.0,
  conservative: 0.8,
};

const LABEL_MAP: Record<string, string> = {
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

function formatUsd(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function StatCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/40 border border-border">
      <div className="mt-0.5 text-primary">{icon}</div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground uppercase tracking-wide font-body">
          {label}
        </p>
        <p className="font-display font-semibold text-foreground text-base leading-snug">
          {value}
        </p>
        {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}

function NumericField({
  id,
  label,
  value,
  onChange,
  min = 0,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id} className="text-sm text-muted-foreground">
        {label}
      </Label>
      <Input
        id={id}
        data-ocid={`economics.${id}_input`}
        type="number"
        min={min}
        step="0.01"
        value={value}
        onChange={(e) =>
          onChange(Math.max(min, Number.parseFloat(e.target.value) || 0))
        }
        className="bg-secondary/40 border-border focus:border-primary"
      />
    </div>
  );
}

export default function CropDetailPage() {
  const { cropId } = useParams({ from: "/crops/$cropId" });
  const navigate = useNavigate();

  const crop = useMemo(
    () => CROP_DATABASE.find((c) => c.id === cropId),
    [cropId],
  );

  const [economics, setEconomics] = useState<Omit<EconomicsInput, "cropId">>({
    landAreaHectares: 1,
    seedCostUsd: 150,
    laborCostUsd: 400,
    fertilizerCostUsd: 250,
    equipmentCostUsd: 300,
    pesticideCostUsd: 120,
    irrigationCostUsd: 80,
    scenario: "realistic",
  });

  const update = <K extends keyof typeof economics>(
    key: K,
    val: (typeof economics)[K],
  ) => setEconomics((prev) => ({ ...prev, [key]: val }));

  const result = useMemo(() => {
    if (!crop) return null;
    const multiplier = SCENARIO_MULTIPLIER[economics.scenario];
    const estimatedYieldKg =
      crop.typicalYieldKgPerHectare * economics.landAreaHectares * multiplier;
    const totalProductionCostUsd =
      economics.seedCostUsd +
      economics.laborCostUsd +
      economics.fertilizerCostUsd +
      economics.equipmentCostUsd +
      economics.pesticideCostUsd +
      economics.irrigationCostUsd;
    const grossRevenueUsd = estimatedYieldKg * crop.marketPricePerKg;
    const netProfitUsd = grossRevenueUsd - totalProductionCostUsd;
    const breakEvenPricePerKgUsd =
      estimatedYieldKg > 0 ? totalProductionCostUsd / estimatedYieldKg : 0;
    return {
      totalProductionCostUsd,
      marketPricePerKgUsd: crop.marketPricePerKg,
      estimatedYieldKg,
      grossRevenueUsd,
      netProfitUsd,
      breakEvenPricePerKgUsd,
    };
  }, [crop, economics]);

  if (!crop) {
    return (
      <div
        className="min-h-[60vh] flex flex-col items-center justify-center gap-4"
        data-ocid="crop_detail.empty_state"
      >
        <p className="text-xl font-display text-muted-foreground">
          Crop not found.
        </p>
        <Button
          variant="outline"
          onClick={() => navigate({ to: "/results" })}
          data-ocid="crop_detail.back_button"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Results
        </Button>
      </div>
    );
  }

  const isProfit = result && result.netProfitUsd >= 0;
  const scenarios: YieldScenario[] = [
    "optimistic",
    "realistic",
    "conservative",
  ];

  return (
    <div
      className="max-w-5xl mx-auto px-4 py-8 space-y-8"
      data-ocid="crop_detail.page"
    >
      {/* Back + Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Button
          variant="ghost"
          onClick={() => navigate({ to: "/results" })}
          className="mb-4 text-muted-foreground hover:text-foreground -ml-2"
          data-ocid="crop_detail.back_button"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Back to Results
        </Button>

        <div className="flex flex-wrap items-center gap-4">
          <span
            className="text-6xl leading-none"
            role="img"
            aria-label={crop.name}
          >
            {crop.imageEmoji}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="font-display text-3xl font-bold text-foreground">
                {crop.name}
              </h1>
              <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
                {crop.category}
              </Badge>
            </div>
            <p className="mt-2 text-muted-foreground max-w-2xl leading-relaxed">
              {crop.description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Key Stats */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        data-ocid="crop_detail.stats_section"
      >
        <h2 className="font-display text-lg font-semibold text-foreground mb-3">
          Key Growing Metrics
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          <StatCard
            icon={<TrendingUp className="w-4 h-4" />}
            label="Typical Yield"
            value={`${crop.typicalYieldKgPerHectare.toLocaleString()} kg/ha`}
          />
          <StatCard
            icon={<Calendar className="w-4 h-4" />}
            label="Season Length"
            value={`${crop.growingSeasonDays} days`}
          />
          <StatCard
            icon={<Droplets className="w-4 h-4" />}
            label="Water Required"
            value={`${crop.waterRequirementMm} mm`}
            sub="per season"
          />
          <StatCard
            icon={<DollarSign className="w-4 h-4" />}
            label="Market Price"
            value={`$${crop.marketPricePerKg.toFixed(3)}/kg`}
          />
          <StatCard
            icon={<Droplets className="w-4 h-4" />}
            label="Water Range"
            value={`${crop.conditions.minWaterMm}–${crop.conditions.maxWaterMm} mm`}
          />
          <StatCard
            icon={<Leaf className="w-4 h-4" />}
            label="Suitable Soils"
            value={crop.conditions.soilTypes
              .map((s) => LABEL_MAP[s] ?? s)
              .join(", ")}
          />
          <StatCard
            icon={<Sun className="w-4 h-4" />}
            label="Climate Zones"
            value={crop.conditions.climateZones
              .map((c) => LABEL_MAP[c] ?? c)
              .join(", ")}
          />
          <StatCard
            icon={<Sprout className="w-4 h-4" />}
            label="Land Types"
            value={crop.conditions.landTypes
              .map((l) => LABEL_MAP[l] ?? l)
              .join(", ")}
          />
        </div>
      </motion.section>

      {/* Nutrients, Pests, Harvest */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="grid md:grid-cols-3 gap-4"
        data-ocid="crop_detail.agro_section"
      >
        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Leaf className="w-4 h-4 text-primary" /> Nutritional Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1.5">
              {crop.nutrients.map((n) => (
                <Badge key={n} variant="secondary" className="text-xs">
                  {n}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Bug className="w-4 h-4 text-destructive" /> Common Pests &amp;
              Diseases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1.5">
              {crop.commonPests.map((p) => (
                <Badge
                  key={p}
                  variant="outline"
                  className="text-xs border-destructive/40 text-destructive"
                >
                  {p}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Scissors className="w-4 h-4 text-accent" /> Harvest Method
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {crop.harvestMethod}
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Economics Calculator */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.45 }}
        data-ocid="crop_detail.economics_section"
      >
        <h2 className="font-display text-xl font-bold text-foreground mb-1">
          Economics Calculator
        </h2>
        <p className="text-sm text-muted-foreground mb-5">
          Adjust costs and area to estimate your return on investment.
        </p>

        {/* Scenario Toggle */}
        <fieldset className="flex flex-wrap gap-2 mb-6 border-none p-0 m-0">
          <legend className="sr-only">Yield scenario</legend>
          {scenarios.map((s) => (
            <button
              type="button"
              key={s}
              data-ocid={`economics.scenario_${s}`}
              onClick={() => update("scenario", s)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-smooth border ${
                economics.scenario === s
                  ? "bg-primary text-primary-foreground border-primary shadow-elevated"
                  : "bg-secondary/50 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {s === "optimistic"
                ? "⬆ Optimistic (×1.2)"
                : s === "conservative"
                  ? "⬇ Conservative (×0.8)"
                  : "◉ Realistic (×1.0)"}
            </button>
          ))}
        </fieldset>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Fields */}
          <Card
            className="bg-card border-border"
            data-ocid="crop_detail.economics_inputs"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-foreground">
                Input Costs
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <NumericField
                id="landArea"
                label="Land Area (ha)"
                value={economics.landAreaHectares}
                onChange={(v) => update("landAreaHectares", v)}
                min={0.1}
              />
              <NumericField
                id="seedCost"
                label="Seed Cost ($)"
                value={economics.seedCostUsd}
                onChange={(v) => update("seedCostUsd", v)}
              />
              <NumericField
                id="laborCost"
                label="Labor Cost ($)"
                value={economics.laborCostUsd}
                onChange={(v) => update("laborCostUsd", v)}
              />
              <NumericField
                id="fertilizerCost"
                label="Fertilizer ($)"
                value={economics.fertilizerCostUsd}
                onChange={(v) => update("fertilizerCostUsd", v)}
              />
              <NumericField
                id="equipmentCost"
                label="Equipment ($)"
                value={economics.equipmentCostUsd}
                onChange={(v) => update("equipmentCostUsd", v)}
              />
              <NumericField
                id="pesticideCost"
                label="Pesticide ($)"
                value={economics.pesticideCostUsd}
                onChange={(v) => update("pesticideCostUsd", v)}
              />
              <div className="col-span-2">
                <NumericField
                  id="irrigationCost"
                  label="Irrigation ($)"
                  value={economics.irrigationCostUsd}
                  onChange={(v) => update("irrigationCostUsd", v)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Results Panel */}
          {result && (
            <div
              className="flex flex-col gap-3"
              data-ocid="crop_detail.economics_results"
            >
              {/* Net Profit — hero */}
              <div
                className={`rounded-2xl p-6 border-2 flex flex-col items-center justify-center text-center transition-smooth ${
                  isProfit
                    ? "bg-accent/10 border-accent/50"
                    : "bg-destructive/10 border-destructive/40"
                }`}
              >
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-1">
                  Net Profit
                </p>
                <p
                  className={`font-display text-4xl font-bold ${
                    isProfit ? "text-accent" : "text-destructive"
                  }`}
                >
                  {formatUsd(result.netProfitUsd)}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  {isProfit ? (
                    <TrendingUp className="w-4 h-4 text-accent" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-destructive" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      isProfit ? "text-accent" : "text-destructive"
                    }`}
                  >
                    {isProfit ? "Profitable venture" : "Below break-even"}
                  </span>
                </div>
              </div>

              {/* Other metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-secondary/40 border border-border p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Total Costs
                  </p>
                  <p className="font-display text-lg font-semibold text-foreground">
                    {formatUsd(result.totalProductionCostUsd)}
                  </p>
                </div>
                <div className="rounded-xl bg-secondary/40 border border-border p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Gross Revenue
                  </p>
                  <p className="font-display text-lg font-semibold text-foreground">
                    {formatUsd(result.grossRevenueUsd)}
                  </p>
                </div>
                <div className="rounded-xl bg-secondary/40 border border-border p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Est. Yield
                  </p>
                  <p className="font-display text-lg font-semibold text-foreground">
                    {result.estimatedYieldKg.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}{" "}
                    kg
                  </p>
                </div>
                <div className="rounded-xl bg-secondary/40 border border-border p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Market Price
                  </p>
                  <p className="font-display text-lg font-semibold text-foreground">
                    ${result.marketPricePerKgUsd.toFixed(3)}/kg
                  </p>
                </div>
              </div>

              {/* Break-even */}
              <div className="rounded-xl bg-muted/40 border border-border p-4 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Scale className="w-4 h-4 shrink-0" />
                  <span className="text-sm">Break-even Price</span>
                </div>
                <p className="font-display font-semibold text-foreground text-right">
                  ${result.breakEvenPricePerKgUsd.toFixed(3)}/kg
                  {result.breakEvenPricePerKgUsd <
                    result.marketPricePerKgUsd && (
                    <span className="ml-2 text-xs text-primary font-body">
                      ✓ below market
                    </span>
                  )}
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.section>
    </div>
  );
}
