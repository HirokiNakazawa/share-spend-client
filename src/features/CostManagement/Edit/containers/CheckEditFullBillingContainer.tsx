"use client";

import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";
import { editCostIsFullState } from "@/recoil/editCostState";
import CheckBillingType from "@/features/Form/components/CheckBillingType";

type CheckEditFullBillingContainerProps = {
  label: string;
};

const CheckEditFullBillingContainer: FC<CheckEditFullBillingContainerProps> = (
  props
) => {
  const [editCostIsFull, setEditCostIsFull] =
    useRecoilState(editCostIsFullState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditCostIsFull(e.target.checked);
  };

  return (
    <CheckBillingType
      label={props.label}
      isChecked={editCostIsFull}
      handleChange={handleChange}
    />
  );
};

export default CheckEditFullBillingContainer;
