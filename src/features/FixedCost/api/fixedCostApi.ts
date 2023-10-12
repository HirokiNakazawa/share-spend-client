import axios from "axios";

import { API_BASE_URL } from "@/config/config";
import { FixedCostApiFunctions, CreateFixedCostFormData, PostFixedCostResponse, UpdateCostFormData } from "@/types";

/**
 * 固定費登録に関するAPIをハンドリングするカスタムフックです。
 *
 * @returns {CreateFixedCostApiFunctions}
 */
const fixedCostApi = (): FixedCostApiFunctions => {
  /**
   * 固定費を登録するAPI関数
   *
   * @property {CreateFixedCostFormData} data - 登録する固定費データ
   * @returns {Promise<PostFixedCostResponse>} 固定費登録の結果を表すPromise
   * @throws {Error} API呼び出しエラー
   */
  const postCreateFixedCost = async (data: CreateFixedCostFormData): Promise<PostFixedCostResponse> => {
    try {
      const url = `${API_BASE_URL}/fixed-costs/create`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  /**
   * 固定費を更新するAPI関数
   *
   * @param {UpdateCostFormData} data - 更新する固定費データ
   * @param {number} id - 更新対象の支出データID
   * @returns {Promise<PostFixedCostResponse>} 固定費更新の結果を表すPromise
   * @throws {Error} API呼び出しエラー
   */
  const postUpdateFixedCost = async (data: UpdateCostFormData, id: number): Promise<PostFixedCostResponse> => {
    try {
      const url = `${API_BASE_URL}/fixed-costs/update/${id}`;
      const response = await axios.put(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { postCreateFixedCost, postUpdateFixedCost };
};

export { fixedCostApi };
