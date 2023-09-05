import { FC } from "react";
import { LOGIN_BUTTON } from "@/config/config";
import { useSetRecoilState } from "recoil";
import { isLoginState, modalState } from "@/recoil";
import AuthenticationButton from "../components/AuthenticationButton";

const LoginContainer: FC = () => {
  const setModal = useSetRecoilState(modalState);
  const setIsLogin = useSetRecoilState(isLoginState);

  const handleSetState = () => {
    console.log("ログインがクリックされました");
    setModal({
      isOpen: true,
      title: LOGIN_BUTTON,
      buttonText: LOGIN_BUTTON,
    });
    setIsLogin(true);
  };

  return (
    <AuthenticationButton text={LOGIN_BUTTON} handleClick={handleSetState} />
  );
};

export default LoginContainer;
