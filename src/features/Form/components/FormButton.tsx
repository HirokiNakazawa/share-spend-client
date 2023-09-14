import { FC } from "react";

import { Button } from "@mui/material";

/**
 * フォームボタンコンポーネントの型定義
 *
 * @property {string} text - ボタンの表示名
 * @property {()=>void} handleClick - クリックした時に発火するコールバック
 */
type FormButtonProps = {
  text: string;
  handleClick: () => void;
};

/**
 * フォームボタンコンポーネントです。
 *
 * @param {FormButtonProps} props
 */
const FormButton: FC<FormButtonProps> = (props: FormButtonProps) => {
  const { text, handleClick } = props;

  return (
    <Button type="submit" variant="contained" color="primary" onClick={handleClick} sx={{ marginLeft: 2 }}>
      {text}
    </Button>
  );
};

export default FormButton;
