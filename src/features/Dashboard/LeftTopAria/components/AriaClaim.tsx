"use client";

import { FC } from "react";

import { Box, Typography } from "@mui/material";

/**
 * 請求金額表示領域コンポーネントの型定義
 *
 * @property {string} sender - 送金者名
 * @property {string} receiver - 受金者名
 * @property {number} claim - 請求金額
 */
type AriaClaimProps = {
  sender: string;
  receiver: string;
  claim: number;
};

/**
 * 請求金額表示領域コンポーネントです。
 *
 * @param {AriaClaimProps} props
 */
const AriaClaim: FC<AriaClaimProps> = (props: AriaClaimProps) => {
  const { sender, receiver, claim } = props;

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
      <Typography sx={{ fontSize: "18px" }}>{`${sender} → ${receiver} ${claim.toLocaleString()} 円`}</Typography>
    </Box>
  );
};

export default AriaClaim;
