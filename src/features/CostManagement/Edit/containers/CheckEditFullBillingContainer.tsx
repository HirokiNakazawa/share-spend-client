"use client";

import { editCostIsFullState } from "@/recoil/editCostState";
import { Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";

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
    <FormControlLabel
      control={<Checkbox onChange={handleChange} checked={editCostIsFull} />}
      label={props.label}
      labelPlacement="start"
    />
  );
};

export default CheckEditFullBillingContainer;
