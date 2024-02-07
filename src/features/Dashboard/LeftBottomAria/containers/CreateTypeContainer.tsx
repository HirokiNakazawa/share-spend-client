"use client";

import { FC } from "react";

import { CREATE_BUTTON } from "@/config/config";
import { CreateTypeFunctions, UpdateFunctions } from "@/types";
import { useCreateType } from "@/features/Dashboard/LeftBottomAria/hooks/useCreateType";
import { useUpdate } from "@/hooks/useUpdate";
import FormButton from "@/features/Form/components/FormButton";

/**
 * 種別登録エリアのコンテナコンポーネントです。
 */
const CreateTypeContainer: FC = () => {
  const createTypeService: CreateTypeFunctions = useCreateType();
  const updateService: UpdateFunctions = useUpdate();

  /**
   * クリック時に種別を登録し、状態を更新するコールバック関数
   *
   * @returns {Promise<void>}
   */
  const handleCreateType = async (): Promise<void> => {
    await createTypeService.createType();
    await updateService.updateTypeList();
  };

  return <FormButton text={CREATE_BUTTON} handleClick={handleCreateType} />;
};

export default CreateTypeContainer;
