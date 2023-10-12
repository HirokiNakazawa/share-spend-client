/**
 * 集計に関するカスタムフックの型定義
 */
export type SummaryFunctions = {
  getMonthlyTotalCost: () => number;
  getMonthlyPredictCost: () => number;
};
