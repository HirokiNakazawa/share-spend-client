import { FC } from "react";

import { Paper, Box } from "@mui/material";

import MainLeftAria from "@/features/Dashboard/LeftTopAria/components/MainLeftAria";
import MainRightAria from "@/features/Dashboard/LeftTopAria/components/MainRightAria";

/**
 * メインエリアコンポーネントです。
 */
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
