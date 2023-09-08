import { AppBar, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { APP_NAME } from "@/config/config";
import { UserState } from "@/types";
import MenuDrawerContainer from "@/features/Drawer/containers/MenuDrawerContainer";
import LoggedInUser from "@/features/Authentication/components/LoggedInUser";
import Guest from "@/features/Authentication/components/Guest";

const Header: FC<{ user: UserState }> = ({ user }) => {
  return (
    <AppBar
      position="static"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <MenuDrawerContainer />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {APP_NAME}
        </Typography>
        {user.isLoggedIn ? <LoggedInUser name={user.name} /> : <Guest />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
