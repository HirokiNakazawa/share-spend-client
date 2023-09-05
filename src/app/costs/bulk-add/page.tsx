import ModalContainer from "@/features/Modal/containers/ModalContainer";
import HeaderContainer from "@/containers/HeaderContainer";
import PastDrawerContainer from "@/containers/PastDrawerContainer";

const Home = () => {
  return (
    <>
      <ModalContainer />
      <HeaderContainer />
      <PastDrawerContainer />
    </>
  );
};

export default Home;
