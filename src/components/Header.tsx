import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FC } from "react";
import { APP_NAME } from "../config/config";
import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton";
import { UserState } from "@/types";
import LoggedInUser from "../features/Authentication/components/LoggedInUser";

const Header: FC<{ user: UserState }> = ({ user }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {APP_NAME}
        </Typography>
        {user.isLoggedIn ? (
          <LoggedInUser name={user.name} />
        ) : (
          <>
            <RegisterButton />
            <LoginButton />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
