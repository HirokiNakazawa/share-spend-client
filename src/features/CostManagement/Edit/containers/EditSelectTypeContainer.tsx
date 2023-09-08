"use client";

import SelectType from "@/features/Dashboard/RightBottomAria/components/SelectType";
import { editSelectTypeState, typeListState } from "@/recoil";
import { SelectChangeEvent } from "@mui/material";
import { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

type EditSelectTypeContainerProps = {
  width: string;
};

const EditSelectTypeContainer: FC<EditSelectTypeContainerProps> = (props) => {
  const labelId = "edit-select-type-label";
  const typeList = useRecoilValue(typeListState);
  const [editSelectType, setEditSelectType] =
    useRecoilState(editSelectTypeState);

  const handleChangeType = (e: SelectChangeEvent<string>) => {
    setEditSelectType(e.target.value);
  };

  return (
    <SelectType
      id="edit-select-type"
      labelId={labelId}
      labelName="種別"
      selectType={editSelectType}
      width={props.width}
      typeList={typeList}
      handleChange={handleChangeType}
    />
  );
};

export default EditSelectTypeContainer;
