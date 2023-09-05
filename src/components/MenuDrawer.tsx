import { IconButton, Drawer, List, ListItem } from "@mui/material";
import { FC } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

type MenuDrawerProps = {
  isOpen: boolean;
  handleToggle: () => void;
};

const MenuDrawer: FC<MenuDrawerProps> = (props) => {
  return (
    <>
      <IconButton color="inherit" onClick={props.handleToggle}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={props.isOpen} onClose={props.handleToggle}>
        <List>
          <ListItem>
            <Link href="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link href="/costs/bulk-add">支出一括登録</Link>
          </ListItem>
          <ListItem>
            <Link href="/costs/edit">支出編集</Link>
          </ListItem>
          <ListItem>
            <Link href="/fixed-cost">固定費関連</Link>
          </ListItem>
          <ListItem>
            <Link href="/past">過去データ</Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
