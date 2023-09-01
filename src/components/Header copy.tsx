"use client";

import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FC } from "react";
import { APP_NAME } from "../config/config";
import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil/userState";
import LogoutButton from "./LogoutButton";

const Header: FC = () => {
  const user = useRecoilValue(userState);

  return (
    // <>
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {APP_NAME}
        </Typography>
        {user.isLoggedIn ? (
          <>
            <Typography>{user.name}</Typography>
            <LogoutButton />
          </>
        ) : (
          <>
            <RegisterButton />
            <LoginButton />
          </>
        )}
      </Toolbar>
    </AppBar>
    // </>
  );
};

export default Header;