import { FC } from "react";

import { Box, Divider } from "@mui/material";

/**
 * 固定費関連ページコンポーネントです。
 */
const FixedCost: FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ height: "25vh" }}>登録エリア</Box>
      <Divider orientation="horizontal" sx={{ border: "1px solid lightGray" }} />
      <Box sx={{ height: "65vh" }}>一覧エリア</Box>
    </Box>
  );
};

export default FixedCost;
