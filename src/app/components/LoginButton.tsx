"use client";

import { Button } from "@mui/material";
import { FC } from "react";
import { useSetRecoilState } from "recoil";
import { LOGIN_BUTTON } from "../../../config/config";
import { isLoginModal, modalState } from "../recoil/atom/modalState";

const LoginButton: FC = () => {
  const setModal = useSetRecoilState(modalState);
  const setIsLogin = useSetRecoilState(isLoginModal);

  const handleClick = () => {
    setModal({
      isOpen: true,
      title: LOGIN_BUTTON,
      buttonText: LOGIN_BUTTON,
    });
    setIsLogin(true);
  };

  return (
    <Button color="inherit" onClick={handleClick}>
      {LOGIN_BUTTON}
    </Button>
  );
};

export default LoginButton;
