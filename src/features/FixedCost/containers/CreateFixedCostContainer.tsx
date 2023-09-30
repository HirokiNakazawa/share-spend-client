import { FC } from "react";

import { ADD_BUTTON } from "@/config/config";
import { CreateFixedCostFunctions, useCreateFixedCost } from "../hooks/useCreateFixedCost";
import FormButton from "@/features/Form/components/FormButton";

/**
 * 固定費登録コンテナコンポーネントです。
 */
const CreateFixedCostContainer: FC = () => {
  const createFixedCostService: CreateFixedCostFunctions = useCreateFixedCost();

  /**
   * クリック時に固定費を登録し、状態を更新するコールバック関数
   *
   * @returns {Promise<void>}
   */
  const handleCreateFixedCost = async (): Promise<void> => {
    await createFixedCostService.createFixedCost();
  };

  return <FormButton text={ADD_BUTTON} handleClick={handleCreateFixedCost} />;
};

export default CreateFixedCostContainer;
