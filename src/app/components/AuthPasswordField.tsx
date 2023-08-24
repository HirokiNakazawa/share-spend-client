"use client";

import { TextField } from "@mui/material";
import { FC, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { authPasswordState } from "../recoil/atom/authState";

type AuthPasswordFieldProps = {
  id: string;
};

const AuthPasswordField: FC<AuthPasswordFieldProps> = (props) => {
  const [authPassword, setAuthPassword] = useRecoilState(authPasswordState);

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthPassword(e.target.value);
  };

  return (
    <TextField
      id={props.id}
      label="パスワード"
      type="password"
      name="authPassword"
      value={authPassword}
      onChange={handleChangePassword}
      required
    />
  );
};

export default AuthPasswordField;
