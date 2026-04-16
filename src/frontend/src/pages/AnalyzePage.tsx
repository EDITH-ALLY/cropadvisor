import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Leaf,
  Mountain,
  Sprout,
  Thermometer,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useBackend } from "../hooks/useBackend";
import type { ClimateZone, LandType, SoilType } from "../types";

// ─── Step Metadata ────────────────────────────────────────────────────────────
const STEPS = [
  { id: 1, label: "Soil Type", icon: Sprout },
  { id: 2, label: "Water", icon: Droplets },
  { id: 3, label: "Climate", icon: Thermometer },
  { id: 4, label: "Land Type", icon: Mountain },
];

// ─── Soil Options ─────────────────────────────────────────────────────────────
const SOIL_OPTIONS: {
  value: SoilType;
  label: string;
  desc: string;
  icon: string;
}[] = [
  {
    value: "clay",
    label: "Clay",
    desc: "Heavy, moisture-retaining soil with fine particles",
    icon: "🟫",
  },
  {
    value: "loam",
    label: "Loam",
    desc: "Ideal mix of sand, silt & clay — the farmer's gold",
    icon: "🌱",
  },
  {
    value: "sand",
    label: "Sandy",
    desc: "Fast-draining, warm soil with low water retention",
    icon: "🏜️",
  },
  {
    value: "siltLoam",
    label: "Silt Loam",
    desc: "Fine, fertile soil with excellent moisture balance",
    icon: "🌾",
  },
  {
    value: "sandyLoam",
    label: "Sandy Loam",
    desc: "Light, well-drained soil with moderate fertility",
    icon: "🪨",
  },
];

// ─── Climate Options ──────────────────────────────────────────────────────────
const CLIMATE_OPTIONS: {
  value: ClimateZone;
  label: string;
  desc: string;
  icon: string;
}[] = [
  {
    value: "tropical",
    label: "Tropical",
    desc: "Hot & humid year-round with abundant rainfall",
    icon: "🌴",
  },
  {
    value: "temperate",
    label: "Temperate",
    desc: "Mild seasons with moderate rainfall & temperature",
    icon: "🌤️",
  },
  {
    value: "arid",
    label: "Arid",
    desc: "Very dry with scarce rainfall, extreme heat",
    icon: "☀️",
  },
  {
    value: "semiarid",
    label: "Semi-Arid",
    desc: "Dry climate with seasonal rain, moderate heat",
    icon: "🌵",
  },
  {
    value: "mediterranean",
    label: "Mediterranean",
    desc: "Warm dry summers and mild wet winters",
    icon: "🫒",
  },
  {
    value: "continental",
    label: "Continental",
    desc: "Cold winters, warm summers, low humidity",
    icon: "❄️",
  },
];

// ─── Land Type Options ────────────────────────────────────────────────────────
const LAND_OPTIONS: {
  value: LandType;
  label: string;
  desc: string;
  icon: string;
}[] = [
  {
    value: "flat",
    label: "Flat",
    desc: "Level terrain ideal for mechanized farming",
    icon: "🌊",
  },
  {
    value: "hilly",
    label: "Hilly",
    desc: "Gentle undulating terrain, some erosion risk",
    icon: "⛰️",
  },
  {
    value: "slope",
    label: "Slope",
    desc: "Inclined land requiring contour cultivation",
    icon: "🏔️",
  },
  {
    value: "terraced",
    label: "Terraced",
    desc: "Step-cut terrain for hillside farming",
    icon: "🪜",
  },
];

// ─── Form State ───────────────────────────────────────────────────────────────
interface FormState {
  soilType: SoilType | "";
  waterAvailabilityMm: string;
  climateZone: ClimateZone | "";
  landType: LandType | "";
}

