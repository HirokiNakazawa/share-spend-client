"use client";

import { FC } from "react";

import { SelectChangeEvent } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";

import { selectTypeState, typeListState } from "@/recoil";
import SelectType from "@/features/Form/components/SelectType";

/**
 * 支出登録の種別セレクトボックスコンテナコンポーネントの型定義
 *
 * @property {string} width - セレクトボックスの横幅
 */
type SelectTypeContainerProps = {
  width: string;
};

/**
 * 支出登録の種別セレクトボックスコンテナコンポーネントです。
 *
 * @param {SelectTypeContainerProps} props
 */
const SelectTypeContainer: FC<SelectTypeContainerProps> = (props: SelectTypeContainerProps) => {
  const { width } = props;

  const labelId = "select-type-label";
  const typeList = useRecoilValue<{ [ley: string]: string }>(typeListState);
  const [selectType, setSelectType] = useRecoilState<string>(selectTypeState);

  /**
   * 種別の変更を処理するコールバック関数
   *
   * @param {SelectChangeEvent<string>} e
   * @returns {void}
   */
  const handleChangeType = (e: SelectChangeEvent<string>): void => {
    setSelectType(e.target.value);
  };

  return (
    <SelectType
      id="select-type"
      labelId={labelId}
      labelName="種別"
      selectType={selectType}
      width={width}
      typeList={typeList}
      handleChange={handleChangeType}
    />
  );
};

export default SelectTypeContainer;
