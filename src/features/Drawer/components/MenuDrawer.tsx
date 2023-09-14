import { FC } from "react";
import Link from "next/link";

import { IconButton, Drawer, Toolbar, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { pages } from "@/config/pages";

/**
 * サイドメニューコンポーネントの型定義
 *
 * @property {boolean} isOpen - サイドメニューの開閉フラグ
 * @property {()=>void} handleToggle - サイドメニュー開閉コールバック
 */
type MenuDrawerProps = {
  isOpen: boolean;
  handleToggle: () => void;
};

/**
 * サイドメニューコンポーネントです。
 *
 * @param {MenuDrawerProps} props
 */
const MenuDrawer: FC<MenuDrawerProps> = (props: MenuDrawerProps) => {
  const { isOpen, handleToggle } = props;

  return (
    <>
      <IconButton color="inherit" onClick={handleToggle}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={handleToggle}>
        <Toolbar />
        <List>
          {pages.map((item, index) => (
            <ListItem key={index}>
              <Link href={item.url} onClick={handleToggle}>
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
