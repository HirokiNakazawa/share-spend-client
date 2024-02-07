"use client";

import { ChangeEvent, FC } from "react";

import { useRecoilState } from "recoil";

import { costIsFullState } from "@/recoil";
import CheckBillingType from "@/features/Form/components/CheckBillingType";

/**
 * 支出登録時の全額請求チェックボックスのコンテナコンポーネントの型定義
 *
 * @property {string} label - チェックボックスのラベル名
 */
type CheckFullBillingContainerProps = {
  label: string;
};

/**
 * 支出登録時の全額請求チェックボックスのコンテナコンポーネントです。
 *
 * @param {CheckFullBillingContainerProps} props
 */
const CheckFullBillingContainer: FC<CheckFullBillingContainerProps> = (props: CheckFullBillingContainerProps) => {
  const { label } = props;

  const [costIsFull, setCostIsFull] = useRecoilState<boolean>(costIsFullState);

  /**
   * 全額請求チェックボックスの変更を処理するコールバック関数
   *
   * @param {ChangeEvent<HTMLInputElement>} e
   * @returns {void}
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCostIsFull(e.target.checked);
  };

  return <CheckBillingType label={label} isChecked={costIsFull} handleChange={handleChange} />;
};

export default CheckFullBillingContainer;
