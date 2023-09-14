import { FC } from "react";

import { Box, Typography } from "@mui/material";

/**
 * モーダルヘッダーコンポーネントの型定義
 *
 * @property {string} title - ヘッダー名
 * @property {string} errorMsg - エラーメッセージ
 */
type ModalHeaderProps = {
  title: string;
  errorMsg: string;
};

/**
 * モーダルヘッダーコンポーネントです。
 *
 * @param {ModalHeaderProps} props
 */
const ModalHeader: FC<ModalHeaderProps> = (props: ModalHeaderProps) => {
  const { title, errorMsg } = props;

  return (
    <Box>
      <Box sx={{ borderBottom: "1px solid gray" }}>
        <Typography variant="h4">{title}</Typography>
      </Box>
      <Typography variant="h6" color="red">
        {errorMsg}
      </Typography>
    </Box>
  );
};

export default ModalHeader;
