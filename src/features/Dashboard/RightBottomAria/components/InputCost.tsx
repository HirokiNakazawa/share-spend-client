import { TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";

type InputCostProps = {
  id: string;
  cost: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputCost: FC<InputCostProps> = (props) => {
  return (
    <TextField
      id={props.id}
      label="支出"
      type="text"
      name="cost"
      value={props.cost}
      onChange={props.handleChange}
      sx={{ width: "8vw" }}
      required
    />
  );
};

export default InputCost;
