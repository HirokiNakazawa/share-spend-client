"use client";

import { FC } from "react";

import { useRecoilValue } from "recoil";

import { ModalState } from "@/types";
import { isEditCostState, isEditFixedCostState, isLoginState, isRegisterState, modalState } from "@/recoil";
import CustomModal from "@/features/Modal/components/CustomModal";

/**
 * モーダルのコンテナコンポーネントです。
 */
const ModalContainer: FC = () => {
  const modal = useRecoilValue<ModalState>(modalState);
  const isRegister = useRecoilValue<boolean>(isRegisterState);
  const isLogin = useRecoilValue<boolean>(isLoginState);
  const isEditCost = useRecoilValue<boolean>(isEditCostState);
  const isEditFixedCost = useRecoilValue<boolean>(isEditFixedCostState);

  return (
    <CustomModal
      isOpen={modal.isOpen}
      isRegister={isRegister}
      isLogin={isLogin}
      isEditCost={isEditCost}
      isEditFixedCost={isEditFixedCost}
      width={modal.width}
    />
  );
};

export default ModalContainer;
