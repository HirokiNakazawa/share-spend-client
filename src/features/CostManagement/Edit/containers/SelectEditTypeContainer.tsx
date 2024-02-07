"use client";

import { FC } from "react";

import { SelectChangeEvent } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";

import { editSelectTypeState, typeListState } from "@/recoil";
import SelectType from "@/features/Form/components/SelectType";

/**
 * 支出編集の種別セレクトボックスコンテナコンポーネントの型定義
 *
 * @property {string} width - セレクトボックスの横幅
 */
type SelectEditTypeContainerProps = {
  width: string;
};

/**
 * 支出編集の種別セレクトボックスコンテナコンポーネントです。
 *
 * @param {SelectEditTypeContainerProps} props
 */
const EditSelectTypeContainer: FC<SelectEditTypeContainerProps> = (props: SelectEditTypeContainerProps) => {
  const { width } = props;

  const labelId = "edit-select-type-label";
  const typeList = useRecoilValue<{ [key: string]: string }>(typeListState);
  const [editSelectType, setEditSelectType] = useRecoilState<string>(editSelectTypeState);

  /**
   * 種別の変更を処理するコールバック関数
   *
   * @param {SelectChangeEvent<string>} e
   * @returns {void}
   */
  const handleChangeType = (e: SelectChangeEvent<string>): void => {
    setEditSelectType(e.target.value);
  };

  return (
    <SelectType
      id="edit-select-type"
      labelId={labelId}
      labelName="種別"
      selectType={editSelectType}
      width={width}
      typeList={typeList}
      handleChange={handleChangeType}
    />
  );
};

export default EditSelectTypeContainer;
