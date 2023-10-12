import { useSetRecoilState } from "recoil";

import {
  ClaimState,
  CostState,
  MonthlyCostByTypeState,
  SelectDateState,
  ApiFunctions,
  UpdateFunctions,
  ConvertFunctions,
} from "@/types";
import { useApi } from "@/hooks/useApi";
import { useConvert } from "./useConvert";
import { typeListState, monthlyCostByTypeState, userCostListState, claimState, userFixedCostListState } from "@/recoil";

/**
 * 状態の更新に関するカスタムフックです。
 *
 * @returns {UpdateFunctions} 状態更新関連の関数を含むオブジェクト
 */
const useUpdate = (): UpdateFunctions => {
  const setTypeList = useSetRecoilState<{ [key: string]: string }>(typeListState);
  const setUserCostList = useSetRecoilState<CostState[]>(userCostListState);
  const setUserFixedCostList = useSetRecoilState<CostState[]>(userFixedCostListState);
  const setMonthlyCostByType = useSetRecoilState<MonthlyCostByTypeState[]>(monthlyCostByTypeState);
  const setClaim = useSetRecoilState<ClaimState>(claimState);

  const api: ApiFunctions = useApi();
  const convert: ConvertFunctions = useConvert();

  /**
   * 種別一覧を更新する関数
   *
   * @returns {Promise<void>}
   */
  const updateTypeList = async (): Promise<void> => {
    const typeList = await api.getTypeList();
    console.log(typeList);
    setTypeList(typeList);
  };

  /**
   * 月次ユーザー毎の支出一覧を更新する関数
   *
   * @param {number} id - ログインユーザーのID
   * @param {SelectDateState} selectDate - 対象の年月
   * @returns {Promise<void>}
   */
  const updateUserCostList = async (id: number, selectDate: SelectDateState): Promise<void> => {
    const userCostList = await api.getUserCostList(id, selectDate);
    console.log(userCostList);
    setUserCostList(userCostList);
  };

  /**
   * 月次ユーザー毎の固定費一覧を更新する関数
   *
   * @param {number} id - ログインユーザーのID
   * @returns {Promise<void>}
   */
  const updateUserFixedCostList = async (id: number): Promise<void> => {
    const userFixedCostList = await api.getUserFixedCostList(id);
    console.log(userFixedCostList);
    setUserFixedCostList(userFixedCostList);
  };

  /**
   * 月次種別毎の支出合計を更新する関数
   *
   * @param {SelectDateState} selectDate - 対象の年月
   * @returns {Promise<void>}
   */
  const updateMonthlyCostByType = async (selectDate: SelectDateState): Promise<void> => {
    const monthlyCostByType = await api.getMonthlyCostByType(selectDate);
    console.log(monthlyCostByType);
    setMonthlyCostByType(monthlyCostByType);
  };

  /**
   * 月次請求金額を更新する関数
   *
   * @param {SelectDateState} selectDate - 対象の年月
   * @returns {Promise<void>}
   */
  const updateMonthlyClaim = async (selectDate: SelectDateState): Promise<void> => {
    const claim = await api.getMonthlyBillingAmount(selectDate);
    console.log(claim);
    setClaim(convert.convertToClaimState(claim));
  };

  return {
    updateTypeList,
    updateUserCostList,
    updateUserFixedCostList,
    updateMonthlyCostByType,
    updateMonthlyClaim,
  };
};

export { useUpdate };
