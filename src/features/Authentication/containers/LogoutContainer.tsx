import { userState } from "@/recoil/userState";
import { FC } from "react";
import { useSetRecoilState } from "recoil";
import { LOGOUT_BUTTON } from "@/config/config";
import AuthenticationButton from "../components/AuthenticationButton";

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
