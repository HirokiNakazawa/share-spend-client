import { ChangeEvent, FC } from "react";

import { Checkbox, FormControlLabel } from "@mui/material";

/**
 * 請求種別のチェックボックスコンポーネントの型定義
 *
 * @property {string} label - チェックボックスのラベル名
 * @property {boolean} isChecked - チェックフラグ
 * @property {(e:ChangeEvent<HTMLInputElement>)=>void} - チェックした時に発火するコールバック
 */
type CheckBillingTypeProps = {
  label: string;
  isChecked?: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 * 請求種別のチェックボックスコンポーネントです。
 *
 * @param {CheckBillingTypeProps} props
 */
const CheckBillingType: FC<CheckBillingTypeProps> = (props: CheckBillingTypeProps) => {
  const { label, isChecked, handleChange } = props;

  return (
    <FormControlLabel
      control={<Checkbox onChange={handleChange} checked={isChecked} />}
      label={label}
      labelPlacement="start"
    />
  );
};

export default CheckBillingType;
