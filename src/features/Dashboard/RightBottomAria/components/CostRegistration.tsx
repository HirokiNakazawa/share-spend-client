import { Paper, Typography, FormControl, Box } from "@mui/material";
import { FC } from "react";
import { COST_REGISTRATION } from "@/config/config";
import {
  paperStyles,
  ariaNameStyles,
} from "@/features/Dashboard/styles/dashboardStyles";
import SelectTypeContainer from "@/features/Dashboard/RightBottomAria/containers/SelectTypeContainer";
import InputCostNameContainer from "@/features/Dashboard/RightBottomAria/containers/InputCostNameContainer";
import InputCostContainer from "@/features/Dashboard/RightBottomAria/containers/InputCostContainer";
import CheckHalfBillingContainer from "@/features/Dashboard/RightBottomAria/containers/CheckHalfBillingContainer";
import CheckFullBillingContainer from "@/features/Dashboard/RightBottomAria/containers/CheckFullBillingContainer";
import CreateCostContainer from "@/features/Dashboard/RightBottomAria/containers/CreateCostContainer";

const CostRegistration: FC = () => {
  return (
    <Paper elevation={3} sx={paperStyles}>
      <Typography sx={ariaNameStyles}>{COST_REGISTRATION}</Typography>
      <FormControl>
        <Box sx={{ display: "flex", flexDirectrion: "row" }}>
          <SelectTypeContainer />
          <InputCostNameContainer />
          <InputCostContainer />
          <CheckHalfBillingContainer />
          <CheckFullBillingContainer />
          <CreateCostContainer />
        </Box>
      </FormControl>
    </Paper>
  );
};

export default CostRegistration;
