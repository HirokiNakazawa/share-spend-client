"use client";

import { TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";
import { costState } from "../recoil/atom/costState";

type CostFieldProps = {
  id: string;
};

const CostField: FC<CostFieldProps> = (props) => {
  const [cost, setCost] = useRecoilState(costState);

  const handleChangeCost = (e: ChangeEvent<HTMLInputElement>) => {
    setCost(e.target.value);
  };

  return (
    <TextField
      id={props.id}
      label="支出"
      type="text"
      name="cost"
      value={cost}
      onChange={handleChangeCost}
      required
      sx={{ width: "8vw" }}
    />
  );
};

export default CostField;
