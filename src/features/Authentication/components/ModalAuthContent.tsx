import { FormControl, Box } from "@mui/material";
import { FC } from "react";
import AuthNameContainer from "../containers/AuthNameContainer";
import AuthPasswordContainer from "../containers/AuthPasswordContainer";

const ModalAuthContent: FC = () => {
  return (
    <FormControl>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <AuthNameContainer />
        <AuthPasswordContainer />
      </Box>
    </FormControl>
  );
};

export default ModalAuthContent;
