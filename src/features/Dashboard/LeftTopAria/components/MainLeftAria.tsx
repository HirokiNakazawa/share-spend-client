import { Box } from "@mui/material";
import { FC } from "react";
import dynamic from "next/dynamic";
import AriaName from "@/features/Dashboard/LeftTopAria/components/AriaName";
import AriaClaimContainer from "@/features/Dashboard/LeftTopAria/containers/AriaClaimContainer";

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
      <AriaClaimContainer />
    </Box>
  );
};

export default MainLeftAria;
