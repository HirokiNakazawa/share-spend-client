"use client";

import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { MONTHLY_PREDICT_COST } from "@/config/config";
import { mainRightAriaStyles } from "./styles";
import { useSummary } from "../src/hooks/useSummary";

const MonthlyPredictCost: FC = () => {
  const summary = useSummary();

  return (
    <Box sx={mainRightAriaStyles.box}>
      <Typography sx={mainRightAriaStyles.head}>
        {MONTHLY_PREDICT_COST}
      </Typography>
      <Typography sx={mainRightAriaStyles.body}>
        {`${summary.getMonthlyPredictCost().toLocaleString()} 円`}
      </Typography>
    </Box>
  );
};

export default MonthlyPredictCost;
