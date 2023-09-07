import {
  editSelectTypeState,
  typeListState,
  userCostListState,
} from "@/recoil";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  ThemeProvider,
} from "@mui/material";
import { FC } from "react";
import { customTheme } from "@/features/CostManagement/styles/customTheme";
import { useRecoilValue, useSetRecoilState } from "recoil";
import CostManagementTableHeader from "@/features/CostManagement/components/CostManagementTableHeader";
import { CostState } from "@/types";
import {
  editCostIsFullState,
  editCostIsHalfState,
  editCostNameState,
  editCostState,
} from "@/recoil/costEditState";

const CostEdit: FC = () => {
  const typeList = useRecoilValue(typeListState);
  const userCostList = useRecoilValue(userCostListState);
  const setEditSelectType = useSetRecoilState(editSelectTypeState);
  const setEditCostName = useSetRecoilState(editCostNameState);
  const setEditCost = useSetRecoilState(editCostState);
  const setEditCostIsHalf = useSetRecoilState(editCostIsHalfState);
  const setEditCostIsFull = useSetRecoilState(editCostIsFullState);

  const handleEdit = (item: CostState) => {
    console.log(item);
    setEditSelectType(typeList[item.type_id]);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <TableContainer
        sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}
      >
        <Table sx={{ width: "70vw" }}>
          <CostManagementTableHeader />
          <TableBody>
            {userCostList.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="center" width={"15vw"}>
                  {typeList[item.type_id]}
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
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(item)}
                  >
                    編集
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default CostEdit;
