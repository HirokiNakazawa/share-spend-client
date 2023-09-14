"use client";

import { FC } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { EDIT_BUTTON, UPDATE_BUTTON } from "@/config/config";
import { CostState, ModalState } from "@/types";
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

/**
 * 支出テーブルの編集ボタンコンテナコンポーネントです。
 */
const EditCostContainer: FC = () => {
  const typeList = useRecoilValue<{ [key: string]: string }>(typeListState);
  const userCostList = useRecoilValue<CostState[]>(userCostListState);

  const setEditCostId = useSetRecoilState<number>(editCostIdState);
  const setEditSelectType = useSetRecoilState<string>(editSelectTypeState);
  const setEditCostName = useSetRecoilState<string>(editCostNameState);
  const setEditCost = useSetRecoilState<string>(editCostState);
  const setEditCostIsHalf = useSetRecoilState<boolean>(editCostIsHalfState);
  const setEditCostIsFull = useSetRecoilState<boolean>(editCostIsFullState);
  const setModal = useSetRecoilState<ModalState>(modalState);
  const setIsCostEdit = useSetRecoilState<boolean>(isEditCostState);

  /**
   * クリック時にモーダルの状態を処理するコールバック関数
   *
   * @property {CostState} item - 編集対象のデータ
   * @returns {void}
   */
  const handleEdit = (item: CostState): void => {
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

  return <CostEdit typeList={typeList} costList={userCostList} handleEdit={handleEdit} />;
};

export default EditCostContainer;
