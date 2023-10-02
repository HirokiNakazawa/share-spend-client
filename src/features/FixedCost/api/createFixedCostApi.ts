import axios from "axios";

import { API_BASE_URL } from "@/config/config";
import { CreateFixedCostFormData, PostFixedCostResponse } from "@/types";

/**
 * 固定費登録に関するAPI関数の型定義
 */
export type CreateFixedCostApiFunctions = {
  /**
   * 固定費を登録するAPI関数
   *
   * @property {CreateFixedCostFormData} data - 登録する固定費データ
   * @returns {Promise<PostFixedCostResponse>} 固定費登録の結果を表すPromise
   * @throws {Error} API呼び出しエラー
   */
  postCreateFixedCost: (data: CreateFixedCostFormData) => Promise<PostFixedCostResponse>;
};

/**
 * 固定費登録に関するAPIをハンドリングするカスタムフックです。
 *
 * @returns {CreateFixedCostApiFunctions}
 */
const createFixedCostApi = (): CreateFixedCostApiFunctions => {
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

  return { postCreateFixedCost };
};

export { createFixedCostApi };
