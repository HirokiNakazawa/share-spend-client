import ModalContainer from "@/features/Modal/containers/ModalContainer";
import HeaderContainer from "@/features/Header/containers/HeaderContainer";
import CostManagementLayoutContainer from "@/features/CostManagement/containers/CostManagementLayoutContainer";

const Home = () => {
  return (
    <>
      <ModalContainer />
      <HeaderContainer />
      <CostManagementLayoutContainer page="bulkAdd" />
    </>
  );
};

export default Home;
