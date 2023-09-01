import { useRecoilValue } from "recoil";
import { monthlyCostByTypeState } from "../recoil/atom/monthlyState";

const useSummary = () => {
  const monthlyCostByType = useRecoilValue(monthlyCostByTypeState);

  const getMonthlyTotalCost = () => {
    const totalCost = monthlyCostByType.reduce((total, item) => {
      return total + item.total_cost;
    }, 0);
    return totalCost;
  };

  const getMonthlyPredictCost = () => {
    const totalCost = getMonthlyTotalCost();

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const days = new Date(year, month, 0).getDate();
    const day = today.getDate();
    const daysLeft = days - day;

    const dailyCost = totalCost / day;
    const predictCost = totalCost + dailyCost * daysLeft;

    return predictCost;
  };

  return { getMonthlyTotalCost, getMonthlyPredictCost };
};

export { useSummary };
