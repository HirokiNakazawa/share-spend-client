import { Container, Typography } from "@mui/material";
import { FC } from "react";
import CustomModal from "./CunstomModal";

const DashBoard: FC = () => {
  return (
    <Container>
      <CustomModal />
      <Typography>Hello Unko</Typography>
    </Container>
  );
};

export default DashBoard;
