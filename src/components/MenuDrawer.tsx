import { IconButton, Drawer, Toolbar, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FC } from "react";
import { pages } from "@/config/pages";
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
        <Toolbar />
        <List>
          {pages.map((item, index) => (
            <ListItem key={index}>
              <Link href={item.url} onClick={props.handleToggle}>
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
