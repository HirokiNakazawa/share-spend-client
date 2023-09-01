import { FC } from "react";
import CustomModal from "../components/CunstomModal";
import DashBoard from "../components/DashBoard";
import HeaderContainer from "@/container/HeaderContainer";

const Home: FC = () => {
  return (
    <>
      <CustomModal />
      <HeaderContainer />
      <DashBoard />
    </>
  );
};

export default Home;
