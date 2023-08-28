import { FormControlLabel, Checkbox } from "@mui/material";
import CheckFullBillingField from "./CheckFullBIllingField";
import CheckHalfBillingField from "./CheckHalfBillingField";

const CheckBillingTypeField = () => {
  return (
    <>
      <CheckFullBillingField />
      <CheckHalfBillingField />
    </>
  );
};

export default CheckBillingTypeField;
