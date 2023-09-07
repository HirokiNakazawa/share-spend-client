import { TableCell, TableHead, TableRow } from "@mui/material";
import { FC } from "react";

const CostManagementTableHeader: FC = () => {
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
        <TableCell align="center" sx={{ width: "15vw" }}>
          編集
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default CostManagementTableHeader;
