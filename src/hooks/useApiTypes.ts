import {
  GetMonthlyBillingAmountResponse,
  GetMonthlyCostByTypeResponse,
  GetTypeListResponse,
  GetUserCostListResponse,
  GetUserFixedCostListResponse,
  SelectDateState,
} from "@/types";

/**
 * 汎用API関数の型定義
 */
export type ApiFunctions = {
  /**
   * 種別一覧を取得するAPI関数
   *
   * @returns {Promise<GetTypeListResponse>} 種別一覧取得結果を表すPromise
   * @throws {Error} API呼び出し時のエラー
   */
  getTypeList: () => Promise<GetTypeListResponse>;

  /**
   * 月次ユーザー毎の支出一覧を取得するAPI関数
   *
   * @param {number} id - ログインユーザーのID
   * @param {SelectDateState} selectDate - 対象の年月
   * @returns {Promise<GetUserCostListResponse[]>} 月次ユーザー毎の支出一覧取得結果を表すPromise
   * @throws {Error} API呼び出し時のエラー
   */
  getUserCostList: (id: number, selectDate: SelectDateState) => Promise<GetUserCostListResponse[]>;

  /**
   * 月次ユーザー毎の固定費一覧を取得するAPI関数
   *
   * @param {number} id - ログインユーザーのID
   * @returns {Promise<GetUserFixedCostListResponse[]>} 月次ユーザー毎の固定費一覧取得結果を表すPromise
   * @throws {Error} API呼び出し時のエラー
   */
  getUserFixedCostList: (id: number) => Promise<GetUserFixedCostListResponse[]>;

  /**
   * 月次種別毎の支出合計を取得するAPI関数
   *
   * @param {SelectDateState} selectDate - 対象の年月
   * @returns {Promise<GetMonthlyCostByTypeResponse[]>} 月次種別毎の支出合計取得結果を表すPromise
   * @throws {Error} API呼び出し時のエラー
   */
  getMonthlyCostByType: (selectDate: SelectDateState) => Promise<GetMonthlyCostByTypeResponse[]>;

  /**
   * 月次請求金額を取得するAPI関数
   *
   * @param {SelectDateState} selectDate - 対象の年月
   * @returns {Promise<GetMonthlyBillingAmountResponse>} 月次請求金額取得結果を表すPromise
   * @throws {Error} API呼び出し時のエラー
   */
  getMonthlyBillingAmount: (selectDate: SelectDateState) => Promise<GetMonthlyBillingAmountResponse>;
};
