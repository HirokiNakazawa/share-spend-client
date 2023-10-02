"use client";

import { FC } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { EDIT_BUTTON, UPDATE_BUTTON } from "@/config/config";
import { CostState, ModalState } from "@/types";
import {
  editCostIdState,
  editCostIsFullState,
  editCostIsHalfState,
  editCostNameState,
  editCostState,
  editLimitDateState,
  editSelectTypeState,
  isEditFixedCostState,
  modalState,
  typeListState,
  userFixedCostListState,
} from "@/recoil";
import FixedCostTableBody from "../components/FixedCostTableBody";

/**
 * 固定費一覧のテーブルボディコンテナコンポーネントです。
 */
const FixedCostTableBodyContainer: FC = () => {
  const typeList = useRecoilValue<{ [key: string]: string }>(typeListState);
  const userFixedCostList = useRecoilValue<CostState[]>(userFixedCostListState);

  const setEditCostId = useSetRecoilState<number>(editCostIdState);
  const setEditSelectType = useSetRecoilState<string>(editSelectTypeState);
  const setEditCostName = useSetRecoilState<string>(editCostNameState);
  const setEditCost = useSetRecoilState<string>(editCostState);
  const setEditCostIsHalf = useSetRecoilState<boolean>(editCostIsHalfState);
  const setEditCostIsFull = useSetRecoilState<boolean>(editCostIsFullState);
  const setEditLimitDate = useSetRecoilState<Date | null>(editLimitDateState);
  const setModal = useSetRecoilState<ModalState>(modalState);
  const setIsFixedCostEdit = useSetRecoilState<boolean>(isEditFixedCostState);

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
    setEditLimitDate(item.end_date ? new Date(item.end_date) : null);
    setModal({
      isOpen: true,
      title: EDIT_BUTTON,
      buttonText: UPDATE_BUTTON,
      width: 1000,
    });
    setIsFixedCostEdit(true);
  };

  return <FixedCostTableBody typeList={typeList} userFixedCostList={userFixedCostList} handleEdit={handleEdit} />;
};

export default FixedCostTableBodyContainer;
