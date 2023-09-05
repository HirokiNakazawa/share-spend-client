"use client";

import { costNameState } from "@/recoil/costState";
import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";
import InputCostName from "@/features/Dashboard/RightBottomAria/components/InputCostName";

type InputCostNameContainerProps = {
  width: string;
};

const InputCostNameContainer: FC<InputCostNameContainerProps> = (props) => {
  const [costName, setCostName] = useRecoilState(costNameState);

  const handleChangeCostName = (e: ChangeEvent<HTMLInputElement>) => {
    setCostName(e.target.value);
  };

  return (
    <InputCostName
      id="input-cost-name"
      name={costName}
      width={props.width}
      handleChange={handleChangeCostName}
    />
  );
};

export default InputCostNameContainer;
