import { Box } from "@mui/material";
import { FC } from "react";
import ModalRegisterContainer from "@/features/Modal/containers/ModalRegisterContainer";
import ModalLoginContainer from "@/features/Modal/containers/ModalLoginContainer";
import ModalCloseContainer from "@/features/Modal/containers/ModalCloseContainer";
import ModalEditCostContainer from "../containers/ModalEditCostContainer";

type ModalFooterProps = {
  isRegister?: boolean;
  isLogin?: boolean;
  isEditCost?: boolean;
};

const ModalFooter: FC<ModalFooterProps> = (props) => {
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
      {props.isRegister ? <ModalRegisterContainer /> : null}
      {props.isLogin ? <ModalLoginContainer /> : null}
      {props.isEditCost ? <ModalEditCostContainer /> : null}
      <ModalCloseContainer />
    </Box>
  );
};

export default ModalFooter;
