"use client";

import { Button } from "@mui/material";
import { FC } from "react";
import { CREATE_BUTTON } from "../../config/config";
import { useTypeManagement } from "../hooks/useTypeManagement";

const CreateTypeButton: FC = () => {
  const typeManagement = useTypeManagement();

  const handleSubmit = () => {
    console.log("種別作成ボタンがクリックされました");
    typeManagement.createType();
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
