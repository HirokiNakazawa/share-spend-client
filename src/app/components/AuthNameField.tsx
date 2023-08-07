"use client";

import { TextField } from "@mui/material";
import { FC, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { authNameState } from "../recoil/atom/authState";

const AuthNameField: FC = () => {
  const [authName, setAuthName] = useRecoilState(authNameState);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthName(e.target.value);
  };

  return (
    <TextField
      label="名前"
      name="authName"
      value={authName}
      onChange={handleChangeName}
      required
    />
  );
};

export default AuthNameField;
