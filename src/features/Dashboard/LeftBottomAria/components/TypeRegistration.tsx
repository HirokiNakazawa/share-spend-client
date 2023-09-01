import { Paper, Typography, FormControl, Box } from "@mui/material";
import { FC } from "react";
import { TYPE_REGISTRATION } from "@/config/config";
import { paperStyles, ariaNameStyles } from "@/components/styles";
import CreateTypeContainer from "../containers/CreateTypeContainer";
import InputTypeContainer from "../containers/InputTypeContainer";

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
