"use client";

import { ChangeEvent, FC } from "react";

import { useRecoilState } from "recoil";

import { editCostIsFullState } from "@/recoil/editCostState";
import CheckBillingType from "@/features/Form/components/CheckBillingType";

/**
 * 支出編集時の全額請求チェックボックスのコンテナコンポーネントの型定義
 *
 * @property {string} label - チェックボックスのラベル名
 */
type CheckEditFullBillingContainerProps = {
  label: string;
};

/**
 * 支出編集時の全額請求チェックボックスのコンテナコンポーネントです。
 *
 * @param {CheckEditFullBillingContainerProps} props
 */
const CheckEditFullBillingContainer: FC<CheckEditFullBillingContainerProps> = (
  props: CheckEditFullBillingContainerProps
) => {
  const { label } = props;

  const [editCostIsFull, setEditCostIsFull] = useRecoilState<boolean>(editCostIsFullState);

  /**
   * 全額請求チェックボックスの変更を処理するコールバック関数
   *
   * @param {ChangeEvent<HTMLInputElement>} e
   * @returns {void}
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEditCostIsFull(e.target.checked);
  };

  return <CheckBillingType label={label} isChecked={editCostIsFull} handleChange={handleChange} />;
};

export default CheckEditFullBillingContainer;
