import { Container, Typography } from "@mui/material";
import { FC } from "react";
import Header from "./components/Header";
import CustomModal from "./components/CunstomModal";

const Home: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <CustomModal />
        <Typography>Hello</Typography>
      </Container>
    </>
  );
};

export default Home;
