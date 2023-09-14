import { ChangeEvent, FC } from "react";

import { TextField } from "@mui/material";

/**
 * 支出名の入力フォームコンポーネントの型定義
 *
 * @property {string} id - テキストフィールドの固有ID
 * @property {string} name - 支出名
 * @property {string} width - 入力フォームの横幅
 * @property {(e: ChangeEvent<HTMLInputElement>) => void} handleChange - 入力時に発火するコールバック
 */
type InputCostNameProps = {
  id: string;
  name: string;
  width: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 * 支出名の入力フォームコンポーネントです。
 *
 * @param {InputCostNameProps} props
 */
const InputCostName: FC<InputCostNameProps> = (props: InputCostNameProps) => {
  const { id, name, width, handleChange } = props;

  return (
    <TextField
      id={id}
      label="品名"
      type="text"
      name="costName"
      value={name}
      onChange={handleChange}
      sx={{ width: width }}
      required
    />
  );
};

export default InputCostName;
