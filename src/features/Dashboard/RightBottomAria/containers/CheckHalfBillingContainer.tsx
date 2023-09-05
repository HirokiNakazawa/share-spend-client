"use client";

import { Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { useSetRecoilState } from "recoil";
import { costIsHalfState } from "@/recoil/costState";

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

  return (
    <FormControlLabel
      control={<Checkbox onChange={handleChange} />}
      label={props.label}
      labelPlacement="start"
    />
  );
};

export default CheckHalfBillingContainer;
