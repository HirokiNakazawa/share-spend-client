"use client";

import { Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { useSetRecoilState } from "recoil";
import { costIsHalfState } from "@/recoil/costState";

const CheckHalfBillingContainer: FC = () => {
  const setCostIsHalf = useSetRecoilState(costIsHalfState);

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

export default CheckHalfBillingContainer;
