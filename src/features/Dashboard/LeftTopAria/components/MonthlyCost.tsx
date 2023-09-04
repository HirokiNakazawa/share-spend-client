"use client";

import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { mainRightAriaStyles } from "../../styles/dashboardStyles";

type MonthlyCostProps = {
  title: string;
  cost: string;
};

const MonthlyCost: FC<MonthlyCostProps> = (props) => {
  return (
    <Box sx={mainRightAriaStyles.box}>
      <Typography sx={mainRightAriaStyles.head}>{props.title}</Typography>
      <Typography sx={mainRightAriaStyles.body}>
        {`${props.cost} 円`}
      </Typography>
    </Box>
  );
};

export default MonthlyCost;
