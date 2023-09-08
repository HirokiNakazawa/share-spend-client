import { Box } from "@mui/material";
import { FC } from "react";
import EditSelectTypeContainer from "../Edit/containers/EditSelectTypeContainer";
import InputEditCostNameContainer from "../Edit/containers/InputEditCostNameContainer";
import InputEditCostContainer from "../Edit/containers/InputEditCostContainer";
import CheckEditHalfBillingContainer from "../Edit/containers/CheckEditHalfBillingContainer";
import CheckEditFullBillingContainer from "../Edit/containers/CheckEditFullBillingContainer";

const ModalEditCostContent: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <EditSelectTypeContainer width="8vw" />
      <InputEditCostNameContainer width="10vw" />
      <InputEditCostContainer width="8vw" />
      <CheckEditHalfBillingContainer label="半額請求" />
      <CheckEditFullBillingContainer label="全額請求" />
    </Box>
  );
};

export default ModalEditCostContent;
