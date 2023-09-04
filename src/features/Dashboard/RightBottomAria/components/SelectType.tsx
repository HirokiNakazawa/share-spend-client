import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { FC } from "react";
import { TypeState } from "@/types";

type SelectTypeProps = {
  id: string;
  labelId: string;
  labelName: string;
  selectType: string;
  typeList: TypeState[];
  handleChange: (e: SelectChangeEvent<string>) => void;
};

const SelectType: FC<SelectTypeProps> = (props) => {
  return (
    <FormControl>
      <InputLabel id={props.labelId}>{props.labelName}</InputLabel>
      <Select
        id={props.id}
        labelId={props.labelId}
        label="種別"
        name="type"
        value={props.selectType}
        onChange={props.handleChange}
        sx={{ width: "8vw" }}
      >
        {props.typeList.map((item) => (
          <MenuItem key={item.id} value={item.type}>
            {item.type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectType;
