import { FC } from "react";

import { Box } from "@mui/material";

import EditSelectTypeContainer from "../../CostManagement/Edit/containers/SelectEditTypeContainer";
import InputEditCostNameContainer from "../../CostManagement/Edit/containers/InputEditCostNameContainer";
import InputEditCostContainer from "../../CostManagement/Edit/containers/InputEditCostContainer";
import CheckEditHalfBillingContainer from "../../CostManagement/Edit/containers/CheckEditHalfBillingContainer";
import CheckEditFullBillingContainer from "../../CostManagement/Edit/containers/CheckEditFullBillingContainer";

/**
 * 支出編集用のモーダルコンポーネントです。
 */
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
