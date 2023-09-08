"use client";

import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";
import { registerTypeState } from "@/recoil";
import InputType from "@/features/Form/components/InputType";

const InputTypeContainer: FC = () => {
  const [type, setType] = useRecoilState(registerTypeState);

  const handleChangeType = (e: ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  return (
    <InputType id="input-type" type={type} handleChange={handleChangeType} />
  );
};

export default InputTypeContainer;
