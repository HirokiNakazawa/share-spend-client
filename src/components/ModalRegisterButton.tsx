"use client";

import { Button } from "@mui/material";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { useAuthentication } from "../hooks/useAuthentication";
import { modalState } from "../recoil/modalState";

const ModalRegisterButton: FC = () => {
  const modal = useRecoilValue(modalState);

  const authentication = useAuthentication();

  const handleSubmit = () => {
    console.log("新規登録ボタンがクリックされました");
    authentication.register();
  };

  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      onClick={handleSubmit}
    >
      {modal.buttonText}
    </Button>
  );
};

export default ModalRegisterButton;
