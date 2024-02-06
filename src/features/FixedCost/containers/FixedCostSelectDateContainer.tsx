"use client";

import { FC } from "react";

import { useRecoilState } from "recoil";

import { limitDateState } from "@/recoil";
import SelectDate from "@/features/Form/components/SelectDate";

/**
 * 固定費登録のDatePickerコンテナコンポーネントです。
 */
const FixedCostSelectDateContainer: FC = () => {
  const [limitDate, setLimitDate] = useRecoilState<Date | null>(limitDateState);

  /**
   * 期限日付の変更を処理するコールバック関数
   *
   * @param {Date | null} date
   * @returns {void}
   */
  const handleChangeDate = (date: Date | null): void => {
    setLimitDate(date);
  };

  return <SelectDate label="期限" date={limitDate} handleChange={handleChangeDate} />;
};

export default FixedCostSelectDateContainer;
