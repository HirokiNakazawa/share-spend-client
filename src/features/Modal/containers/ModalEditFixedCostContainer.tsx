import { FC } from "react";

import { useRecoilValue } from "recoil";

import { ModalState, UserState } from "@/types";
import { UpdateFunctions } from "@/hooks/useUpdateTypes";
import { useUpdate } from "@/hooks/useUpdate";
import { modalState, userState } from "@/recoil";
import ModalButton from "../components/ModalButton";
import { UseFixedCostFunctions } from "@/features/FixedCost/hooks/useFixedCostType";
import { useFixedCost } from "@/features/FixedCost/hooks/useFixedCost";

const ModalEditFixedCostContainer: FC = () => {
  const modal = useRecoilValue<ModalState>(modalState);
  const user = useRecoilValue<UserState>(userState);

  const fixedCostService: UseFixedCostFunctions = useFixedCost();
  const updateService: UpdateFunctions = useUpdate();

  /**
   * クリック時に状態を処理するコールバック関数
   *
   * @returns {Promise<void>}
   */
  const handleUpdate = async (): Promise<void> => {
    console.log("固定更新ボタンがクリックされました");
    await fixedCostService.updateFixedCost();
    await updateService.updateUserFixedCostList(user.id);
  };

  return <ModalButton text={modal.buttonText} handleClick={handleUpdate} />;
};

export default ModalEditFixedCostContainer;
