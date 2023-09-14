"use client";

import { FC } from "react";

import { List, ListItem } from "@mui/material";
import { useRecoilValue } from "recoil";

import { MonthlyCostByTypeState } from "@/types";
import { monthlyCostByTypeState } from "@/recoil";
import ListItemType from "@/features/Dashboard/RightTopAria/components/ListItemType";
import ListItemTotalCost from "@/features/Dashboard/RightTopAria/components/ListItemTotalCost";

/**
 * 月別の種別毎支出一覧コンテナコンポーネントです。
 */
const MonthlyListContainer: FC = () => {
  const monthlyCostByType = useRecoilValue<MonthlyCostByTypeState[]>(monthlyCostByTypeState);

  return (
    <List sx={{ position: "relative", top: 48, left: 16 }}>
      {monthlyCostByType.map((item) => (
        <ListItem key={item.type_id} sx={{ width: "100%" }}>
          <ListItemType type={item.type_name} />
          <ListItemTotalCost totalCost={item.total_cost} />
        </ListItem>
      ))}
    </List>
  );
};

export default MonthlyListContainer;
