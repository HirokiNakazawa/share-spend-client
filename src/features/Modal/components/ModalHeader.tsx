import { Box, Typography } from "@mui/material";
import { FC } from "react";

type ModalHeaderProps = {
  title: string;
  errorMsg: string;
};

const ModalHeader: FC<ModalHeaderProps> = (props) => {
  return (
    <Box>
      <Box sx={{ borderBottom: "1px solid gray" }}>
        <Typography variant="h4">{props.title}</Typography>
      </Box>
      <Typography variant="h6" color="red">
        {props.errorMsg}
      </Typography>
    </Box>
  );
};

export default ModalHeader;
