import { TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";

type InputCostNameProps = {
  id: string;
  name: string;
  width: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputCostName: FC<InputCostNameProps> = (props) => {
  return (
    <TextField
      id={props.id}
      label="品名"
      type="text"
      name="costName"
      value={props.name}
      onChange={props.handleChange}
      sx={{ width: props.width }}
      required
    />
  );
};

export default InputCostName;
