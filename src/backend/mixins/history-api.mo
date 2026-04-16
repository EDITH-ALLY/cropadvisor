import CommonTypes "../types/common";
import HistoryTypes "../types/history";
import CropTypes "../types/crops";
import HistoryLib "../lib/history";
import List "mo:core/List";

mixin (
  analyses : List.List<HistoryTypes.SavedAnalysis>,
) {
  var nextAnalysisId : Nat = 0;

  /// Saves an analysis and returns the saved record
  public func saveAnalysis(
    input : CropTypes.SoilInput,
    topCropId : Text,
    topCropName : Text,
    topMatchScore : Nat,
  ) : async HistoryTypes.SavedAnalysis {
    let saved = HistoryLib.saveAnalysis(analyses, nextAnalysisId, input, topCropId, topCropName, topMatchScore);
    nextAnalysisId += 1;
    saved;
  };

  /// Lists all saved analyses in reverse chronological order
  public query func listAnalyses() : async [HistoryTypes.SavedAnalysis] {
    HistoryLib.listAnalyses(analyses);
  };

  /// Returns a single saved analysis by id
  public query func getAnalysis(id : CommonTypes.AnalysisId) : async ?HistoryTypes.SavedAnalysis {
    HistoryLib.getAnalysis(analyses, id);
  };

  /// Deletes a saved analysis by id; returns true if found
  public func deleteAnalysis(id : CommonTypes.AnalysisId) : async Bool {
    HistoryLib.deleteAnalysis(analyses, id);
  };
};
