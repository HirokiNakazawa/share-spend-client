"use client";

import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { MONTHLY_TOTAL_COST } from "@/config/config";
import { mainRightAriaStyles } from "./styles";
import { useSummary } from "../hooks/useSummary";

const MonthlyTotalCost: FC = () => {
  const summary = useSummary();

  return (
    <Box sx={mainRightAriaStyles.box}>
      <Typography sx={mainRightAriaStyles.head}>
        {MONTHLY_TOTAL_COST}
      </Typography>
      <Typography sx={mainRightAriaStyles.body}>
        {`${summary.getMonthlyTotalCost().toLocaleString()} 円`}
      </Typography>
    </Box>
  );
};

export default MonthlyTotalCost;
