import { FC } from "react";

import { ListItemText, Typography } from "@mui/material";

/**
 * 月別の種別毎支出一覧の、種別名表示コンポーネントの型定義
 *
 * @property {string} type - 種別名
 */
type ListItemTypePorps = {
  type: string;
};

/**
 * 月別の種別毎支出一覧の、種別名表示コンポーネントです。
 *
 * @param {ListItemTotalCostProps} props
 */
const ListItemType: FC<ListItemTypePorps> = (props: ListItemTypePorps) => {
  const { type } = props;

  return <ListItemText primary={<Typography sx={{ fontSize: "20px" }}>{type}</Typography>} sx={{ width: "5vw" }} />;
};

export default ListItemType;
