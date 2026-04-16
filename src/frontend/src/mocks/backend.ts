import type { backendInterface, CropInfo, CropRecommendation, SavedAnalysis, EconomicsResult } from "../backend";
import { ClimateZone, LandType, SoilType, YieldScenario } from "../backend";

const sampleCropWheat: CropInfo = {
  id: "wheat",
  name: "Wheat",
  description:
    "Wheat is one of the world's most important cereal grains, widely cultivated in temperate and continental climates. It thrives in well-drained loam or sandy loam soils and is a staple for bread and pasta production.",
  growingSeasonDays: BigInt(120),
  waterRequirementMm: BigInt(450),
  marketPricePerKg: 0.28,
  typicalYieldKgPerHectare: BigInt(3500),
  conditions: {
    suitableClimates: [ClimateZone.temperate, ClimateZone.continental, ClimateZone.mediterranean],
    suitableSoils: [SoilType.loam, SoilType.sandyLoam, SoilType.siltLoam],
    suitableLandTypes: [LandType.flat, LandType.slope, LandType.terraced],
    soilPhMin: 6.0,
    soilPhMax: 7.5,
    minRainfallMm: BigInt(300),
    maxRainfallMm: BigInt(700),
    minTempCelsius: BigInt(10),
    maxTempCelsius: BigInt(25),
  },
};

const sampleCropMaize: CropInfo = {
  id: "maize",
  name: "Maize (Corn)",
  description:
    "Maize is a versatile cereal crop adapted to a wide range of climates. It is a high-yield crop used for food, animal feed, and biofuel. Best grown in well-drained fertile soils with warm temperatures.",
  growingSeasonDays: BigInt(90),
  waterRequirementMm: BigInt(600),
  marketPricePerKg: 0.22,
  typicalYieldKgPerHectare: BigInt(6000),
  conditions: {
    suitableClimates: [ClimateZone.tropical, ClimateZone.temperate, ClimateZone.semiarid],
    suitableSoils: [SoilType.loam, SoilType.siltLoam, SoilType.clay],
    suitableLandTypes: [LandType.flat, LandType.terraced],
    soilPhMin: 5.8,
    soilPhMax: 7.0,
    minRainfallMm: BigInt(500),
    maxRainfallMm: BigInt(900),
    minTempCelsius: BigInt(18),
    maxTempCelsius: BigInt(32),
  },
};

const sampleCropTomato: CropInfo = {
  id: "tomato",
  name: "Tomato",
  description:
    "Tomatoes are a high-value vegetable crop favored in warm climates with good irrigation. They require rich, well-draining soil and consistent water supply throughout the growing season.",
  growingSeasonDays: BigInt(75),
  waterRequirementMm: BigInt(700),
  marketPricePerKg: 0.95,
  typicalYieldKgPerHectare: BigInt(45000),
  conditions: {
    suitableClimates: [ClimateZone.mediterranean, ClimateZone.temperate, ClimateZone.tropical],
    suitableSoils: [SoilType.loam, SoilType.sandyLoam],
    suitableLandTypes: [LandType.flat, LandType.terraced],
    soilPhMin: 6.0,
    soilPhMax: 7.0,
    minRainfallMm: BigInt(400),
    maxRainfallMm: BigInt(800),
    minTempCelsius: BigInt(18),
    maxTempCelsius: BigInt(30),
  },
};

const sampleRecommendations: CropRecommendation[] = [
  {
    crop: sampleCropWheat,
    matchScore: BigInt(92),
    suitabilityReason:
      "Your loam soil with temperate climate and 480mm annual rainfall closely matches wheat's optimal growing conditions. Flat land ensures efficient mechanized harvesting.",
  },
  {
    crop: sampleCropMaize,
    matchScore: BigInt(78),
    suitabilityReason:
      "Maize can thrive in your conditions but requires supplemental irrigation during dry periods. The fertile loam soil supports good yields.",
  },
  {
    crop: sampleCropTomato,
    matchScore: BigInt(65),
    suitabilityReason:
      "Tomatoes are viable but demand close water management. High market value makes this profitable with proper irrigation infrastructure.",
  },
];

const sampleSavedAnalysis: SavedAnalysis = {
  id: BigInt(1),
  createdAt: BigInt(Date.now() * 1_000_000),
  topCropId: "wheat",
  topCropName: "Wheat",
  topMatchScore: BigInt(92),
  input: {
    soilType: SoilType.loam,
    climateZone: ClimateZone.temperate,
    landType: LandType.flat,
    waterAvailabilityMm: BigInt(480),
  },
};

const sampleEconomics: EconomicsResult = {
  estimatedYieldKg: 3500,
  grossRevenueUsd: 980,
  totalProductionCostUsd: 540,
  netProfitUsd: 440,
  marketPricePerKgUsd: 0.28,
  breakEvenPricePerKgUsd: 0.154,
};

export const mockBackend: backendInterface = {
  getRecommendations: async (_input) => sampleRecommendations,
  getCropById: async (cropId) => {
    const crops: Record<string, CropInfo> = {
      wheat: sampleCropWheat,
      maize: sampleCropMaize,
      tomato: sampleCropTomato,
    };
    return crops[cropId] ?? null;
  },
  getCropCatalog: async () => [sampleCropWheat, sampleCropMaize, sampleCropTomato],
  computeEconomics: async (_econ) => sampleEconomics,
  saveAnalysis: async (_input, topCropId, topCropName, topMatchScore) => ({
    ...sampleSavedAnalysis,
    topCropId,
    topCropName,
    topMatchScore,
  }),
  getAnalysis: async (_id) => sampleSavedAnalysis,
  listAnalyses: async () => [sampleSavedAnalysis],
  deleteAnalysis: async (_id) => true,
};
