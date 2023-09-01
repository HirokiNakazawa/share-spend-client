"use client";

import { TextField } from "@mui/material";
import { FC, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { authNameState } from "../recoil/authState";

type AuthNameFieldProps = {
  id: string;
};

const AuthNameField: FC<AuthNameFieldProps> = (props) => {
  const [authName, setAuthName] = useRecoilState(authNameState);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthName(e.target.value);
  };

  return (
    <TextField
      id={props.id}
      label="名前"
      type="text"
      name="authName"
      value={authName}
      onChange={handleChangeName}
      required
    />
  );
};

export default AuthNameField;