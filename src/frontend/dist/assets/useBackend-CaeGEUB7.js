import { r as reactExports } from "./index-BoGjIZFN.js";
import { C as CROP_DATABASE } from "./cropDatabase-CqbDKg--.js";
function computeMatchScore(crop, input) {
  let score = 0;
  if (crop.conditions.soilTypes.includes(input.soilType)) score += 30;
  if (crop.conditions.climateZones.includes(input.climateZone)) score += 30;
  if (crop.conditions.landTypes.includes(input.landType)) score += 20;
  const water = input.waterAvailabilityMm;
  if (water >= crop.conditions.minWaterMm && water <= crop.conditions.maxWaterMm) {
    score += 20;
  } else {
    const diff = Math.min(
      Math.abs(water - crop.conditions.minWaterMm),
      Math.abs(water - crop.conditions.maxWaterMm)
    );
    score += Math.max(0, 20 - Math.floor(diff / 50));
  }
  return Math.min(100, score);
}
function buildSuitabilityReason(crop, input, score) {
  if (score >= 90)
    return `Excellent match. ${crop.name} thrives in ${input.climateZone} climates with ${input.soilType} soil and the provided water availability.`;
  if (score >= 70)
    return `Good match. ${crop.name} grows well under most of your conditions. Minor irrigation adjustments may improve yield.`;
  if (score >= 50)
    return `Moderate match. ${crop.name} can be grown with careful management. Some soil amendments or irrigation may be needed.`;
  return `Marginal match. ${crop.name} will require significant soil preparation or supplemental irrigation to succeed in these conditions.`;
}
const yieldMultiplier = {
  optimistic: 1.2,
  realistic: 1,
  conservative: 0.75
};
function getStorageKey() {
  return "cropwise_analyses";
}
function loadAnalyses() {
  try {
    const raw = localStorage.getItem(getStorageKey());
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveAnalyses(analyses) {
  localStorage.setItem(getStorageKey(), JSON.stringify(analyses));
}
function useBackend() {
  return reactExports.useMemo(
    () => ({
      getCropRecommendations(input) {
        return CROP_DATABASE.map((crop) => {
          const matchScore = computeMatchScore(crop, input);
          return {
            crop,
            matchScore,
            suitabilityReason: buildSuitabilityReason(crop, input, matchScore)
          };
        }).sort((a, b) => b.matchScore - a.matchScore);
      },
      getCropById(cropId) {
        return CROP_DATABASE.find((c) => c.id === cropId);
      },
      computeEconomics(input) {
        const crop = CROP_DATABASE.find((c) => c.id === input.cropId);
        const baseYieldPerHa = (crop == null ? void 0 : crop.typicalYieldKgPerHectare) ?? 2e3;
        const multiplier = yieldMultiplier[input.scenario];
        const estimatedYieldKg = baseYieldPerHa * input.landAreaHectares * multiplier;
        const marketPricePerKgUsd = (crop == null ? void 0 : crop.marketPricePerKg) ?? 0.5;
        const grossRevenueUsd = estimatedYieldKg * marketPricePerKgUsd;
        const totalProductionCostUsd = (input.seedCostUsd + input.laborCostUsd + input.fertilizerCostUsd + input.equipmentCostUsd + input.pesticideCostUsd + input.irrigationCostUsd) * input.landAreaHectares;
        const netProfitUsd = grossRevenueUsd - totalProductionCostUsd;
        const breakEvenPricePerKgUsd = estimatedYieldKg > 0 ? totalProductionCostUsd / estimatedYieldKg : 0;
        return {
          totalProductionCostUsd,
          marketPricePerKgUsd,
          estimatedYieldKg,
          grossRevenueUsd,
          netProfitUsd,
          breakEvenPricePerKgUsd
        };
      },
      saveAnalysis(input, topCropId, topCropName, topMatchScore) {
        const analysis = {
          id: `analysis_${Date.now()}`,
          createdAt: Date.now(),
          input,
          topCropId,
          topCropName,
          topMatchScore
        };
        const existing = loadAnalyses();
        saveAnalyses([analysis, ...existing]);
        return analysis;
      },
      listSavedAnalyses() {
        return loadAnalyses();
      },
      deleteAnalysis(id) {
        const existing = loadAnalyses();
        saveAnalyses(existing.filter((a) => a.id !== id));
      }
    }),
    []
  );
}
export {
  useBackend as u
};
