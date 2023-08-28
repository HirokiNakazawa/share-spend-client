"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { typeListState } from "../recoil/atom/typeState";
import { costTypeState } from "../recoil/atom/costState";

const SelectTypeField: FC = () => {
  const id = "select-type-field";
  const typeList = useRecoilValue(typeListState);
  const [costType, setCostType] = useRecoilState(costTypeState);

  const handleChangeType = (e: SelectChangeEvent<string>) => {
    setCostType(e.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="select-type-label">種別</InputLabel>
      <Select
        labelId="select-type-label"
        id={id}
        label="種別"
        name="type"
        value={costType}
        onChange={handleChangeType}
        sx={{ width: "8vw" }}
      >
        {typeList.map((item) => (
          <MenuItem key={item.id} value={item.type}>
            {item.type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectTypeField;
