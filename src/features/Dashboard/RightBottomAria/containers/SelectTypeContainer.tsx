"use client";

import { SelectChangeEvent } from "@mui/material";
import { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectTypeState, typeListState } from "@/recoil";
import SelectType from "@/features/Dashboard/RightBottomAria/components/SelectType";

type SelectTypeContainerProps = {
  width: string;
};

const SelectTypeContainer: FC<SelectTypeContainerProps> = (props) => {
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
      width={props.width}
      typeList={typeList}
      handleChange={handleChangeType}
    />
  );
};

export default SelectTypeContainer;
