"use client";

import { FC } from "react";

import { useRecoilValue } from "recoil";

import { MonthlyCostByTypeState } from "@/types";
import { monthlyCostByTypeState } from "@/recoil";
import MainPieChart from "@/features/Dashboard/LeftTopAria/components/MainPieChart";

/**
 * メインエリアの円グラフコンテナコンポーネントです。
 */
const PieChartContainer: FC = () => {
  const monthlyCostByType = useRecoilValue<MonthlyCostByTypeState[]>(monthlyCostByTypeState);

  return <MainPieChart data={monthlyCostByType} />;
};

export default PieChartContainer;
