"use client";

import { FC } from "react";
import { useRecoilState } from "recoil";
import { isMenuOpenState } from "@/recoil";
import MenuDrawer from "@/features/Drawer/components/MenuDrawer";

const MenuDrawerContainer: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(isMenuOpenState);

  const toggleDrawer = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return <MenuDrawer isOpen={isMenuOpen} handleToggle={toggleDrawer} />;
};

export default MenuDrawerContainer;
