"use client";

import { FC } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/userState";
import Header from "@/features/Header/components/Header";

const HeaderContainer: FC = () => {
  const user = useRecoilValue(userState);

  return <Header user={user} />;
};

export default HeaderContainer;
