"use client";

import { FC } from "react";

import { useRecoilValue } from "recoil";

import { isEditCostState, isEditFixedCostState, isLoginState, isRegisterState } from "@/recoil";
import ModalFooter from "@/features/Modal/components/ModalFooter";

/**
 * モーダルフッターコンテナコンポーネントです。
 */
const ModalFooterContainer: FC = () => {
  const isRegister = useRecoilValue<boolean>(isRegisterState);
  const isLogin = useRecoilValue<boolean>(isLoginState);
  const isEditCost = useRecoilValue<boolean>(isEditCostState);
  const isEditFixedCost = useRecoilValue<boolean>(isEditFixedCostState);

  return (
    <ModalFooter isRegister={isRegister} isLogin={isLogin} isEditCost={isEditCost} isEditFixedCost={isEditFixedCost} />
  );
};

export default ModalFooterContainer;
