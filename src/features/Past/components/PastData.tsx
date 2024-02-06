import { FC } from "react";

import { Box } from "@mui/material";

const PastData: FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box>月選択</Box>
      <Box>メイン</Box>
      <Box>支出一覧</Box>
    </Box>
  );
};

export default PastData;
