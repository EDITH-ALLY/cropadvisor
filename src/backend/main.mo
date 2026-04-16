import HistoryTypes "types/history";
import List "mo:core/List";
import CropsApi "mixins/crops-api";
import HistoryApi "mixins/history-api";

actor {
  let analyses = List.empty<HistoryTypes.SavedAnalysis>();

  include CropsApi();
  include HistoryApi(analyses);
};
