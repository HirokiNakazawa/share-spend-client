import { userCostListState } from "@/recoil";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FC } from "react";
import { useRecoilValue } from "recoil";

const CostEdit: FC = () => {
  const userCostList = useRecoilValue(userCostListState);

  return (
    <TableContainer
      sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}
    >
      <Table sx={{ width: "70vw" }}>
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
        <TableBody>
          {userCostList.map((item) => (
            <TableRow key={item.id}>
              <TableCell align="center" width={"15vw"}>
                {item.type_id}
              </TableCell>
              <TableCell align="center" width={"20vw"}>
                {item.name}
              </TableCell>
              <TableCell align="center" width={"10vw"}>
                {item.cost}
              </TableCell>
              <TableCell align="center" width={"10vw"}>
                {item.is_half_billing == true ? "半額" : "全額"}
              </TableCell>
              <TableCell align="center">
                <Button variant="contained" color="primary">
                  編集
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CostEdit;
