"use client";

import { FC } from "react";
import { useRecoilValue } from "recoil";
import { selectDateState } from "@/recoil";
import CostManagementLayout from "@/features/CostManagement/components/CostManagementLayout";

type CostManagementLayoutContainerProps = {
  page: string;
};

const CostManagementLayoutContainer: FC<CostManagementLayoutContainerProps> = (
  props
) => {
  const selectDate = useRecoilValue(selectDateState);

  return (
    <CostManagementLayout
      page={props.page}
      year={selectDate.year}
      month={selectDate.month}
    />
  );
};

export default CostManagementLayoutContainer;
