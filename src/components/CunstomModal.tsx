"use client";

import { Box, Modal } from "@mui/material";
import { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  isLoginState,
  isRegisterState,
  modalState,
} from "../recoil/modalState";
import ModalAuthContent from "./ModalAuthContent";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";

const CustomModal: FC = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const isRegister = useRecoilValue(isRegisterState);
  const isLogin = useRecoilValue(isLoginState);

  return (
    <Modal open={modal.isOpen}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 4,
          boxShadow: 24,
          width: 500,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 5,
            p: 2,
            gap: 2,
          }}
        >
          <ModalHeader />
          {isRegister || isLogin ? <ModalAuthContent /> : null}
          <ModalFooter />
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
