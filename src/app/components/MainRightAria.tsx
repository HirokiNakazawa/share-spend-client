import { Box, Typography } from "@mui/material";
import { FC } from "react";

const MainRightAria: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "30%",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Box>
          <Typography sx={{ fontSize: "24px" }}>今月の支出</Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "24px" }}>今月の予想</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MainRightAria;
