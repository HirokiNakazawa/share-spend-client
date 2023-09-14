import { FC } from "react";

import { Box } from "@mui/material";

import MonthlyTotalCostContainer from "@/features/Dashboard/LeftTopAria/containers/MonthlyTotalCostContainer";
import MonthlyPredictCostContainer from "@/features/Dashboard/LeftTopAria/containers/MonthlyPredictCostContainer";

/**
 * メインエリアの右側のコンポーネントです。
 */
const MainRightAria: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "30%",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <MonthlyTotalCostContainer />
        <MonthlyPredictCostContainer />
      </Box>
    </Box>
  );
};

export default MainRightAria;
