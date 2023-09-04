import { Box } from "@mui/material";
import { FC } from "react";
import MonthlyPredictCost from "../../../../../old/MonthlyPredictCost";
import MonthlyTotalCostContainer from "../containers/MonthlyTotalCostContainer";

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
        <MonthlyPredictCost />
      </Box>
    </Box>
  );
};

export default MainRightAria;
