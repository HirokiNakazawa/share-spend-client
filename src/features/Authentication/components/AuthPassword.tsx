import { TextField } from "@mui/material";
import { FC } from "react";

type authPasswordProps = {
  id: string;
  password: string;
  handleChange: () => void;
};

const AuthPassword: FC<authPasswordProps> = (props) => {
  return (
    <TextField
      id={props.id}
      label="パスワード"
      type="password"
      name="authPassword"
      value={props.password}
      onChange={props.handleChange}
      required
    />
  );
};

export default AuthPassword;
