"use client";

import { FC } from "react";

import { useRecoilValue } from "recoil";

import { SelectDateState } from "@/types";
import { selectDateState } from "@/recoil";
import CostManagementLayout from "@/features/CostManagement/components/CostManagementLayout";

/**
 * 支出一括登録・支出編集に関するレイアウトのコンテナコンポーネントの型定義
 *
 * @property {string} page - 表示するページ内容
 */
type CostManagementLayoutContainerProps = {
  page: string;
};

/**
 * 支出一括登録・支出編集に関するレイアウトのコンテナコンポーネントです。
 *
 * @param {CostManagementLayoutContainerProps} props
 */
const CostManagementLayoutContainer: FC<CostManagementLayoutContainerProps> = (
  props: CostManagementLayoutContainerProps
) => {
  const { page } = props;

  const selectDate = useRecoilValue<SelectDateState>(selectDateState);

  return <CostManagementLayout page={page} year={selectDate.year} month={selectDate.month} />;
};

export default CostManagementLayoutContainer;
