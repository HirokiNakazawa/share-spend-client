"use client";

import { FC } from "react";
import { useRecoilValue } from "recoil";
import { isLoginState, isRegisterState, modalState } from "@/recoil";
import CustomModal from "@/features/Modal/components/CustomModal";

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
