import { useRecoilValue } from "recoil";

import { ResetFunctions } from "@/hooks/useResetTypes";
import { CreateTypeApiFunctions, createTypeApi } from "@/features/Dashboard/LeftBottomAria/api/createTypeApi";
import { useReset } from "@/hooks/useReset";
import { registerTypeState } from "@/recoil";

/**
 * 種別登録に関するカスタムフックの型定義
 */
export type CreateTypeFunctions = {
  /**
   * 種別を登録する関数
   *
   * @returns {Promise<void>}
   */
  createType: () => Promise<void>;
};

/**
 * 種別登録に関するカスタムフックです。
 *
 * @returns {CreateTypeFunctions} 種別登録に関する関数を含むオブジェクト
 */
const useCreateType = (): CreateTypeFunctions => {
  const type: string = useRecoilValue<string>(registerTypeState);

  const api: CreateTypeApiFunctions = createTypeApi();
  const reset: ResetFunctions = useReset();

  /**
   * 種別を登録する関数
   *
   * @returns {Promise<void>}
   */
  const createType = async (): Promise<void> => {
    const data = { type };
    try {
      const response = await api.postCreateType(data);
      console.log(response);
      reset.resetTypeRegistrationParams();
    } catch (error) {
      console.log(error);
    }
  };

  return { createType };
};

export { useCreateType };
