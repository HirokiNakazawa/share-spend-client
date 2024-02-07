import { FC } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { SelectDateState, UpdateFunctions, UserState } from "@/types";
import { selectDateState, userState } from "@/recoil";
import { useUpdate } from "@/hooks/useUpdate";
import SelectDateButton from "../components/SelectDateButton";

/**
 * 対象年月選択ボタンコンテナコンポーネントの型定義
 *
 * @property {SelectDateState} date - 対象年月
 */
type SelectDateContainerProps = {
  date: SelectDateState;
};

/**
 * 対象年月選択ボタンコンテナコンポーネントです。
 *
 * @param {SelectDateContainerProps} props
 */
const SelectDateContainer: FC<SelectDateContainerProps> = (props: SelectDateContainerProps) => {
  const { date } = props;

  const user = useRecoilValue<UserState>(userState);
  const setSelectDate = useSetRecoilState<SelectDateState>(selectDateState);

  const updateService: UpdateFunctions = useUpdate();

  /**
   * クリック時に状態を処理するコールバック関数
   *
   * @return {Promise<void>}
   */
  const handleClick = async (): Promise<void> => {
    console.log(date);
    setSelectDate(date);
    await updateService.updateUserCostList(user.id, { year: date.year, month: date.month });
  };

  return <SelectDateButton date={date} handleClick={handleClick} />;
};

export default SelectDateContainer;
