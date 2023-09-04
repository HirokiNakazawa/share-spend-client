"use client";

import { authPasswordState } from "@/recoil/authState";
import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";
import AuthPassword from "../components/AuthPassword";

const AuthPasswordContainer: FC = () => {
  const [authPassword, setAuthPassword] = useRecoilState(authPasswordState);

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthPassword(e.target.value);
  };

  return (
    <AuthPassword
      id="auth-password"
      password={authPassword}
      handleChange={() => handleChangePassword}
    />
  );
};

export default AuthPasswordContainer;
