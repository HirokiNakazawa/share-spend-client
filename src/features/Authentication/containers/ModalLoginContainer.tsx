"use client";

import { modalState } from "@/recoil/modalState";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { useAuthentication } from "../hooks/useAuthentication";
import ModalButton from "@/features/Modal/components/ModalButton";

const ModalLoginContainer: FC = () => {
  const modal = useRecoilValue(modalState);

  const authentication = useAuthentication();

  const handleLogin = () => {
    console.log("ログインボタンがクリックされました");
    authentication.login();
  };

  return <ModalButton text={modal.buttonText} handleClick={handleLogin} />;
};

export default ModalLoginContainer;
