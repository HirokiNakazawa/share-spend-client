import { FC } from "react";
import { LOGOUT_BUTTON } from "@/config/config";
import { useSetRecoilState } from "recoil";
import { userState } from "@/recoil";
import AuthenticationButton from "@/features/Authentication/components/AuthenticationButton";

const LogoutContainer: FC = () => {
  const setUser = useSetRecoilState(userState);

  const handleSetState = () => {
    console.log("ログアウトがクリックされました");
    setUser({ id: null, name: "", isLoggedIn: false });
  };

  return (
    <AuthenticationButton text={LOGOUT_BUTTON} handleClick={handleSetState} />
  );
};

export default LogoutContainer;
