"use client";

import { Drawer, List, ListItem, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

const PastDrawerContainer: FC = () => {
  const drawerWidth = 200;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <List>
        <ListItem>
          <Typography>2023年8月</Typography>
        </ListItem>
        <ListItem>
          <Typography>2023年7月</Typography>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default PastDrawerContainer;
