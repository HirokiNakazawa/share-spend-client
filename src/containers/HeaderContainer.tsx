"use client";

import { userState } from "@/recoil/userState";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import Header from "@/components/Header";

const HeaderContainer: FC = () => {
  const user = useRecoilValue(userState);

  return <Header user={user} />;
};

export default HeaderContainer;
