import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { modalState } from "../recoil/atom/modalState";

const ModalHeader: FC = () => {
  const modal = useRecoilValue(modalState);

  return (
    <Box sx={{ borderBottom: "1px solid gray" }}>
      <Typography variant="h4">{modal.title}</Typography>
    </Box>
  );
};

export default ModalHeader;
