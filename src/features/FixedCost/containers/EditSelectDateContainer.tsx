"use client";

import { FC } from "react";

import { useRecoilState } from "recoil";

import { editLimitDateState } from "@/recoil";
import SelectDate from "@/features/Form/components/SelectDate";

/**
 * 固定費編集のDatePickerコンテナコンポーネントです。
 */
const EditSelectDateContainer: FC = () => {
  const [editLimitDate, setEditLimitDate] = useRecoilState<Date | null>(editLimitDateState);

  /**
   * 期限日付の変更を処理するコールバック関数
   *
   * @param {Date | null} date
   * @returns {void}
   */
  const handleChangeDate = (date: Date | null): void => {
    setEditLimitDate(date);
  };

  return <SelectDate label="期限" date={editLimitDate} handleChange={handleChangeDate} />;
};

export default EditSelectDateContainer;
