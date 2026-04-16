import CommonTypes "../types/common";
import HistoryTypes "../types/history";
import CropTypes "../types/crops";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  /// Saves a new analysis and returns the saved record
  public func saveAnalysis(
    analyses : List.List<HistoryTypes.SavedAnalysis>,
    nextId : Nat,
    input : CropTypes.SoilInput,
    topCropId : Text,
    topCropName : Text,
    topMatchScore : Nat,
  ) : HistoryTypes.SavedAnalysis {
    let analysis : HistoryTypes.SavedAnalysis = {
      id = nextId;
      createdAt = Time.now();
      input;
      topCropId;
      topCropName;
      topMatchScore;
    };
    analyses.add(analysis);
    analysis;
  };

  /// Returns all saved analyses in reverse chronological order (most recent first)
  public func listAnalyses(analyses : List.List<HistoryTypes.SavedAnalysis>) : [HistoryTypes.SavedAnalysis] {
    analyses.toArray().reverse();
  };

  /// Returns a single saved analysis by id
  public func getAnalysis(analyses : List.List<HistoryTypes.SavedAnalysis>, id : CommonTypes.AnalysisId) : ?HistoryTypes.SavedAnalysis {
    analyses.find(func(a : HistoryTypes.SavedAnalysis) : Bool { a.id == id });
  };

  /// Deletes a saved analysis by id; returns true if found and removed
  public func deleteAnalysis(analyses : List.List<HistoryTypes.SavedAnalysis>, id : CommonTypes.AnalysisId) : Bool {
    let sizeBefore = analyses.size();
    let filtered = analyses.filter(func(a : HistoryTypes.SavedAnalysis) : Bool { a.id != id });
    // clear and repopulate in-place
    analyses.clear();
    analyses.append(filtered);
    analyses.size() < sizeBefore;
  };
};
