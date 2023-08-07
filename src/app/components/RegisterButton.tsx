"use client";

import { Button } from "@mui/material";
import { FC } from "react";
import { useSetRecoilState } from "recoil";
import { REGISTER_BUTTON } from "../../../config/config";
import { isRegisterModalState, modalState } from "../recoil/atom/modalState";

const RegisterButton: FC = () => {
  const setModal = useSetRecoilState(modalState);
  const setIsRegister = useSetRecoilState(isRegisterModalState);

  const handleClick = () => {
    setModal({
      isOpen: true,
      title: REGISTER_BUTTON,
      buttonText: REGISTER_BUTTON,
    });
    setIsRegister(true);
  };

  return (
    <Button color="inherit" onClick={handleClick}>
      {REGISTER_BUTTON}
    </Button>
  );
};

export default RegisterButton;
