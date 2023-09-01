import { Box, FormControl, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { COST_REGISTRATION_ARIA } from "../config/config";
import { ariaNameStyles, paperStyles } from "./styles";
import CostField from "./CostField";
import SelectTypeField from "./SelectTypeField";
import CreateCostButton from "./CreateCostButton";
import CostNameField from "./CostNameField";
import CheckBillingTypeField from "./CostCheckField";

const CostRegistrationAria: FC = () => {
  return (
    <Paper elevation={3} sx={paperStyles}>
      <Typography sx={ariaNameStyles}>{COST_REGISTRATION_ARIA}</Typography>
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
