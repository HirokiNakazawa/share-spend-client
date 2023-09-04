"use client";

import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";
import { authNameState } from "@/recoil/authState";
import InputAuthName from "@/features/Authentication/components/InputAuthName";

const InputAuthNameContainer: FC = () => {
  const [authName, setAuthName] = useRecoilState(authNameState);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthName(e.target.value);
  };

  return (
    <InputAuthName
      id="auth-name"
      name={authName}
      handleChange={handleChangeName}
    />
  );
};

export default InputAuthNameContainer;
