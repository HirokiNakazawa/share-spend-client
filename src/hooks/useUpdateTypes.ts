import { SelectDateState } from "@/types";

/**
 * 状態の更新に関するカスタムフックの型定義
 */
export type UpdateFunctions = {
  /**
   * 種別一覧を更新する関数
   *
   * @returns {Promise<void>}
   */
  updateTypeList: () => Promise<void>;

  /**
   * 月別のユーザー毎の支出一覧を更新する関数
   *
   * @param {number} id - ログインユーザーのID
   * @param {SelectDateState} selectDate - 対象の年月
   * @returns {Promise<void>}
   */
  updateUserCostList: (id: number, selectDate: SelectDateState) => Promise<void>;

  /**
   * 月別の種別毎の支出合計を更新する関数
   *
   * @param {SelectDateState} selectDate - 対象の年月
   * @returns {Promise<void>}
   */
  updateMonthlyCostByType: (selectDate: SelectDateState) => Promise<void>;

  /**
   * 月別の請求金額を更新する関数
   *
   * @param {SelectDateState} selectDate - 対象の年月
   * @returns {Promise<void>}
   */
  updateMonthlyClaim: (selectDate: SelectDateState) => Promise<void>;
};