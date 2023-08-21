import { FC } from "react";
import CustomModal from "./components/CunstomModal";
import Header from "./components/Header";
import DashBoard from "./components/DashBoard";

const Home: FC = () => {
  return (
    <>
      <CustomModal />
      <Header />
      <DashBoard />
    </>
  );
};

export default Home;
