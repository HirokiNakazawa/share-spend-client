import { TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";

type AuthNameProps = {
  id: string;
  name: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputAuthName: FC<AuthNameProps> = (props) => {
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

export default InputAuthName;
