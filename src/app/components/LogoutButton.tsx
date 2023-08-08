import { Button } from "@mui/material";
import { FC } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../recoil/atom/userState";

const LogoutButton: FC = () => {
  const setUser = useSetRecoilState(userState);

  const handleClick = () => {
    setUser({ id: null, name: "", isLoggedIn: false });
  };

  return (
    <Button color="inherit" onClick={handleClick}>
      ログアウト
    </Button>
  );
};

export default LogoutButton;
