import { FC } from "react";

import { Button } from "@mui/material";

import { SelectDateState } from "@/types";

/**
 * 対象年月選択ボタンコンポーネントの型定義
 *
 * @property {SelectDateState} date - 対象年月
 * @property {() => void} handleClick - クリックした時に発火するコールバック
 */
type SelectDateButtonProps = {
  date: SelectDateState;
  handleClick: () => void;
};

/**
 * 対象年月選択ボタンコンポーネントです。
 *
 * @param {SelectDateButtonProps} props
 */
const SelectDateButton: FC<SelectDateButtonProps> = (props: SelectDateButtonProps) => {
  const { date, handleClick } = props;

  return <Button sx={{ py: 0, fontSize: "20px" }} onClick={handleClick}>{`${date.year}年${date.month}月`}</Button>;
};

export default SelectDateButton;
