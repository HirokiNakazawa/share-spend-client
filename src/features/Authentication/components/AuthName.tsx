import { TextField } from "@mui/material";
import { FC } from "react";

type AuthNameProps = {
  id: string;
  name: string;
  handleChange: () => void;
};

const AuthName: FC<AuthNameProps> = (props) => {
  return (
    <TextField
      id={props.id}
      label="名前"
      type="text"
      name="authName"
      value={props.name}
      onChange={props.handleChange}
      required
    />
  );
};

export default AuthName;
