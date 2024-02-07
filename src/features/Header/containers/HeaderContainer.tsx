"use client";

import { FC } from "react";

import { useRecoilValue } from "recoil";

import { UserState } from "@/types";
import { userState } from "@/recoil";
import Header from "@/features/Header/components/Header";

/**
 * ヘッダーコンテナコンポーネントの型定義
 * @property {string} title - ヘッダーのタイトル
 */
type HeaderContainerProps = {
  title: string;
};

/**
 * ヘッダーコンテナコンポーネントです。
 *
 * @param {HeaderContainerProps} props
 */
const HeaderContainer: FC<HeaderContainerProps> = (props: HeaderContainerProps) => {
  const { title } = props;

  const user = useRecoilValue<UserState>(userState);

  return <Header title={title} isLoggedIn={user.isLoggedIn} name={user.name} />;
};

export default HeaderContainer;
