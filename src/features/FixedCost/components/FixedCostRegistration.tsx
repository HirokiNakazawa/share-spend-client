import { FC } from "react";
import dynamic from "next/dynamic";

import { Box, FormControl } from "@mui/material";

import SelectTypeContainer from "@/features/Dashboard/RightBottomAria/containers/SelectTypeContainer";
import InputCostContainer from "@/features/Dashboard/RightBottomAria/containers/InputCostContainer";
import InputCostNameContainer from "@/features/Dashboard/RightBottomAria/containers/InputCostNameContainer";
import CheckHalfBillingContainer from "@/features/Dashboard/RightBottomAria/containers/CheckHalfBillingContainer";
import CheckFullBillingContainer from "@/features/Dashboard/RightBottomAria/containers/CheckFullBillingContainer";
import CreateFixedCostContainer from "../containers/CreateFixedCostContainer";

/**
 * 固定日登録エリアコンポーネントです。
 */
const FixedCostRegistration: FC = () => {
  const SelectDateContainer = dynamic(() => import("@/features/FixedCost/containers/SelectDateContainer"), {
    ssr: false,
  });

  return (
    <Box sx={{ display: "flex", height: "25vh", alignItems: "center", justifyContent: "center" }}>
      <FormControl>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <SelectTypeContainer width="10vw" />
          <InputCostContainer width="10vw" />
          <InputCostNameContainer width="10vw" />
          <CheckHalfBillingContainer label="半額請求" />
          <CheckFullBillingContainer label="全額請求" />
          <Box sx={{ marginLeft: 2 }}>
            <SelectDateContainer />
          </Box>
          <CreateFixedCostContainer />
        </Box>
      </FormControl>
    </Box>
  );
};

export default FixedCostRegistration;
