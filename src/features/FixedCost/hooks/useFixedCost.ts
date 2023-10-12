import { useRecoilValue } from "recoil";
import dayjs from "dayjs";

import { UseFixedCostFunctions, UserState, FixedCostApiFunctions, ResetFunctions } from "@/types";
import { fixedCostApi } from "../api/fixedCostApi";
import { useReset } from "@/hooks/useReset";
import {
  costIsFullState,
  costIsHalfState,
  costNameState,
  costState,
  editCostIdState,
  editCostIsFullState,
  editCostIsHalfState,
  editCostNameState,
  editCostState,
  editLimitDateState,
  editSelectTypeState,
  limitDateState,
  selectTypeState,
  typeListState,
  userState,
} from "@/recoil";

/**
 * 固定費登録に関するカスタムフックです。
 *
 * @returns {UseFixedCostFunctions} 固定費登録に関する関数を含むオブジェクト
 */
const useFixedCost = (): UseFixedCostFunctions => {
  const typeList = useRecoilValue<{ [key: string]: string }>(typeListState);
  const user = useRecoilValue<UserState>(userState);

  const selectType = useRecoilValue<string>(selectTypeState);
  const costName = useRecoilValue<string>(costNameState);
  const cost = useRecoilValue<string>(costState);
  const costIsHalf = useRecoilValue<boolean>(costIsHalfState);
  const costIsFull = useRecoilValue<boolean>(costIsFullState);
  const limitDate = useRecoilValue<Date | null>(limitDateState);

  const editCostId = useRecoilValue<number>(editCostIdState);
  const editSelectType = useRecoilValue<string>(editSelectTypeState);
  const editCostName = useRecoilValue<string>(editCostNameState);
  const editCost = useRecoilValue<string>(editCostState);
  const editCostIsHalf = useRecoilValue<boolean>(editCostIsHalfState);
  const editCostIsFull = useRecoilValue<boolean>(editCostIsFullState);
  const editLimitDate = useRecoilValue<Date | null>(editLimitDateState);

  const api: FixedCostApiFunctions = fixedCostApi();
  const reset: ResetFunctions = useReset();

  /**
   * 固定費を登録する関数
   *
   * @returns {Promise<void>}
   */
  const createFixedCost = async (): Promise<void> => {
    const typeId = Object.keys(typeList).find((key) => typeList[key] === selectType);
    const data = {
      user_id: user.id,
      type_id: parseInt(typeId!),
      name: costName,
      cost: parseInt(cost),
      is_half_billing: costIsHalf,
      is_full_billing: costIsFull,
      end_date: limitDate ? dayjs(limitDate).format("YYYY/MM/DD") : null,
    };
    try {
      const response = await api.postCreateFixedCost(data);
      console.log(response);
      reset.resetCostRegistrationParams();
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * 固定費を更新する関数
   *
   * @returns {Promise<void>}
   */
  const updateFixedCost = async (): Promise<void> => {
    const typeId = Object.keys(typeList).find((key) => typeList[key] === editSelectType);
    const data = {
      user_id: user.id,
      type_id: parseInt(typeId!),
      name: editCostName,
      cost: parseInt(editCost),
      is_half_billing: editCostIsHalf,
      is_full_billing: editCostIsFull,
      end_date: editLimitDate ? dayjs(editLimitDate).format("YYYY/MM/DD") : null,
    };

    console.log(data);

    try {
      const response = await api.postUpdateFixedCost(data, editCostId);
      console.log(response);
      reset.resetCostUpdateParams();
      reset.resetFixedCostParams();
    } catch (error) {
      console.log(error);
    }
  };

  return { createFixedCost, updateFixedCost };
};

export { useFixedCost };
