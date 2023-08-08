import { Button } from "@mui/material";
import { FC } from "react";
import { useSetRecoilState } from "recoil";
import {
  isLoginState,
  isRegisterState,
  modalState,
} from "../recoil/atom/modalState";

const ModalCloseButton: FC = () => {
  const setModal = useSetRecoilState(modalState);
  const setIsRegister = useSetRecoilState(isRegisterState);
  const setIsLogin = useSetRecoilState(isLoginState);

  const handleClose = () => {
    setModal({ isOpen: false, title: "", buttonText: "" });
    setIsRegister(false);
    setIsLogin(false);
  };

  return (
    <Button onClick={handleClose} variant="contained">
      閉じる
    </Button>
  );
};

export default ModalCloseButton;
