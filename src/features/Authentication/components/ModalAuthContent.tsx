import { FormControl, Box } from "@mui/material";
import { FC } from "react";
import InputAuthNameContainer from "../containers/InputAuthNameContainer";
import AuthPasswordContainer from "../containers/InputAuthPasswordContainer";

const ModalAuthContent: FC = () => {
  return (
    <FormControl>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <InputAuthNameContainer />
        <AuthPasswordContainer />
      </Box>
    </FormControl>
  );
};

export default ModalAuthContent;
