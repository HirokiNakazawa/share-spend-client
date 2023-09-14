"use client";

import { FC } from "react";

import { useRecoilValue } from "recoil";

import { ADD_BUTTON } from "@/config/config";
import { SelectDateState, UserState } from "@/types";
import { UpdateFunctions } from "@/hooks/useUpdateTypes";
import { CreateCostFunctions, useCreateCost } from "@/features/Dashboard/RightBottomAria/hooks/useCreateCost";
import { useUpdate } from "@/hooks/useUpdate";
import { selectDateState, userState } from "@/recoil";
import FormButton from "@/features/Form/components/FormButton";

/**
 * 支出登録エリアのコンテナコンポーネントです。
 */
const CreateCostContainer: FC = () => {
  const user = useRecoilValue<UserState>(userState);
  const selectDate = useRecoilValue<SelectDateState>(selectDateState);

  const createCostService: CreateCostFunctions = useCreateCost();
  const updateService: UpdateFunctions = useUpdate();

  /**
   * クリック時に支出を登録し、状態を更新するコールバック関数
   *
   * @returns {Promise<void>}
   */
  const handleCreateCost = async (): Promise<void> => {
    await createCostService.createCost();
    await updateService.updateUserCostList(user.id, selectDate);
    await updateService.updateMonthlyCostByType(selectDate);
    await updateService.updateMonthlyClaim(selectDate);
  };

  return <FormButton text={ADD_BUTTON} handleClick={handleCreateCost} />;
};

export default CreateCostContainer;
