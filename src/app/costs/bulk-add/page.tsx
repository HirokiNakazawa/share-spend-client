import ModalContainer from "@/features/Modal/containers/ModalContainer";
import HeaderContainer from "@/containers/HeaderContainer";
import CostManagementLayoutContainer from "@/containers/CostManagementLayoutContainer";

const Home = () => {
  return (
    <>
      <ModalContainer />
      <HeaderContainer />
      <CostManagementLayoutContainer />
    </>
  );
};

export default Home;
