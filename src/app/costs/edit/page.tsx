import CostManagementLayoutContainer from "@/features/CostManagement/containers/CostManagementLayoutContainer";
import HeaderContainer from "@/features/Header/containers/HeaderContainer";
import ModalContainer from "@/features/Modal/containers/ModalContainer";

const Home = () => {
  return (
    <>
      <ModalContainer />
      <HeaderContainer />
      <CostManagementLayoutContainer page="edit" />
    </>
  );
};

export default Home;
