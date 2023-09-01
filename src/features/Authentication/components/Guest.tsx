import { FC } from "react";
import RegistrationContainer from "../containers/RegistrationContainer";
import LoginContainer from "../containers/LoginContainer";

const Guest: FC = () => {
  return (
    <>
      <RegistrationContainer />
      <LoginContainer />
    </>
  );
};

export default Guest;
