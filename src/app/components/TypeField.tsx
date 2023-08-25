"use client";

import { TextField } from "@mui/material";
import { FC, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { typeState } from "../recoil/atom/typeState";

type TypeFieldProps = {
  id: string;
};

const TypeField: FC<TypeFieldProps> = (props) => {
  const [type, setType] = useRecoilState(typeState);

  const handleChangeType = (e: ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  return (
    <TextField
      id={props.id}
      label="種別"
      type="text"
      name="type"
      value={type}
      onChange={handleChangeType}
      required
      size="small"
    />
  );
};

export default TypeField;
