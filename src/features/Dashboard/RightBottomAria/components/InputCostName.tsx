import { TextField } from "@mui/material";
import { FC } from "react";

type InputCostNameProps = {
  id: string;
  name: string;
  handleChange: () => void;
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
      sx={{ width: "10vw" }}
      required
    />
  );
};

export default InputCostName;
