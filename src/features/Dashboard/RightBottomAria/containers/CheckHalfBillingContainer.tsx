"use client";

import { ChangeEvent, FC } from "react";

import { useRecoilState } from "recoil";

import { costIsHalfState } from "@/recoil";
import CheckBillingType from "@/features/Form/components/CheckBillingType";

/**
 * 支出登録時の半額請求チェックボックスのコンテナコンポーネントの型定義
 *
 * @property {string} label - チェックボックスのラベル名
 */
type CheckHalfBillingContainerProps = {
  label: string;
};

/**
 * 支出登録時の半額請求チェックボックスのコンテナコンポーネントです。
 *
 * @param {CheckHalfBillingContainerProps} props
 */
const CheckHalfBillingContainer: FC<CheckHalfBillingContainerProps> = (props: CheckHalfBillingContainerProps) => {
  const { label } = props;

  const [costIsHalf, setCostIsHalf] = useRecoilState<boolean>(costIsHalfState);

  /**
   * 半額請求チェックボックスの変更を処理するコールバック関数
   *
   * @param {ChangeEvent<HTMLInputElement>} e
   * @returns {void}
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCostIsHalf(e.target.checked);
  };

  return <CheckBillingType label={label} isChecked={costIsHalf} handleChange={handleChange} />;
};

export default CheckHalfBillingContainer;
