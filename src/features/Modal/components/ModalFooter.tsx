import { FC } from "react";

import { Box } from "@mui/material";

import ModalRegisterContainer from "@/features/Modal/containers/ModalRegisterContainer";
import ModalLoginContainer from "@/features/Modal/containers/ModalLoginContainer";
import ModalCloseContainer from "@/features/Modal/containers/ModalCloseContainer";
import ModalEditCostContainer from "../containers/ModalEditCostContainer";

/**
 * モーダルフッターコンポーネントの型定義
 *
 * @property {boolean} isRegister - ユーザー登録フラグ
 * @property {boolean} isLogin - ユーザーログインフラグ
 * @property {boolean} isEditCost - 支出編集フラグ
 */
type ModalFooterProps = {
  isRegister?: boolean;
  isLogin?: boolean;
  isEditCost?: boolean;
};

/**
 * モーダルフッターコンポーネントです。
 *
 * @param {ModalFooterProps} props
 */
const ModalFooter: FC<ModalFooterProps> = (props: ModalFooterProps) => {
  const { isRegister, isLogin, isEditCost } = props;

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
      {isRegister ? <ModalRegisterContainer /> : null}
      {isLogin ? <ModalLoginContainer /> : null}
      {isEditCost ? <ModalEditCostContainer /> : null}
      <ModalCloseContainer />
    </Box>
  );
};

export default ModalFooter;
