"use client";

import { monthlyCostByTypeState } from "@/recoil/monthlyState";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import dynamic from "next/dynamic";

const PieChartContainer: FC = () => {
  const monthlyCostByType = useRecoilValue(monthlyCostByTypeState);
  const MainPieChart = dynamic(() => import("../components/MainPieChart"), {
    ssr: false,
  });

  return <MainPieChart data={monthlyCostByType} />;
};

export default PieChartContainer;
