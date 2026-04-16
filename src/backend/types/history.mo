import Common "common";
import Crops "crops";

module {
  public type SavedAnalysis = {
    id : Common.AnalysisId;
    createdAt : Common.Timestamp;
    input : Crops.SoilInput;
    topCropId : Text;
    topCropName : Text;
    topMatchScore : Nat;
  };
};
