"use client";

import InputCost from "@/features/Dashboard/RightBottomAria/components/InputCost";
import { editCostState } from "@/recoil/editCostState";
import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";

type InputEditCostContainerProps = {
  width: string;
};

const InputEditCostContainer: FC<InputEditCostContainerProps> = (props) => {
  const [editCost, setEditCost] = useRecoilState(editCostState);

  const handleChangeCost = (e: ChangeEvent<HTMLInputElement>) => {
    setEditCost(e.target.value);
  };

  return (
    <InputCost
      id="input-edit-cost"
      cost={editCost}
      width={props.width}
      handleChange={handleChangeCost}
    />
  );
};

export default InputEditCostContainer;
