import { FC } from "react";

import { Paper, Typography } from "@mui/material";

import { COST_MONTHLY_LIST } from "@/config/config";
import { ariaNameStyles } from "@/features/Dashboard/styles/dashboardStyles";
import MonthlyListContainer from "@/features/Dashboard/RightTopAria/containers/MonthlyListContainer";

/**
 * 月別の種別毎支出一覧コンポーネントです。
 */
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
