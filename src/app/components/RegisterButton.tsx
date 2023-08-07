"use client";

import { Button } from "@mui/material";
import { FC } from "react";
import { useSetRecoilState } from "recoil";
import { REGISTER_BUTTON } from "../../../config/config";
import { modalState } from "../recoil/atom/modalState";

const RegisterButton: FC = () => {
  const setModal = useSetRecoilState(modalState);

  const handleClick = () => {
    setModal({ isOpen: true, isRegister: true });
  };

  return (
    <Button color="inherit" onClick={handleClick}>
      {REGISTER_BUTTON}
    </Button>
  );
};

export default RegisterButton;
