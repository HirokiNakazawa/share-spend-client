"use client";

import { Box } from "@mui/material";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { isLoginState, isRegisterState } from "../recoil/atom/modalState";
import ModalLoginButton from "./ModalLoginButton";
import ModalRegisterButton from "./ModalRegisterButton";

const ModalFooter: FC = () => {
  const isRegister = useRecoilValue(isRegisterState);
  const isLogin = useRecoilValue(isLoginState);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        p: 2,
        gap: 2,
      }}
    >
      {isRegister ? <ModalRegisterButton /> : null}
      {isLogin ? <ModalLoginButton /> : null}
    </Box>
  );
};

export default ModalFooter;
