import { FC } from "react";

import ModalContainer from "@/features/Modal/containers/ModalContainer";
import HeaderContainer from "@/features/Header/containers/HeaderContainer";
import Admin from "@/features/Admin/components/Admin";

const Home: FC = () => {
  return (
    <>
      <ModalContainer />
      <HeaderContainer title="管理者ページ" />
      <Admin />
    </>
  );
};

export default Home;
