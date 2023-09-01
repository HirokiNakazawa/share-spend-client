"use client";

import { Button } from "@mui/material";
import { FC } from "react";
import { useSetRecoilState } from "recoil";
import { isRegisterState, modalState } from "../src/recoil/modalState";
import { REGISTER_BUTTON } from "../src/config/config";

const RegisterButton: FC = () => {
  const setModal = useSetRecoilState(modalState);
  const setIsRegister = useSetRecoilState(isRegisterState);

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
