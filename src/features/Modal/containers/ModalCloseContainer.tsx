"use client";

import { FC } from "react";
import { useReset } from "@/hooks/useReset";
import ModalButton from "@/features/Modal/components/ModalButton";

const ModalCloseContainer: FC = () => {
  const reset = useReset();

  const handleClose = () => {
    reset.resetModalParams();
    reset.resetAuthenticationParams();
  };

  return <ModalButton text="閉じる" handleClick={handleClose} />;
};

export default ModalCloseContainer;
