"use client";

import { Box, Typography } from "@mui/material";
import { FC } from "react";

type AriaClaimProps = {
  sender: string;
  receiver: string;
  claim: number;
};

const AriaClaim: FC<AriaClaimProps> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        height: "10%",
        bottom: 0,
        left: 0,
        gap: 1,
        p: 2,
      }}
    >
      <Typography sx={{ fontSize: "20px" }}>請求</Typography>
      <Typography sx={{ fontSize: "18px" }}>{`${props.sender} → ${
        props.receiver
      } ${props.claim.toLocaleString()} 円`}</Typography>
    </Box>
  );
};

export default AriaClaim;
