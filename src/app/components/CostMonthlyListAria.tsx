import { Paper, Typography } from "@mui/material";
import { FC } from "react";
import { ariaNameStyles } from "./styles";
import { COST_MONTHLY_LIST_ARIA } from "@/config/config";
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
      <Typography sx={ariaNameStyles}>{COST_MONTHLY_LIST_ARIA}</Typography>
      <CostMonthlyList />
    </Paper>
  );
};

export default CostMonthlyListAria;
