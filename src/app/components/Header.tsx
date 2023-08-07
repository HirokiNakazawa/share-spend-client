"use client";

import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FC } from "react";

const Header: FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            家計簿
          </Typography>
          <Button color="inherit">新規登録</Button>
          <Button color="inherit">ログイン</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
