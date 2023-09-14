import { FC } from "react";

import ModalContainer from "@/features/Modal/containers/ModalContainer";
import HeaderContainer from "@/features/Header/containers/HeaderContainer";
import Dashboard from "@/features/Dashboard/components/Dashboard";

const Home: FC = () => {
  return (
    <>
      <ModalContainer />
      <HeaderContainer />
      <Dashboard />
    </>
  );
};

export default Home;
