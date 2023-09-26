import { FC } from "react";

import HeaderContainer from "@/features/Header/containers/HeaderContainer";
import FixedCost from "@/features/FixedCost/components/FixedCost";
import ModalContainer from "@/features/Modal/containers/ModalContainer";

const Home: FC = () => {
  return (
    <>
      <ModalContainer />
      <HeaderContainer title="固定費関連" />
      <FixedCost />
    </>
  );
};

export default Home;
