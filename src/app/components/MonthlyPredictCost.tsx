import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { MONTHLY_PREDICT_COST } from "@/config/config";
import { mainRightAriaStyles } from "./styles";

const MonthlyPredictCost: FC = () => {
  return (
    <Box sx={mainRightAriaStyles.box}>
      <Typography sx={mainRightAriaStyles.head}>
        {MONTHLY_PREDICT_COST}
      </Typography>
      <Typography sx={mainRightAriaStyles.body}>10000円</Typography>
    </Box>
  );
};

export default MonthlyPredictCost;
