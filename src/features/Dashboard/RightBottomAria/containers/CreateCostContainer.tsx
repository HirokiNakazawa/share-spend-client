"use client";

import { FC } from "react";
import { ADD_BUTTON } from "@/config/config";
import { useCreateCost } from "@/features/Dashboard/RightBottomAria/hooks/useCreateCost";
import { useUpdate } from "@/hooks/useUpdate";
import { useRecoilValue } from "recoil";
import { selectDateState } from "@/recoil";
import FormButton from "@/features/Form/components/FormButton";

const CreateCostContainer: FC = () => {
  const selectDate = useRecoilValue(selectDateState);

  const createCostService = useCreateCost();
  const updateService = useUpdate();

  const handleCreateCost = async () => {
    await createCostService.createCost();
    await updateService.updateMonthlyCostByType(selectDate);
    await updateService.updateMonthlyClaim(selectDate);
  };

  return <FormButton text={ADD_BUTTON} handleClick={handleCreateCost} />;
};

export default CreateCostContainer;
