import { FC } from "react";

import { Box, Divider } from "@mui/material";

import AdminCostRegistration from "./AdminCostRegistration";

/**
 * 管理者ページコンポーネントです。
 */
const Admin: FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <AdminCostRegistration />
      <Divider orientation="horizontal" sx={{ border: "1px solid lightGray" }} />
    </Box>
  );
};

export default Admin;
