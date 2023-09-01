"use client";

import { Button } from "@mui/material";
import { FC } from "react";
import { CREATE_BUTTON } from "../config/config";
import { useTypeManagement } from "../hooks/useTypeManagement";
import { useUpdate } from "../hooks/useUpdate";

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
