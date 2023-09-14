import { ChangeEvent, FC } from "react";

import { TextField } from "@mui/material";

/**
 * 支出金額の入力フォームコンポーネントの型定義
 *
 * @property {string} id - テキストフィールドの固有ID
 * @property {string} cost - 支出金額
 * @property {string} width - 入力フォームの横幅
 * @property {(e: ChangeEvent<HTMLInputElement>) => void} handleChange - 入力時に発火するコールバック
 */
type InputCostProps = {
  id: string;
  cost: string;
  width: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 * 支出金額の入力フォームコンポーネントです。
 *
 * @param {InputCostProps} props
 */
const InputCost: FC<InputCostProps> = (props: InputCostProps) => {
  const { id, cost, width, handleChange } = props;

  return (
    <TextField
      id={id}
      label="支出"
      type="text"
      name="cost"
      value={cost}
      onChange={handleChange}
      sx={{ width: width }}
      required
    />
  );
};

export default InputCost;
