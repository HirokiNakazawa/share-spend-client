"use client";

import { Box, Modal } from "@mui/material";
import { FC } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../recoil/atom/modalState";
import ModalHeader from "./ModalHeader";

const CustomModal: FC = () => {
  const [modal, setModal] = useRecoilState(modalState);

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
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
