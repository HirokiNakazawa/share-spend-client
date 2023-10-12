import { useRecoilValue } from "recoil";

import { UpdateCostFunctions, UserState } from "@/types";
import { updateCostApi } from "../api/updateCostApi";
import { useReset } from "@/hooks/useReset";
import {
  editSelectTypeState,
  typeListState,
  userState,
  editCostIdState,
  editCostIsFullState,
  editCostIsHalfState,
  editCostNameState,
  editCostState,
} from "@/recoil";

/**
 * 支出編集に関するカスタムフックです。
 *
 * @returns {UpdateCostFunctions} 支出編集に関する関数を含むオブジェクト
 */
const useUpdateCost = (): UpdateCostFunctions => {
  const typeList = useRecoilValue<{ [key: string]: string }>(typeListState);
  const user = useRecoilValue<UserState>(userState);

  const editCostId = useRecoilValue<number>(editCostIdState);
  const editSelectType = useRecoilValue<string>(editSelectTypeState);
  const editCostName = useRecoilValue<string>(editCostNameState);
  const editCost = useRecoilValue<string>(editCostState);
  const editCostIsHalf = useRecoilValue<boolean>(editCostIsHalfState);
  const editCostIsFull = useRecoilValue<boolean>(editCostIsFullState);

  const api = updateCostApi();
  const reset = useReset();

  /**
   * 支出を更新する関数
   *
   * @returns {Promise<void>}
   */
  const updateCost = async (): Promise<void> => {
    const typeId = Object.keys(typeList).find((key) => typeList[key] === editSelectType);
    const data = {
      user_id: user.id,
      type_id: parseInt(typeId!),
      name: editCostName,
      cost: parseInt(editCost),
      is_half_billing: editCostIsHalf,
      is_full_billing: editCostIsFull,
    };
    try {
      const response = await api.putUpdateCost(data, editCostId);
      console.log(response);
      reset.resetCostUpdateParams();
    } catch (error) {
      console.log(error);
    }
  };

  return { updateCost };
};

export { useUpdateCost };
