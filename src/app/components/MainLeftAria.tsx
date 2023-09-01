import { Box } from "@mui/material";
import { FC } from "react";
import MainAriaName from "./MainAriaName";
import dynamic from "next/dynamic";
import MainAriaClaim from "./MainAriaClaim";

const MainLeftAria: FC = () => {
  const MainPieChart = dynamic(() => import("./MainPieChart"), { ssr: false });

  return (
    <Box sx={{ width: "70%", position: "relative" }}>
      <MainAriaName />
      <MainPieChart />
      <MainAriaClaim />
    </Box>
  );
};

export default MainLeftAria;
