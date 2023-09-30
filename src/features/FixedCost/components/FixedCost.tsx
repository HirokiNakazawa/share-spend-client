"use client";

import { FC } from "react";

import { Box, Divider, Table, TableContainer } from "@mui/material";

import FixedCostRegistration from "./FixedCostRegistration";
import FixedCostTableHeader from "./FixedCostTableHeader";
import FixedCostTableBodyContainer from "../containers/FixedCostTableBodyContainer";

/**
 * 固定費関連ページコンポーネントです。
 */
const FixedCost: FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <FixedCostRegistration />
      <Divider orientation="horizontal" sx={{ border: "1px solid lightGray" }} />
      <Box sx={{ height: "65vh" }}>
        <TableContainer sx={{ display: "flex" }}>
          <Table>
            <FixedCostTableHeader />
            <FixedCostTableBodyContainer />
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default FixedCost;
