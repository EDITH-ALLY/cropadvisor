module {
  public type SoilType = {
    #clay;
    #loam;
    #sand;
    #siltLoam;
    #sandyLoam;
  };

  public type ClimateZone = {
    #tropical;
    #temperate;
    #arid;
    #semiarid;
    #mediterranean;
    #continental;
  };

  public type LandType = {
    #flat;
    #hilly;
    #slope;
    #terraced;
  };

  public type YieldScenario = {
    #optimistic;
    #realistic;
    #conservative;
  };

  public type SoilInput = {
    soilType : SoilType;
    waterAvailabilityMm : Nat; // mm per year
    climateZone : ClimateZone;
    landType : LandType;
  };

  public type GrowingConditions = {
    minTempCelsius : Int;
    maxTempCelsius : Int;
    minRainfallMm : Nat;
    maxRainfallMm : Nat;
    soilPhMin : Float;
    soilPhMax : Float;
    suitableSoils : [SoilType];
    suitableClimates : [ClimateZone];
    suitableLandTypes : [LandType];
  };

  public type CropInfo = {
    id : Text;
    name : Text;
    description : Text;
    conditions : GrowingConditions;
    typicalYieldKgPerHectare : Nat;
    growingSeasonDays : Nat;
    waterRequirementMm : Nat;
    marketPricePerKg : Float; // USD
  };

  public type CropRecommendation = {
    crop : CropInfo;
    matchScore : Nat; // 0-100
    suitabilityReason : Text;
  };

  public type EconomicsInput = {
    cropId : Text;
    landAreaHectares : Float;
    seedCostUsd : Float;
    laborCostUsd : Float;
    fertilizerCostUsd : Float;
    equipmentCostUsd : Float;
    pesticideCostUsd : Float;
    irrigationCostUsd : Float;
    scenario : YieldScenario;
  };

  public type EconomicsResult = {
    totalProductionCostUsd : Float;
    marketPricePerKgUsd : Float;
    estimatedYieldKg : Float;
    grossRevenueUsd : Float;
    netProfitUsd : Float;
    breakEvenPricePerKgUsd : Float;
  };
};
