import { Box } from "@mui/material";
import { FC } from "react";
import ModalRegisterContainer from "@/features/Authentication/containers/ModalRegisterContainer";
import ModalLoginContainer from "@/features/Authentication/containers/ModalLoginContainer";
import ModalCloseContainer from "@/features/Modal/containers/ModalCloseContainer";

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
      <ModalCloseContainer />
    </Box>
  );
};

export default ModalFooter;
