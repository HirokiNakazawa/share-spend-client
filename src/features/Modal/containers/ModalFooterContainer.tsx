"use client";

import { FC } from "react";
import { useRecoilValue } from "recoil";
import { isEditCostState, isLoginState, isRegisterState } from "@/recoil";
import ModalFooter from "@/features/Modal/components/ModalFooter";

const ModalFooterContainer: FC = () => {
  const isRegister = useRecoilValue(isRegisterState);
  const isLogin = useRecoilValue(isLoginState);
  const isEditCost = useRecoilValue(isEditCostState);

  return (
    <ModalFooter
      isRegister={isRegister}
      isLogin={isLogin}
      isEditCost={isEditCost}
    />
  );
};

export default ModalFooterContainer;
