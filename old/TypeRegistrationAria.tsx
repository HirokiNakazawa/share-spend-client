import { Paper, FormControl, Box, Typography } from "@mui/material";
import { FC } from "react";
import { TYPE_REGISTRATION } from "../src/config/config";
import { paperStyles, ariaNameStyles } from "./styles";
import TypeField from "./TypeField";
import CreateTypeButton from "./CreateTypeButton";

const TypeRegistrationAria: FC = () => {
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
          <TypeField id="type-field" />
          <CreateTypeButton />
        </Box>
      </FormControl>
    </Paper>
  );
};

export default TypeRegistrationAria;
