"use client";

import { FC } from "react";
import { MONTHLY_PREDICT_COST } from "@/config/config";
import { useSummary } from "@/hooks/useSummary";
import MonthlyCost from "../components/MonthlyCost";

const MonthlyPredictCostContainer: FC = () => {
  const summary = useSummary();
  const predictCost = summary.getMonthlyPredictCost().toLocaleString();

  return <MonthlyCost title={MONTHLY_PREDICT_COST} cost={predictCost} />;
};

export default MonthlyPredictCostContainer;
