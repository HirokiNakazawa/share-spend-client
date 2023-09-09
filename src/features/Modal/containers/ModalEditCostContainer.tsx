"use client";

import { useUpdateCost } from "@/features/CostManagement/Edit/hooks/useUpdateCost";
import { modalState } from "@/recoil";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import ModalButton from "../components/ModalButton";

const ModalEditCostContainer: FC = () => {
  const modal = useRecoilValue(modalState);

  const updateCostService = useUpdateCost();

  const handleUpdate = () => {
    console.log("支出更新ボタンがクリックされました");
    updateCostService.updateCost();
  };

  return <ModalButton text={modal.buttonText} handleClick={handleUpdate} />;
};

export default ModalEditCostContainer;
