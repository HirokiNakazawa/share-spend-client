"use client";

import { FC } from "react";
import { ADD_BUTTON } from "@/config/config";
import { useCreateCost } from "@/features/Dashboard/RightBottomAria/hooks/useCreateCost";
import { useUpdate } from "@/hooks/useUpdate";
import FormButton from "@/features/Dashboard/components/FormButton";
import { useRecoilValue } from "recoil";
import { selectDateState } from "@/recoil";

const CreateCostContainer: FC = () => {
  const selectDate = useRecoilValue(selectDateState);

  const createCostService = useCreateCost();
  const updateService = useUpdate();

  const handleCreateCost = async () => {
    await createCostService.createCost();
    await updateService.updateMonthlyCostByType(selectDate);
  };

  return <FormButton text={ADD_BUTTON} handleClick={handleCreateCost} />;
};

export default CreateCostContainer;
