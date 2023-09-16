import { useSetRecoilState } from "recoil";

import { ClaimState, CostState, MonthlyCostByTypeState, SelectDateState } from "@/types";
import { UpdateFunctions } from "./useUpdateTypes";
import { ApiFunctions } from "./useApiTypes";
import { ConvertFunctions } from "./useConvertTypes";
import { useApi } from "@/hooks/useApi";
import { typeListState, monthlyCostByTypeState, userCostListState, claimState } from "@/recoil";
import { useConvert } from "./useConvert";

/**
 * 状態の更新に関するカスタムフックです。
 *
 * @returns {UpdateFunctions} 状態更新関連の関数を含むオブジェクト
 */
const useUpdate = (): UpdateFunctions => {
  const setTypeList: (value: { [key: string]: string }) => void = useSetRecoilState<{ [key: string]: string }>(
    typeListState
  );
  const setUserCostList: (value: CostState[]) => void = useSetRecoilState<CostState[]>(userCostListState);
  const setMonthlyCostByType: (value: MonthlyCostByTypeState[]) => void =
    useSetRecoilState<MonthlyCostByTypeState[]>(monthlyCostByTypeState);
  const setClaim: (value: ClaimState) => void = useSetRecoilState<ClaimState>(claimState);

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
   * 月別のユーザー毎の支出一覧を更新する関数
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
   * 月別の種別毎の支出合計を更新する関数
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
   * 月別の請求金額を更新する関数
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
    updateMonthlyCostByType,
    updateMonthlyClaim,
  };
};

export { useUpdate };
