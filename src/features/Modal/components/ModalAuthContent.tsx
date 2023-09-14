import { FC } from "react";

import { FormControl, Box } from "@mui/material";

import InputAuthNameContainer from "@/features/Authentication/containers/InputAuthNameContainer";
import InputAuthPasswordContainer from "@/features/Authentication/containers/InputAuthPasswordContainer";

/**
 * 認証用のモーダルコンポーネントです。
 */
const ModalAuthContent: FC = () => {
  return (
    <FormControl>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <InputAuthNameContainer />
        <InputAuthPasswordContainer />
      </Box>
    </FormControl>
  );
};

export default ModalAuthContent;
