import axios from "axios";

import { API_BASE_URL } from "@/config/config";
import { CreateTypeApiFunctions, CreateTypeFormData, PostTypeResponse } from "@/types";

/**
 * 種別登録に関するAPIをハンドリングするカスタムフックです。
 *
 * @returns {CreateTypeApiFunctions}
 */
const createTypeApi = (): CreateTypeApiFunctions => {
  /**
   * 種別を登録するAPI関数
   *
   * @param {CreateTypeFormData} data - 登録する種別データ
   * @returns {Promise<PostTypeResponse>} 種別登録の結果を表すPromise
   * @throws {Error} API呼び出しエラー
   */
  const postCreateType = async (data: CreateTypeFormData): Promise<PostTypeResponse> => {
    try {
      const url = `${API_BASE_URL}/types/create`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { postCreateType };
};

export { createTypeApi };
