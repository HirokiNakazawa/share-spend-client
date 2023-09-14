import axios from "axios";

import { API_BASE_URL } from "@/config/config";
import { UpdateCostFormData, PostCostResponse } from "@/types";

/**
 * 支出編集に関するAPI関数の型定義。
 */
export type UpdateCostApiFunctions = {
  /**
   * 支出を更新するAPI関数
   *
   * @param {UpdateCostFormData} data - 更新する支出データ
   * @param {number} id - 更新対象の支出データID
   * @returns {Promise<PostCostResponse>} 支出更新の結果を表すPromise
   * @throws {Error} API呼び出しエラー
   */
  putUpdateCost: (data: UpdateCostFormData, id: number) => Promise<PostCostResponse>;
};

/**
 * 支出編集に関するAPIをハンドリングするカスタムフックです。
 *
 * @returns {updateCostApiFunctions} 支出更新のAPI関数を含むオブジェクト
 */
const updateCostApi = (): UpdateCostApiFunctions => {
  /**
   * 支出を更新するAPI関数
   *
   * @param {UpdateCostFormData} data - 更新する支出データ
   * @param {number} id - 更新対象の支出データID
   * @returns {PostCostResponse} 支出更新の結果を表すPromise
   * @throws {Error} API呼び出しエラー
   */
  const putUpdateCost = async (data: UpdateCostFormData, id: number): Promise<PostCostResponse> => {
    try {
      const url = `${API_BASE_URL}/costs/update/${id}`;
      const response = await axios.put(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { putUpdateCost };
};

export { updateCostApi };
