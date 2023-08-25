"use client";

import { Button } from "@mui/material";
import { FC } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../recoil/atom/userState";
import { LOGOUT_BUTTON } from "../../../config/config";

const LogoutButton: FC = () => {
  const setUser = useSetRecoilState(userState);

  const handleClick = () => {
    console.log("ログアウトがクリックされました");
    setUser({ id: null, name: "", isLoggedIn: false });
  };

  return (
    <Button color="inherit" onClick={handleClick}>
      {LOGOUT_BUTTON}
    </Button>
  );
};

export default LogoutButton;
