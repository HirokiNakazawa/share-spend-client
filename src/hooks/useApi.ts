import axios from "axios";

import { API_BASE_URL } from "@/config/config";
import {
  GetTypeListResponse,
  GetMonthlyCostByTypeResponse,
  GetUserCostListResponse,
  SelectDateState,
  GetMonthlyBillingAmountResponse,
} from "@/types";
import { ApiFunctions } from "./useApiTypes";

/**
 * 汎用APIをハンドリングするカスタムフックです
 *
 * @returns {ApiFunctions} 汎用API関数を含むオブジェクト
 */
const useApi = (): ApiFunctions => {
  /**
   * 種別一覧を取得するAPI関数
   *
   * @returns {Promise<GetTypeListResponse>} 種別一覧取得結果を表すPromise
   * @throws {Error} API呼び出し時のエラー
   */
  const getTypeList = async (): Promise<GetTypeListResponse> => {
    try {
      const url = `${API_BASE_URL}/types`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  /**
   * 月別のユーザー毎の支出一覧を取得するAPI関数
   *
   * @param {number} id - ログインユーザーのID
   * @param {SelectDateState} selectDate - 対象の年月
   * @returns {Promise<GetUserCostListResponse>} 月別のユーザー毎の支出一覧取得結果を表すPromise
   * @throws {Error} API呼び出し時のエラー
   */
  const getUserCostList = async (id: number, selectDate: SelectDateState): Promise<GetUserCostListResponse[]> => {
    try {
      const url = `${API_BASE_URL}/costs/${id}?year=${selectDate.year}&month=${selectDate.month}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  /**
   * 月別の種別毎の支出合計を取得するAPI関数
   *
   * @param {SelectDateState} selectDate - 対象の年月
   * @returns {Promise<GetMonthlyCostByTypeResponse>} 月別の種別毎の支出合計取得結果を表すPromise
   * @throws {Error} API呼び出し時のエラー
   */
  const getMonthlyCostByType = async (selectDate: SelectDateState): Promise<GetMonthlyCostByTypeResponse[]> => {
    try {
      const url = `${API_BASE_URL}/costs/type?year=${selectDate.year}&month=${selectDate.month}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  /**
   * 月別の請求金額を取得するAPI関数
   *
   * @param {SelectDateState} selectDate - 対象の年月
   * @returns {Promise<GetMonthlyBillingAmountResponse>} 月別の請求金額取得結果を表すPromise
   * @throws {Error} API呼び出し時のエラー
   */
  const getMonthlyBillingAmount = async (selectDate: SelectDateState): Promise<GetMonthlyBillingAmountResponse> => {
    try {
      const url = `${API_BASE_URL}/billing-amount?year=${selectDate.year}&month=${selectDate.month}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    getTypeList,
    getUserCostList,
    getMonthlyCostByType,
    getMonthlyBillingAmount,
  };
};

export { useApi };
