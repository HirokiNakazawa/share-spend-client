"use client";

import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FC } from "react";
import { APP_NAME } from "../../../config/config";
import RegisterButton from "./RegisterButton";

const Header: FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {APP_NAME}
          </Typography>
          <RegisterButton />
          <Button color="inherit">ログイン</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
