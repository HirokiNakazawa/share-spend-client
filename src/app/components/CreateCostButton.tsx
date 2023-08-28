"use client";

import { ADD_BUTTON } from "@/config/config";
import { Button } from "@mui/material";
import { FC } from "react";
import { useCostManagement } from "../hooks/useCostManagement";

const CreateCostButton: FC = () => {
  const costManegement = useCostManagement();

  const handleSubmit = () => {
    console.log("支出追加ボタンがクリックされました");
    costManegement.createCost();
  };

  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      onClick={handleSubmit}
      sx={{ marginLeft: 2 }}
    >
      {ADD_BUTTON}
    </Button>
  );
};

export default CreateCostButton;
