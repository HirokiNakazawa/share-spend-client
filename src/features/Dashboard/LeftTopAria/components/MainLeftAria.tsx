import { Box } from "@mui/material";
import { FC } from "react";
import AriaName from "./AriaName";
import AriaClaim from "./AriaClaim";
import PieChartContainer from "../containers/PieChartContainer";

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
