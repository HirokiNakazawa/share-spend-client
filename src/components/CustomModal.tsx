import { Modal, Box } from "@mui/material";
import { FC } from "react";
import ModalHeaderContainer from "@/features/Modal/containers/ModalHeaderContainer";
import ModalAuthContent from "@/features/Authentication/components/ModalAuthContent";
import ModalFooterContainer from "@/features/Modal/containers/ModalFooterContainer";

type CustomModalProps = {
  isOpen: boolean;
  isRegister?: boolean;
  isLogin?: boolean;
};

const CustomModal: FC<CustomModalProps> = (props) => {
  return (
    <Modal open={props.isOpen}>
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
          <ModalHeaderContainer />
          {props.isRegister || props.isLogin ? <ModalAuthContent /> : null}
          <ModalFooterContainer />
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
