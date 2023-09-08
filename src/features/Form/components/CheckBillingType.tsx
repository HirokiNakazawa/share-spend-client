import { Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent, FC } from "react";

type CheckBillingTypeProps = {
  label: string;
  isChecked?: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CheckBillingType: FC<CheckBillingTypeProps> = (props) => {
  return (
    <FormControlLabel
      control={
        <Checkbox onChange={props.handleChange} checked={props.isChecked} />
      }
      label={props.label}
      labelPlacement="start"
    />
  );
};

export default CheckBillingType;
