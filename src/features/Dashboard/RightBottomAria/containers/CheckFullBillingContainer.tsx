"use client";

import { Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { useSetRecoilState } from "recoil";
import { costIsFullState } from "@/recoil/costState";

type CheckFullBillingContainerProps = {
  label: string;
};

const CheckFullBillingContainer: FC<CheckFullBillingContainerProps> = (
  props
) => {
  const setCostIsFull = useSetRecoilState(costIsFullState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCostIsFull(e.target.checked);
  };

  return (
    <FormControlLabel
      control={<Checkbox onChange={handleChange} />}
      label={props.label}
      labelPlacement="start"
    />
  );
};

export default CheckFullBillingContainer;
