import { FC } from "react";

import { Button, Table, TableBody, TableCell, TableContainer, TableRow, ThemeProvider } from "@mui/material";

import { EDIT_BUTTON } from "@/config/config";
import { CostState } from "@/types";
import { customTheme } from "@/features/CostManagement/styles/customTheme";
import CostManagementTableHeader from "@/features/CostManagement/components/CostManagementTableHeader";

/**
 * 支出一覧を表示するテーブルのコンポーネントの型定義
 *
 * @property {{[key:string]:string}} typeList - 種別一覧
 * @property {CostState[]} costList - ログインしているユーザーの支出一覧
 * @property {(item:CostState)=>void} handleEdit - 編集ボタンをクリックした時に発火するコールバック
 */
type CostEditProps = {
  typeList: { [key: string]: string };
  costList: CostState[];
  handleEdit: (item: CostState) => void;
};

/**
 * 支出一覧テーブルのコンポーネントです。
 *
 * @param {CostEditProps} props
 */
const CostEdit: FC<CostEditProps> = (props: CostEditProps) => {
  const { typeList, costList, handleEdit } = props;

  return (
    <ThemeProvider theme={customTheme}>
      <TableContainer sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}>
        <Table sx={{ width: "70vw" }}>
          <CostManagementTableHeader />
          <TableBody>
            {costList.map((item) => (
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
                  <Button variant="contained" color="primary" onClick={() => handleEdit(item)}>
                    {EDIT_BUTTON}
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
