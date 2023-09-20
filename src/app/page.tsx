import { FC } from "react";

import { APP_NAME } from "@/config/config";
import ModalContainer from "@/features/Modal/containers/ModalContainer";
import HeaderContainer from "@/features/Header/containers/HeaderContainer";
import Dashboard from "@/features/Dashboard/components/Dashboard";

const Home: FC = () => {
  return (
    <>
      <ModalContainer />
      <HeaderContainer title={APP_NAME} />
      <Dashboard />
    </>
  );
};

export default Home;
