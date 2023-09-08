"use client";

import { editCostIsHalfState } from "@/recoil/editCostState";
import { Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";

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
    <FormControlLabel
      control={<Checkbox onChange={handleChange} checked={editCostIsHalf} />}
      label={props.label}
      labelPlacement="start"
    />
  );
};

export default CheckEditHalfBillingContainer;
