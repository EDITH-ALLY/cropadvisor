export type SoilType = "clay" | "loam" | "sand" | "siltLoam" | "sandyLoam";
export type ClimateZone =
  | "tropical"
  | "temperate"
  | "arid"
  | "semiarid"
  | "mediterranean"
  | "continental";
export type LandType = "flat" | "hilly" | "slope" | "terraced";
export type YieldScenario = "optimistic" | "realistic" | "conservative";

export interface SoilInput {
  soilType: SoilType;
  waterAvailabilityMm: number;
  climateZone: ClimateZone;
  landType: LandType;
}

export interface GrowingConditions {
  soilTypes: SoilType[];
  climateZones: ClimateZone[];
  minWaterMm: number;
  maxWaterMm: number;
  landTypes: LandType[];
}

export interface CropInfo {
  id: string;
  name: string;
  description: string;
  conditions: GrowingConditions;
  typicalYieldKgPerHectare: number;
  growingSeasonDays: number;
  waterRequirementMm: number;
  marketPricePerKg: number;
  imageEmoji: string;
  category: string;
  nutrients: string[];
  commonPests: string[];
  harvestMethod: string;
}

export interface CropRecommendation {
  crop: CropInfo;
  matchScore: number;
  suitabilityReason: string;
}

export interface EconomicsInput {
  cropId: string;
  landAreaHectares: number;
  seedCostUsd: number;
  laborCostUsd: number;
  fertilizerCostUsd: number;
  equipmentCostUsd: number;
  pesticideCostUsd: number;
  irrigationCostUsd: number;
  scenario: YieldScenario;
}

export interface EconomicsResult {
  totalProductionCostUsd: number;
  marketPricePerKgUsd: number;
  estimatedYieldKg: number;
  grossRevenueUsd: number;
  netProfitUsd: number;
  breakEvenPricePerKgUsd: number;
}

export interface SavedAnalysis {
  id: string;
  createdAt: number;
  input: SoilInput;
  topCropId: string;
  topCropName: string;
  topMatchScore: number;
}
