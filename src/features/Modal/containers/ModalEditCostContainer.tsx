"use client";

import { FC } from "react";
import { useUpdateCost } from "@/features/CostManagement/Edit/hooks/useUpdateCost";
import { useUpdate } from "@/hooks/useUpdate";
import { useRecoilValue } from "recoil";
import { modalState, selectDateState, userState } from "@/recoil";
import ModalButton from "@/features/Modal/components/ModalButton";

const ModalEditCostContainer: FC = () => {
  const modal = useRecoilValue(modalState);
  const user = useRecoilValue(userState);
  const selectDate = useRecoilValue(selectDateState);

  const updateCostService = useUpdateCost();
  const updateService = useUpdate();

  const handleUpdate = async () => {
    console.log("支出更新ボタンがクリックされました");
    await updateCostService.updateCost();
    await updateService.updateUserCostList(user.id, selectDate);
    await updateService.updateMonthlyCostByType(selectDate);
  };

  return <ModalButton text={modal.buttonText} handleClick={handleUpdate} />;
};

export default ModalEditCostContainer;
