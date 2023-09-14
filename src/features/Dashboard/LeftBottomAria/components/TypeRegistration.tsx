import { FC } from "react";

import { Paper, Typography, FormControl, Box } from "@mui/material";

import { TYPE_REGISTRATION } from "@/config/config";
import { paperStyles, ariaNameStyles } from "@/features/Dashboard/styles/dashboardStyles";
import InputTypeContainer from "@/features/Dashboard/LeftBottomAria/containers/InputTypeContainer";
import CreateTypeContainer from "@/features/Dashboard/LeftBottomAria/containers/CreateTypeContainer";

/**
 * 種別登録エリアコンポーネントです。
 */
const TypeRegistration: FC = () => {
  return (
    <Paper elevation={3} sx={paperStyles}>
      <Typography sx={ariaNameStyles}>{TYPE_REGISTRATION}</Typography>
      <FormControl>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <InputTypeContainer />
          <CreateTypeContainer />
        </Box>
      </FormControl>
    </Paper>
  );
};

export default TypeRegistration;
