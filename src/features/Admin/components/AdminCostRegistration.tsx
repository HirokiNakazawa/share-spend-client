import { FC } from "react";
import dynamic from "next/dynamic";

import { Box, FormControl } from "@mui/material";

import SelectTypeContainer from "@/features/Dashboard/RightBottomAria/containers/SelectTypeContainer";
import InputCostNameContainer from "@/features/Dashboard/RightBottomAria/containers/InputCostNameContainer";
import InputCostContainer from "@/features/Dashboard/RightBottomAria/containers/InputCostContainer";
import CheckHalfBillingContainer from "@/features/Dashboard/RightBottomAria/containers/CheckHalfBillingContainer";
import CheckFullBillingContainer from "@/features/Dashboard/RightBottomAria/containers/CheckFullBillingContainer";

/**
 * 管理者ページの支出登録エリアコンポーネントです。
 */
const AdminCostRegistration: FC = () => {
  const SelectDateContainer = dynamic(() => import("@/features/Admin/containers/AdminSelectDateContainer"), {
    ssr: false,
  });

  return (
    <Box sx={{ display: "flex", height: "15vh", alignItems: "center", justifyContent: "center" }}>
      <FormControl>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <SelectTypeContainer width="10vw" />
          <InputCostNameContainer width="15vw" />
          <InputCostContainer width="10vw" />
          <CheckHalfBillingContainer label="半額請求" />
          <CheckFullBillingContainer label="全額請求" />
          <Box sx={{ marginLeft: 2 }}>
            <SelectDateContainer />
          </Box>
        </Box>
      </FormControl>
    </Box>
  );
};

export default AdminCostRegistration;
