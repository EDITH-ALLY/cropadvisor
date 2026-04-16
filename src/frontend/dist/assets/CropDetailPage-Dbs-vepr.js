import { c as createLucideIcon, e as useParams, u as useNavigate, r as reactExports, j as jsxRuntimeExports, b as Button, B as Badge, S as Sprout } from "./index-BoGjIZFN.js";
import { L as Leaf, C as Card, a as CardHeader, c as CardTitle, b as CardContent } from "./card-DI0Uszm8.js";
import { I as Input } from "./input-CrcFVVnn.js";
import { A as ArrowLeft, L as Label } from "./label-CjGrVcuJ.js";
import { C as CROP_DATABASE, D as Droplets } from "./cropDatabase-CqbDKg--.js";
import { m as motion } from "./proxy-Cy49EBdh.js";
import { T as TrendingUp } from "./trending-up-pLx-LESJ.js";
import { C as Calendar } from "./calendar-C_gqOtjJ.js";
import { S as Sun } from "./sun-DMJAEu0p.js";
import "./index-BCHaxvuq.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
  [
    "path",
    {
      d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",
      key: "xs1cw7"
    }
  ],
  ["path", { d: "M12 20v-9", key: "1qisl0" }],
  ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
  ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
  ["path", { d: "M22 13h-4", key: "1jl80f" }],
  ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4", key: "k3fwyw" }]
];
const Bug = createLucideIcon("bug", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
];
const DollarSign = createLucideIcon("dollar-sign", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "7g6ntu" }],
  ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "ijws7r" }],
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2", key: "3gwbw2" }]
];
const Scale = createLucideIcon("scale", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
  ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }]
];
const Scissors = createLucideIcon("scissors", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
];
const TrendingDown = createLucideIcon("trending-down", __iconNode);
const SCENARIO_MULTIPLIER = {
  optimistic: 1.2,
  realistic: 1,
  conservative: 0.8
};
const LABEL_MAP = {
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
  terraced: "Terraced"
};
function formatUsd(value) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  });
}
function StatCard({
  icon,
  label,
  value,
  sub
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-xl bg-secondary/40 border border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-primary", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide font-body", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-base leading-snug", children: value }),
      sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: sub })
    ] })
  ] });
}
function NumericField({
  id,
  label,
  value,
  onChange,
  min = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: id, className: "text-sm text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        id,
        "data-ocid": `economics.${id}_input`,
        type: "number",
        min,
        step: "0.01",
        value,
        onChange: (e) => onChange(Math.max(min, Number.parseFloat(e.target.value) || 0)),
        className: "bg-secondary/40 border-border focus:border-primary"
      }
    )
  ] });
}
function CropDetailPage() {
  const { cropId } = useParams({ from: "/crops/$cropId" });
  const navigate = useNavigate();
  const crop = reactExports.useMemo(
    () => CROP_DATABASE.find((c) => c.id === cropId),
    [cropId]
  );
  const [economics, setEconomics] = reactExports.useState({
    landAreaHectares: 1,
    seedCostUsd: 150,
    laborCostUsd: 400,
    fertilizerCostUsd: 250,
    equipmentCostUsd: 300,
    pesticideCostUsd: 120,
    irrigationCostUsd: 80,
    scenario: "realistic"
  });
  const update = (key, val) => setEconomics((prev) => ({ ...prev, [key]: val }));
  const result = reactExports.useMemo(() => {
    if (!crop) return null;
    const multiplier = SCENARIO_MULTIPLIER[economics.scenario];
    const estimatedYieldKg = crop.typicalYieldKgPerHectare * economics.landAreaHectares * multiplier;
    const totalProductionCostUsd = economics.seedCostUsd + economics.laborCostUsd + economics.fertilizerCostUsd + economics.equipmentCostUsd + economics.pesticideCostUsd + economics.irrigationCostUsd;
    const grossRevenueUsd = estimatedYieldKg * crop.marketPricePerKg;
    const netProfitUsd = grossRevenueUsd - totalProductionCostUsd;
    const breakEvenPricePerKgUsd = estimatedYieldKg > 0 ? totalProductionCostUsd / estimatedYieldKg : 0;
    return {
      totalProductionCostUsd,
      marketPricePerKgUsd: crop.marketPricePerKg,
      estimatedYieldKg,
      grossRevenueUsd,
      netProfitUsd,
      breakEvenPricePerKgUsd
    };
  }, [crop, economics]);
  if (!crop) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-[60vh] flex flex-col items-center justify-center gap-4",
        "data-ocid": "crop_detail.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-display text-muted-foreground", children: "Crop not found." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              onClick: () => navigate({ to: "/results" }),
              "data-ocid": "crop_detail.back_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
                " Back to Results"
              ]
            }
          )
        ]
      }
    );
  }
  const isProfit = result && result.netProfitUsd >= 0;
  const scenarios = [
    "optimistic",
    "realistic",
    "conservative"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-5xl mx-auto px-4 py-8 space-y-8",
      "data-ocid": "crop_detail.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.35 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "ghost",
                  onClick: () => navigate({ to: "/results" }),
                  className: "mb-4 text-muted-foreground hover:text-foreground -ml-2",
                  "data-ocid": "crop_detail.back_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-1.5" }),
                    "Back to Results"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-6xl leading-none",
                    role: "img",
                    "aria-label": crop.name,
                    children: crop.imageEmoji
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground", children: crop.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/20 text-primary border-primary/30 hover:bg-primary/30", children: crop.category })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground max-w-2xl leading-relaxed", children: crop.description })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.section,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.1, duration: 0.4 },
            "data-ocid": "crop_detail.stats_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold text-foreground mb-3", children: "Key Growing Metrics" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCard,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4" }),
                    label: "Typical Yield",
                    value: `${crop.typicalYieldKgPerHectare.toLocaleString()} kg/ha`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCard,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
                    label: "Season Length",
                    value: `${crop.growingSeasonDays} days`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCard,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "w-4 h-4" }),
                    label: "Water Required",
                    value: `${crop.waterRequirementMm} mm`,
                    sub: "per season"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCard,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-4 h-4" }),
                    label: "Market Price",
                    value: `$${crop.marketPricePerKg.toFixed(3)}/kg`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCard,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "w-4 h-4" }),
                    label: "Water Range",
                    value: `${crop.conditions.minWaterMm}–${crop.conditions.maxWaterMm} mm`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCard,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-4 h-4" }),
                    label: "Suitable Soils",
                    value: crop.conditions.soilTypes.map((s) => LABEL_MAP[s] ?? s).join(", ")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCard,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-4 h-4" }),
                    label: "Climate Zones",
                    value: crop.conditions.climateZones.map((c) => LABEL_MAP[c] ?? c).join(", ")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCard,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "w-4 h-4" }),
                    label: "Land Types",
                    value: crop.conditions.landTypes.map((l) => LABEL_MAP[l] ?? l).join(", ")
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2, duration: 0.4 },
            className: "grid md:grid-cols-3 gap-4",
            "data-ocid": "crop_detail.agro_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-sm font-semibold text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-4 h-4 text-primary" }),
                  " Nutritional Profile"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: crop.nutrients.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: n }, n)) }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-sm font-semibold text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bug, { className: "w-4 h-4 text-destructive" }),
                  " Common Pests & Diseases"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: crop.commonPests.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "text-xs border-destructive/40 text-destructive",
                    children: p
                  },
                  p
                )) }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-sm font-semibold text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Scissors, { className: "w-4 h-4 text-accent" }),
                  " Harvest Method"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: crop.harvestMethod }) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.section,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3, duration: 0.45 },
            "data-ocid": "crop_detail.economics_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground mb-1", children: "Economics Calculator" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5", children: "Adjust costs and area to estimate your return on investment." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("fieldset", { className: "flex flex-wrap gap-2 mb-6 border-none p-0 m-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("legend", { className: "sr-only", children: "Yield scenario" }),
                scenarios.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `economics.scenario_${s}`,
                    onClick: () => update("scenario", s),
                    className: `px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-smooth border ${economics.scenario === s ? "bg-primary text-primary-foreground border-primary shadow-elevated" : "bg-secondary/50 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"}`,
                    children: s === "optimistic" ? "⬆ Optimistic (×1.2)" : s === "conservative" ? "⬇ Conservative (×0.8)" : "◉ Realistic (×1.0)"
                  },
                  s
                ))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Card,
                  {
                    className: "bg-card border-border",
                    "data-ocid": "crop_detail.economics_inputs",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-semibold text-foreground", children: "Input Costs" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "grid grid-cols-2 gap-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          NumericField,
                          {
                            id: "landArea",
                            label: "Land Area (ha)",
                            value: economics.landAreaHectares,
                            onChange: (v) => update("landAreaHectares", v),
                            min: 0.1
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          NumericField,
                          {
                            id: "seedCost",
                            label: "Seed Cost ($)",
                            value: economics.seedCostUsd,
                            onChange: (v) => update("seedCostUsd", v)
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          NumericField,
                          {
                            id: "laborCost",
                            label: "Labor Cost ($)",
                            value: economics.laborCostUsd,
                            onChange: (v) => update("laborCostUsd", v)
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          NumericField,
                          {
                            id: "fertilizerCost",
                            label: "Fertilizer ($)",
                            value: economics.fertilizerCostUsd,
                            onChange: (v) => update("fertilizerCostUsd", v)
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          NumericField,
                          {
                            id: "equipmentCost",
                            label: "Equipment ($)",
                            value: economics.equipmentCostUsd,
                            onChange: (v) => update("equipmentCostUsd", v)
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          NumericField,
                          {
                            id: "pesticideCost",
                            label: "Pesticide ($)",
                            value: economics.pesticideCostUsd,
                            onChange: (v) => update("pesticideCostUsd", v)
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          NumericField,
                          {
                            id: "irrigationCost",
                            label: "Irrigation ($)",
                            value: economics.irrigationCostUsd,
                            onChange: (v) => update("irrigationCostUsd", v)
                          }
                        ) })
                      ] })
                    ]
                  }
                ),
                result && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex flex-col gap-3",
                    "data-ocid": "crop_detail.economics_results",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: `rounded-2xl p-6 border-2 flex flex-col items-center justify-center text-center transition-smooth ${isProfit ? "bg-accent/10 border-accent/50" : "bg-destructive/10 border-destructive/40"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground font-body mb-1", children: "Net Profit" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                className: `font-display text-4xl font-bold ${isProfit ? "text-accent" : "text-destructive"}`,
                                children: formatUsd(result.netProfitUsd)
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-2", children: [
                              isProfit ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-accent" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-4 h-4 text-destructive" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: `text-sm font-medium ${isProfit ? "text-accent" : "text-destructive"}`,
                                  children: isProfit ? "Profitable venture" : "Below break-even"
                                }
                              )
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-secondary/40 border border-border p-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide mb-1", children: "Total Costs" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold text-foreground", children: formatUsd(result.totalProductionCostUsd) })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-secondary/40 border border-border p-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide mb-1", children: "Gross Revenue" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold text-foreground", children: formatUsd(result.grossRevenueUsd) })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-secondary/40 border border-border p-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide mb-1", children: "Est. Yield" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-lg font-semibold text-foreground", children: [
                            result.estimatedYieldKg.toLocaleString(void 0, {
                              maximumFractionDigits: 0
                            }),
                            " ",
                            "kg"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-secondary/40 border border-border p-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide mb-1", children: "Market Price" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-lg font-semibold text-foreground", children: [
                            "$",
                            result.marketPricePerKgUsd.toFixed(3),
                            "/kg"
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted/40 border border-border p-4 flex items-center justify-between gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { className: "w-4 h-4 shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Break-even Price" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-semibold text-foreground text-right", children: [
                          "$",
                          result.breakEvenPricePerKgUsd.toFixed(3),
                          "/kg",
                          result.breakEvenPricePerKgUsd < result.marketPricePerKgUsd && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-xs text-primary font-body", children: "✓ below market" })
                        ] })
                      ] })
                    ]
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
export {
  CropDetailPage as default
};
