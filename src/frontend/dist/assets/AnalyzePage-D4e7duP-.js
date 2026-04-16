import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports, a as cn, S as Sprout, B as Badge, b as Button } from "./index-BoGjIZFN.js";
import { L as Leaf, C as Card } from "./card-DI0Uszm8.js";
import { I as Input } from "./input-CrcFVVnn.js";
import { L as Label, A as ArrowLeft } from "./label-CjGrVcuJ.js";
import { u as useBackend } from "./useBackend-CaeGEUB7.js";
import { m as motion } from "./proxy-Cy49EBdh.js";
import { D as Droplets } from "./cropDatabase-CqbDKg--.js";
import { C as CircleCheck } from "./circle-check-DPGEcL2D.js";
import { A as AnimatePresence } from "./index-DUorfFhe.js";
import "./index-BCHaxvuq.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }]];
const Mountain = createLucideIcon("mountain", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]
];
const Thermometer = createLucideIcon("thermometer", __iconNode);
const STEPS = [
  { id: 1, label: "Soil Type", icon: Sprout },
  { id: 2, label: "Water", icon: Droplets },
  { id: 3, label: "Climate", icon: Thermometer },
  { id: 4, label: "Land Type", icon: Mountain }
];
const SOIL_OPTIONS = [
  {
    value: "clay",
    label: "Clay",
    desc: "Heavy, moisture-retaining soil with fine particles",
    icon: "🟫"
  },
  {
    value: "loam",
    label: "Loam",
    desc: "Ideal mix of sand, silt & clay — the farmer's gold",
    icon: "🌱"
  },
  {
    value: "sand",
    label: "Sandy",
    desc: "Fast-draining, warm soil with low water retention",
    icon: "🏜️"
  },
  {
    value: "siltLoam",
    label: "Silt Loam",
    desc: "Fine, fertile soil with excellent moisture balance",
    icon: "🌾"
  },
  {
    value: "sandyLoam",
    label: "Sandy Loam",
    desc: "Light, well-drained soil with moderate fertility",
    icon: "🪨"
  }
];
const CLIMATE_OPTIONS = [
  {
    value: "tropical",
    label: "Tropical",
    desc: "Hot & humid year-round with abundant rainfall",
    icon: "🌴"
  },
  {
    value: "temperate",
    label: "Temperate",
    desc: "Mild seasons with moderate rainfall & temperature",
    icon: "🌤️"
  },
  {
    value: "arid",
    label: "Arid",
    desc: "Very dry with scarce rainfall, extreme heat",
    icon: "☀️"
  },
  {
    value: "semiarid",
    label: "Semi-Arid",
    desc: "Dry climate with seasonal rain, moderate heat",
    icon: "🌵"
  },
  {
    value: "mediterranean",
    label: "Mediterranean",
    desc: "Warm dry summers and mild wet winters",
    icon: "🫒"
  },
  {
    value: "continental",
    label: "Continental",
    desc: "Cold winters, warm summers, low humidity",
    icon: "❄️"
  }
];
const LAND_OPTIONS = [
  {
    value: "flat",
    label: "Flat",
    desc: "Level terrain ideal for mechanized farming",
    icon: "🌊"
  },
  {
    value: "hilly",
    label: "Hilly",
    desc: "Gentle undulating terrain, some erosion risk",
    icon: "⛰️"
  },
  {
    value: "slope",
    label: "Slope",
    desc: "Inclined land requiring contour cultivation",
    icon: "🏔️"
  },
  {
    value: "terraced",
    label: "Terraced",
    desc: "Step-cut terrain for hillside farming",
    icon: "🪜"
  }
];
function OptionCard({
  value,
  label,
  desc,
  icon,
  selected,
  onSelect,
  ocidPrefix,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.button,
    {
      type: "button",
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.06, duration: 0.3 },
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      onClick: () => onSelect(value),
      "data-ocid": `${ocidPrefix}.${index + 1}`,
      "aria-pressed": selected,
      className: cn(
        "relative flex flex-col items-start gap-1 rounded-xl border p-4 text-left transition-smooth w-full",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        selected ? "border-primary bg-primary/10 shadow-elevated" : "border-border bg-card hover:border-primary/50 hover:bg-muted/50"
      ),
      children: [
        selected && /* @__PURE__ */ jsxRuntimeExports.jsx(
          CircleCheck,
          {
            className: "absolute top-3 right-3 h-4 w-4 text-primary",
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", "aria-hidden": true, children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "font-semibold text-sm",
              selected ? "text-primary" : "text-foreground"
            ),
            children: label
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground leading-snug", children: desc })
      ]
    }
  );
}
function AnalyzePage() {
  var _a, _b, _c, _d, _e, _f;
  const navigate = useNavigate();
  const backend = useBackend();
  const [step, setStep] = reactExports.useState(1);
  const [waterError, setWaterError] = reactExports.useState("");
  const [form, setForm] = reactExports.useState({
    soilType: "",
    waterAvailabilityMm: "",
    climateZone: "",
    landType: ""
  });
  function canProceed() {
    if (step === 1) return form.soilType !== "";
    if (step === 2) {
      const v = Number(form.waterAvailabilityMm);
      return form.waterAvailabilityMm !== "" && !Number.isNaN(v) && v > 0;
    }
    if (step === 3) return form.climateZone !== "";
    if (step === 4) return form.landType !== "";
    return false;
  }
  function handleWaterChange(val) {
    setForm((f) => ({ ...f, waterAvailabilityMm: val }));
    const v = Number(val);
    if (val === "" || Number.isNaN(Number(val)) || v <= 0) {
      setWaterError("Please enter a valid positive number.");
    } else if (v > 5e3) {
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
    if (!form.soilType || !form.climateZone || !form.landType || !form.waterAvailabilityMm)
      return;
    const input = {
      soilType: form.soilType,
      waterAvailabilityMm: Number(form.waterAvailabilityMm),
      climateZone: form.climateZone,
      landType: form.landType
    };
    const recs = backend.getCropRecommendations(input);
    localStorage.setItem("cropwise_current_input", JSON.stringify(input));
    localStorage.setItem("cropwise_current_recs", JSON.stringify(recs));
    navigate({ to: "/results" });
  }
  const stepContent = {
    1: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: SOIL_OPTIONS.map((opt, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      OptionCard,
      {
        ...opt,
        selected: form.soilType === opt.value,
        onSelect: (v) => setForm((f) => ({ ...f, soilType: v })),
        ocidPrefix: "soil.option",
        index: i
      },
      opt.value
    )) }),
    2: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
        className: "space-y-6 max-w-sm mx-auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "h-8 w-8 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
              "Annual rainfall plus irrigation water combined. Typical values range from ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "200 mm" }),
              " (arid) to",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "2500 mm" }),
              " (tropical)."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "water-input",
                className: "text-sm font-medium text-foreground",
                children: "Water Availability (mm/year)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "water-input",
                  type: "number",
                  min: 0,
                  max: 5e3,
                  step: 50,
                  placeholder: "e.g. 650",
                  value: form.waterAvailabilityMm,
                  onChange: (e) => handleWaterChange(e.target.value),
                  className: cn(
                    "pr-14 text-base h-12",
                    waterError && "border-destructive focus-visible:ring-destructive"
                  ),
                  "data-ocid": "water.input",
                  "aria-describedby": waterError ? "water-error" : void 0
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-mono", children: "mm/yr" })
            ] }),
            waterError && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                id: "water-error",
                className: "text-xs text-destructive",
                "data-ocid": "water.field_error",
                children: waterError
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [
            { label: "Arid", value: "250", icon: "☀️" },
            { label: "Moderate", value: "650", icon: "🌤️" },
            { label: "Tropical", value: "1500", icon: "🌧️" }
          ].map((preset, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => handleWaterChange(preset.value),
              "data-ocid": `water.preset.${i + 1}`,
              className: cn(
                "flex flex-col items-center gap-1 p-3 rounded-lg border text-center transition-smooth",
                "hover:border-primary/50 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                form.waterAvailabilityMm === preset.value ? "border-primary bg-primary/10" : "border-border bg-card"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", "aria-hidden": true, children: preset.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: preset.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono", children: [
                  preset.value,
                  " mm"
                ] })
              ]
            },
            preset.value
          )) })
        ]
      }
    ),
    3: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: CLIMATE_OPTIONS.map((opt, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      OptionCard,
      {
        ...opt,
        selected: form.climateZone === opt.value,
        onSelect: (v) => setForm((f) => ({ ...f, climateZone: v })),
        ocidPrefix: "climate.option",
        index: i
      },
      opt.value
    )) }),
    4: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: LAND_OPTIONS.map((opt, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      OptionCard,
      {
        ...opt,
        selected: form.landType === opt.value,
        onSelect: (v) => setForm((f) => ({ ...f, landType: v })),
        ocidPrefix: "land.option",
        index: i
      },
      opt.value
    )) })
  };
  const currentStep = STEPS[step - 1];
  const StepIcon = currentStep.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-full bg-background px-4 py-8 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", "data-ocid": "analyze.page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: "outline",
            className: "border-primary/40 text-primary text-xs font-medium",
            children: "Crop Analysis"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl md:text-3xl font-bold text-foreground", children: "Tell Us About Your Land" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-lg", children: "Answer 4 quick questions about your growing conditions. We'll match your land to the most suitable crops with detailed cost & profit projections." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Form progress", "data-ocid": "analyze.progress", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "flex items-center gap-1 sm:gap-2", children: STEPS.map((s, i) => {
      const Icon = s.icon;
      const done = step > s.id;
      const active = step === s.id;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: "flex items-center gap-1 sm:gap-2 flex-1 min-w-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border-2 transition-smooth shrink-0",
                    done && "border-primary bg-primary",
                    active && "border-primary bg-primary/15",
                    !done && !active && "border-border bg-card"
                  ),
                  "data-ocid": `progress.step.${s.id}`,
                  "aria-current": active ? "step" : void 0,
                  children: done ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Icon,
                    {
                      className: cn(
                        "h-4 w-4",
                        active ? "text-primary" : "text-muted-foreground"
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    "hidden sm:block text-xs font-medium truncate",
                    active ? "text-primary" : done ? "text-foreground" : "text-muted-foreground"
                  ),
                  children: s.label
                }
              )
            ] }),
            i < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "h-px flex-1 transition-smooth mb-4 sm:mb-5",
                  step > s.id ? "bg-primary" : "bg-border"
                ),
                "aria-hidden": true
              }
            )
          ]
        },
        s.id
      );
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border bg-card shadow-elevated overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-border px-6 py-4 bg-muted/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StepIcon, { className: "h-5 w-5 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-medium uppercase tracking-wider", children: [
            "Step ",
            step,
            " of ",
            STEPS.length
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-lg font-semibold text-foreground", children: [
            step === 1 && "What type of soil do you have?",
            step === 2 && "How much water is available?",
            step === 3 && "What is your climate zone?",
            step === 4 && "What is your land type?"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 24 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -24 },
          transition: { duration: 0.25 },
          children: stepContent[step]
        },
        step
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 border-t border-border px-6 py-4 bg-muted/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => setStep((s) => s - 1),
            disabled: step === 1,
            "data-ocid": "analyze.back_button",
            className: "gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
              "Back"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", "aria-hidden": true, children: STEPS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "h-1.5 rounded-full transition-smooth",
              step === s.id ? "w-6 bg-primary" : step > s.id ? "w-3 bg-primary/60" : "w-3 bg-border"
            )
          },
          s.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: handleNext,
            disabled: !canProceed(),
            "data-ocid": step === 4 ? "analyze.submit_button" : "analyze.next_button",
            className: "gap-2",
            children: step === 4 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "h-4 w-4" }),
              "Analyze Crops"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Next",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] })
          }
        )
      ] })
    ] }),
    (form.soilType || form.climateZone || form.landType || form.waterAvailabilityMm) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        className: "flex flex-wrap items-center gap-2 rounded-xl border border-border bg-card px-4 py-3",
        "data-ocid": "analyze.summary_preview",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium mr-1", children: "Your inputs:" }),
          form.soilType && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs gap-1", children: [
            (_a = SOIL_OPTIONS.find((s) => s.value === form.soilType)) == null ? void 0 : _a.icon,
            " ",
            (_b = SOIL_OPTIONS.find((s) => s.value === form.soilType)) == null ? void 0 : _b.label
          ] }),
          form.waterAvailabilityMm && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "h-3 w-3" }),
            form.waterAvailabilityMm,
            " mm/yr"
          ] }),
          form.climateZone && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs gap-1", children: [
            (_c = CLIMATE_OPTIONS.find((c) => c.value === form.climateZone)) == null ? void 0 : _c.icon,
            " ",
            (_d = CLIMATE_OPTIONS.find((c) => c.value === form.climateZone)) == null ? void 0 : _d.label
          ] }),
          form.landType && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs gap-1", children: [
            (_e = LAND_OPTIONS.find((l) => l.value === form.landType)) == null ? void 0 : _e.icon,
            " ",
            (_f = LAND_OPTIONS.find((l) => l.value === form.landType)) == null ? void 0 : _f.label
          ] })
        ]
      }
    )
  ] }) });
}
export {
  AnalyzePage as default
};
