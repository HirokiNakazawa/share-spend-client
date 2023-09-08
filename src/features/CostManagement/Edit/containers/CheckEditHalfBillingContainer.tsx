"use client";

import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";
import { editCostIsHalfState } from "@/recoil/editCostState";
import CheckBillingType from "@/features/Form/components/CheckBillingType";

type CheckEditHalfBillingContainerProps = {
  label: string;
};

const CheckEditHalfBillingContainer: FC<CheckEditHalfBillingContainerProps> = (
  props
) => {
  const [editCostIsHalf, setEditCostIsHalf] =
    useRecoilState(editCostIsHalfState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditCostIsHalf(e.target.checked);
  };

  return (
    <CheckBillingType
      label={props.label}
      isChecked={editCostIsHalf}
      handleChange={handleChange}
    />
  );
};

export default CheckEditHalfBillingContainer;
