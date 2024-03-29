import { FC } from "react";

import { Box, Divider, List, ListItem, Typography } from "@mui/material";

import { pastDateList } from "@/config/property";
import SelectDateContainer from "../containers/SelectDateContainer";
import CostBulkAdd from "@/features/CostManagement/BulkAdd/components/CostBulkAdd";
import EditCostContainer from "@/features/CostManagement/Edit/containers/EditCostContainer";

/**
 * 支出一括登録・支出編集に関するレイアウトのコンポーネントの型定義
 *
 * @property {string} page - 表示するページ内容
 * @property {number} year - 対象年
 * @property {number} month - 対象月
 */
type CostManagementLayoutProps = {
  page: string;
  year: number;
  month: number;
};

/**
 * 支出一括登録・支出編集に関するレイアウトのコンポーネントです。
 *
 * @param {CostManagementLayoutProps} props
 */
const CostManagementLayout: FC<CostManagementLayoutProps> = (props: CostManagementLayoutProps) => {
  const { page, year, month } = props;

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "8vw",
          height: "85vh",
        }}
      >
        <List>
          {pastDateList.map((item, index) => (
            <ListItem key={index} sx={{ p: 0 }}>
              <SelectDateContainer date={item} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider
        orientation="vertical"
        sx={{
          height: "90vh",
          marginTop: 2,
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
        <Typography sx={{ fontSize: "24px" }}>{`${year}年${month}月`}</Typography>
        {page === "bulkAdd" ? <CostBulkAdd /> : null}
        {page === "edit" ? <EditCostContainer /> : null}
      </Box>
    </Box>
  );
};

export default CostManagementLayout;
