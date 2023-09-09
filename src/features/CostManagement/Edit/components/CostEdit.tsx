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
import { EDIT_BUTTON } from "@/config/config";
import { CostState } from "@/types";
import { customTheme } from "@/features/CostManagement/styles/customTheme";
import CostManagementTableHeader from "@/features/CostManagement/components/CostManagementTableHeader";

type CostEditProps = {
  typeList: { [key: string]: string };
  costList: CostState[];
  handleEdit: (item: CostState) => void;
};

const CostEdit: FC<CostEditProps> = (props) => {
  return (
    <ThemeProvider theme={customTheme}>
      <TableContainer
        sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}
      >
        <Table sx={{ width: "70vw" }}>
          <CostManagementTableHeader />
          <TableBody>
            {props.costList.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="center" width={"15vw"}>
                  {props.typeList[item.type_id]}
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
                    onClick={() => props.handleEdit(item)}
                  >
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
