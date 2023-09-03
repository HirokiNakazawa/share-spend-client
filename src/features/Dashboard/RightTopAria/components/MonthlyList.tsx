import { Paper, Typography } from "@mui/material";
import { FC } from "react";
import { ariaNameStyles } from "../../styles/dashboardStyles";
import { COST_MONTHLY_LIST } from "@/config/config";
import MonthlyListContainer from "../containers/MonthlyListContainer";

const MonthlyList: FC = () => {
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
      <MonthlyListContainer />
    </Paper>
  );
};

export default MonthlyList;
