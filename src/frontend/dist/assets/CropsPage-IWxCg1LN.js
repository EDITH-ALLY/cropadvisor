import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports, d as BookOpen, a as cn, B as Badge, C as ChevronRight } from "./index-BoGjIZFN.js";
import { I as Input } from "./input-CrcFVVnn.js";
import { C as CROP_DATABASE, D as Droplets } from "./cropDatabase-CqbDKg--.js";
import { C as CalendarDays } from "./calendar-days-BAldz8HN.js";
import { T as TrendingUp } from "./trending-up-pLx-LESJ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
const CATEGORY_COLORS = {
  Cereal: "bg-amber-500/15 text-amber-700 border-amber-400/30",
  Legume: "bg-green-500/15 text-green-700 border-green-400/30",
  Fiber: "bg-blue-500/15 text-blue-700 border-blue-400/30",
  Sugar: "bg-pink-500/15 text-pink-700 border-pink-400/30",
  Oilseed: "bg-yellow-500/15 text-yellow-700 border-yellow-400/30",
  Vegetable: "bg-red-500/15 text-red-700 border-red-400/30",
  "Root Vegetable": "bg-orange-500/15 text-orange-700 border-orange-400/30",
  Fruit: "bg-purple-500/15 text-purple-700 border-purple-400/30"
};
const ALL_CATEGORIES = Array.from(
  new Set(CROP_DATABASE.map((c) => c.category))
);
function CropCard({ crop, index, onClick }) {
  const catClass = CATEGORY_COLORS[crop.category] ?? "bg-muted text-muted-foreground border-border";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick,
      "data-ocid": `crops.item.${index + 1}`,
      className: cn(
        "group w-full text-left rounded-xl border border-border bg-card p-4",
        "hover:border-primary/40 hover:shadow-elevated transition-smooth",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      ),
      "aria-label": `View details for ${crop.name}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl shrink-0", "aria-hidden": "true", children: crop.imageEmoji }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-bold text-foreground leading-tight truncate", children: crop.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "inline-block text-[10px] font-semibold px-1.5 py-0.5 rounded border",
                      catClass
                    ),
                    children: crop.category
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2 leading-relaxed", children: crop.description })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-smooth" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-border grid grid-cols-3 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3.5 w-3.5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Season" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-foreground", children: [
              crop.growingSeasonDays,
              "d"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "h-3.5 w-3.5 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Water" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-foreground", children: [
              crop.waterRequirementMm,
              "mm"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3.5 w-3.5 text-chart-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Price/kg" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-foreground", children: [
              "$",
              crop.marketPricePerKg.toFixed(2)
            ] })
          ] })
        ] })
      ]
    }
  );
}
function CropsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = reactExports.useState("");
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const filtered = CROP_DATABASE.filter((crop) => {
    const matchesSearch = search === "" || crop.name.toLowerCase().includes(search.toLowerCase()) || crop.category.toLowerCase().includes(search.toLowerCase()) || crop.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || crop.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-full bg-background", "data-ocid": "crops.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-10 border-b border-border bg-card shadow-subtle px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground leading-tight", children: "Crop Library" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
            CROP_DATABASE.length,
            " crops with growing requirements and economics"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "search",
            placeholder: "Search crops by name, category, or description…",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            className: "pl-9",
            "data-ocid": "crops.search_input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border",
          "data-ocid": "crops.filter.tab",
          children: ["All", ...ALL_CATEGORIES].map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setActiveCategory(cat),
              "data-ocid": `crops.category.${cat.toLowerCase().replace(/\s+/g, "_")}`,
              className: cn(
                "shrink-0 text-xs font-medium px-3 py-1.5 rounded-full border transition-smooth",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                activeCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              ),
              children: cat
            },
            cat
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-6 py-6", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-24 text-center",
        "data-ocid": "crops.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-7 w-7 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground", children: "No crops found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 max-w-xs", children: "Try adjusting your search term or select a different category." })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs font-semibold", children: [
          filtered.length,
          " ",
          filtered.length === 1 ? "crop" : "crops"
        ] }),
        search && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          "matching “",
          search,
          "”"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
          "data-ocid": "crops.list",
          children: filtered.map((crop, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CropCard,
            {
              crop,
              index: i,
              onClick: () => navigate({
                to: "/crops/$cropId",
                params: { cropId: crop.id }
              })
            },
            crop.id
          ))
        }
      )
    ] }) })
  ] });
}
export {
  CropsPage as default
};
