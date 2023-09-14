"use client";

import { ChangeEvent, FC } from "react";

import { useRecoilState } from "recoil";

import { editCostNameState } from "@/recoil";
import InputCostName from "@/features/Form/components/InputCostName";

/**
 * 支出編集時の支出名入力フォームコンテナコンポーネントの型定義
 *
 * @property {string} width - 入力フォームの横幅
 */
type InputEditCostNameContainerProps = {
  width: string;
};

/**
 * 支出編集時の支出名入力フォームコンテナコンポーネントです。
 *
 * @param {InputEditCostNameContainerProps} props
 */
const InputEditCostNameContainer: FC<InputEditCostNameContainerProps> = (props: InputEditCostNameContainerProps) => {
  const { width } = props;

  const [editCostName, setEditCostName] = useRecoilState<string>(editCostNameState);

  /**
   * 支出名の変更を処理するコールバック関数
   *
   * @param {ChangeEvent<HTMLInputElement>} e
   * @returns {void}
   */
  const handleChangeCostName = (e: ChangeEvent<HTMLInputElement>): void => {
    setEditCostName(e.target.value);
  };

  return (
    <InputCostName id="input-edit-cost-name" name={editCostName} width={width} handleChange={handleChangeCostName} />
  );
};

export default InputEditCostNameContainer;
