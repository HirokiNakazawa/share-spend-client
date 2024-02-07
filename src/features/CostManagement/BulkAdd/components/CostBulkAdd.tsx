import { FC } from "react";

import { Box, Button, Table, TableBody, TableCell, TableContainer, TableRow, ThemeProvider } from "@mui/material";

import { customTheme } from "@/features/CostManagement/styles/customTheme";
import CostManagementTableHeader from "@/features/CostManagement/components/CostManagementTableHeader";
import SelectTypeContainer from "@/features/Dashboard/RightBottomAria/containers/SelectTypeContainer";
import InputCostNameContainer from "@/features/Dashboard/RightBottomAria/containers/InputCostNameContainer";
import InputCostContainer from "@/features/Dashboard/RightBottomAria/containers/InputCostContainer";
import CheckHalfBillingContainer from "@/features/Dashboard/RightBottomAria/containers/CheckHalfBillingContainer";
import CheckFullBillingContainer from "@/features/Dashboard/RightBottomAria/containers/CheckFullBillingContainer";

const CostBulkAdd: FC = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <TableContainer sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}>
        <Table sx={{ width: "70vw" }}>
          <CostManagementTableHeader />
          <TableBody>
            <TableRow>
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
