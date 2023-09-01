import { Box, Typography } from "@mui/material";
import { FC } from "react";
import MonthlyTotalCost from "./MonthlyTotalCost";
import MonthlyPredictCost from "./MonthlyPredictCost";

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
        <MonthlyTotalCost />
        <MonthlyPredictCost />
      </Box>
    </Box>
  );
};

export default MainRightAria;
