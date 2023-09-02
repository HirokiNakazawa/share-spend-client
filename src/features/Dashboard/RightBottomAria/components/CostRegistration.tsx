import { Paper, Typography, FormControl, Box } from "@mui/material";
import { FC } from "react";
import { COST_REGISTRATION } from "@/config/config";
import { paperStyles, ariaNameStyles } from "../../styles/dashboardStyles";
import InputCostContainer from "../containers/InputCostContainer";
import InputCostNameContainer from "../containers/InputCostNameContainer";
import SelectTypeContainer from "../containers/SelectTypeContainer";
import CheckHalfBillingContainer from "../containers/CheckHalfBillingContainer";
import CheckFullBillingContainer from "../containers/CheckFullBillingContainer";
import CreateCostContainer from "../containers/CreateCostContainer";

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
