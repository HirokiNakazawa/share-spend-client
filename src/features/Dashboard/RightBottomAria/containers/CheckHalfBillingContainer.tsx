"use client";

import { ChangeEvent, FC } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { costIsHalfState } from "@/recoil";
import CheckBillingType from "@/features/Form/components/CheckBillingType";

type CheckHalfBillingContainerProps = {
  label: string;
};

const CheckHalfBillingContainer: FC<CheckHalfBillingContainerProps> = (
  props
) => {
  const [costIsHalf, setCostIsHalf] = useRecoilState(costIsHalfState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCostIsHalf(e.target.checked);
  };

  return (
    <CheckBillingType
      label={props.label}
      isChecked={costIsHalf}
      handleChange={handleChange}
    />
  );
};

export default CheckHalfBillingContainer;
