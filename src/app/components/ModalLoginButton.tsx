"use client";

import { Button } from "@mui/material";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { modalState } from "../recoil/atom/modalState";

const ModalLoginButton: FC = () => {
  const modal = useRecoilValue(modalState);
  return (
    <Button type="submit" variant="contained" color="primary">
      {modal.buttonText}
    </Button>
  );
};

export default ModalLoginButton;
