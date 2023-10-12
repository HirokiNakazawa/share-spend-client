import axios from "axios";

import { API_BASE_URL } from "@/config/config";
import { CreateCostApiFunctions, CreateCostFormData, PostCostResponse } from "@/types";

/**
 * 支出登録に関するAPIをハンドリングするカスタムフックです。
 *
 * @returns {CreateCostApiFunctions}
 */
const createCostApi = (): CreateCostApiFunctions => {
  /**
   * 支出を登録するAPI関数
   *
   * @property {CreateCostFormData} data - 登録する支出データ
   * @returns {Promise<PostCostResponse>} 支出登録の結果を表すPromise
   * @throws {Error} API呼び出しエラー
   */
  const postCreateCost = async (data: CreateCostFormData): Promise<PostCostResponse> => {
    try {
      const url = `${API_BASE_URL}/costs/create`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { postCreateCost };
};

export { createCostApi };
