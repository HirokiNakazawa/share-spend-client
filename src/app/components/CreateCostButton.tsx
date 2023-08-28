"use client";

import { ADD_BUTTON } from "@/config/config";
import { Button } from "@mui/material";
import { FC } from "react";

const CreateCostButton: FC = () => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      sx={{ marginLeft: 2 }}
    >
      {ADD_BUTTON}
    </Button>
  );
};

export default CreateCostButton;
