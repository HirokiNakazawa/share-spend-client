"use client";

import { FC } from "react";
import { useRecoilValue } from "recoil";
import { monthlyCostByTypeState } from "@/recoil/monthlyState";
import MainPieChart from "@/features/Dashboard/LeftTopAria/components/MainPieChart";

const PieChartContainer: FC = () => {
  const monthlyCostByType = useRecoilValue(monthlyCostByTypeState);

  return <MainPieChart data={monthlyCostByType} />;
};

export default PieChartContainer;
