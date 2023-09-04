"use client";

import { Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { useSetRecoilState } from "recoil";
import { costIsFullState } from "@/recoil/costState";

const CheckFullBillingContainer: FC = () => {
  const setCostIsFull = useSetRecoilState(costIsFullState);

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

export default CheckFullBillingContainer;