// ─── Selection Card ───────────────────────────────────────────────────────────
function OptionCard<T extends string>({
  value,
  label,
  desc,
  icon,
  selected,
  onSelect,
  ocidPrefix,
  index,
}: {
  value: T;
  label: string;
  desc: string;
  icon: string;
  selected: boolean;
  onSelect: (v: T) => void;
  ocidPrefix: string;
  index: number;
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(value)}
      data-ocid={`${ocidPrefix}.${index + 1}`}
      aria-pressed={selected}
      className={cn(
        "relative flex flex-col items-start gap-1 rounded-xl border p-4 text-left transition-smooth w-full",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        selected
          ? "border-primary bg-primary/10 shadow-elevated"
          : "border-border bg-card hover:border-primary/50 hover:bg-muted/50",
      )}
    >
      {selected && (
        <CheckCircle2
          className="absolute top-3 right-3 h-4 w-4 text-primary"
          aria-hidden
        />
      )}
      <span className="text-2xl" aria-hidden>
        {icon}
      </span>
      <span
        className={cn(
          "font-semibold text-sm",
          selected ? "text-primary" : "text-foreground",
        )}
      >
        {label}
      </span>
      <span className="text-xs text-muted-foreground leading-snug">{desc}</span>
    </motion.button>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function AnalyzePage() {
  const navigate = useNavigate();
  const backend = useBackend();
  const [step, setStep] = useState(1);
  const [waterError, setWaterError] = useState("");
  const [form, setForm] = useState<FormState>({
    soilType: "",
    waterAvailabilityMm: "",
    climateZone: "",
    landType: "",
  });

  // ── Validation ──────────────────────────────────────────────────────────────
  function canProceed(): boolean {
    if (step === 1) return form.soilType !== "";
    if (step === 2) {
      const v = Number(form.waterAvailabilityMm);
      return form.waterAvailabilityMm !== "" && !Number.isNaN(v) && v > 0;
    }
    if (step === 3) return form.climateZone !== "";
    if (step === 4) return form.landType !== "";
    return false;
  }

  function handleWaterChange(val: string) {
    setForm((f) => ({ ...f, waterAvailabilityMm: val }));
    const v = Number(val);
    if (val === "" || Number.isNaN(Number(val)) || v <= 0) {
      setWaterError("Please enter a valid positive number.");
    } else if (v > 5000) {
      setWaterError("Value seems too high. Typical range is 100–3000 mm/year.");
    } else {
      setWaterError("");
    }
  }

  function handleNext() {
    if (!canProceed()) return;
    if (step < 4) {
      setStep((s) => s + 1);
    } else {
      handleSubmit();
    }
  }

  function handleSubmit() {
    if (
      !form.soilType ||
      !form.climateZone ||
      !form.landType ||
      !form.waterAvailabilityMm
    )
      return;

    const input = {
      soilType: form.soilType as SoilType,
      waterAvailabilityMm: Number(form.waterAvailabilityMm),
      climateZone: form.climateZone as ClimateZone,
      landType: form.landType as LandType,
    };

    const recs = backend.getCropRecommendations(input);

    localStorage.setItem("cropwise_current_input", JSON.stringify(input));
    localStorage.setItem("cropwise_current_recs", JSON.stringify(recs));

    navigate({ to: "/results" });
  }

  // ── Step content ──────────────────────────────────────────────────────────
  const stepContent: Record<number, React.ReactNode> = {
    1: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SOIL_OPTIONS.map((opt, i) => (
          <OptionCard
            key={opt.value}
            {...opt}
            selected={form.soilType === opt.value}
            onSelect={(v: SoilType) => setForm((f) => ({ ...f, soilType: v }))}
            ocidPrefix="soil.option"
            index={i}
          />
        ))}
      </div>
    ),
    2: (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6 max-w-sm mx-auto"
      >
        <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20">
          <Droplets className="h-8 w-8 text-primary shrink-0" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Annual rainfall plus irrigation water combined. Typical values range
            from <strong className="text-foreground">200 mm</strong> (arid) to{" "}
            <strong className="text-foreground">2500 mm</strong> (tropical).
          </p>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="water-input"
            className="text-sm font-medium text-foreground"
          >
            Water Availability (mm/year)
          </Label>
          <div className="relative">
            <Input
              id="water-input"
              type="number"
              min={0}
              max={5000}
              step={50}
              placeholder="e.g. 650"
              value={form.waterAvailabilityMm}
              onChange={(e) => handleWaterChange(e.target.value)}
              className={cn(
                "pr-14 text-base h-12",
                waterError &&
                  "border-destructive focus-visible:ring-destructive",
              )}
              data-ocid="water.input"
              aria-describedby={waterError ? "water-error" : undefined}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-mono">
              mm/yr
            </span>
          </div>
          {waterError && (
            <p
              id="water-error"
              className="text-xs text-destructive"
              data-ocid="water.field_error"
            >
              {waterError}
            </p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Arid", value: "250", icon: "☀️" },
            { label: "Moderate", value: "650", icon: "🌤️" },
            { label: "Tropical", value: "1500", icon: "🌧️" },
          ].map((preset, i) => (
            <button
              key={preset.value}
              type="button"
              onClick={() => handleWaterChange(preset.value)}
              data-ocid={`water.preset.${i + 1}`}
              className={cn(
                "flex flex-col items-center gap-1 p-3 rounded-lg border text-center transition-smooth",
                "hover:border-primary/50 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                form.waterAvailabilityMm === preset.value
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card",
              )}
            >
              <span className="text-xl" aria-hidden>
                {preset.icon}
              </span>
              <span className="text-xs font-medium text-foreground">
                {preset.label}
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                {preset.value} mm
              </span>
            </button>
          ))}
        </div>
      </motion.div>
    ),
    3: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CLIMATE_OPTIONS.map((opt, i) => (
          <OptionCard
            key={opt.value}
            {...opt}
            selected={form.climateZone === opt.value}
            onSelect={(v: ClimateZone) =>
              setForm((f) => ({ ...f, climateZone: v }))
            }
            ocidPrefix="climate.option"
            index={i}
          />
        ))}
      </div>
    ),
    4: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {LAND_OPTIONS.map((opt, i) => (
          <OptionCard
            key={opt.value}
            {...opt}
            selected={form.landType === opt.value}
            onSelect={(v: LandType) => setForm((f) => ({ ...f, landType: v }))}
            ocidPrefix="land.option"
            index={i}
          />
        ))}
      </div>
    ),
  };

  const currentStep = STEPS[step - 1];
  const StepIcon = currentStep.icon;

  return (
    <div className="min-h-full bg-background px-4 py-8 md:px-8">
      <div className="mx-auto max-w-2xl space-y-8">
        {/* ── Header ────────────────────────────────────────────────────── */}
        <div className="space-y-1" data-ocid="analyze.page">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            <Badge
              variant="outline"
              className="border-primary/40 text-primary text-xs font-medium"
            >
              Crop Analysis
            </Badge>
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Tell Us About Your Land
          </h1>
          <p className="text-sm text-muted-foreground max-w-lg">
            Answer 4 quick questions about your growing conditions. We'll match
            your land to the most suitable crops with detailed cost &amp; profit
            projections.
          </p>
        </div>

        {/* ── Progress Steps ─────────────────────────────────────────────── */}
        <nav aria-label="Form progress" data-ocid="analyze.progress">
          <ol className="flex items-center gap-1 sm:gap-2">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const done = step > s.id;
              const active = step === s.id;
              return (
                <li
                  key={s.id}
                  className="flex items-center gap-1 sm:gap-2 flex-1 min-w-0"
                >
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <div
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full border-2 transition-smooth shrink-0",
                        done && "border-primary bg-primary",
                        active && "border-primary bg-primary/15",
                        !done && !active && "border-border bg-card",
                      )}
                      data-ocid={`progress.step.${s.id}`}
                      aria-current={active ? "step" : undefined}
                    >
                      {done ? (
                        <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                      ) : (
                        <Icon
                          className={cn(
                            "h-4 w-4",
                            active ? "text-primary" : "text-muted-foreground",
                          )}
                        />
                      )}
                    </div>
                    <span
                      className={cn(
                        "hidden sm:block text-xs font-medium truncate",
                        active
                          ? "text-primary"
                          : done
                            ? "text-foreground"
                            : "text-muted-foreground",
                      )}
                    >
                      {s.label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div
                      className={cn(
                        "h-px flex-1 transition-smooth mb-4 sm:mb-5",
                        step > s.id ? "bg-primary" : "bg-border",
                      )}
                      aria-hidden
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* ── Step Card ─────────────────────────────────────────────────── */}
        <Card className="border-border bg-card shadow-elevated overflow-hidden">
          {/* Card Header */}
          <div className="flex items-center gap-3 border-b border-border px-6 py-4 bg-muted/30">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 shrink-0">
              <StepIcon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Step {step} of {STEPS.length}
              </p>
              <h2 className="font-display text-lg font-semibold text-foreground">
                {step === 1 && "What type of soil do you have?"}
                {step === 2 && "How much water is available?"}
                {step === 3 && "What is your climate zone?"}
                {step === 4 && "What is your land type?"}
              </h2>
            </div>
          </div>

          {/* Step Body */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25 }}
              >
                {stepContent[step]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Card Footer / Navigation */}
          <div className="flex items-center justify-between gap-4 border-t border-border px-6 py-4 bg-muted/20">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setStep((s) => s - 1)}
              disabled={step === 1}
              data-ocid="analyze.back_button"
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>

            <div className="flex items-center gap-1.5" aria-hidden>
              {STEPS.map((s) => (
                <div
                  key={s.id}
                  className={cn(
                    "h-1.5 rounded-full transition-smooth",
                    step === s.id
                      ? "w-6 bg-primary"
                      : step > s.id
                        ? "w-3 bg-primary/60"
                        : "w-3 bg-border",
                  )}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              data-ocid={
                step === 4 ? "analyze.submit_button" : "analyze.next_button"
              }
              className="gap-2"
            >
              {step === 4 ? (
                <>
                  <Sprout className="h-4 w-4" />
                  Analyze Crops
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* ── Summary preview while filling ─────────────────────────────── */}
        {(form.soilType ||
          form.climateZone ||
          form.landType ||
          form.waterAvailabilityMm) && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-2 rounded-xl border border-border bg-card px-4 py-3"
            data-ocid="analyze.summary_preview"
          >
            <span className="text-xs text-muted-foreground font-medium mr-1">
              Your inputs:
            </span>
            {form.soilType && (
              <Badge variant="secondary" className="text-xs gap-1">
                {SOIL_OPTIONS.find((s) => s.value === form.soilType)?.icon}{" "}
                {SOIL_OPTIONS.find((s) => s.value === form.soilType)?.label}
              </Badge>
            )}
            {form.waterAvailabilityMm && (
              <Badge variant="secondary" className="text-xs gap-1">
                <Droplets className="h-3 w-3" />
                {form.waterAvailabilityMm} mm/yr
              </Badge>
            )}
            {form.climateZone && (
              <Badge variant="secondary" className="text-xs gap-1">
                {
                  CLIMATE_OPTIONS.find((c) => c.value === form.climateZone)
                    ?.icon
                }{" "}
                {
                  CLIMATE_OPTIONS.find((c) => c.value === form.climateZone)
                    ?.label
                }
              </Badge>
            )}
            {form.landType && (
              <Badge variant="secondary" className="text-xs gap-1">
                {LAND_OPTIONS.find((l) => l.value === form.landType)?.icon}{" "}
                {LAND_OPTIONS.find((l) => l.value === form.landType)?.label}
              </Badge>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
