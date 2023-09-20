import { FC } from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";

import MenuDrawerContainer from "@/features/Drawer/containers/MenuDrawerContainer";
import LoggedInUser from "@/features/Authentication/components/LoggedInUser";
import Guest from "@/features/Authentication/components/Guest";

/**
 * ヘッダーコンポーネントの型定義
 *
 * @property {string} title - ヘッダータイトル
 * @property {boolean} isLoggedIn - ユーザーログインフラグ
 * @property {string} name - ログインしているユーザー名
 */
type HeaderProps = {
  title: string;
  isLoggedIn: boolean;
  name: string;
};

/**
 * ヘッダーコンポーネントです。
 *
 * @param {HeaderProps} props
 */
const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const { title, isLoggedIn, name } = props;

  return (
    <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <MenuDrawerContainer />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {isLoggedIn ? <LoggedInUser name={name} /> : <Guest />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
