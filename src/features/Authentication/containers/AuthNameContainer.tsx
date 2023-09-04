"use client";

import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";
import { authNameState } from "@/recoil/authState";
import AuthName from "../components/AuthName";

const AuthNameContainer: FC = () => {
  const [authName, setAuthName] = useRecoilState(authNameState);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setAuthName(e.target.value);
  };

  return (
    <AuthName
      id="auth-name"
      name={authName}
      handleChange={() => handleChangeName}
    />
  );
};

export default AuthNameContainer;
