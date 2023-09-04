import { Box } from "@mui/material";
import { FC } from "react";
import AriaName from "@/features/Dashboard/LeftTopAria/components/AriaName";
import AriaClaim from "@/features/Dashboard/LeftTopAria/components/AriaClaim";
import dynamic from "next/dynamic";

const MainLeftAria: FC = () => {
  const PieChartContainer = dynamic(
    () =>
      import("@/features/Dashboard/LeftTopAria/containers/PieChartContainer"),
    { ssr: false }
  );
  return (
    <Box sx={{ width: "70%", position: "relative" }}>
      <AriaName />
      <PieChartContainer />
      <AriaClaim />
    </Box>
  );
};

export default MainLeftAria;
