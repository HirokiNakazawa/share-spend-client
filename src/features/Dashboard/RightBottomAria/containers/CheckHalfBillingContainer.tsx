"use client";

import { ChangeEvent, FC } from "react";
import { useSetRecoilState } from "recoil";
import { costIsHalfState } from "@/recoil";
import CheckBillingType from "@/features/Form/components/CheckBillingType";

type CheckHalfBillingContainerProps = {
  label: string;
};

const CheckHalfBillingContainer: FC<CheckHalfBillingContainerProps> = (
  props
) => {
  const setCostIsHalf = useSetRecoilState(costIsHalfState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCostIsHalf(e.target.checked);
  };

  return <CheckBillingType label={props.label} handleChange={handleChange} />;
};

export default CheckHalfBillingContainer;
