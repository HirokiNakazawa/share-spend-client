import { TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";

type InputTypeProps = {
  id: string;
  type: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputType: FC<InputTypeProps> = (props) => {
  return (
    <TextField
      id={props.id}
      label="種別"
      type="text"
      name="type"
      value={props.type}
      onChange={props.handleChange}
      sx={{ width: "15vw" }}
      required
    />
  );
};

export default InputType;
