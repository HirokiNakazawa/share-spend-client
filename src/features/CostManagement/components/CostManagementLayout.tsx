import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { FC } from "react";
import CostBulkAdd from "../BulkAdd/components/CostBulkAdd";

type CostManagementLayoutProps = {
  year: number;
  month: number;
};

const CostManagementLayout: FC<CostManagementLayoutProps> = (props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "10vw",
          height: "85vh",
        }}
      >
        <List>
          <ListItem>
            <Typography>2023年9月</Typography>
          </ListItem>
          <ListItem>
            <Typography>2023年8月</Typography>
          </ListItem>
        </List>
      </Box>
      <Divider
        orientation="vertical"
        style={{
          height: "90vh",
          marginTop: 8,
          border: "1px solid lightGray",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "80vw",
          height: "85vh",
          p: 2,
        }}
      >
        <Typography sx={{ fontSize: "24px" }}>
          {`${props.year}年${props.month}月`}
        </Typography>
        {/* 一括登録のテーブルコンテナ */}
        <CostBulkAdd />
        {/* 登録ボタン */}
      </Box>
    </Box>
  );
};

export default CostManagementLayout;
