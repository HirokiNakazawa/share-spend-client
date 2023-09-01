"use client";

import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { MONTHLY_TOTAL_COST } from "@/config/config";
import { mainRightAriaStyles } from "./styles";
import { useRecoilValue } from "recoil";
import { monthlyCostByTypeState } from "../recoil/atom/monthlyState";

const MonthlyTotalCost: FC = () => {
  const monthlyCostByType = useRecoilValue(monthlyCostByTypeState);

  return (
    <Box sx={mainRightAriaStyles.box}>
      <Typography sx={mainRightAriaStyles.head}>
        {MONTHLY_TOTAL_COST}
      </Typography>
      <Typography sx={mainRightAriaStyles.body}>
        {`${monthlyCostByType
          .reduce((total, item) => {
            return total + item.total_cost;
          }, 0)
          .toLocaleString()} 円`}
      </Typography>
    </Box>
  );
};

export default MonthlyTotalCost;
