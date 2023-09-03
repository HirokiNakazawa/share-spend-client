import { Paper, Typography } from "@mui/material";
import { FC } from "react";
import { ariaNameStyles } from "@/features/Dashboard/styles/dashboardStyles";
import { COST_MONTHLY_LIST } from "@/config/config";
import CostMonthlyList from "./CostMonthlyList";

const CostMonthlyListAria: FC = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "100%",
        position: "relative",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <Typography sx={ariaNameStyles}>{COST_MONTHLY_LIST}</Typography>
      <CostMonthlyList />
    </Paper>
  );
};

export default CostMonthlyListAria;
