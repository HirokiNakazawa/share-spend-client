"use client";

import { FC } from "react";

import { useRecoilValue } from "recoil";

import { CostState } from "@/types";
import { typeListState, userFixedCostListState } from "@/recoil";
import FixedCostTableBody from "../components/FixedCostTableBody";

/**
 * 固定費一覧のテーブルボディコンテナコンポーネントです。
 */
const FixedCostTableBodyContainer: FC = () => {
  const typeList = useRecoilValue<{ [key: string]: string }>(typeListState);
  const userFixedCostList = useRecoilValue<CostState[]>(userFixedCostListState);

  return <FixedCostTableBody typeList={typeList} userFixedCostList={userFixedCostList} />;
};

export default FixedCostTableBodyContainer;
