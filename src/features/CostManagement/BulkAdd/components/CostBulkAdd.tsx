import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
} from "@mui/material";
import { FC } from "react";
import { customTheme } from "../styles/customTheme";
import CheckFullBillingContainer from "@/features/Dashboard/RightBottomAria/containers/CheckFullBillingContainer";
import CheckHalfBillingContainer from "@/features/Dashboard/RightBottomAria/containers/CheckHalfBillingContainer";
import InputCostContainer from "@/features/Dashboard/RightBottomAria/containers/InputCostContainer";
import InputCostNameContainer from "@/features/Dashboard/RightBottomAria/containers/InputCostNameContainer";
import SelectTypeContainer from "@/features/Dashboard/RightBottomAria/containers/SelectTypeContainer";

const CostBulkAdd: FC = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <TableContainer
        sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}
      >
        <Table sx={{ width: "70vw" }}>
          <TableHead>
            <TableRow>
              <TableCell align="center" width={"15vw"}>
                種別
              </TableCell>
              <TableCell align="center" width={"20vw"}>
                品名
              </TableCell>
              <TableCell align="center" width={"10vw"}>
                金額
              </TableCell>
              <TableCell align="center" width={"10vw"}>
                請求種別
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ paddingY: 0 }}>
              <TableCell>
                <SelectTypeContainer width="15vw" />
              </TableCell>
              <TableCell>
                <InputCostNameContainer width="20vw" />
              </TableCell>
              <TableCell>
                <InputCostContainer width="10vw" />
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "10vw",
                  }}
                >
                  <CheckHalfBillingContainer label="半額" />
                  <CheckFullBillingContainer label="全額" />
                </Box>
              </TableCell>
              <TableCell>
                <Button variant="contained" color="primary">
                  追加
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default CostBulkAdd;
