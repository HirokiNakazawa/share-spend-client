import { useRecoilValue } from "recoil";

import { MonthlyCostByTypeState } from "@/types";
import { SummaryFunctions } from "../types/useSummaryTypes";
import { UtilsFunctions, useUtils } from "./useUtils";
import { monthlyCostByTypeState } from "../recoil";

/**
 * 集計に関するカスタムフックです。
 *
 * @returns {SummaryFunctions}
 */
const useSummary = (): SummaryFunctions => {
  const monthlyCostByType = useRecoilValue<MonthlyCostByTypeState[]>(monthlyCostByTypeState);

  const utils: UtilsFunctions = useUtils();

  /**
   * 月別の合計支出を返却する関数
   *
   * @returns {number}
   */
  const getMonthlyTotalCost = (): number => {
    const totalCost: number = monthlyCostByType.reduce((total, item) => {
      return total + item.total_cost;
    }, 0);
    return totalCost;
  };

  /**
   * 今月の予想金額を返却する関数
   *
   * @returns {number}
   */
  const getMonthlyPredictCost = (): number => {
    const totalCost: number = getMonthlyTotalCost();

    const days: number = new Date(utils.getFullYear(), utils.getMonth(), 0).getDate();
    const day: number = utils.getDate();
    const daysLeft: number = days - day;

    const dailyCost: number = totalCost / day;
    const predictCost: number = Math.round(totalCost + dailyCost * daysLeft);

    return predictCost;
  };

  return { getMonthlyTotalCost, getMonthlyPredictCost };
};

export { useSummary };
