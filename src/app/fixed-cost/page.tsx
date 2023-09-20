import { FC } from "react";

import HeaderContainer from "@/features/Header/containers/HeaderContainer";
import FixedCost from "@/features/FixedCost/components/FixedCost";

const Home: FC = () => {
  return (
    <>
      <HeaderContainer title="固定費関連" />
      <FixedCost />
    </>
  );
};

export default Home;
