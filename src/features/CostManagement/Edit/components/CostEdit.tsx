import {
  editSelectTypeState,
  isEditCostState,
  modalState,
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
  editCostIdState,
  editCostIsFullState,
  editCostIsHalfState,
  editCostNameState,
  editCostState,
} from "@/recoil/editCostState";
import { EDIT_BUTTON, UPDATE_BUTTON } from "@/config/config";

const CostEdit: FC = () => {
  const typeList = useRecoilValue(typeListState);
  const userCostList = useRecoilValue(userCostListState);
  const setEditCostId = useSetRecoilState(editCostIdState);
  const setEditSelectType = useSetRecoilState(editSelectTypeState);
  const setEditCostName = useSetRecoilState(editCostNameState);
  const setEditCost = useSetRecoilState(editCostState);
  const setEditCostIsHalf = useSetRecoilState(editCostIsHalfState);
  const setEditCostIsFull = useSetRecoilState(editCostIsFullState);
  const setModal = useSetRecoilState(modalState);
  const setIsCostEdit = useSetRecoilState(isEditCostState);

  const handleEdit = (item: CostState) => {
    console.log(item);
    setEditCostId(item.id);
    setEditSelectType(typeList[item.type_id]);
    setEditCostName(item.name);
    setEditCost(String(item.cost));
    setEditCostIsHalf(item.is_half_billing == true);
    setEditCostIsFull(item.is_full_billing == true);
    setModal({
      isOpen: true,
      title: EDIT_BUTTON,
      buttonText: UPDATE_BUTTON,
      width: 1000,
    });
    setIsCostEdit(true);
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
                  {`${item.cost.toLocaleString()} 円`}
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
