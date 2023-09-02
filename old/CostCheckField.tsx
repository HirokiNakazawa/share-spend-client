import CheckFullBillingField from "./CheckFullBIllingField";
import CheckHalfBillingField from "./CheckHalfBillingField";

const CheckBillingTypeField = () => {
  return (
    <>
      <CheckHalfBillingField />
      <CheckFullBillingField />
    </>
  );
};

export default CheckBillingTypeField;
