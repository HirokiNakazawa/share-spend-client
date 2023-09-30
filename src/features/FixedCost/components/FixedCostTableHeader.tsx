import { FC } from "react";

import { TableCell, TableHead, TableRow } from "@mui/material";

/**
 * 固定費一覧のテーブルヘッダーコンポーネントです。
 */
const FixedCostTableHeader: FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center" sx={{ width: "15vw" }}>
          種別
        </TableCell>
        <TableCell align="center" sx={{ width: "20vw" }}>
          品名
        </TableCell>
        <TableCell align="center" sx={{ width: "10vw" }}>
          金額
        </TableCell>
        <TableCell align="center" sx={{ width: "10vw" }}>
          請求種別
        </TableCell>
        <TableCell align="center" sx={{ width: "10vw" }}>
          期限
        </TableCell>
        <TableCell align="center" sx={{ width: "15vw" }}>
          編集
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default FixedCostTableHeader;
