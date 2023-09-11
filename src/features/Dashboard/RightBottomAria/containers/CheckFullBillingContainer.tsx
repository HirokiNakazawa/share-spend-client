"use client";

import { ChangeEvent, FC } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { costIsFullState } from "@/recoil";
import CheckBillingType from "@/features/Form/components/CheckBillingType";

type CheckFullBillingContainerProps = {
  label: string;
};

const CheckFullBillingContainer: FC<CheckFullBillingContainerProps> = (
  props
) => {
  const [costIsFull, setCostIsFull] = useRecoilState(costIsFullState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCostIsFull(e.target.checked);
  };

  return (
    <CheckBillingType
      label={props.label}
      isChecked={costIsFull}
      handleChange={handleChange}
    />
  );
};

export default CheckFullBillingContainer;
