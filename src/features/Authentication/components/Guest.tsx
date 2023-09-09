import { FC } from "react";
import RegistrationContainer from "@/features/Authentication/containers/RegistrationContainer";
import LoginContainer from "@/features/Authentication/containers/LoginContainer";

const Guest: FC = () => {
  return (
    <>
      <RegistrationContainer />
      <LoginContainer />
    </>
  );
};

export default Guest;
