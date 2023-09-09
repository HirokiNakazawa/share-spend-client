"use client";

import { FC } from "react";
import { EDIT_BUTTON, UPDATE_BUTTON } from "@/config/config";
import { CostState } from "@/types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  typeListState,
  userCostListState,
  editCostIdState,
  editSelectTypeState,
  editCostNameState,
  editCostState,
  editCostIsHalfState,
  editCostIsFullState,
  modalState,
  isEditCostState,
} from "@/recoil";
import CostEdit from "@/features/CostManagement/Edit/components/CostEdit";

const CostEditContainer: FC = () => {
  const typeList = useRecoilValue(typeListState);
  const userCostList = useRecoilValue(userCostListState);
  const setEditCostId = useSetRecoilState(editCostIdState);
  const setEditSelectType = useSetRecoilState(editSelectTypeState);
  const setEditCostName = useSetRecoilState(editCostNameState);
  const setEditCost = useSetRecoilState(editCostState);
  const setEditCostIsHalf = useSetRecoilState(editCostIsHalfState);
  const setEditCostIsFull = useSetRecoilState(editCostIsFullState);
  const setModal = useSetRecoilState(modalState);
  const setIsCostEdit = useSetRecoilState(isEditCostState);

  const handleEdit = (item: CostState) => {
    console.log(item);
    setEditCostId(item.id);
    setEditSelectType(typeList[item.type_id]);
    setEditCostName(item.name);
    setEditCost(String(item.cost));
    setEditCostIsHalf(item.is_half_billing == true);
    setEditCostIsFull(item.is_full_billing == true);
    setModal({
      isOpen: true,
      title: EDIT_BUTTON,
      buttonText: UPDATE_BUTTON,
      width: 1000,
    });
    setIsCostEdit(true);
  };

  return (
    <CostEdit
      typeList={typeList}
      costList={userCostList}
      handleEdit={handleEdit}
    />
  );
};

export default CostEditContainer;
