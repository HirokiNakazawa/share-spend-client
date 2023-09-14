import { FC } from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";

import { APP_NAME } from "@/config/config";
import MenuDrawerContainer from "@/features/Drawer/containers/MenuDrawerContainer";
import LoggedInUser from "@/features/Authentication/components/LoggedInUser";
import Guest from "@/features/Authentication/components/Guest";

/**
 * ヘッダーコンポーネントのプロパティ型
 *
 * @property {boolean} isLoggedIn - ユーザーログインフラグ
 * @property {string} name - ログインしているユーザー名
 */
type HeaderProps = {
  isLoggedIn: boolean;
  name: string;
};

/**
 * ヘッダーコンポーネントです。
 *
 * @param {HeaderProps} props
 */
const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const { isLoggedIn, name } = props;

  return (
    <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <MenuDrawerContainer />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {APP_NAME}
        </Typography>
        {isLoggedIn ? <LoggedInUser name={name} /> : <Guest />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
