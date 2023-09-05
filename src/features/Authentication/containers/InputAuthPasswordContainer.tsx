"use client";

import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";
import { authPasswordState } from "@/recoil";
import InputAuthPassword from "@/features/Authentication/components/InputAuthPassword";

const InputAuthPasswordContainer: FC = () => {
  const [authPassword, setAuthPassword] = useRecoilState(authPasswordState);

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthPassword(e.target.value);
  };

  return (
    <InputAuthPassword
      id="auth-password"
      password={authPassword}
      handleChange={handleChangePassword}
    />
  );
};

export default InputAuthPasswordContainer;
