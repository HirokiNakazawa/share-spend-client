"use client";

import { FormControl, Box } from "@mui/material";
import { FC } from "react";
import AuthNameField from "./AuthNameField";
import AuthPasswordField from "./AuthPasswordField";

const ModalAuthContent: FC = () => {
  return (
    <FormControl>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <AuthNameField />
        <AuthPasswordField />
      </Box>
    </FormControl>
  );
};

export default ModalAuthContent;
