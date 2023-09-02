"use client";

import { FC } from "react";
import { ADD_BUTTON } from "@/config/config";
import { useCreateCost } from "../hooks/useCreateCost";
import { useUpdate } from "@/hooks/useUpdate";
import FormButton from "../../components/FormButton";

const CreateCostContainer: FC = () => {
  const createCostService = useCreateCost();
  const updateService = useUpdate();

  const handleCreateCost = async () => {
    await createCostService.createCost();
    await updateService.updateMonthlyCostByType();
  };

  return <FormButton text={ADD_BUTTON} handleClick={handleCreateCost} />;
};

export default CreateCostContainer;
