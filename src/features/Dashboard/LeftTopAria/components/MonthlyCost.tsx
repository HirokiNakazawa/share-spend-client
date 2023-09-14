"use client";

import { FC } from "react";

import { Box, Typography } from "@mui/material";

import { mainRightAriaStyles } from "../../styles/dashboardStyles";

/**
 * 今月の支出金額・予想金額の表示領域コンポーネントの型定義
 *
 * @property {string} title - タイトル名
 * @property {string} cost - 金額
 */
type MonthlyCostProps = {
  title: string;
  cost: string;
};

/**
 * 今月の支出金額・予想金額の表示領域コンポーネントです。
 *
 * @param {MonthlyCostProps} props
 */
const MonthlyCost: FC<MonthlyCostProps> = (props: MonthlyCostProps) => {
  const { title, cost } = props;

  return (
    <Box sx={mainRightAriaStyles.box}>
      <Typography sx={mainRightAriaStyles.head}>{title}</Typography>
      <Typography sx={mainRightAriaStyles.body}>{`${cost} 円`}</Typography>
    </Box>
  );
};

export default MonthlyCost;
