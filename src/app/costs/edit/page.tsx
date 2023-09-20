import { FC } from "react";

import ModalContainer from "@/features/Modal/containers/ModalContainer";
import HeaderContainer from "@/features/Header/containers/HeaderContainer";
import CostManagementLayoutContainer from "@/features/CostManagement/containers/CostManagementLayoutContainer";

const Home: FC = () => {
  return (
    <>
      <ModalContainer />
      <HeaderContainer title="支出編集" />
      <CostManagementLayoutContainer page="edit" />
    </>
  );
};

export default Home;
