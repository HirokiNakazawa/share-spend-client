"use client";

import { FC } from "react";
import { useRecoilValue } from "recoil";
import {
  isEditCostState,
  isLoginState,
  isRegisterState,
  modalState,
} from "@/recoil";
import CustomModal from "@/features/Modal/components/CustomModal";

const ModalContainer: FC = () => {
  const modal = useRecoilValue(modalState);
  const isRegister = useRecoilValue(isRegisterState);
  const isLogin = useRecoilValue(isLoginState);
  const isEditCost = useRecoilValue(isEditCostState);

  return (
    <CustomModal
      isOpen={modal.isOpen}
      isRegister={isRegister}
      isLogin={isLogin}
      isEditCost={isEditCost}
      width={modal.width}
    />
  );
};

export default ModalContainer;
