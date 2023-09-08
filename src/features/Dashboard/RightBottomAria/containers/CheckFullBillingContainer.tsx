"use client";

import { ChangeEvent, FC } from "react";
import { useSetRecoilState } from "recoil";
import { costIsFullState } from "@/recoil";
import CheckBillingType from "@/features/Form/components/CheckBillingType";

type CheckFullBillingContainerProps = {
  label: string;
};

const CheckFullBillingContainer: FC<CheckFullBillingContainerProps> = (
  props
) => {
  const setCostIsFull = useSetRecoilState(costIsFullState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCostIsFull(e.target.checked);
  };

  return <CheckBillingType label={props.label} handleChange={handleChange} />;
};

export default CheckFullBillingContainer;
