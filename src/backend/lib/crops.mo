import Types "../types/crops";

module {
  /// Returns the full static catalog of supported crops
  public func getCropCatalog() : [Types.CropInfo] {
    [
      {
        id = "rice";
        name = "Rice";
        description = "A staple cereal grain and one of the most important food crops in the world. Thrives in flooded paddy fields and warm, humid climates.";
        conditions = {
          minTempCelsius = 20;
          maxTempCelsius = 35;
          minRainfallMm = 1000;
          maxRainfallMm = 2000;
          soilPhMin = 5.5;
          soilPhMax = 7.0;
          suitableSoils = [#clay, #loam, #siltLoam];
          suitableClimates = [#tropical, #temperate];
          suitableLandTypes = [#flat, #terraced];
        };
        typicalYieldKgPerHectare = 4500;
        growingSeasonDays = 120;
        waterRequirementMm = 1200;
        marketPricePerKg = 0.35;
      },
      {
        id = "wheat";
        name = "Wheat";
        description = "A widely cultivated cereal grain used for making flour, bread, and pasta. Prefers cool temperatures and moderate rainfall.";
        conditions = {
          minTempCelsius = 5;
          maxTempCelsius = 25;
          minRainfallMm = 375;
          maxRainfallMm = 900;
          soilPhMin = 6.0;
          soilPhMax = 7.5;
          suitableSoils = [#loam, #siltLoam, #clay];
          suitableClimates = [#temperate, #continental, #mediterranean];
          suitableLandTypes = [#flat, #slope, #hilly];
        };
        typicalYieldKgPerHectare = 3500;
        growingSeasonDays = 110;
        waterRequirementMm = 450;
        marketPricePerKg = 0.28;
      },
      {
        id = "corn";
        name = "Corn (Maize)";
        description = "A versatile cereal crop used for human consumption, animal feed, and industrial products. Requires warm weather and good soil fertility.";
        conditions = {
          minTempCelsius = 15;
          maxTempCelsius = 35;
          minRainfallMm = 500;
          maxRainfallMm = 900;
          soilPhMin = 5.8;
          soilPhMax = 7.0;
          suitableSoils = [#loam, #siltLoam, #sandyLoam];
          suitableClimates = [#tropical, #temperate, #continental];
          suitableLandTypes = [#flat, #slope, #hilly];
        };
        typicalYieldKgPerHectare = 6000;
        growingSeasonDays = 90;
        waterRequirementMm = 600;
        marketPricePerKg = 0.22;
      },
      {
        id = "tomato";
        name = "Tomato";
        description = "A popular vegetable crop grown worldwide. Requires warm days, cool nights, and well-drained soils rich in organic matter.";
        conditions = {
          minTempCelsius = 18;
          maxTempCelsius = 32;
          minRainfallMm = 400;
          maxRainfallMm = 700;
          soilPhMin = 6.0;
          soilPhMax = 7.0;
          suitableSoils = [#loam, #siltLoam, #sandyLoam];
          suitableClimates = [#tropical, #temperate, #mediterranean];
          suitableLandTypes = [#flat, #slope, #hilly];
        };
        typicalYieldKgPerHectare = 40000;
        growingSeasonDays = 80;
        waterRequirementMm = 500;
        marketPricePerKg = 0.55;
      },
      {
        id = "potato";
        name = "Potato";
        description = "A root vegetable and one of the world's most important food crops. Grows best in cool climates with well-drained, loose soils.";
        conditions = {
          minTempCelsius = 10;
          maxTempCelsius = 25;
          minRainfallMm = 500;
          maxRainfallMm = 800;
          soilPhMin = 5.0;
          soilPhMax = 6.5;
          suitableSoils = [#loam, #sandyLoam, #siltLoam];
          suitableClimates = [#temperate, #continental, #mediterranean];
          suitableLandTypes = [#flat, #hilly, #slope];
        };
        typicalYieldKgPerHectare = 25000;
        growingSeasonDays = 90;
        waterRequirementMm = 550;
        marketPricePerKg = 0.30;
      },
      {
        id = "soybean";
        name = "Soybean";
        description = "A legume crop rich in protein and oil. Used for food, animal feed, and industrial applications. Fixes atmospheric nitrogen improving soil fertility.";
        conditions = {
          minTempCelsius = 20;
          maxTempCelsius = 30;
          minRainfallMm = 450;
          maxRainfallMm = 900;
          soilPhMin = 6.0;
          soilPhMax = 7.0;
          suitableSoils = [#loam, #siltLoam, #clay];
          suitableClimates = [#tropical, #temperate, #continental];
          suitableLandTypes = [#flat, #slope, #hilly];
        };
        typicalYieldKgPerHectare = 2800;
        growingSeasonDays = 100;
        waterRequirementMm = 550;
        marketPricePerKg = 0.42;
      },
      {
        id = "cotton";
        name = "Cotton";
        description = "A fiber crop cultivated for its fluffy seed fibers. Requires a long frost-free season, warm sunny weather, and moderate rainfall.";
        conditions = {
          minTempCelsius = 20;
          maxTempCelsius = 38;
          minRainfallMm = 500;
          maxRainfallMm = 1500;
          soilPhMin = 5.8;
          soilPhMax = 8.0;
          suitableSoils = [#loam, #sandyLoam, #siltLoam];
          suitableClimates = [#tropical, #semiarid, #arid];
          suitableLandTypes = [#flat, #slope];
        };
        typicalYieldKgPerHectare = 1500;
        growingSeasonDays = 150;
        waterRequirementMm = 700;
        marketPricePerKg = 1.80;
      },
      {
        id = "sugarcane";
        name = "Sugarcane";
        description = "A tall perennial grass cultivated for sugar production. Requires a tropical or subtropical climate with abundant rainfall and fertile soils.";
        conditions = {
          minTempCelsius = 21;
          maxTempCelsius = 38;
          minRainfallMm = 1200;
          maxRainfallMm = 2200;
          soilPhMin = 6.0;
          soilPhMax = 7.5;
          suitableSoils = [#loam, #clay, #siltLoam];
          suitableClimates = [#tropical, #semiarid];
          suitableLandTypes = [#flat, #terraced];
        };
        typicalYieldKgPerHectare = 70000;
        growingSeasonDays = 360;
        waterRequirementMm = 1500;
        marketPricePerKg = 0.04;
      },
      {
        id = "barley";
        name = "Barley";
        description = "A robust cereal grain used for beer production, animal feed, and human food. Tolerates poor soils and arid conditions better than most cereals.";
        conditions = {
          minTempCelsius = 5;
          maxTempCelsius = 25;
          minRainfallMm = 300;
          maxRainfallMm = 700;
          soilPhMin = 6.0;
          soilPhMax = 8.0;
          suitableSoils = [#loam, #siltLoam, #sandyLoam, #sand];
          suitableClimates = [#temperate, #continental, #arid, #semiarid, #mediterranean];
          suitableLandTypes = [#flat, #slope, #hilly];
        };
        typicalYieldKgPerHectare = 3000;
        growingSeasonDays = 90;
        waterRequirementMm = 400;
        marketPricePerKg = 0.24;
      },
      {
        id = "sorghum";
        name = "Sorghum";
        description = "A drought-tolerant cereal crop widely grown in semi-arid regions. Used for food, animal feed, and biofuel production.";
        conditions = {
          minTempCelsius = 18;
          maxTempCelsius = 38;
          minRainfallMm = 350;
          maxRainfallMm = 800;
          soilPhMin = 5.5;
          soilPhMax = 7.5;
          suitableSoils = [#clay, #loam, #siltLoam, #sandyLoam];
          suitableClimates = [#tropical, #semiarid, #arid, #temperate];
          suitableLandTypes = [#flat, #slope, #hilly];
        };
        typicalYieldKgPerHectare = 3200;
        growingSeasonDays = 110;
        waterRequirementMm = 450;
        marketPricePerKg = 0.20;
      },
      {
        id = "millet";
        name = "Millet";
        description = "A drought-resistant small-seeded cereal crop important for food security in arid and semi-arid regions of Africa and Asia.";
        conditions = {
          minTempCelsius = 20;
          maxTempCelsius = 40;
          minRainfallMm = 200;
          maxRainfallMm = 600;
          soilPhMin = 5.5;
          soilPhMax = 7.5;
          suitableSoils = [#sand, #sandyLoam, #loam];
          suitableClimates = [#semiarid, #arid, #tropical];
          suitableLandTypes = [#flat, #slope, #hilly];
        };
        typicalYieldKgPerHectare = 1500;
        growingSeasonDays = 75;
        waterRequirementMm = 350;
        marketPricePerKg = 0.32;
      },
      {
        id = "chickpea";
        name = "Chickpea";
        description = "A legume crop high in protein, widely eaten in South Asia and the Middle East. Grows well in cool, dry conditions and fixes nitrogen.";
        conditions = {
          minTempCelsius = 10;
          maxTempCelsius = 30;
          minRainfallMm = 300;
          maxRainfallMm = 700;
          soilPhMin = 6.0;
          soilPhMax = 8.0;
          suitableSoils = [#loam, #sandyLoam, #siltLoam];
          suitableClimates = [#semiarid, #mediterranean, #continental, #temperate];
          suitableLandTypes = [#flat, #slope, #hilly];
        };
        typicalYieldKgPerHectare = 1800;
        growingSeasonDays = 100;
        waterRequirementMm = 400;
        marketPricePerKg = 0.60;
      },
      {
        id = "lentil";
        name = "Lentil";
        description = "A nutritious legume crop cultivated for its edible seeds. Well-suited to cool, dry climates and tolerates poor soils.";
        conditions = {
          minTempCelsius = 5;
          maxTempCelsius = 27;
          minRainfallMm = 250;
          maxRainfallMm = 650;
          soilPhMin = 6.0;
          soilPhMax = 8.0;
          suitableSoils = [#loam, #sandyLoam, #siltLoam];
          suitableClimates = [#semiarid, #mediterranean, #continental, #temperate];
          suitableLandTypes = [#flat, #slope, #hilly];
        };
        typicalYieldKgPerHectare = 1500;
        growingSeasonDays = 90;
        waterRequirementMm = 350;
        marketPricePerKg = 0.55;
      },
      {
        id = "sunflower";
        name = "Sunflower";
        description = "An oilseed crop grown for its oil-rich seeds. Tolerates drought and diverse soils, making it popular in temperate and semi-arid regions.";
        conditions = {
          minTempCelsius = 15;
          maxTempCelsius = 30;
          minRainfallMm = 300;
          maxRainfallMm = 700;
          soilPhMin = 6.0;
          soilPhMax = 7.5;
          suitableSoils = [#loam, #sandyLoam, #siltLoam, #clay];
          suitableClimates = [#temperate, #semiarid, #continental, #mediterranean];
          suitableLandTypes = [#flat, #slope, #hilly];
        };
        typicalYieldKgPerHectare = 2000;
        growingSeasonDays = 100;
        waterRequirementMm = 450;
        marketPricePerKg = 0.50;
      },
      {
        id = "coffee";
        name = "Coffee";
        description = "A tropical perennial shrub grown for its berries used to produce the popular beverage. Requires a specific combination of altitude, temperature, and rainfall.";
        conditions = {
          minTempCelsius = 15;
          maxTempCelsius = 28;
          minRainfallMm = 1200;
          maxRainfallMm = 2200;
          soilPhMin = 5.5;
          soilPhMax = 6.5;
          suitableSoils = [#loam, #siltLoam, #sandyLoam];
          suitableClimates = [#tropical, #mediterranean];
          suitableLandTypes = [#slope, #hilly, #terraced];
        };
        typicalYieldKgPerHectare = 1000;
        growingSeasonDays = 365;
        waterRequirementMm = 1500;
        marketPricePerKg = 3.50;
      },
    ];
  };

  /// Returns a single crop by id, or null if not found
  public func getCropById(cropId : Text, catalog : [Types.CropInfo]) : ?Types.CropInfo {
    catalog.find(func(c : Types.CropInfo) : Bool { c.id == cropId });
  };

  func containsItem<T>(arr : [T], item : T, eq : (T, T) -> Bool) : Bool {
    switch (arr.find(func(x : T) : Bool { eq(x, item) })) {
      case (?_) { true };
      case null { false };
    };
  };

  func soilEqual(a : Types.SoilType, b : Types.SoilType) : Bool { a == b };
  func climateEqual(a : Types.ClimateZone, b : Types.ClimateZone) : Bool { a == b };
  func landEqual(a : Types.LandType, b : Types.LandType) : Bool { a == b };

  /// Scores a single crop against the given soil input (0-100)
  public func scoreCrop(crop : Types.CropInfo, input : Types.SoilInput) : Nat {
    var score : Nat = 0;

    // Soil type match — 25 points
    if (containsItem(crop.conditions.suitableSoils, input.soilType, soilEqual)) {
      score += 25;
    };

    // Climate zone match — 30 points
    if (containsItem(crop.conditions.suitableClimates, input.climateZone, climateEqual)) {
      score += 30;
    };

    // Water availability match — 25 points
    let water = input.waterAvailabilityMm;
    let minWater = crop.conditions.minRainfallMm;
    let maxWater = crop.conditions.maxRainfallMm;
    if (water >= minWater and water <= maxWater) {
      score += 25;
    } else if (water >= minWater / 2 and water < minWater) {
      score += 10;
    } else if (water > maxWater and water <= maxWater + maxWater / 2) {
      score += 10;
    };

    // Land type match — 20 points
    if (containsItem(crop.conditions.suitableLandTypes, input.landType, landEqual)) {
      score += 20;
    };

    score;
  };

  /// Returns the suitability reason text for a crop given soil input and score
  public func getSuitabilityReason(crop : Types.CropInfo, input : Types.SoilInput, score : Nat) : Text {
    let soilOk = containsItem(crop.conditions.suitableSoils, input.soilType, soilEqual);
    let climateOk = containsItem(crop.conditions.suitableClimates, input.climateZone, climateEqual);
    let water = input.waterAvailabilityMm;
    let waterOk = water >= crop.conditions.minRainfallMm and water <= crop.conditions.maxRainfallMm;
    let landOk = containsItem(crop.conditions.suitableLandTypes, input.landType, landEqual);

    if (score >= 80) {
      "Excellent match: " # crop.name # " thrives in your " # soilTypeText(input.soilType) # " soil with " # climateText(input.climateZone) # " climate and " # landTypeText(input.landType) # " terrain."
    } else if (score >= 55) {
      "Good match for " # crop.name # ". " # buildIssues(soilOk, climateOk, waterOk, landOk)
    } else if (score >= 30) {
      "Moderate match for " # crop.name # ". Some conditions suboptimal. " # buildIssues(soilOk, climateOk, waterOk, landOk)
    } else {
      "Poor match for " # crop.name # ". Soil, climate, water or land conditions are not well suited."
    };
  };

  func buildIssues(soilOk : Bool, climateOk : Bool, waterOk : Bool, landOk : Bool) : Text {
    var issues : Text = "";
    if (not soilOk) { issues #= "Soil type is not ideal. " };
    if (not climateOk) { issues #= "Climate zone is not ideal. " };
    if (not waterOk) { issues #= "Water availability is outside optimal range. " };
    if (not landOk) { issues #= "Land type is not ideal. " };
    if (issues == "") { "All conditions are within acceptable range." } else { issues };
  };

  func soilTypeText(s : Types.SoilType) : Text {
    switch (s) {
      case (#clay) "clay";
      case (#loam) "loam";
      case (#sand) "sandy";
      case (#siltLoam) "silt loam";
      case (#sandyLoam) "sandy loam";
    };
  };

  func climateText(c : Types.ClimateZone) : Text {
    switch (c) {
      case (#tropical) "tropical";
      case (#temperate) "temperate";
      case (#arid) "arid";
      case (#semiarid) "semi-arid";
      case (#mediterranean) "mediterranean";
      case (#continental) "continental";
    };
  };

  func landTypeText(l : Types.LandType) : Text {
    switch (l) {
      case (#flat) "flat";
      case (#hilly) "hilly";
      case (#slope) "sloped";
      case (#terraced) "terraced";
    };
  };

  /// Generates a ranked list of crop recommendations from the catalog
  public func getRecommendations(input : Types.SoilInput, catalog : [Types.CropInfo]) : [Types.CropRecommendation] {
    let scored = catalog.map(
      func(crop : Types.CropInfo) : Types.CropRecommendation {
        let score = scoreCrop(crop, input);
        let reason = getSuitabilityReason(crop, input, score);
        { crop; matchScore = score; suitabilityReason = reason };
      }
    );
    scored.sort(func(a : Types.CropRecommendation, b : Types.CropRecommendation) : { #less; #equal; #greater } {
      if (a.matchScore > b.matchScore) { #less }
      else if (a.matchScore < b.matchScore) { #greater }
      else { #equal };
    });
  };

  /// Computes economics for a crop given cost inputs and yield scenario
  public func computeEconomics(econ : Types.EconomicsInput, crop : Types.CropInfo) : Types.EconomicsResult {
    let yieldMultiplier : Float = switch (econ.scenario) {
      case (#optimistic) 1.2;
      case (#realistic) 1.0;
      case (#conservative) 0.8;
    };

    let baseYieldPerHectare : Float = crop.typicalYieldKgPerHectare.toFloat();
    let estimatedYieldKg : Float = baseYieldPerHectare * econ.landAreaHectares * yieldMultiplier;

    let totalProductionCostUsd : Float =
      econ.seedCostUsd + econ.laborCostUsd + econ.fertilizerCostUsd +
      econ.equipmentCostUsd + econ.pesticideCostUsd + econ.irrigationCostUsd;

    let marketPricePerKgUsd : Float = crop.marketPricePerKg;
    let grossRevenueUsd : Float = estimatedYieldKg * marketPricePerKgUsd;
    let netProfitUsd : Float = grossRevenueUsd - totalProductionCostUsd;

    let breakEvenPricePerKgUsd : Float =
      if (estimatedYieldKg > 0.0) { totalProductionCostUsd / estimatedYieldKg }
      else { 0.0 };

    {
      totalProductionCostUsd;
      marketPricePerKgUsd;
      estimatedYieldKg;
      grossRevenueUsd;
      netProfitUsd;
      breakEvenPricePerKgUsd;
    };
  };
};
