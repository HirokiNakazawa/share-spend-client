import { FC } from "react";

import { useRecoilValue } from "recoil";

import { ADD_BUTTON } from "@/config/config";
import { UpdateFunctions, UseFixedCostFunctions, UserState } from "@/types";
import { useFixedCost } from "../hooks/useFixedCost";
import { useUpdate } from "@/hooks/useUpdate";
import { userState } from "@/recoil";
import FormButton from "@/features/Form/components/FormButton";

/**
 * 固定費登録コンテナコンポーネントです。
 */
const CreateFixedCostContainer: FC = () => {
  const user = useRecoilValue<UserState>(userState);

  const fixedCostService: UseFixedCostFunctions = useFixedCost();
  const updateService: UpdateFunctions = useUpdate();

  /**
   * クリック時に固定費を登録し、状態を更新するコールバック関数
   *
   * @returns {Promise<void>}
   */
  const handleCreateFixedCost = async (): Promise<void> => {
    await fixedCostService.createFixedCost();
    await updateService.updateUserFixedCostList(user.id);
  };

  return <FormButton text={ADD_BUTTON} handleClick={handleCreateFixedCost} />;
};

export default CreateFixedCostContainer;
