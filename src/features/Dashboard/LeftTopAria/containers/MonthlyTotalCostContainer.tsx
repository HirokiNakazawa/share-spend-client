"use client";

import { FC } from "react";
import { MONTHLY_TOTAL_COST } from "@/config/config";
import { useSummary } from "@/hooks/useSummary";
import MonthlyCost from "@/features/Dashboard/LeftTopAria/components/MonthlyCost";

const MonthlyTotalCostContainer: FC = () => {
  const summary = useSummary();
  const totalCost = summary.getMonthlyTotalCost().toLocaleString();

  return <MonthlyCost title={MONTHLY_TOTAL_COST} cost={totalCost} />;
};

export default MonthlyTotalCostContainer;
