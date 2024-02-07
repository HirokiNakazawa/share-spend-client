import dayjs from "dayjs";

import { useRecoilValue } from "recoil";

import { UserState, CreateCostFunctions, CreateCostApiFunctions, ResetFunctions } from "@/types";
import { createCostApi } from "@/features/Dashboard/RightBottomAria/api/createCostApi";
import { useReset } from "@/hooks/useReset";
import {
  costIsFullState,
  costIsHalfState,
  costNameState,
  costState,
  userState,
  selectTypeState,
  typeListState,
  registrationDateState,
} from "@/recoil";

/**
 * 支出登録に関するカスタムフックです。
 *
 * @returns {CreateCostFunctions} 支出登録に関する関数を含むオブジェクト
 */
const useCreateCost = (): CreateCostFunctions => {
  const typeList = useRecoilValue<{ [key: string]: string }>(typeListState);
  const user = useRecoilValue<UserState>(userState);

  const selectType = useRecoilValue<string>(selectTypeState);
  const costName = useRecoilValue<string>(costNameState);
  const cost = useRecoilValue<string>(costState);
  const costIsHalf = useRecoilValue<boolean>(costIsHalfState);
  const costIsFull = useRecoilValue<boolean>(costIsFullState);
  const registrationDate = useRecoilValue<Date | null>(registrationDateState);

  const api: CreateCostApiFunctions = createCostApi();
  const reset: ResetFunctions = useReset();

  /**
   * 支出を登録する関数
   *
   * @returns {Promise<void>}
   */
  const createCost = async (): Promise<void> => {
    const typeId = Object.keys(typeList).find((key) => typeList[key] === selectType);
    const data = {
      user_id: user.id,
      type_id: parseInt(typeId!),
      name: costName,
      cost: parseInt(cost),
      is_half_billing: costIsHalf,
      is_full_billing: costIsFull,
      registration_date: registrationDate ? dayjs(registrationDate).format("YYYY/MM/DD") : null,
    };
    try {
      const response = await api.postCreateCost(data);
      console.log(response);
      reset.resetCostRegistrationParams();
    } catch (error) {
      console.log(error);
    }
  };

  return { createCost };
};

export { useCreateCost };
