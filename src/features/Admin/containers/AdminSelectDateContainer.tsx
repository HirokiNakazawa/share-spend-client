"use client";

import { FC } from "react";

import { useRecoilState } from "recoil";

import { registrationDateState } from "@/recoil";
import SelectDate from "@/features/Form/components/SelectDate";

/**
 * 管理者ページのDatePickerコンテナコンポーネントです。
 */
const AdminSelectDateContainer: FC = () => {
  const [registrationDate, setRegistrationDate] = useRecoilState<Date | null>(registrationDateState);

  /**
   * 登録日付の変更を処理するコールバック関数
   *
   * @param {Date | null} date
   * @returns {void}
   */
  const handleChangeDate = (date: Date | null): void => {
    setRegistrationDate(date);
  };

  return <SelectDate label="登録日" date={registrationDate} handleChange={handleChangeDate} />;
};

export default AdminSelectDateContainer;
