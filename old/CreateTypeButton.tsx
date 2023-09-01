"use client";

import { Button } from "@mui/material";
import { FC } from "react";
import { CREATE_BUTTON } from "../src/config/config";
import { useTypeManagement } from "../src/hooks/useTypeManagement";
import { useUpdate } from "../src/hooks/useUpdate";

const CreateTypeButton: FC = () => {
  const typeManagement = useTypeManagement();
  const update = useUpdate();

  const handleSubmit = async () => {
    console.log("種別作成ボタンがクリックされました");
    await typeManagement.createType();
    await update.updateTypes();
  };

  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      onClick={handleSubmit}
    >
      {CREATE_BUTTON}
    </Button>
  );
};

export default CreateTypeButton;
