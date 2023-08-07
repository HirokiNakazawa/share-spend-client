"use client";

import { TextField } from "@mui/material";
import { FC, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { authPasswordState } from "../recoil/atom/authState";

const AuthPasswordField: FC = () => {
  const [authPassword, setAuthPassword] = useRecoilState(authPasswordState);

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthPassword(e.target.value);
  };

  return (
    <TextField
      label="名前"
      name="authPassword"
      value={authPassword}
      onChange={handleChangePassword}
      required
    />
  );
};

export default AuthPasswordField;
