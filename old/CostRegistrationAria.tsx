import { Box, FormControl, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { COST_REGISTRATION } from "../src/config/config";
import {
  paperStyles,
  ariaNameStyles,
} from "@/app/features/Dashboard/styles/dashboardStyles";
import CostField from "./CostField";
import SelectTypeField from "./SelectTypeField";
import CreateCostButton from "./CreateCostButton";
import CostNameField from "./CostNameField";
import CheckBillingTypeField from "../src/components/CostCheckField";

const CostRegistrationAria: FC = () => {
  return (
    <Paper elevation={3} sx={paperStyles}>
      <Typography sx={ariaNameStyles}>{COST_REGISTRATION}</Typography>
      <FormControl>
        <Box sx={{ display: "flex", flexDirectrion: "row" }}>
          <SelectTypeField />
          <CostNameField id="cost-name-field" />
          <CostField id="cost-field" />
          <CheckBillingTypeField />
          <CreateCostButton />
        </Box>
      </FormControl>
    </Paper>
  );
};

export default CostRegistrationAria;
