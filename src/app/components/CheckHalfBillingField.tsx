"use client";

import { Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";
import { costIsHalfState } from "../recoil/atom/costState";

const CheckHalfBillingField: FC = () => {
  const [costIsHalf, setCostIsHalf] = useRecoilState(costIsHalfState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCostIsHalf(e.target.checked);
  };

  return (
    <FormControlLabel
      control={<Checkbox onChange={handleChange} />}
      label="半額請求"
      labelPlacement="start"
    />
  );
};

export default CheckHalfBillingField;
