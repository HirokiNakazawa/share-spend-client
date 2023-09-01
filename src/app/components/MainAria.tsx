import { Paper, Box, Typography } from "@mui/material";
import { FC } from "react";
import MainLeftAria from "./MainLeftAria";
import MainRightAria from "./MainRightAria";

const MainAria: FC = () => {
  return (
    <Paper elevation={3} sx={{ height: "100%", position: "relative" }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <MainLeftAria />
        <MainRightAria />
      </Box>
    </Paper>
  );
};

export default MainAria;
