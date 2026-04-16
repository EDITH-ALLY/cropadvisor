import CropTypes "../types/crops";
import CropLib "../lib/crops";
import Runtime "mo:core/Runtime";

mixin () {
  let catalog = CropLib.getCropCatalog();

  /// Returns the full crop catalog
  public query func getCropCatalog() : async [CropTypes.CropInfo] {
    catalog;
  };

  /// Returns details for a specific crop by id
  public query func getCropById(cropId : Text) : async ?CropTypes.CropInfo {
    CropLib.getCropById(cropId, catalog);
  };

  /// Returns ranked crop recommendations based on soil/climate input
  public query func getRecommendations(input : CropTypes.SoilInput) : async [CropTypes.CropRecommendation] {
    CropLib.getRecommendations(input, catalog);
  };

  /// Computes economics for a crop given cost inputs and yield scenario
  public query func computeEconomics(econ : CropTypes.EconomicsInput) : async CropTypes.EconomicsResult {
    let crop = switch (CropLib.getCropById(econ.cropId, catalog)) {
      case (?c) c;
      case null Runtime.trap("Crop not found: " # econ.cropId);
    };
    CropLib.computeEconomics(econ, crop);
  };
};
