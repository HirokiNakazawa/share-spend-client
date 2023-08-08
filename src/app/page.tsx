import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";
import Header from "./components/Header";
import DashBoard from "./components/DashBoard";

const Home: FC = () => {
  return (
    <>
      <Header />
      <DashBoard />
    </>
  );
};

export default Home;
