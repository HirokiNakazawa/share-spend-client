import { FC } from "react";

import ModalContainer from "@/features/Modal/containers/ModalContainer";
import HeaderContainer from "@/features/Header/containers/HeaderContainer";
import PastData from "@/features/Past/components/PastData";

const Home: FC = () => {
  return (
    <>
      <ModalContainer />
      <HeaderContainer title="過去データ" />
      <PastData />
    </>
  );
};

export default Home;
