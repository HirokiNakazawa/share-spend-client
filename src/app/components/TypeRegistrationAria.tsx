import { Paper, FormControl, Box, Typography } from "@mui/material";
import { FC } from "react";
import { TYPE_REGISTRATION_ARIA } from "../../../config/config";
import TypeField from "./TypeField";
import CreateTypeButton from "./CreateTypeButton";

const TypeRegistrationAria: FC = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        position: "relative",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          padding: "16px",
        }}
      >
        {TYPE_REGISTRATION_ARIA}
      </Typography>
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
