"use client";

import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { modalErrorMsgState, modalState } from "../recoil/modalState";

const ModalHeader: FC = () => {
  const modal = useRecoilValue(modalState);
  const modalErrorMsg = useRecoilValue(modalErrorMsgState);

  return (
    <>
      <Box sx={{ borderBottom: "1px solid gray" }}>
        <Typography variant="h4">{modal.title}</Typography>
      </Box>
      <Typography variant="h6" color="red">
        {modalErrorMsg}
      </Typography>
    </>
  );
};

export default ModalHeader;
