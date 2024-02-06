import HeaderContainer from "@/features/Header/containers/HeaderContainer";
import ModalContainer from "@/features/Modal/containers/ModalContainer";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <ModalContainer />
      <HeaderContainer title="管理者ページ" />
    </>
  );
};

export default Home;
