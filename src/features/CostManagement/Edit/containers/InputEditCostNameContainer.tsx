"use client";

import InputCostName from "@/features/Dashboard/RightBottomAria/components/InputCostName";
import { editCostNameState } from "@/recoil/editCostState";
import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";

type InputEditCostNameContainerProps = {
  width: string;
};

const InputEditCostNameContainer: FC<InputEditCostNameContainerProps> = (
  props
) => {
  const [editCostName, setEditCostName] = useRecoilState(editCostNameState);

  const handleChangeCostName = (e: ChangeEvent<HTMLInputElement>) => {
    setEditCostName(e.target.value);
  };

  return (
    <InputCostName
      id="input-edit-cost-name"
      name={editCostName}
      width={props.width}
      handleChange={handleChangeCostName}
    />
  );
};

export default InputEditCostNameContainer;
