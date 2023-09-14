/**
 * 集計に関するカスタムフックの型定義
 */
export type SummaryFunctions = {
  /**
   * 月別の合計支出を返却する関数
   *
   * @returns {number}
   */
  getMonthlyTotalCost: () => number;

  /**
   * 今月の予想金額を返却する関数
   *
   * @returns {number}
   */
  getMonthlyPredictCost: () => number;
};
