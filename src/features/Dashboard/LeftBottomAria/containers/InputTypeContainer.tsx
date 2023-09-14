"use client";

import { ChangeEvent, FC } from "react";

import { useRecoilState } from "recoil";

import { registerTypeState } from "@/recoil";
import InputType from "@/features/Form/components/InputType";

/**
 * 種別の入力フォームコンテナコンポーネントです。
 */
const InputTypeContainer: FC = () => {
  const [type, setType] = useRecoilState<string>(registerTypeState);

  /**
   * 種別名の変更を処理するコールバック関数
   *
   * @param {ChangeEvent<HTMLInputElement>} e
   * @returns {void}
   */
  const handleChangeType = (e: ChangeEvent<HTMLInputElement>): void => {
    setType(e.target.value);
  };

  return <InputType id="input-type" type={type} handleChange={handleChangeType} />;
};

export default InputTypeContainer;
