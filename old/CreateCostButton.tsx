"use client";

import { ADD_BUTTON } from "@/config/config";
import { Button } from "@mui/material";
import { FC } from "react";
import { useCostManagement } from "../src/hooks/useCostManagement";
import { useUpdate } from "../src/hooks/useUpdate";

const CreateCostButton: FC = () => {
  const costManegement = useCostManagement();
  const update = useUpdate();

  const handleSubmit = async () => {
    console.log("支出追加ボタンがクリックされました");
    await costManegement.createCost();
    await update.updateMonthlyCostByType();
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
