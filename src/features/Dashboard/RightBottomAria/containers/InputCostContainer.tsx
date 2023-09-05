"use client";

import { costState } from "@/recoil/costState";
import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";
import InputCost from "@/features/Dashboard/RightBottomAria/components/InputCost";

type InputCostContainerProps = {
  width: string;
};

const InputCostContainer: FC<InputCostContainerProps> = (props) => {
  const [cost, setCost] = useRecoilState(costState);

  const handleChangeCost = (e: ChangeEvent<HTMLInputElement>) => {
    setCost(e.target.value);
  };

  return (
    <InputCost
      id="input-cost"
      cost={cost}
      width={props.width}
      handleChange={handleChangeCost}
    />
  );
};

export default InputCostContainer;
