/**
 * 固定費登録に関するカスタムフックの型定義
 */
export type UseFixedCostFunctions = {
  /**
   * 固定費を登録する関数
   *
   * @returns {Promise<void>}
   */
  createFixedCost: () => Promise<void>;

  /**
   * 固定費を更新する関数
   *
   * @returns {Promise<void>}
   */
  updateFixedCost: () => Promise<void>;
};
