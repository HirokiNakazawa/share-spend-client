import { useUtils } from "./useUtils";
import { useRecoilValue } from "recoil";
import { monthlyCostByTypeState } from "../recoil";

const useSummary = () => {
  const monthlyCostByType = useRecoilValue(monthlyCostByTypeState);

  const utils = useUtils();

  const getMonthlyTotalCost = (): number => {
    const totalCost = monthlyCostByType.reduce((total, item) => {
      return total + item.total_cost;
    }, 0);
    return totalCost;
  };

  const getMonthlyPredictCost = (): number => {
    const totalCost = getMonthlyTotalCost();

    const days = new Date(utils.getFullYear(), utils.getMonth(), 0).getDate();
    const day = utils.getDate();
    const daysLeft = days - day;

    const dailyCost = totalCost / day;
    const predictCost = Math.round(totalCost + dailyCost * daysLeft);

    return predictCost;
  };

  return { getMonthlyTotalCost, getMonthlyPredictCost };
};

export { useSummary };
