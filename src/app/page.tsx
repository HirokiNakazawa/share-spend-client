import { FC } from "react";
import CustomModal from "../components/CunstomModal";
import HeaderContainer from "@/container/HeaderContainer";
import Dashboard from "@/features/Dashboard/components/Dashboard";

const Home: FC = () => {
  return (
    <>
      <CustomModal />
      <HeaderContainer />
      <Dashboard />
    </>
  );
};

export default Home;
