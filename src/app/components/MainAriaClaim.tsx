import { Box, Typography } from "@mui/material";
import { FC } from "react";

const MainAriaClaim: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        height: "10%",
        bottom: 0,
        left: 0,
        p: 2,
      }}
    >
      <Typography sx={{ fontSize: "20px" }}>請求</Typography>
      <Typography sx={{ fontSize: "20px" }}>ぴよこ → わんこ 8000円</Typography>
    </Box>
  );
};

export default MainAriaClaim;
