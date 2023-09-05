"use client";

import { FC } from "react";
import { useRecoilValue } from "recoil";
import { selectDateState } from "@/recoil/dateState";
import CostManagementLayout from "@/components/CostManagementLayout";

const CostManagementLayoutContainer: FC = () => {
  const selectDate = useRecoilValue(selectDateState);

  return (
    <CostManagementLayout year={selectDate.year} month={selectDate.month} />
  );
};

export default CostManagementLayoutContainer;
