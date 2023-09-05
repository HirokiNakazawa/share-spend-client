"use client";

import { List, ListItem } from "@mui/material";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { monthlyCostByTypeState } from "@/recoil";
import ListItemType from "@/features/Dashboard/RightTopAria/components/ListItemType";
import ListItemTotalCost from "@/features/Dashboard/RightTopAria/components/ListItemTotalCost";

const MonthlyListContainer: FC = () => {
  const monthlyCostByType = useRecoilValue(monthlyCostByTypeState);

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
