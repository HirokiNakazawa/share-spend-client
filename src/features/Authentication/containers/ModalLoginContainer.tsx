"use client";

import { FC } from "react";
import { useAuthentication } from "@/features/Authentication/hooks/useAuthentication";
import { useRecoilValue } from "recoil";
import { modalState } from "@/recoil";
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
