"use client";

import { FC } from "react";
import { useSetRecoilState } from "recoil";
import { isLoginState, isRegisterState, modalState } from "@/recoil/modalState";
import ModalButton from "@/features/Modal/components/ModalButton";

const ModalCloseContainer: FC = () => {
  const setModal = useSetRecoilState(modalState);
  const setIsRegister = useSetRecoilState(isRegisterState);
  const setIsLogin = useSetRecoilState(isLoginState);

  const handleClose = () => {
    setModal({ isOpen: false, title: "", buttonText: "" });
    setIsRegister(false);
    setIsLogin(false);
  };

  return <ModalButton text="閉じる" handleClick={handleClose} />;
};

export default ModalCloseContainer;
