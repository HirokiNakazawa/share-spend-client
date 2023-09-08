import { Modal, Box } from "@mui/material";
import { FC } from "react";
import ModalHeaderContainer from "@/features/Modal/containers/ModalHeaderContainer";
import ModalAuthContent from "@/features/Authentication/components/ModalAuthContent";
import ModalFooterContainer from "@/features/Modal/containers/ModalFooterContainer";
import ModalEditCostContent from "@/features/CostManagement/components/ModalEditCostContent";

type CustomModalProps = {
  isOpen: boolean;
  isRegister?: boolean;
  isLogin?: boolean;
  isEditCost?: boolean;
  width: number;
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
          width: props.width,
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
          {props.isEditCost ? <ModalEditCostContent /> : null}
          <ModalFooterContainer />
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
