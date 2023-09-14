"use client";

import { ChangeEvent, FC } from "react";

import { useRecoilState } from "recoil";

import { editCostIsHalfState } from "@/recoil/editCostState";
import CheckBillingType from "@/features/Form/components/CheckBillingType";

/**
 * 支出編集時の半額請求チェックボックスのコンテナコンポーネントの型定義
 *
 * @property {string} label - チェックボックスのラベル名
 */
type CheckEditHalfBillingContainerProps = {
  label: string;
};

/**
 * 支出編集時の半額請求チェックボックスのコンテナコンポーネントです。
 *
 * @param {CheckEditHalfBillingContainerProps} props
 */
const CheckEditHalfBillingContainer: FC<CheckEditHalfBillingContainerProps> = (
  props: CheckEditHalfBillingContainerProps
) => {
  const { label } = props;

  const [editCostIsHalf, setEditCostIsHalf] = useRecoilState<boolean>(editCostIsHalfState);

  /**
   * 半額請求チェックボックスの変更を処理するコールバック関数
   *
   * @param {ChangeEvent<HTMLInputElement>} e
   * @returns {void}
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEditCostIsHalf(e.target.checked);
  };

  return <CheckBillingType label={label} isChecked={editCostIsHalf} handleChange={handleChange} />;
};

export default CheckEditHalfBillingContainer;
