"use client";

import { Button } from "@mui/material";
import { FC } from "react";
import { CREATE_BUTTON } from "../../../config/config";

const CreateTypeButton: FC = () => {
  return (
    <Button type="submit" variant="contained" color="primary">
      {CREATE_BUTTON}
    </Button>
  );
};

export default CreateTypeButton;
