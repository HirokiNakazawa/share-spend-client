import { FC } from "react";

import { ListItemText, Typography } from "@mui/material";

/**
 * 月別の種別毎支出一覧の、支出金額合計表示コンポーネントの型定義
 *
 * @property {number} totalCost - 種別の支出金額合計
 */
type ListItemTotalCostProps = {
  totalCost: number;
};

/**
 * 月別の種別毎支出一覧の、支出金額合計表示コンポーネントです。
 *
 * @param {ListItemTotalCostProps} props
 */
const ListItemTotalCost: FC<ListItemTotalCostProps> = (props: ListItemTotalCostProps) => {
  const { totalCost } = props;

  return (
    <ListItemText
      primary={<Typography sx={{ fontSize: "20px" }}>{`${totalCost.toLocaleString()} 円`}</Typography>}
      sx={{ width: "5vw", textAlign: "right", marginRight: 10 }}
    />
  );
};

export default ListItemTotalCost;
