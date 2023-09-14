"use client";

import { ChangeEvent, FC } from "react";

import { useRecoilState } from "recoil";

import { costNameState } from "@/recoil";
import InputCostName from "@/features/Form/components/InputCostName";

/**
 * 支出名の入力フォームコンテナコンポーネントの型定義
 *
 * @property {string} width - 入力フォームの横幅
 */
type InputCostNameContainerProps = {
  width: string;
};

/**
 * 支出名の入力フォームコンテナコンポーネントです。
 *
 * @param {InputCostNameContainerProps} props
 */
const InputCostNameContainer: FC<InputCostNameContainerProps> = (props: InputCostNameContainerProps) => {
  const { width } = props;

  const [costName, setCostName] = useRecoilState<string>(costNameState);

  /**
   * 支出名の変更を処理するコールバック関数
   *
   * @param {ChangeEvent<HTMLInputElement>} e
   * @returns {void}
   */
  const handleChangeCostName = (e: ChangeEvent<HTMLInputElement>): void => {
    setCostName(e.target.value);
  };

  return <InputCostName id="input-cost-name" name={costName} width={width} handleChange={handleChangeCostName} />;
};

export default InputCostNameContainer;
