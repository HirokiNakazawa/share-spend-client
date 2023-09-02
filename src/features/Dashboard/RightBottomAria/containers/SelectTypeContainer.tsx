"use client";

import { selectTypeState, typeListState } from "@/recoil/typeState";
import { SelectChangeEvent } from "@mui/material";
import { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import SelectType from "../components/SelectType";

const SelectTypeContainer: FC = () => {
  const labelId = "select-type-label";
  const typeList = useRecoilValue(typeListState);
  const [selectType, setSelectType] = useRecoilState(selectTypeState);

  const handleChangeType = (e: SelectChangeEvent<string>) => {
    setSelectType(e.target.value);
  };

  return (
    <SelectType
      id="select-type"
      labelId={labelId}
      labelName="種別"
      selectType={selectType}
      typeList={typeList}
      handleChange={() => handleChangeType}
    />
  );
};

export default SelectTypeContainer;
