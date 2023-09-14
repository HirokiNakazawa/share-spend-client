"use client";

import { FC } from "react";

import { useRecoilState } from "recoil";

import { isMenuOpenState } from "@/recoil";
import MenuDrawer from "@/features/Drawer/components/MenuDrawer";

/**
 *
 * @returns サイドメニューコンテナコンポーネントです。
 */
const MenuDrawerContainer: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useRecoilState<boolean>(isMenuOpenState);

  /**
   * サイドメニュー開閉を処理するコールバック関数
   */
  const toggleDrawer = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return <MenuDrawer isOpen={isMenuOpen} handleToggle={toggleDrawer} />;
};

export default MenuDrawerContainer;
