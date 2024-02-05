import { FC } from "react";

import ModalContainer from "@/features/Modal/containers/ModalContainer";
import HeaderContainer from "@/features/Header/containers/HeaderContainer";

const Home: FC = () => {
  return (
    <>
      <ModalContainer />
      <HeaderContainer title="過去データ" />
    </>
  );
};

export default Home;
