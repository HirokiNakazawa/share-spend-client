"use client";

import { TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";
import { costNameState } from "../recoil/atom/costState";

type CostNameFieldProps = {
  id: string;
};

const CostNameField: FC<CostNameFieldProps> = (props) => {
  const [costName, setCostName] = useRecoilState(costNameState);

  const handleChangeCostName = (e: ChangeEvent<HTMLInputElement>) => {
    setCostName(e.target.value);
  };

  return (
    <TextField
      id={props.id}
      label="品名"
      type="text"
      name="costName"
      value={costName}
      onChange={handleChangeCostName}
      required
      sx={{ width: "10vw" }}
    />
  );
};

export default CostNameField;
