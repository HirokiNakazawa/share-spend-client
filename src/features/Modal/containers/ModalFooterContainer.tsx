"use client";

import { FC } from "react";

import { useRecoilValue } from "recoil";

import { isEditCostState, isLoginState, isRegisterState } from "@/recoil";
import ModalFooter from "@/features/Modal/components/ModalFooter";

/**
 * モーダルフッターコンテナコンポーネントです。
 */
const ModalFooterContainer: FC = () => {
  const isRegister = useRecoilValue<boolean>(isRegisterState);
  const isLogin = useRecoilValue<boolean>(isLoginState);
  const isEditCost = useRecoilValue<boolean>(isEditCostState);

  return <ModalFooter isRegister={isRegister} isLogin={isLogin} isEditCost={isEditCost} />;
};

export default ModalFooterContainer;
