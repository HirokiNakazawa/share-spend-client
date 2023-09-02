"use client";

import { Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";
import { costIsFullState } from "../src/recoil/costState";

const CheckFullBillingField: FC = () => {
  const [costIsFull, setCostIsFull] = useRecoilState(costIsFullState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCostIsFull(e.target.checked);
  };

  return (
    <FormControlLabel
      control={<Checkbox onChange={handleChange} />}
      label="全額請求"
      labelPlacement="start"
    />
  );
};

export default CheckFullBillingField;
