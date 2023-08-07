import { Container, Typography } from "@mui/material";
import { FC } from "react";
import Header from "./components/Header";

const Home: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Typography>Hello</Typography>
      </Container>
    </>
  );
};

export default Home;
