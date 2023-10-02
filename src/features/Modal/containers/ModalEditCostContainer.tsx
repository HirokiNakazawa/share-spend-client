"use client";

import { FC } from "react";

import { useRecoilValue } from "recoil";

import { ModalState, SelectDateState, UserState } from "@/types";
import { UpdateCostFunctions, useUpdateCost } from "@/features/CostManagement/Edit/hooks/useUpdateCost";
import { UpdateFunctions } from "@/hooks/useUpdateTypes";
import { useUpdate } from "@/hooks/useUpdate";
import { modalState, selectDateState, userState } from "@/recoil";
import ModalButton from "@/features/Modal/components/ModalButton";

/**
 * モーダルの支出更新ボタンコンテナコンポーネントです。
 */
const ModalEditCostContainer: FC = () => {
  const modal = useRecoilValue<ModalState>(modalState);
  const user = useRecoilValue<UserState>(userState);
  const selectDate = useRecoilValue<SelectDateState>(selectDateState);

  const updateCostService: UpdateCostFunctions = useUpdateCost();
  const updateService: UpdateFunctions = useUpdate();

  /**
   * クリック時に状態を処理するコールバック関数
   *
   * @returns {Promise<void>}
   */
  const handleUpdate = async (): Promise<void> => {
    console.log("支出更新ボタンがクリックされました");
    await updateCostService.updateCost();
    await updateService.updateUserCostList(user.id, selectDate);
    await updateService.updateUserFixedCostList(user.id);
    await updateService.updateMonthlyCostByType(selectDate);
  };

  return <ModalButton text={modal.buttonText} handleClick={handleUpdate} />;
};

export default ModalEditCostContainer;
