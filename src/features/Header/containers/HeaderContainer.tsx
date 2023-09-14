"use client";

import { FC } from "react";

import { useRecoilValue } from "recoil";

import { UserState } from "@/types";
import { userState } from "@/recoil";
import Header from "@/features/Header/components/Header";

/**
 * ヘッダーコンテナコンポーネントです。
 */
const HeaderContainer: FC = () => {
  const user = useRecoilValue<UserState>(userState);

  return <Header isLoggedIn={user.isLoggedIn} name={user.name} />;
};

export default HeaderContainer;
