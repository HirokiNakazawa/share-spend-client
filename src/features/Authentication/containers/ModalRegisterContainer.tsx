"use client";

import { FC } from "react";
import { useAuthentication } from "@/features/Authentication/hooks/useAuthentication";
import { useRecoilValue } from "recoil";
import { modalState } from "@/recoil";
import ModalButton from "@/features/Modal/components/ModalButton";

const ModalRegisterContainer: FC = () => {
  const modal = useRecoilValue(modalState);

  const authentication = useAuthentication();

  const handleRegister = () => {
    console.log("新規登録ボタンがクリックされました");
    authentication.register();
  };

  return <ModalButton text={modal.buttonText} handleClick={handleRegister} />;
};

export default ModalRegisterContainer;
