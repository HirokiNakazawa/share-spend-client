import { Box } from "@mui/material";
import { FC } from "react";
import AriaName from "@/features/Dashboard/LeftTopAria/components/AriaName";
import PieChartContainer from "@/features/Dashboard/LeftTopAria/containers/PieChartContainer";
import AriaClaim from "@/features/Dashboard/LeftTopAria/components/AriaClaim";

const MainLeftAria: FC = () => {
  return (
    <Box sx={{ width: "70%", position: "relative" }}>
      <AriaName />
      <PieChartContainer />
      <AriaClaim />
    </Box>
  );
};

export default MainLeftAria;
