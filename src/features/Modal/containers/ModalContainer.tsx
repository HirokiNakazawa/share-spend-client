"use client";

import { isLoginState, isRegisterState, modalState } from "@/recoil/modalState";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import CustomModal from "@/components/CustomModal";

const ModalContainer: FC = () => {
  const modal = useRecoilValue(modalState);
  const isRegister = useRecoilValue(isRegisterState);
  const isLogin = useRecoilValue(isLoginState);

  return (
    <CustomModal
      isOpen={modal.isOpen}
      isRegister={isRegister}
      isLogin={isLogin}
    />
  );
};

export default ModalContainer;
