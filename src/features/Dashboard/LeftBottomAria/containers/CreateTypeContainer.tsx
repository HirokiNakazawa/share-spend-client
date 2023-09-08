"use client";

import { FC } from "react";
import { CREATE_BUTTON } from "@/config/config";
import { useCreateType } from "@/features/Dashboard/LeftBottomAria/hooks/useCreateType";
import { useUpdate } from "@/hooks/useUpdate";
import FormButton from "@/features/Form/components/FormButton";

const CreateTypeContainer: FC = () => {
  const createTypeService = useCreateType();
  const updateService = useUpdate();

  const handleCreateType = async () => {
    await createTypeService.createType();
    await updateService.updateTypeList();
  };

  return <FormButton text={CREATE_BUTTON} handleClick={handleCreateType} />;
};

export default CreateTypeContainer;
