"use client";

import { FC } from "react";
import { useRecoilValue } from "recoil";
import { isLoginState, isRegisterState } from "@/recoil/modalState";
import ModalFooter from "../components/ModalFooter";

const ModalFooterContainer: FC = () => {
  const isRegister = useRecoilValue(isRegisterState);
  const isLogin = useRecoilValue(isLoginState);

  return <ModalFooter isRegister={isRegister} isLogin={isLogin} />;
};

export default ModalFooterContainer;
