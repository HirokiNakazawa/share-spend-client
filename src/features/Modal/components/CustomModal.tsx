import { FC } from "react";

import { Modal, Box } from "@mui/material";

import ModalHeaderContainer from "@/features/Modal/containers/ModalHeaderContainer";
import ModalAuthContent from "@/features/Modal/components/ModalAuthContent";
import ModalEditCostContent from "@/features/Modal/components/ModalEditCostContent";
import ModalFooterContainer from "@/features/Modal/containers/ModalFooterContainer";

/**
 * カスタムモーダルコンポーネントの型定義
 *
 * @property {boolean} isOpen - モーダル開閉フラグ
 * @property {boolean} isRegister - ユーザー登録フラグ
 * @property {boolean} isLogin - ユーザーログインフラグ
 * @property {boolean} isEditCost - 支出編集フラグ
 * @property {number} width - モーダルの横幅
 */
type CustomModalProps = {
  isOpen: boolean;
  isRegister?: boolean;
  isLogin?: boolean;
  isEditCost?: boolean;
  width: number;
};

/**
 * カスタムモーダルコンポーネントです。
 *
 * @param {CustomModalProps} props
 */
const CustomModal: FC<CustomModalProps> = (props: CustomModalProps) => {
  const { isOpen, isRegister, isLogin, isEditCost, width } = props;

  return (
    <Modal open={isOpen}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 4,
          boxShadow: 24,
          width: width,
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
          {isRegister || isLogin ? <ModalAuthContent /> : null}
          {isEditCost ? <ModalEditCostContent /> : null}
          <ModalFooterContainer />
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
