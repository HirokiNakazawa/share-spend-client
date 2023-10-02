import { FC } from "react";
import dynamic from "next/dynamic";

import { Box } from "@mui/material";

import EditSelectTypeContainer from "@/features/CostManagement/Edit/containers/SelectEditTypeContainer";
import InputEditCostNameContainer from "@/features/CostManagement/Edit/containers/InputEditCostNameContainer";
import InputEditCostContainer from "@/features/CostManagement/Edit/containers/InputEditCostContainer";
import CheckEditHalfBillingContainer from "@/features/CostManagement/Edit/containers/CheckEditHalfBillingContainer";
import CheckEditFullBillingContainer from "@/features/CostManagement/Edit/containers/CheckEditFullBillingContainer";

/**
 * 固定費編集用のモーダルコンポーネントです。
 */
const ModalEditFixedCostContent: FC = () => {
  const EditSelectDateContainer = dynamic(() => import("@/features/FixedCost/containers/EditSelectDateContainer"), {
    ssr: false,
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 2 }}>
      <EditSelectTypeContainer width="8vw" />
      <InputEditCostNameContainer width="10vw" />
      <InputEditCostContainer width="8vw" />
      <CheckEditHalfBillingContainer label="半額請求" />
      <CheckEditFullBillingContainer label="全額請求" />
      <Box sx={{ marginLeft: 2 }}>
        <EditSelectDateContainer />
      </Box>
    </Box>
  );
};

export default ModalEditFixedCostContent;
