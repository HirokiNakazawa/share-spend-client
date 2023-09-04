"use client";

import { costState } from "@/recoil/costState";
import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";
import InputCost from "@/features/Dashboard/RightBottomAria/components/InputCost";

const InputCostContainer: FC = () => {
  const [cost, setCost] = useRecoilState(costState);

  const handleChangeCost = (e: ChangeEvent<HTMLInputElement>) => {
    setCost(e.target.value);
  };

  return (
    <InputCost id="input-cost" cost={cost} handleChange={handleChangeCost} />
  );
};

export default InputCostContainer;
