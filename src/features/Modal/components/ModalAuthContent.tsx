import { FormControl, Box } from "@mui/material";
import { FC } from "react";
import InputAuthNameContainer from "@/features/Authentication/containers/InputAuthNameContainer";
import InputAuthPasswordContainer from "@/features/Authentication/containers/InputAuthPasswordContainer";

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
