"use client";

import { Box, Modal } from "@mui/material";
import { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  isLoginModalState,
  isRegisterModalState,
  modalState,
} from "../recoil/atom/modalState";
import ModalAuthContent from "./ModalAuthContent";
import ModalHeader from "./ModalHeader";

const CustomModal: FC = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const isRegister = useRecoilValue(isRegisterModalState);
  const isLogin = useRecoilValue(isLoginModalState);

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
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
