"use client";

import { ChangeEvent, FC } from "react";

import { useRecoilState } from "recoil";

import { editCostState } from "@/recoil";
import InputCost from "@/features/Form/components/InputCost";

/**
 * 支出編集時の金額入力フォームコンテナコンポーネントの型定義
 *
 * @property {string} width - 入力フォームの横幅
 */
type InputEditCostContainerProps = {
  width: string;
};

/**
 * 支出編集時の金額入力フォームコンテナコンポーネントです。
 *
 * @param {InputEditCostContainerProps} props
 */
const InputEditCostContainer: FC<InputEditCostContainerProps> = (props: InputEditCostContainerProps) => {
  const { width } = props;

  const [editCost, setEditCost] = useRecoilState<string>(editCostState);

  /**
   * 支出金額の変更を処理するコールバック関数
   *
   * @param {ChangeEvent<HTMLInputElement>} e
   * @returns {void}
   */
  const handleChangeCost = (e: ChangeEvent<HTMLInputElement>): void => {
    setEditCost(e.target.value);
  };

  return <InputCost id="input-edit-cost" cost={editCost} width={width} handleChange={handleChangeCost} />;
};

export default InputEditCostContainer;
