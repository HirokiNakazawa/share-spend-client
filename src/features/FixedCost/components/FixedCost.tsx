"use client";

import { FC } from "react";

import { Box, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useRecoilValue } from "recoil";
import { typeListState, userFixedCostListState } from "@/recoil";
import { CostState } from "@/types";

/**
 * 固定費関連ページコンポーネントです。
 */
const FixedCost: FC = () => {
  const typeList = useRecoilValue<{ [key: string]: string }>(typeListState);
  const userFixedCostList = useRecoilValue<CostState[]>(userFixedCostListState);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ height: "25vh" }}>登録エリア</Box>
      <Divider orientation="horizontal" sx={{ border: "1px solid lightGray" }} />
      <Box sx={{ height: "65vh" }}>
        一覧エリア
        <TableContainer sx={{ display: "flex" }}>
          <Table>
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
            <TableBody>
              {userFixedCostList.map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="center" sx={{ width: "15vw" }}>
                    {typeList[item.type_id]}
                  </TableCell>
                  <TableCell align="center" sx={{ width: "15vw" }}>
                    {item.name}
                  </TableCell>
                  <TableCell align="center" sx={{ width: "15vw" }}>{`${item.cost.toLocaleString()} 円`}</TableCell>
                  <TableCell align="center" sx={{ width: "15vw" }}>
                    {item.is_half_billing == true ? "半額" : "全額"}
                  </TableCell>
                  <TableCell align="center" sx={{ width: "15vw" }}>
                    {item.end_date != null ? item.end_date : "期限なし"}
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default FixedCost;
