import { Button } from "@mui/material";
import { FC } from "react";

type AuthenticationButtonProps = {
  text: string;
  handleClick: () => void;
};

const AuthenticationButton: FC<AuthenticationButtonProps> = (props) => {
  return (
    <Button color="inherit" onClick={props.handleClick}>
      {props.text}
    </Button>
  );
};

export default AuthenticationButton;
