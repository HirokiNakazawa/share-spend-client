import { FC } from "react";

import RegistrationContainer from "@/features/Authentication/containers/RegistrationContainer";
import LoginContainer from "@/features/Authentication/containers/LoginContainer";

/**
 * ログインしていない状態の認証領域コンポーネントです。
 */
const Guest: FC = () => {
  return (
    <>
      <RegistrationContainer />
      <LoginContainer />
    </>
  );
};

export default Guest;
