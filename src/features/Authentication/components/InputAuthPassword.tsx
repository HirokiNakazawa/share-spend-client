import { TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";

type authPasswordProps = {
  id: string;
  password: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputAuthPassword: FC<authPasswordProps> = (props) => {
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

export default InputAuthPassword;
