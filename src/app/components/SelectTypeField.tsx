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
import { selectTypeState, typeListState } from "../recoil/atom/typeState";

const SelectTypeField: FC = () => {
  const id = "select-type-field";
  const typeList = useRecoilValue(typeListState);
  const [selectType, setSelectType] = useRecoilState(selectTypeState);

  const handleChangeType = (e: SelectChangeEvent<string>) => {
    setSelectType(e.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="select-type-label">種別</InputLabel>
      <Select
        labelId="select-type-label"
        id={id}
        label="種別"
        name="type"
        value={selectType}
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
