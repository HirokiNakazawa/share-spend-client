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
  width: string;
  typeList: { [key: string]: string };
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
        sx={{ width: props.width }}
      >
        {Object.entries(props.typeList).map(([key, value]) => (
          <MenuItem key={key} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectType;
