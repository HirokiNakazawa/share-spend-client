import { ChangeEvent, FC } from "react";

import { TextField } from "@mui/material";

/**
 * 種別名の入力フォームコンポーネントの型定義
 *
 * @property {string} id - テキストフィールドの固有ID
 * @property {string} type - 種別名
 * @property {(e: ChangeEvent<HTMLInputElement>) => void} handleChange - 入力時に発火するコールバック
 */
type InputTypeProps = {
  id: string;
  type: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 * 種別名の入力フォームコンポーネントです。
 *
 * @param {InputTypeProps} props
 */
const InputType: FC<InputTypeProps> = (props: InputTypeProps) => {
  const { id, type, handleChange } = props;

  return (
    <TextField
      id={id}
      label="種別"
      type="text"
      name="type"
      value={type}
      onChange={handleChange}
      sx={{ width: "15vw" }}
      required
    />
  );
};

export default InputType;
