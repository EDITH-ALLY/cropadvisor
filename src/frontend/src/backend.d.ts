import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Timestamp = bigint;
export interface SoilInput {
    soilType: SoilType;
    climateZone: ClimateZone;
    landType: LandType;
    waterAvailabilityMm: bigint;
}
export interface SavedAnalysis {
    id: AnalysisId;
    createdAt: Timestamp;
    topCropId: string;
    topCropName: string;
    input: SoilInput;
    topMatchScore: bigint;
}
export interface GrowingConditions {
    suitableClimates: Array<ClimateZone>;
    soilPhMax: number;
    soilPhMin: number;
    suitableSoils: Array<SoilType>;
    minTempCelsius: bigint;
    maxRainfallMm: bigint;
    minRainfallMm: bigint;
    suitableLandTypes: Array<LandType>;
    maxTempCelsius: bigint;
}
export interface CropInfo {
    id: string;
    growingSeasonDays: bigint;
    name: string;
    waterRequirementMm: bigint;
    description: string;
    conditions: GrowingConditions;
    marketPricePerKg: number;
    typicalYieldKgPerHectare: bigint;
}
export interface EconomicsResult {
    netProfitUsd: number;
    totalProductionCostUsd: number;
    grossRevenueUsd: number;
    marketPricePerKgUsd: number;
    breakEvenPricePerKgUsd: number;
    estimatedYieldKg: number;
}
export type AnalysisId = bigint;
export interface CropRecommendation {
    suitabilityReason: string;
    crop: CropInfo;
    matchScore: bigint;
}
export interface EconomicsInput {
    seedCostUsd: number;
    landAreaHectares: number;
    pesticideCostUsd: number;
    cropId: string;
    fertilizerCostUsd: number;
    irrigationCostUsd: number;
    scenario: YieldScenario;
    equipmentCostUsd: number;
    laborCostUsd: number;
}
export enum ClimateZone {
    temperate = "temperate",
    mediterranean = "mediterranean",
    continental = "continental",
    arid = "arid",
    semiarid = "semiarid",
    tropical = "tropical"
}
export enum LandType {
    hilly = "hilly",
    flat = "flat",
    slope = "slope",
    terraced = "terraced"
}
export enum SoilType {
    sandyLoam = "sandyLoam",
    clay = "clay",
    loam = "loam",
    sand = "sand",
    siltLoam = "siltLoam"
}
export enum YieldScenario {
    conservative = "conservative",
    realistic = "realistic",
    optimistic = "optimistic"
}
export interface backendInterface {
    computeEconomics(econ: EconomicsInput): Promise<EconomicsResult>;
    deleteAnalysis(id: AnalysisId): Promise<boolean>;
    getAnalysis(id: AnalysisId): Promise<SavedAnalysis | null>;
    getCropById(cropId: string): Promise<CropInfo | null>;
    getCropCatalog(): Promise<Array<CropInfo>>;
    getRecommendations(input: SoilInput): Promise<Array<CropRecommendation>>;
    listAnalyses(): Promise<Array<SavedAnalysis>>;
    saveAnalysis(input: SoilInput, topCropId: string, topCropName: string, topMatchScore: bigint): Promise<SavedAnalysis>;
}
