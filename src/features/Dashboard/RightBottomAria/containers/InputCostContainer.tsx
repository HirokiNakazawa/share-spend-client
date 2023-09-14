"use client";

import { ChangeEvent, FC } from "react";

import { useRecoilState } from "recoil";

import { costState } from "@/recoil";
import InputCost from "@/features/Form/components/InputCost";

/**
 * 支出金額の入力フォームコンテナコンポーネントの型定義
 *
 * @property {string} width - 入力フォームの横幅
 */
type InputCostContainerProps = {
  width: string;
};

/**
 * 支出金額の入力フォームコンテナコンポーネントです。
 *
 * @param {InputCostContainerProps} props
 */
const InputCostContainer: FC<InputCostContainerProps> = (props: InputCostContainerProps) => {
  const { width } = props;

  const [cost, setCost] = useRecoilState<string>(costState);

  /**
   * 支出金額の変更を処理するコールバック関数
   *
   * @param {ChangeEvent<HTMLInputElement>} e
   * @returns {void}
   */
  const handleChangeCost = (e: ChangeEvent<HTMLInputElement>): void => {
    setCost(e.target.value);
  };

  return <InputCost id="input-cost" cost={cost} width={width} handleChange={handleChangeCost} />;
};

export default InputCostContainer;
