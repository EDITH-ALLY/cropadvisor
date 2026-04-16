import { c as createLucideIcon } from "./index-BoGjIZFN.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4"
    }
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz"
    }
  ]
];
const Droplets = createLucideIcon("droplets", __iconNode);
const CROP_DATABASE = [
  {
    id: "wheat",
    name: "Wheat",
    imageEmoji: "🌾",
    category: "Cereal",
    description: "Wheat is the world's most widely grown cereal crop. It thrives in temperate and continental climates with moderate rainfall. Highly versatile for both spring and winter planting seasons.",
    conditions: {
      soilTypes: ["loam", "siltLoam", "clayLoam", "clay"],
      climateZones: ["temperate", "continental", "mediterranean"],
      minWaterMm: 300,
      maxWaterMm: 700,
      landTypes: ["flat", "slope", "terraced"]
    },
    typicalYieldKgPerHectare: 3500,
    growingSeasonDays: 120,
    waterRequirementMm: 450,
    marketPricePerKg: 0.28,
    nutrients: ["Carbohydrates", "Protein", "B Vitamins", "Iron"],
    commonPests: ["Rust", "Aphids", "Hessian Fly"],
    harvestMethod: "Combine harvester; harvest when grain moisture is 13–14%"
  },
  {
    id: "rice",
    name: "Rice",
    imageEmoji: "🌾",
    category: "Cereal",
    description: "Rice is a staple food for more than half the world's population. It requires abundant water and thrives in tropical and subtropical climates. Paddy rice is grown in flooded fields.",
    conditions: {
      soilTypes: ["clay", "siltLoam", "loam"],
      climateZones: ["tropical", "temperate"],
      minWaterMm: 1e3,
      maxWaterMm: 2e3,
      landTypes: ["flat", "terraced"]
    },
    typicalYieldKgPerHectare: 4500,
    growingSeasonDays: 140,
    waterRequirementMm: 1200,
    marketPricePerKg: 0.42,
    nutrients: ["Carbohydrates", "Protein", "Thiamine", "Niacin"],
    commonPests: ["Rice Blast", "Brown Planthopper", "Stem Borer"],
    harvestMethod: "Manual or mechanical harvesting when grains turn golden"
  },
  {
    id: "maize",
    name: "Maize (Corn)",
    imageEmoji: "🌽",
    category: "Cereal",
    description: "Maize is one of the most productive cereal crops. It adapts to a wide range of climates and soil types. Used for food, animal feed, and biofuel production worldwide.",
    conditions: {
      soilTypes: ["loam", "siltLoam", "sandyLoam", "sand"],
      climateZones: ["tropical", "temperate", "semiarid"],
      minWaterMm: 500,
      maxWaterMm: 900,
      landTypes: ["flat", "slope", "hilly"]
    },
    typicalYieldKgPerHectare: 5500,
    growingSeasonDays: 90,
    waterRequirementMm: 650,
    marketPricePerKg: 0.22,
    nutrients: ["Carbohydrates", "Fiber", "Vitamin C", "Magnesium"],
    commonPests: ["Fall Armyworm", "Corn Borer", "Rootworm"],
    harvestMethod: "Combine harvester or picker; harvest at 25–30% moisture"
  },
  {
    id: "soybean",
    name: "Soybean",
    imageEmoji: "🫘",
    category: "Legume",
    description: "Soybean is a high-protein legume with nitrogen-fixing properties that improves soil fertility. It's a cornerstone of global agricultural trade and a versatile crop for both food and industrial uses.",
    conditions: {
      soilTypes: ["loam", "siltLoam", "sandyLoam", "clay"],
      climateZones: ["temperate", "tropical", "continental"],
      minWaterMm: 450,
      maxWaterMm: 800,
      landTypes: ["flat", "slope"]
    },
    typicalYieldKgPerHectare: 2800,
    growingSeasonDays: 100,
    waterRequirementMm: 600,
    marketPricePerKg: 0.48,
    nutrients: ["Protein", "Healthy Fats", "Isoflavones", "Calcium"],
    commonPests: ["Soybean Cyst Nematode", "Aphids", "Bean Pod Moth"],
    harvestMethod: "Combine harvester when pods rattle and moisture is 13–15%"
  },
  {
    id: "cotton",
    name: "Cotton",
    imageEmoji: "🌿",
    category: "Fiber",
    description: "Cotton is the world's leading natural fiber crop. It prefers warm, sunny climates with moderate water. High-value cash crop with strong global demand in textile manufacturing.",
    conditions: {
      soilTypes: ["loam", "siltLoam", "sandyLoam", "clay"],
      climateZones: ["tropical", "semiarid", "mediterranean"],
      minWaterMm: 600,
      maxWaterMm: 1200,
      landTypes: ["flat", "slope"]
    },
    typicalYieldKgPerHectare: 1800,
    growingSeasonDays: 180,
    waterRequirementMm: 900,
    marketPricePerKg: 1.85,
    nutrients: ["Cotton Seed Oil", "Protein Meal (feed)"],
    commonPests: ["Bollworm", "Whitefly", "Thrips"],
    harvestMethod: "Mechanical cotton picker or hand harvesting at full boll opening"
  },
  {
    id: "sugarcane",
    name: "Sugarcane",
    imageEmoji: "🎋",
    category: "Sugar",
    description: "Sugarcane is the world's largest crop by production volume. It thrives in tropical and subtropical climates with high rainfall. Produces sugar, ethanol, and biogas.",
    conditions: {
      soilTypes: ["loam", "clay", "siltLoam"],
      climateZones: ["tropical", "semiarid"],
      minWaterMm: 1e3,
      maxWaterMm: 2500,
      landTypes: ["flat", "terraced"]
    },
    typicalYieldKgPerHectare: 7e4,
    growingSeasonDays: 365,
    waterRequirementMm: 1500,
    marketPricePerKg: 0.038,
    nutrients: ["Sucrose", "Glucose", "Fructose"],
    commonPests: ["Sugarcane Borer", "Mealybug", "Ratoon Stunting Disease"],
    harvestMethod: "Mechanical harvester or manual cutting at base; 12–18 month cycle"
  },
  {
    id: "potato",
    name: "Potato",
    imageEmoji: "🥔",
    category: "Root Vegetable",
    description: "Potato is a highly nutritious and productive tuber crop adaptable to cool climates. It has among the highest caloric yield per unit of land of any food crop.",
    conditions: {
      soilTypes: ["loam", "siltLoam", "sandyLoam", "sand"],
      climateZones: ["temperate", "continental", "mediterranean"],
      minWaterMm: 400,
      maxWaterMm: 700,
      landTypes: ["flat", "hilly", "slope"]
    },
    typicalYieldKgPerHectare: 25e3,
    growingSeasonDays: 90,
    waterRequirementMm: 500,
    marketPricePerKg: 0.32,
    nutrients: ["Carbohydrates", "Vitamin C", "Potassium", "Fiber"],
    commonPests: ["Colorado Beetle", "Late Blight", "Aphids"],
    harvestMethod: "Mechanical digger; harvest when foliage dies back naturally"
  },
  {
    id: "tomato",
    name: "Tomato",
    imageEmoji: "🍅",
    category: "Vegetable",
    description: "Tomato is a high-value vegetable crop grown worldwide. It demands warm temperatures, adequate water, and fertile soil. Both fresh market and processing varieties command premium prices.",
    conditions: {
      soilTypes: ["loam", "siltLoam", "sandyLoam"],
      climateZones: ["tropical", "temperate", "mediterranean"],
      minWaterMm: 400,
      maxWaterMm: 900,
      landTypes: ["flat", "slope", "terraced"]
    },
    typicalYieldKgPerHectare: 35e3,
    growingSeasonDays: 80,
    waterRequirementMm: 600,
    marketPricePerKg: 0.65,
    nutrients: ["Lycopene", "Vitamin C", "Potassium", "Folate"],
    commonPests: ["Whitefly", "Tomato Leaf Miner", "Fusarium Wilt"],
    harvestMethod: "Hand harvesting at full red color; mechanical for processing varieties"
  },
  {
    id: "sunflower",
    name: "Sunflower",
    imageEmoji: "🌻",
    category: "Oilseed",
    description: "Sunflower is a drought-tolerant oilseed crop ideal for semi-arid regions. Its seeds produce high-quality cooking oil. Excellent rotation crop that improves soil structure.",
    conditions: {
      soilTypes: ["loam", "siltLoam", "sandyLoam", "clay"],
      climateZones: ["semiarid", "continental", "temperate"],
      minWaterMm: 300,
      maxWaterMm: 700,
      landTypes: ["flat", "slope", "hilly"]
    },
    typicalYieldKgPerHectare: 2200,
    growingSeasonDays: 110,
    waterRequirementMm: 450,
    marketPricePerKg: 0.55,
    nutrients: ["Vitamin E", "Healthy Fats", "Magnesium", "Selenium"],
    commonPests: ["Sunflower Moth", "Sclerotinia", "Aphids"],
    harvestMethod: "Combine harvester when back of heads turn yellow-brown"
  },
  {
    id: "sorghum",
    name: "Sorghum",
    imageEmoji: "🌾",
    category: "Cereal",
    description: "Sorghum is an exceptionally drought-resistant grain crop suited for arid and semi-arid regions. It's a critical food security crop in Africa and Asia with excellent heat tolerance.",
    conditions: {
      soilTypes: ["clay", "loam", "sandyLoam", "sand"],
      climateZones: ["arid", "semiarid", "tropical"],
      minWaterMm: 250,
      maxWaterMm: 700,
      landTypes: ["flat", "hilly", "slope"]
    },
    typicalYieldKgPerHectare: 3e3,
    growingSeasonDays: 110,
    waterRequirementMm: 400,
    marketPricePerKg: 0.25,
    nutrients: ["Carbohydrates", "Protein", "Iron", "Antioxidants"],
    commonPests: ["Aphids", "Sorghum Midge", "Head Smut"],
    harvestMethod: "Combine harvester; harvest at 12–14% grain moisture"
  },
  {
    id: "chickpea",
    name: "Chickpea",
    imageEmoji: "🫘",
    category: "Legume",
    description: "Chickpea is a drought-tolerant legume ideal for semi-arid regions. Fixes atmospheric nitrogen improving soil health. A high-protein staple across South Asia and the Middle East.",
    conditions: {
      soilTypes: ["loam", "siltLoam", "sandyLoam", "sand"],
      climateZones: ["semiarid", "arid", "mediterranean"],
      minWaterMm: 200,
      maxWaterMm: 600,
      landTypes: ["flat", "hilly", "terraced"]
    },
    typicalYieldKgPerHectare: 1800,
    growingSeasonDays: 100,
    waterRequirementMm: 350,
    marketPricePerKg: 0.82,
    nutrients: ["Protein", "Fiber", "Iron", "Folate"],
    commonPests: ["Helicoverpa", "Fusarium Wilt", "Root Rot"],
    harvestMethod: "Manual or combine harvest when plants dry out and pods rattle"
  },
  {
    id: "banana",
    name: "Banana",
    imageEmoji: "🍌",
    category: "Fruit",
    description: "Banana is a tropical perennial yielding fruit year-round. It requires high rainfall and temperatures. Among the world's most consumed fruits with strong domestic and export markets.",
    conditions: {
      soilTypes: ["loam", "siltLoam", "sandyLoam"],
      climateZones: ["tropical"],
      minWaterMm: 1200,
      maxWaterMm: 2200,
      landTypes: ["flat", "slope", "terraced"]
    },
    typicalYieldKgPerHectare: 4e4,
    growingSeasonDays: 270,
    waterRequirementMm: 1600,
    marketPricePerKg: 0.45,
    nutrients: ["Potassium", "Vitamin B6", "Vitamin C", "Fiber"],
    commonPests: ["Panama Disease", "Black Sigatoka", "Weevil"],
    harvestMethod: "Hand harvest when fingers round out; cut entire bunch"
  }
];
export {
  CROP_DATABASE as C,
  Droplets as D
};
