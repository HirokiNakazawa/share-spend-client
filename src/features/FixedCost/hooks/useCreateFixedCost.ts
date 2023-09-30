import {
  costIsFullState,
  costIsHalfState,
  costNameState,
  costState,
  limitDateState,
  selectTypeState,
  typeListState,
  userState,
} from "@/recoil";
import { UserState } from "@/types";
import { useRecoilValue } from "recoil";
import { CreateFixedCostApiFunctions, createFixedCostApi } from "../api/createFixedCostApi";
import dayjs from "dayjs";

/**
 * 固定費登録に関するカスタムフックの型定義
 */
export type CreateFixedCostFunctions = {
  /**
   * 固定費を登録する関数
   *
   * @returns {Promise<void>}
   */
  createFixedCost: () => Promise<void>;
};

/**
 * 固定費登録に関するカスタムフックです。
 *
 * @returns {CreateFixedCostFunctions} 固定費登録に関する関数を含むオブジェクト
 */
const useCreateFixedCost = (): CreateFixedCostFunctions => {
  const typeList = useRecoilValue<{ [key: string]: string }>(typeListState);
  const user = useRecoilValue<UserState>(userState);

  const selectType = useRecoilValue<string>(selectTypeState);
  const costName = useRecoilValue<string>(costNameState);
  const cost = useRecoilValue<string>(costState);
  const costIsHalf = useRecoilValue<boolean>(costIsHalfState);
  const costIsFull = useRecoilValue<boolean>(costIsFullState);
  const limitDate = useRecoilValue<Date | null>(limitDateState);

  const api: CreateFixedCostApiFunctions = createFixedCostApi();

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
    } catch (error) {
      console.log(error);
    }
  };

  return { createFixedCost };
};

export { useCreateFixedCost };
